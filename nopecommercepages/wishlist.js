import { Selector, t } from "testcafe";

class Wish{
    constructor(){
        this.wishlink=Selector("#add-to-wishlist-button-4")
        this.alert=Selector("p[class='content'] a")
        this.quantity=Selector("input[value='2']")
        this.update=Selector("#updatecart")
    }
    async wish(number){
        await t
        . 
        click(this.wishlink)
        . 
        click(this.alert)
        . 
        selectText(this.quantity)
        . 
        pressKey("delete")
        . 
        typeText(this.quantity,number)
        . 
        click(this.update)
    }
}export default new Wish();