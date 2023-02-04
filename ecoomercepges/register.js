import{Selector,t} from 'testcafe';
class Register{


    constructor(){
        this.account=Selector(".fa.fa-user");
        this.regbutton=Selector("a[href='https://naveenautomationlabs.com/opencart/index.php?route=account/register']");
        this.fname=Selector("#input-firstname");
        this.lanme=Selector("#input-lastname");
        this.themail=Selector("#input-email");
        this.tele=Selector("#input-telephone");
        this.pass=Selector("#input-password");
        this.conpass=Selector("#input-confirm");
        this.privacy=Selector("input[value='1'][name='agree']");
        this.submit=Selector("input[value='Continue']");

    }

    async registeration(firstname,lastname,email,thetele,password,confirm){

        await t.
        
        typeText(this.fname,firstname)
        .
        typeText(this.lanme,lastname)
        .
        typeText(this.themail,email)
        .
        typeText(this.tele,thetele)
        .
        typeText(this.pass,password)
        .
        typeText(this.conpass,confirm)
        .
        click(this.privacy)
        .
        click(this.submit);

    }
    async clickreg(){
        await t.
        click(this.account)
        .click(this.regbutton)
    }
}export default new Register();
// await t.click('.fa.fa-user');
// await  t.click("a[href='https://naveenautomationlabs.com/opencart/index.php?route=account/register']");