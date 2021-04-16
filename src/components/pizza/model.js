import Product from '../product/model';

export default class Pizza extends Product {
    constructor(args = {}) {
        super(args);
        this.ingredients = args?.ingredients || [];
    }

    adapt(data = {}) {
        return new Pizza({
           id: data?.id,
           title: data?.title,
           description: data?.description,
           price: data?.price,
           image: data?.image,
           ingredients: data?.ingredients,
        });
    }
}