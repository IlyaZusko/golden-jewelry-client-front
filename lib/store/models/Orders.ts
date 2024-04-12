export interface IOrder {
  id: string;
  userId: string;
  productsNames: string[];
  productsIds: string[];
  totalPrice: number;
  recieveDateRequest: Date;
  userPhoneNumber: string;
  status: string;
  orderId: string;
}
