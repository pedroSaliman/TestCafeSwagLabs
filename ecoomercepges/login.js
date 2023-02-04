import { Selector, t } from "testcafe";

class Login{

    constructor(){
        this.username=Selector("#input-email");
        this.pass=Selector("#input-password");
        this.submit=Selector("input[value='Login']");
        this.account=Selector(".fa.fa-user")
        this.logout=Selector("li[class='dropdown open'] li:nth-child(5) a:nth-child(1)")
this.loginb=Selector("li[class='dropdown open'] li:nth-child(2) a:nth-child(1)")
    }
    async login(theusername,thepass){
        await t
        .click(this.account)
        .click(this.logout)
        .click(this.account)
        .click(this.loginb)
        .typeText(this.username,theusername)
        .typeText(this.pass,thepass)
        .click(this.submit);
    }
}export default new Login();
// await t.click('.fa.fa-user');
// await t.click("li[class='dropdown open'] li:nth-child(5) a:nth-child(1)")
// await t.click('.fa.fa-user');
// await t.click("li[class='dropdown open'] li:nth-child(2) a:nth-child(1)");