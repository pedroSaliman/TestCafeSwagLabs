import{Selector,t} from 'testcafe';
class Page{
constructor(){
    this.username=Selector("#user-name");
    this.password=Selector("#password");
    this.submit=Selector("#login-button");
}
async information(theusername,thepassword){
    await t

    .typeText(this.username,theusername)
    .typeText(this.password,thepassword)
   
    .click(this.submit)
}




}export default new Page();