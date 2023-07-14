import BaseTemplate from "./baseTemplate.js";

export class Home extends BaseTemplate{
    constructor(p) {
        super();
        this.setTitle(p);
        this.productTemplate = `<div class="product-container loading">
                <div class="loading-bar"></div>
                <a class="product-description-overlay">
                    <div class="product-description"></div>
                    <div class="product-price"></div>
                </a>
                <img>
            </div>`;
    }
    errorHandler(){
        return;
    }
    async handler(){
        const catagories = ["jewelery", "women's clothing","electronics", "men's clothing"];
        const allProducts = await this.retrieveData("https://fakestoreapi.com/products", "products");
        for(let i =0; i< 2; i++){
           this.handleProductBatch(this.filterProducts(allProducts, catagories[i]), catagories[i],document.querySelector(".product-batch-container.empty"))
        }
        const button = document.querySelector(".append-products")
        button.onclick = ()=> {
            for(let i =2; i< 4; i++){
                this.createTemplate(4, document.querySelector(".product-listing-container"), this.productTemplate);
                this.handleProductBatch(this.filterProducts(allProducts, catagories[i]), catagories[i], document.querySelector(".product-batch-container.empty"))
             }
             button.disabled = true;
        }
    }
    async getHtml(){ 
        let html = `
            <div id="content-container">
            <div id="hero">
                    <div class="banner-texts">                       
                    </div>
                <div id="hero-content">
                    <div id="main-intro">
                        <h1>Welcome to my ecommerce sample store.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div id="signup-container">
                        <form action="">
                            <div class="input-custom signup-form">
                                <input  class="input-one" type="email" id="email-form-signup" autocomplete="off">
                                <label for="email-form-signup">Email address</label>
                            </div>
                            <div class="input-custom signup-form">
                                <input class="input-one" type="password" id="email-password-form">
                                <label for="email-password-form">Password</label>
                            </div>
                            <div id="signup-checkbox">
                                <input type="checkbox" id="remember" name="remember">
                                <label for="remember">Remember me</label>
                            </div>
                        <button type="submit">Sign up</button>
                        <hr>
                        <p>By clicking Sign up, you agree to the terms of use.</p>
                        </form>
                    </div>
                </div>
            </div>
            <div class="product-listing-container">
                <div class="product-batch-container empty">
                    <h2 class="catagory-description"></h2>
                    <div class="product-batch">
                        <div class="product-container loading"><div class="loading-bar"></div><a class="product-description-overlay"><div class="product-description"></div><div class="product-price"></div></a><img></div>
                        <div class="product-container loading"><div class="loading-bar"></div><a class="product-description-overlay"><div class="product-description"></div><div class="product-price"></div></a><img></div>
                        <div class="product-container loading"><div class="loading-bar"></div><a class="product-description-overlay"><div class="product-description"></div><div class="product-price"></div></a><img></div>
                        <div class="product-container loading"><div class="loading-bar"></div><a class="product-description-overlay"><div class="product-description"></div><div class="product-price"></div></a><img></div>
                    </div>
                </div>
                <div class="product-batch-container empty">
                    <h2 class="catagory-description"></h2>
                    <div class="product-batch">
                        <div class="product-container loading"><div class="loading-bar"></div><a class="product-description-overlay"><div class="product-description"></div><div class="product-price"></div></a><img></div>
                        <div class="product-container loading"><div class="loading-bar"></div><a class="product-description-overlay"><div class="product-description"></div><div class="product-price"></div></a><img></div>
                        <div class="product-container loading"><div class="loading-bar"></div><a class="product-description-overlay"><div class="product-description"></div><div class="product-price"></div></a><img></div>
                        <div class="product-container loading"><div class="loading-bar"></div><a class="product-description-overlay"><div class="product-description"></div><div class="product-price"></div></a><img></div>
                    </div>
                </div>  
            </div>
            <button class="append-products">Load more products!</button>
            <br>
            <img class="placeholder-img" src="https://via.placeholder.com/1280x200.png?text=Placeholder%20Image">
        </div>
        `;
        //add loading screen
        return html;
    }
}