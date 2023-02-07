import { Selector, t } from "testcafe"

class Compare{

constructor(){
    this.link=Selector("div[class='compare-products'] button[type='button']")
    this.alert=Selector("p[class='content'] a")

}
async comp(){
    await t 
    . 
    click(this.link)
    . 
    click(this.alert)
}
}export default new Compare()