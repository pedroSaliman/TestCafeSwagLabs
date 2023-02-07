import { Selector,t } from "testcafe"

class Login{

    constructor(){
        this.loginbutton=Selector(".ico-login")
        this.email=Selector("#Email")
        this.password=Selector("#Password")
        this.button=Selector("button[class='button-1 login-button']")

    }
    async login(temail,pass){
        await t
        . 

        click(this.loginbutton)
        . 
        typeText(this.email,temail)
        . 
        typeText(this.password,pass)
        . 
        click(this.button)

    }
}export default new Login();