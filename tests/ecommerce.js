import Register from "../ecoomercepges/register"
import { faker } from '@faker-js/faker';
import { Selector } from "testcafe";
import Login from "../ecoomercepges/login";
import Edit from "../ecoomercepges/edit"
import Search from "../ecoomercepges/search"
import * as data  from "../ecommercedata/data.json"
const email = faker.internet.email()
fixture`Test global`
.page("https://naveenautomationlabs.com/opencart/")
.disablePageReloads;
 

test('Click a button', async t => {
    
    Register.clickreg();
    await t.expect(Selector("div[id='content'] h1").innerText).contains("Register Account");


});

////////////////////////////////////////////////////
test("register case",async(t)=>{
 Register.registeration(data.fname,data.lastname,email,data.telephone,data.password,data.conpass);
 await t.maximizeWindow();
 await t.expect(Selector("div[id='content'] h1").innerText).contains("Has Been Created!");
})
/////////////////////////////////////////
test("login case",async t=>{
   
Login.login(email,data.password);
await t.expect(Selector("a[title='My Account'] span[class='hidden-xs hidden-sm hidden-md']").innerText).contains("Account");


})
/////////////////////////////////////////////////
test("Edit case",async t=>{
    Edit.edit(data.updatename)
    await t.expect(Selector(".alert.alert-success.alert-dismissible").innerText).contains("been successfully");
})
///////////////////////////////////////////////////////////
test("search case",async t=>{
Search.search(data.product,data.anotherproduct)
await t.expect(Selector("div[id='content'] h1").innerText).contains("Comparison");
})