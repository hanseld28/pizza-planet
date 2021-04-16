import { Grid } from "@material-ui/core";
import LayoutComponent from "../layout/Layout";
import PizzaPlanetComponent from "../pizza-planet/PizzaPlanet";
import ShoppingRocketItem from "./model";
import ShoppingRocketTableComponent from "./ShoppingRocketTable";
import { withRouter } from "react-router-dom";

class ShoppingRocketPageComponent extends PizzaPlanetComponent {
    
    adaptProductIntoShoppingRocketItemByItem(item) {
        const [product] = this.props?.products
            .filter(
                (product) => Number(product?.id) === Number(item?.id)
            );
        return new ShoppingRocketItem({ ...item, product });
    }

    render() {
        const {
            shoppingRocketItems,
        } = this.props;
        const items = shoppingRocketItems.map(
            item => this.adaptProductIntoShoppingRocketItemByItem(item)
        );
        return (
            <LayoutComponent>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={4}
                >    
                    <ShoppingRocketTableComponent
                        rows={items.map(item => ({ 
                            description: item?.product?.title,
                            amount: item?.amount, 
                            unit: item?.product?.price,
                        }))}
                    />       
                </Grid>
            </LayoutComponent>
        );
    }
}

export default withRouter(ShoppingRocketPageComponent);