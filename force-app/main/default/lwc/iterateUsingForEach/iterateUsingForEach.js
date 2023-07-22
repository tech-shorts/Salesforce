import { LightningElement } from 'lwc';

export default class IterateUsingForEach extends LightningElement {
    // Creating an array with some data
    fruitsList = [
                    {
                        Id: 1,
                        Name: "Apple"
                    },
                    {
                        Id: 2,
                        Name: "Banana"
                    },
                    {
                        Id: 3,
                        Name: "Mango" 
                    },
                    {
                        Id: 4,
                        Name: "Orange" 
                    }
                ];
}