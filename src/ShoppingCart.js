
// A class called Shopping cart
class shoppingCart{

    // Initialized a constructor
    constructor(){
     this.listOfItems = [];
    }

    //getItems -> will return a list of items
    getItems(){
        return this.listOfItems; 
    }

    //addItem -> will add item to the array
    addItem(name,quantity,pricePerUnit){
       this.listOfItems.push({
            name,
            quantity,
            pricePerUnit
       });
    }

    //clears the list fo items
    clear(){
        this.listOfItems = [];
    }

    // calculates the totalprice of items for each shopping cart
    total(){
        return this.listOfItems.reduce((totalprice,currentcart) => {
            return totalprice + (currentcart.quantity * currentcart.pricePerUnit);
        },0);
    }
}

module.exports = shoppingCart;