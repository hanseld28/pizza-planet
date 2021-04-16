import { Grid, IconButton, Tooltip } from "@material-ui/core";
import React from "react";
import PizzaPlanetComponent from "../pizza-planet/PizzaPlanet";
import ShoppingRocketComponent from "../shopping-rocket";
import { AccountCircle } from "@material-ui/icons";
import LayoutComponent from "../layout/Layout";

export default class ShoppingLayoutComponent extends PizzaPlanetComponent {

  render() {
    const { 
      children,
      shoppingRocketItems,
    } = this.props;
    return (
      <LayoutComponent
        NavbarOptions={(
          <>
            <ShoppingRocketComponent 
              items={shoppingRocketItems}
            />
            <Grid item md={1}>
              <Tooltip 
                title={"Perfil"}
                arrow={true}
              >
                <IconButton edge="end" color="inherit">
                    <AccountCircle color={"inherit"} fontSize={"large"} />
                </IconButton>
              </Tooltip>
            </Grid>
          </>
        )}
      >
        { children }
      </LayoutComponent>
    );
  }
}
