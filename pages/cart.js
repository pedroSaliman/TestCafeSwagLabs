import{Selector,t} from 'testcafe';
class Cart{
constructor(){
    this.AddtoCart=Selector("#add-to-cart-sauce-labs-backpack");
    this.carCart=Selector(".shopping_cart_link");
    this .check=Selector("#checkout");
    this.fname=Selector("#first-name");
    this.lname=Selector("#last-name");
    this.zib=Selector("#postal-code");
    this.submi=Selector("#continue");
    this.finish=Selector("#finish");

//.complete-header
//THANK YOU FOR YOUR ORDER

}
async clickcart(first,last,code){
    await t

  
   
    .click(this.AddtoCart)
    .click(this.carCart)
    .click(this.check)
    .typeText(this.fname,first)
    .typeText(this.lname,last)
    .typeText(this.zib,code)
    .click(this.submi)
    .click(this.finish);
}




}export default new Cart();