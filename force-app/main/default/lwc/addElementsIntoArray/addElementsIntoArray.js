import { LightningElement } from 'lwc';

export default class AddElementsIntoArray extends LightningElement {
    

    // using push method to add element to array
    get fruitsList1(){
        // Creating an array with some data
        let fruitsArray = ["Apple", "Banana"];

        fruitsArray.push("Cherry");
        return fruitsArray;
    }

    // using unshift method to add element to array
    get fruitsList2(){
        // Creating an array with some data
        let fruitsArray = ["Apple", "Banana"];

        fruitsArray.unshift("Cherry");
        return fruitsArray;
    }

    // using splice method to add element to array
    get fruitsList3(){
        // Creating an array with some data
        let fruitsArray = ["Apple", "Banana"];

        fruitsArray.splice(1,0,"Cherry");
        return fruitsArray;
    }

    // using push method to add element to array
    get fruitsList4(){
        // Creating an array with some data
        let fruitsArray = ["Apple", "Banana"];

        let newFruitsList = fruitsArray.concat("Cherry");
        return newFruitsList;
    }
}