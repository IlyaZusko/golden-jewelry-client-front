export interface IOrder {
  id: string;
  userId: string;
  productsNames: string[];
  productsIds: string[];
  totalPrice: number;
  recieveDateRequest: string;
  userPhoneNumber: string;
  status: string;
  orderId: string;
}
