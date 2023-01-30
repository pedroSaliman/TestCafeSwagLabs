
import Page from "../pages/page";
import Cart from "../pages/cart";


const {Selector} = require("testcafe");
fixture `Swag labs`
        .page("./")


test("  swagLabs test",async t=>{
    Page.information("standard_user","secret_sauce");
    Cart.clickcart("mohamed","saliman","223456");
    await t.expect(Selector(".complete-header").innerText).eql("THANK YOU FOR YOUR ORDER");

   
});


