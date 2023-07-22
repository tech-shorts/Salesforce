import { LightningElement } from 'lwc';

export default class CreatingAnArray extends LightningElement {
    //Create Array using assignment operator 
    //-------------------------------------   
    // Creating an empty array
    fruitsArray1 = [];

    // Creating an array with some data
    fruitsArray2 = ["Apple", "Banana"];

    //Create Array using constructor  
    //------------------------------------- 
    // Creating an empty array
    fruitsArray3 = new Array();

    // Creating an array with some data
    fruitsArray4 = new Array("Apple", "Banana", "Orange");

    //Create Array using Array.of() method  
    //------------------------------------- 
    // Creating an empty array
    fruitsArray5 = Array.of();

    // Creating an array with some data
    fruitsArray6 = Array.of("Apple", "Banana", "Orange","Mango");
}