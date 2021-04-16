import { Typography } from "@material-ui/core";
import { 
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import LayoutComponent from "../layout/Layout";
import PizzaPlanetComponent from '../pizza-planet/PizzaPlanet';
import PizzaListing from "../pizza/PizzaListing";
import ShoppingRocketItem from "../shopping-rocket/model";
import ShoppingRocketPageComponent from "../shopping-rocket/ShoppingRocketPage";
import SnackbarComponent from "../snackbar/Snackbar";

export default class PizzaPlanetApp extends PizzaPlanetComponent {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [],
      shoppingRocketItems: [],
      snackbar: {
        open: false,
        message: "",
        severity: "",
        autoHideDuration: 2000,
      }
    };
  }

  async componentDidMount() {
    await this.fetchAllPizzas();
  }

  fetchAllPizzas = async ()  =>  {
    const result = await fetch(
      "http://localhost:4000/pizzas",
      {
        "Content-Type": "application/json",
      }
    );
    const pizzas = await result.json();
    this.setState(() => ({
      pizzas
    }), () => {
      console.log("Loading pizzas...");
      console.log(this.state.pizzas);
    });
  }

  handleShoppingRocket = (event, id, action, amount = 1) => {
    event.stopPropagation();

    const shoppingRocketItems = [...this.state.shoppingRocketItems];

    if (action === 'ADD') {
      const newShoppingRocketItem = new ShoppingRocketItem({id, amount});
      shoppingRocketItems.push(newShoppingRocketItem);

      this.setState(() => ({
        shoppingRocketItems,
      }));

      this.setSnackbarAsOpen("Item adicionado ao foguete de compras!", "success");
    }
    
    if (action === 'REMOVE') {
      const updatedShoppingRocketItems = shoppingRocketItems.filter(
        (addedItem) => Number(addedItem?.id) !== Number(id)
      );

      this.setState(() => ({
        shoppingRocketItems: updatedShoppingRocketItems,
      }));

      this.setSnackbarAsOpen("Item removido do foguete de compras.", "info");
    }
  }

  setSnackbarAsOpen = (message, severity) => {
    this.setState({
      snackbar: {
        open: true,
        message,
        severity,
      }
    });
  };

  handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
        snackbar: {
          ...this.state.snackbar,
          open: false,
        }
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PizzaListing          
              pizzas={this.state.pizzas}
              shoppingRocketItems={this.state.shoppingRocketItems}
              onHandleShoppingRocketItems={this.handleShoppingRocket}
            />
            <SnackbarComponent 
              open={this.state.snackbar.open}
              message={this.state.snackbar.message}
              severity={this.state.snackbar.severity}
              autoHideDuration={this.state.snackbar.autoHideDuration}
              handleClose={this.handleSnackbarClose}
            />
          </Route>
          <Route path="/shopping-rocket">
            <ShoppingRocketPageComponent 
              products={this.state.pizzas}
              onHandleShoppingRocketItems={this.handleShoppingRocket}
              shoppingRocketItems={this.state.shoppingRocketItems}
            />
          </Route>
          <Route path="/admin">
            <LayoutComponent>
              <Typography>
                Administrator viewer for create new products
              </Typography>
            </LayoutComponent>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
