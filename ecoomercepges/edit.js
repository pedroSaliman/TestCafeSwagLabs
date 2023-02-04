import { Selector, t } from "testcafe"

class Edit{

constructor(){
    this.editbutton=Selector("body > div:nth-child(4) > div:nth-child(2) > aside:nth-child(2) > div:nth-child(1) > a:nth-child(2)")
    this.name=Selector("#input-firstname")
    this.button=Selector("input[value='Continue']")
}
async edit(username){
    await 
    t
    .click(this.editbutton)
    
    .typeText(this.name,username)
    .click(this.button);
}
}export default new Edit()