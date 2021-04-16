import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Tooltip, Typography } from "@material-ui/core";
import { AddShoppingCart, RemoveShoppingCart } from "@material-ui/icons";
import PizzaPlanetComponent from "../pizza-planet/PizzaPlanet";

export default class ProductComponent extends PizzaPlanetComponent {
    render() {
        const {
            model: {
                id,
                title,
                description,
                price,
                image,
            },
        } = this.props;
        const simpleDescription = String(description).length > 70 
            ? String(description).slice(0, 68).concat("...")
            : String(description);
        return (
            <Grid container item xs={12} sm={6} md={3} direction="column" key={id}>
                <Card key={id}>
                    <Tooltip 
                        title={`${title} - ${price}`}
                        arrow={true}
                        key={id}
                    >
                        <CardMedia 
                            component={"img"} 
                            image={image} 
                            alt={title} 
                            style={{ display:"flex", justifyContent:"center", padding: 15 }}
                        />
                    </Tooltip>
                    <CardContent style={{ paddingBottom: 0 }}>
                        <Typography variant="h5" component="h2" style={{ display:"flex", justifyContent:"center" }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" component="p" style={{ display:"flex", justifyContent:"center" }}>
                            {simpleDescription}
                        </Typography>
                        <Typography variant="h4" component="h3" style={{ color: "#B12704", display:"flex", justifyContent:"center" }}>
                            {price}
                        </Typography>
                    </CardContent>
                    <CardActions 
                        style={{ display:"flex", justifyContent: "center", paddingTop: 0, marginBottom: 10 }}>
                        { !this.props?.addedOnShoppingRocket && 
                            <Tooltip 
                                title={"Adicionar ao foguete de pedidos"}
                                arrow={true}
                            >
                                <IconButton 
                                    id={id}
                                    name={"shopping-rocket-add-button"}
                                    edge="start" 
                                    color="inherit" 
                                    aria-label="menu"
                                    onClick={(event) => this.props?.onHandleShoppingRocketItems(event, id, 'ADD')}
                                >
                                    <AddShoppingCart 
                                        color="action" 
                                    />
                                </IconButton>
                            </Tooltip>
                        }
                        { this.props?.addedOnShoppingRocket && 
                            <Tooltip 
                                title={"Remover do foguete de compras"}
                                arrow={true}
                            >
                                <IconButton 
                                    id={id}
                                    name={"shopping-rocket-remove-button"}
                                    edge="start" 
                                    color="inherit" 
                                    aria-label="menu"
                                    onClick={(event) => this.props?.onHandleShoppingRocketItems(event, id, 'REMOVE')}
                                >
                                    <RemoveShoppingCart 
                                        color="error"
                                    />
                                </IconButton>
                            </Tooltip>
                        }
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}