import { Selector, t } from "testcafe";

class Search{
    constructor(){
        this.bar=Selector("#small-searchterms")
        this.link=Selector("h2[class='product-title'] a")
        this.searchbutton=Selector("button[class='button-1 search-box-button']")
    }

    async search(product){
        await t
        . 
        typeText(this.bar,product)
        . 
       click(this.searchbutton)
        . 
        click(this.link)

    }
}export default new Search();