import { Link, Typography } from "@material-ui/core";
import PizzaPlanetComponent from "../pizza-planet/PizzaPlanet";

export default class PizzaPlanetCopyright extends PizzaPlanetComponent {
    render() {
        return (
            <Typography 
                style={{ paddingTop: 35, marginBottom: 15 }}
                variant="body2" 
                color="textSecondary" 
                align="center"
            >
                {'Copyright © '}
                <Link color="inherit" href="#">
                    Pizza Planet
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }
}