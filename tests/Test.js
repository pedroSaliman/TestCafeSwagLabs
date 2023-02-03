
import Page from "../pages/page";
import Cart from "../pages/cart";
import * as data from "../data/data.json"


const {Selector} = require("testcafe");
fixture `Swag labs`
        .page("./")


test("swagLabs test",async t=>{
    Page.information(data.name,data.pass);
    Cart.clickcart(data.fname,data.lname,data.zib);
    await t.expect(Selector(".complete-header").innerText).eql("THANK YOU FOR YOUR ORDER");

   
});


