import { Selector } from "testcafe";
import Register from "../nopecommercepages/register.js"
import Login from "../nopecommercepages/login.js"
import  Wish from "../nopecommercepages/wishlist.js"
import Compare from "../nopecommercepages/compare.js"
import Search from "../nopecommercepages/search.js";
import { faker } from '@faker-js/faker';
import * as data from "../nopecommercepages/data/data.json"
const email = faker.internet.email()

fixture`Test global`
.page("https://demo.nopcommerce.com/")
.disablePageReloads;

test("register case",async t=>{

    Register.register(data.firstname,data.lastname,email,data.password,data.confirmpassword)
    await t.expect(Selector(".result").innerText).contains("Your registration completed")
})
test("login case",async t=>{
    await t.maximizeWindow();

Login.login(email,data.password)

await t.expect(Selector(".ico-account").innerText).contains("account")
})

test("search case",async t=>{
    Search.search("Apple MacBook Pro 13-inch")
    await t.expect(Selector("div[class='product-name'] h1").innerText).contains("Apple ")
    })



test("wish case",async t=>{
  Wish.wish(data.number)
    await t.expect(Selector(".product-subtotal").innerText).contains("$7,200.00")
 })

 
test("compare case",async t=>{
    Search.search(data.another)
    Compare.comp()
    Search.search(data.product)
    Compare.comp()
await t.expect(Selector("div[class='page-title'] h1").innerText).contains("Compare products")


      
   })