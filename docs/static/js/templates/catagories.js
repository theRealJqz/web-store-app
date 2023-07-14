import BaseTemplate from "./baseTemplate.js";

export class Catagories extends BaseTemplate{
    constructor(p) {
        super(p);
        this.setTitle(p);
        this.title = p;
        this.productTemplate = `<div class="product-container loading">
                <div class="loading-bar"></div>
                <a class="product-description-overlay">
                    <div class="product-description"></div>
                    <div class="product-price"></div>
                </a>
                <img>
            </div>`;
    }
    async handler(){
        const cleanedCatagory = this.title.replace(/[A-Z]/g, letter => letter.toLowerCase());
        const allProducts = await this.retrieveData("https://fakestoreapi.com/products", "products");
        
        const filtered = this.filterProducts(allProducts, cleanedCatagory);
        this.createTemplate(filtered.length, document.querySelector(".product-listing-container"), this.productTemplate);
        this.handleProductBatch(filtered, this.title, document.querySelector(".product-batch-container.empty"));
        
    }

    async getHtml(){ 
        let html = `
        <div class="product-listing-container catagory-container">
        <img class="placeholder-img" src="https://via.placeholder.com/1280x200.png?text=Placeholder%20Image">
        <nav class="breadcrumb-nav">
        <a href="/">Home</a><span> > ${this.title}</span>
        </nav>
        </div>
        `;
        //add loading screen
        return html;
    }
}