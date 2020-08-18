export interface Product {
    id: number;        //  Id
    name: string;       //  Nombre
    price: number;      //  Precio
    image: URL;      //  URL a la imagen
    type: string;       //  Tipo/Categoría  'desayuno' y 'resto'
    dateEntry: Date;    //  Fecha de creación
}
