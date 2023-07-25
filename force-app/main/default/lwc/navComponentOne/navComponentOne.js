import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavComponentOne extends NavigationMixin(LightningElement) {
    handleNavigation(){
        let compDef = {
            componentDef: 'c:navComponentTwo',
            // if you want to pass any data 
            attributes: {
                testVar : 'World'
            }
        }
        let encodedDef = btoa(JSON.stringify(compDef));
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url: "/one/one.app#"+encodedDef
            }
        })
    }
}