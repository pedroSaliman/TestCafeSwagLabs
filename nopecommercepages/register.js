import { Selector, t } from "testcafe";

class Register {

    constructor(){
        this.reg=Selector(".ico-register")
        this.gender=Selector("#gender-male")
        this.fname=Selector("#FirstName")
        this.lname=Selector("#LastName")
        this.email=Selector("#Email")
        this.pass=Selector("#Password")
        this.conpass=Selector("#ConfirmPassword")
        this.submit=Selector("#register-button")

    }
    async register(firstname,lastname,theemail,password,confirm){
        await t
        .
        click(this.reg)
        .
        click(this.gender)
        .
        typeText(this.fname,firstname)
        .
        typeText(this.lname,lastname)
        .
        typeText(this.email,theemail)
        . 
        typeText(this.pass,password)
        . 
        typeText(this.conpass,confirm)
        . 
        click(this.submit)


    }
}export default new Register();