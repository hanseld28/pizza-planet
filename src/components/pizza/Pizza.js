import PizzaPlanetComponent from "../pizza-planet/PizzaPlanet";
import ProductComponent from "../product/Product";

export default class PizzaComponent extends PizzaPlanetComponent {
    render() {
        return (
           <ProductComponent 
                {...this.props}
           />
        );
    }
}