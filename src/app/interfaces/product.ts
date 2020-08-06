export interface Product {
    _id: string;        //  Id
    name: string;       //  Nombre
    price: number;      //  Precio
    image: string;      //  URL a la imagen
    type: string;       //  Tipo/Categoría  'desayuno' y 'resto'
    dateEntry: Date;    //  Fecha de creación
}
