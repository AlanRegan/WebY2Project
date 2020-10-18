export interface ICar {
    
    
    make: string;
    model: string;
    imageURL: string;
    price: string;


}

export class Car implements ICar {

    make: string;
    model: string;
    imageURL: string;
    price: string;

    constructor(make:string,model:string,imageURL:string,price:string){
        this.make = make;
        this.model = model;
        this.imageURL = imageURL;
        this.price = price;
    }
}


