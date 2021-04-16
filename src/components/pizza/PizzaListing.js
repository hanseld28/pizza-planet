import PizzaPlanetComponent from "../pizza-planet/PizzaPlanet";
import PizzaComponent from "./Pizza";
import Pizza from "./model";
import SearchComponent from "../../shared-components/search/Search";
import { Grid } from "@material-ui/core";
import ShoppingLayoutComponent from "../shop-layout";

export default class PizzaListing extends PizzaPlanetComponent {
    constructor(props) {
        super(props);
        this.state = {
            searchOptions: [],
        };
    }

    componentDidMount() {
        this.updateSearchOptionsFromAvailablePizzas();
    }

    updateSearchOptionsFromAvailablePizzas() {
        const availablePizzas = this.props?.pizzas || [];
        const searchOptions = availablePizzas.map(pizza => pizza?.title);
        
        this.setState(() => ({
            searchOptions,
        }));
    }

    isAddedOnShoppingRocket = (pizza) => {
        const item = this.props?.shoppingRocketItems
            ?.filter(
                (item) => item?.id === pizza?.id
            )[0];
    
        return this.props?.shoppingRocketItems.indexOf(item) !== -1;
    }

    render() {
        const {
            pizzas,
        } = this.props;
        return (
            <ShoppingLayoutComponent
                shoppingRocketItems={this.props?.shoppingRocketItems}
                onHandleShoppingRocketItems={this.props?.onHandleShoppingRocketItems}
            >
                <Grid 
                    item
                    xl={8} 
                    md={12} 
                    sm={12} 
                    xs={12}
                >
                    <SearchComponent 
                        options={this.state.searchOptions}
                    />
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={4}
                >
                    {
                        pizzas.map(pizza => {
                            return (
                                <PizzaComponent
                                    key={pizza?.id}
                                    model={new Pizza(pizza)}
                                    onHandleShoppingRocketItems={this.props?.onHandleShoppingRocketItems}
                                    addedOnShoppingRocket={this.isAddedOnShoppingRocket(pizza)}
                                />
                            );
                        })
                    }
                </Grid>
            </ShoppingLayoutComponent>
        );
    }
}