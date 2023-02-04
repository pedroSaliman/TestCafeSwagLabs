import { Selector, t } from "testcafe";

class Search{

    constructor(){
        this.searcbar=Selector("input[placeholder='Search']");
        this.compare=Selector(".fa.fa-exchange");
        this.linktocompare=Selector("body > div:nth-child(4) > div:nth-child(2) > a:nth-child(3)");
        this.iphone=Selector("body > div:nth-child(4) > div:nth-child(2) > a:nth-child(3)");
    }
    async search(product,another){
await t
.typeText(this.searcbar,product)
.pressKey("enter")
.click(this.compare)
.click(this.iphone)
.typeText(this.searcbar,another)
.pressKey("enter")
.click(this.compare)
.click(this.linktocompare);
    }
}export default new Search();