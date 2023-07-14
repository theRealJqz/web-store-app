import {Catagories} from "../templates/catagories.js";
import { About } from "../templates/about.js";
import { Home } from "../templates/home.js";
import { Contact } from "../templates/contact.js";
import { Product } from "../templates/product.js";
import { Error } from "../templates/error.js";
import { Login } from "../templates/login.js";
import { Account } from "../templates/account.js";
import { Logout } from "../templates/logout.js";
import { Checkout } from "../templates/checkout.js";

const routes = {
    routesArr : [{
        title: "The store",
        route: "/",
        handler: Home,
    },{
        title: "Electronics",
        route: "/electronics",
        handler: Catagories,
    },{
        title: "Jewelery",
        route: "/jewelery",
        handler: Catagories,
    }, {
        title: "Men's clothing",
        route: "/mens-clothing",
        handler: Catagories,
    },{
        title: "Women's clothing",
        route: "/womens-clothing",
        handler: Catagories,
    },{
        title: "About us",
        route: "/about",
        handler: About
    },{
        title: "Contact",
        route: "/contact",
        handler: Contact
    },{
        title: "Product",
        route: "/productid=number",
        handler: Product
    },{
        title: "Login",
        route: "/login",
        handler: Login
    },{
        title: "My Account",
        route: "/account",
        handler: Account
    },{
        title: "Thank you come again",
        route: "/logout",
        handler: Logout
    },{title: "Checkout",
    route: "/checkout",
    handler: Checkout}],
    addRoutes(object){
        this.routesArr.push(object);
    }
}
function convertToRegex(a){
    const regex = a.replace(/\//g, "\\/").replace("number", "(\\d+)");
    return new RegExp(`^${regex}$`);
}
function navigateTo(url){
    history.pushState(null, null, url);
    router();
}
export async function router(){
    let path =  location.pathname;
    const match = routes.routesArr.filter(i => {
        if(path.match(convertToRegex(i.route))){
            return true
        }
    });
    let dataObj, input;
    if(match.length > 0){
        input = match[0].title == "Product" ? 
            path.match(/\d+$/):
            match[0].title
        dataObj = new match[0].handler(input);
        }
    else {
         dataObj = new Error("Error");
    }
    document.querySelector("#content-container").innerHTML = await dataObj.getHtml();

    await dataObj.handler();
}
document.querySelectorAll(".nav-catagory").forEach(i => i.addEventListener("click", (e)=>{
    e.preventDefault();
    navigateTo(e.target.href);
}))

window.addEventListener("popstate", (e)=>{
    console.log('nav history')
    router();
});