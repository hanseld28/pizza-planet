import { 
    Link,
  } from "react-router-dom";
import { Badge, Grid, IconButton, Tooltip } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import PizzaPlanetComponent from "../pizza-planet/PizzaPlanet";

export default class ShoppingRocketComponent extends PizzaPlanetComponent {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };
    }

    static getDerivedStateFromProps(props, state) {
        return {
            items: props?.items,
        };
    }

    render() {
        return (
            <Grid item md={1}>
                <Link to="/shopping-rocket">
                    <Tooltip 
                            title={"Foguete de pedidos"}
                            arrow={true}
                        >
                        <IconButton 
                            color={"default"}
                            aria-label="cart"
                        >
                            <Badge badgeContent={this.state.items?.length} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </Tooltip>
                </Link>
            </Grid>
        );
    }
}