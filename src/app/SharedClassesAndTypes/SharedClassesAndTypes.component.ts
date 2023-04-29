export interface IProduct {
  ID: number;
  Name: string;
  Quantity: number;
  price: number;
  img: string;
}

export const productList: IProduct[] = [
  {
    ID: 1,
    Name: 'Product 1',
    Quantity: 10,
    price: 100,
    img: ''
  },
  {
    ID: 2,
    Name: 'Product 2',
    Quantity: 5,
    price: 200,
    img: ''
  }
];

export interface ICategory {
  ID: number;
  Name: string;
}

export enum DiscountOffers {
  A = 10,
  B = 20,
  C = 30,
  D = 40,
  E = 50
}
