import BaseTemplate from "./baseTemplate.js";
import { authenticateUser } from "../modules/sessionStorage.js";

export class Checkout extends BaseTemplate{
    constructor(p) {
        super(p);
        this.setTitle(p);
        this.key = "user";
        this.productTemplate = `<div class="product-container loading">
        <div class="loading-bar"></div>
        <a class="product-description-overlay"></a>
        <img src="" alt="">
        <div class="product-description"></div>
        <div class="product-price"></div>    
        </div>`;
    }
    getTotal(products){
        let price = 0;
        for(let i = 0; i <products.length; i++){
            price = price+products[i].price;
        }
        return document.querySelector(".tally-price").textContent =`$${price.toFixed(2)}`;
    }
    async handler(){
        const a = authenticateUser(this.key);
        a === null ? window.location.href = "/login"
            : document.querySelector("#content-container").innerHTML = `
            <img class="placeholder-img" src="https://via.placeholder.com/1280x200.png?text=Placeholder%20Image">
            <h1>Checkout</h1>
            <nav class="breadcrumb-nav">
                <a href="/">Home</a><span> > Checkout</span>
            </nav>
            <p>Interdum vel justo eget fringilla. Sed libero libero, egestas non felis eget, elementum porta turpis. Pellentesque eget ipsum odio. Sed hendrerit purus ipsum, at lacinia sem auctor id. Pellentesque ac quam vitae eros tempus consequat. Praesent aliquet tortor fermentum ex scelerisque iaculis. Nullam consectetur lacus id tristique tempus. Etiam accumsan posuere metus nec ullamcorper. Donec volutpat metus erat, eu gravida enim consectetur eget. Duis imperdiet erat non ligula varius, nec condimentum nunc pulvinar. Fusce aliquam augue at suscipit porttitor. Aliquam erat volutpat. Fusce imperdiet quam quis metus maximus, quis interdum nibh tempor.</p>
            <div class="checkout-full-container">
                <div class="checkout-shipping-container checkout-container">
                <h3>Billing address</h3>
                    <form action="" class="checkout-info">
                        <div class="input-row">
                            <div class="label-column">
                                <input type="text" id="checkout-first-name" class="input-custom">
                                <label for="checkout-first-name">First Name</label>
                            </div>
                            <div class="label-column">
                                <input type="text" id="checkout-last-name" class="input-custom">
                                <label for="checkout-last-name">Last Name</label>
                            </div>
                        </div>
                        <div class="label-column">
                            <input type="email" id="checkout-email" class="input-custom">
                            <label for="checkout-email">Email</label>
                        </div>
                        <div class="label-column">
                            <input type="text" id="checkout-address" class="input-custom">
                            <label for="checkout-address">Address</label>
                        </div>
                        <div class="input-row">
                            <div class="label-column">
                                <input type="text" id="checkout-country" class="input-custom">
                                <label for="checkout-country">Country</label>
                            </div>
                            <div class="label-column">
                                <select name="" id="checkout-state">
                                    <option value="">Choose State...</option>
                                    <option value="">Choose State...</option>
                                </select>
                                <label for="checkout-state">State</label>
                            </div>
                            <div class="label-column">
                                <input type="text" id="checkout-zip" class="input-custom">
                                <label for="checkout-zip">Zip Code</label>
                            </div>
                        </div>
                        <hr>
                        <div id="billing-shipping-checkbox" class="checkbox-container">
                            <input type="checkbox" id="billing-shipping" name="billing-shipping">
                            <label for="billing-shipping">Shipping address is the same as my billing address</label>
                        </div>
                        <div id="shipping-save-checkbox" class="checkbox-container">
                            <input type="checkbox" id="shipping-save" name="shipping-save">
                            <label for="shipping-save">Save this information for next time</label>
                        </div>
                        <hr>
                        <form action="" id="payment-form">
                            <label>
                                <input type="radio" name="payment" value="credit-card">
                                Credit Card
                            </label>  
                            <label>
                                <input type="radio" name="payment" value="debit-card">
                                Debit Card
                            </label>
                            <label>
                                <input type="radio" name="payment" value="paypal">
                                PayPal
                            </label>
                            <div class="input-row">
                                <div class="label-column">
                                    <input type="text" id="payment-name" class="input-custom">
                                    <label for="payment-name">Name</label>
                                </div>
                                <div class="label-column">
                                    <input type="text" id="payment-number" class="input-custom">
                                    <label for="payment-number">Card Number</label>
                                </div>
                            </div>
                            <div class="input-row">
                                <div class="label-column">
                                    <input type="text" id="payment-expiration" class="input-custom">
                                    <label for="paymnt-expiration">Expiration</label>
                                </div>
                                <div class="label-column">
                                    <input type="text" id="payment-CVV" class="input-custom">
                                    <label for="payment-CVV">CVV</label>
                                </div>
                            </div>
                        </form>
                    </form>
                </div>
                <div class="checkout-half-container">
                    <div class="checkout-num flex-center">5</div>
                    <div class="checkout-products-container checkout-container">    
                    </div>
                    <div class="tally-container">Total (USD):<span class="tally-price"><b>...</b></span></div>
                    <div class="promo-container"><input type="text" placeholder="Promo Code Here"><button>Submit</button></div>
                </div>
                </div>
                <button class="checkout-bttn">Checkout</button>
            </div>

            `;
        const allProducts = await this.retrieveData("https://fakestoreapi.com/products", "products"); 
        const randomItems = [allProducts[5],allProducts[8],allProducts[12],allProducts[15],allProducts[18]];
        this.getTotal(randomItems);
        this.createTemplate(5, document.querySelector(".checkout-products-container"), this.productTemplate);
        
        this.handleProductBatch(randomItems, "My Cart", document.querySelector(".product-batch-container.empty"))
    }
    async getHtml() {
        return "";
    }
}
