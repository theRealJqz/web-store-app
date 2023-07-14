import BaseTemplate from "./baseTemplate.js";

export class Product extends BaseTemplate{
    constructor(p) {
        super(p);
        this.id = p;
        this.data = p;
    }
    async handler(){
        const allProducts = await this.retrieveData("https://fakestoreapi.com/products", "products");
        this.data = allProducts[this.id-1];
        //title/page-title/nav*2/img
        this.setTitle(this.data.title);
        document.querySelector(".product-title").textContent = this.data.title;
        const navCat = document.querySelector(".nav-product-category");
        navCat.textContent = this.firstLetterUppercase(this.data.category);
        navCat.href = `/${this.catagoryToRoute(this.data.category)}`
        document.querySelector(".current-product").textContent = this.data.title;
        const image = document.querySelector(".product-container img");
        image.src = this.data.image;
        image.alt = this.data.title;

        document.querySelector(".product-description-visible").textContent = `${this.data.description}`;
        document.querySelector(".product-price-visible").textContent = `$${this.data.price}`;

    }
    async getHtml() {
        return `
        <div class="product-listing-container catagory-container">
        <img class="placeholder-img" src="https://via.placeholder.com/1280x200.png?text=Placeholder%20Image">
        <nav class="breadcrumb-nav">
        <a href="/">Home</a><span> > </span><a class="nav-product-category" href="/"></a><span> > </span><span class="current-product"> </span>
        </nav>
        
        <div class="product-page-container">
        <h1 class="product-title"></h1>
        <div class="product">
            <div class="product-container">
                <img src="" alt="">
            </div>
            <div class="product-info-visible">
                <h2 class="product-price-visible"></h2>
                <p class="product-description-visible"></p>
                <div>
                    <button class="add-cart">🛒 Add to cart</button>
                    <button class="add-wishlist">🤍 Add to wishlist</button>
                </div>
            </div>
        </div>
        </div>

        </div>
        `;
    }
}
