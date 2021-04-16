import { AppBar, Grid, IconButton, Toolbar } from "@material-ui/core";
import PizzaPlanetComponent from "../pizza-planet/PizzaPlanet";
import { Link } from "react-router-dom";

export default class NavbarComponent extends PizzaPlanetComponent {
    render() {
        return (
            <AppBar position="static" color="transparent">
                <Toolbar variant="dense">
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid 
                            item 
                            md={2}
                        >
                            <Link to="/">
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <img src={"logo.png"} alt={"Pizza Planet Logo"} style={{  width: "7rem"  }} />
                                </IconButton>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        justify="flex-end"
                        alignItems="center"
                    >
                        { this.props.children }
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}