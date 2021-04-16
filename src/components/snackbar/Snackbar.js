import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert"
import PizzaPlanetComponent from "../pizza-planet/PizzaPlanet";

export default class SnackbarComponent extends PizzaPlanetComponent {
    render() {
        return (
            <div style={{ width: '100%', '& > * + *': 2 }}>
                <Snackbar 
                    open={this.props?.open} 
                    autoHideDuration={this.props?.autoHideDuration || 3000} 
                    onClose={this.props?.handleClose}
                >
                    <MuiAlert 
                        elevation={6} 
                        variant="filled"
                        severity={this.props?.severity || "info"}
                        onClose={this.props?.handleClose}
                    >
                        { this.props?.message || "Operação realizada com sucesso" } 
                    </MuiAlert>
                </Snackbar>
            </div>
        );
    }
}