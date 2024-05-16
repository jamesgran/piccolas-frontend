export interface Pedido {
  id_usuario: number;
  productos: [{id_producto: number, cantidad: number}];
}
