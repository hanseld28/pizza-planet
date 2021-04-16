
export default class Product {
    constructor(args = {}) {
        this.id = args?.id;
        this.title = args?.title;
        this.description = args?.description;
        this.price = args?.price;
        this.image = args?.image;
    }

    adapt(data = {}) {
        return new Product({
           id: data?.id,
           title: data?.title,
           description: data?.description,
           price: data?.price,
           image: data?.image,
        });
    }
}