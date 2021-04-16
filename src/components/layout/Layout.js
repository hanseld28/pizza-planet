import { Container, CssBaseline, Grid } from "@material-ui/core";
import React from "react";
import PizzaPlanetComponent from "../pizza-planet/PizzaPlanet";
import Copyright from "../copyright/Copyright";
import NavbarComponent from "../navbar/Navbar";

export default class LayoutComponent extends PizzaPlanetComponent {
  render() {
    const { 
      children,
      NavbarOptions, 
    } = this.props;
    return (
      <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xl">
              <NavbarComponent>
                { NavbarOptions }
              </NavbarComponent>
              <Container maxWidth="xl">
                <Grid 
                  container 
                  spacing={6} 
                  style={{ paddingTop: 50 }}
                >
                  { children }
                </Grid>
              </Container>
          <Copyright 
            style={{ paddingTop: 25 }}
          />
          </Container>
      </React.Fragment>
    );
  }
}
