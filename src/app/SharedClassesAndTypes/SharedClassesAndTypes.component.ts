export interface IProduct {
    ID : number ;
    Name : string ; 
    Quantity : number;
    price : number;
    img : string;
}

export interface ICategory {
    ID : number ;
    Name : string ; 
}

export enum DiscountOffers  {
    A = "No Discount",
    B = "10%",
    C = "15%",
  }