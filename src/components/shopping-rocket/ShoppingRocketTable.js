import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import PizzaPlanetComponent from "../pizza-planet/PizzaPlanet";


export default class ShoppingRocketTableComponent extends PizzaPlanetComponent {

    formatPrice(num) {
        return `${num.toFixed(2)}`;
    }
    
    priceRow(amount, unit) {
        return amount * unit;
    }
    
    createRow(description, unit, amount) {
        const price = this.priceRow(amount, unit);
        return { description, amount, unit, price };
    }
    
    subtotal(items) {
        return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
    }

    render() {
        const rows = this.props?.rows?.map(({
            description,
            unit,
            amount
        }) => this.createRow(description, unit, amount));
        console.log(rows)
        const invoiceSubtotal = this.subtotal(rows);
        const invoiceFreight = 0.07 * invoiceSubtotal;
        const invoiceTotal = invoiceFreight + invoiceSubtotal;

        return (
            <TableContainer component={Paper} style={{ padding: 15, marginBottom: 15}}>
                <Table aria-label="Foguete de compras">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={3}>
                            Detalhes
                        </TableCell>
                        <TableCell align="right">Preço</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Descrição</TableCell>
                        <TableCell align="right">Qtd.</TableCell>
                        <TableCell align="right">Unid.</TableCell>
                        <TableCell align="right">Subtotal</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        
                        <TableRow key={row.description}>
                        <TableCell>{row.description}</TableCell>
                        <TableCell align="right">{row.amount}</TableCell>
                        <TableCell align="right">{row.unit}</TableCell>
                        <TableCell align="right">{this.formatPrice(row.price)}</TableCell>
                        </TableRow>
                    ))}

                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={2}>Subtotal</TableCell>
                        <TableCell align="right">{this.formatPrice(invoiceSubtotal)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Frete</TableCell>
                        <TableCell align="right">{`${(0.07 * 100).toFixed(0)} %`}</TableCell>
                        <TableCell align="right">{this.formatPrice(invoiceFreight)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align="right">{this.formatPrice(invoiceTotal)}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}