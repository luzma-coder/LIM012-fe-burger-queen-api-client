import { Product } from "./product"

export interface Order {
    _id: string;            // Id
    userId: string;         // Id usuaria que creó la orden
    client: string;         // Clienta para quien se creó la orden
    products: [
        {
        qty: number;        // Cantidad
        product: Product;  // Object Producto
        }
    ];
    status: string;          // Estado: `pending`, `canceled`, `delivering` o `delivered`
    dateEntry: Date;         // Fecha de creación
    dateProcessed: Date;     // optional Fecha de cambio de `status` a `delivered`
}
