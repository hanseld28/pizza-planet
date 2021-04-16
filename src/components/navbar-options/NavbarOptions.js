import { Grid, IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React from "react";
import PizzaPlanetComponent from "../pizza-planet/PizzaPlanet";
import ShoppingRocketComponent from "../shopping-rocket";

export default class NavbarOptions extends PizzaPlanetComponent {
    render() {
        return (
            <>
                <ShoppingRocketComponent />
                <Grid item md={1}>
                    <IconButton edge="end" color="inherit">
                        <AccountCircle color={"inherit"} fontSize={"large"} />
                    </IconButton>
                </Grid>
            </>
        );
    }
}