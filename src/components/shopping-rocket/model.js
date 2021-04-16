export default class ShoppingRocketItem {
    constructor(args = {}) {
        this.id = args?.id;
        this.amount = args?.amount;
        this.product = args?.product;
    }
}