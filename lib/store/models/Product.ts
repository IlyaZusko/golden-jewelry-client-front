export interface IProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface IProductOrder {
  recieveDate: string;
  recieveTime: string;
  userPhone: string;
  comment: string;
  orderProducts: string;
}
