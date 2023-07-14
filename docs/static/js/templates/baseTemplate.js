import { createCache, getCache } from "../modules/sessionStorage.js";
import { createElem } from "../modules/helper.js";
export default class{
    constructor(params) {
        this.params = params;
    }
    setTitle(title) {
        document.title = title;
    }
    handler(o){
        return;
    }
    asignProduct(obj, elem){
        const anchor = elem.querySelector(".product-description-overlay");
        elem.querySelector(".product-description").textContent = obj.title;
        elem.querySelector(".product-price").innerHTML = `<br>$${obj.price.toFixed(2)}`;

        anchor.href = `/productid=${obj.id}`
        const img = elem.querySelector("img");
        img.src = obj.image;
        img.alt = obj.title;
        img.addEventListener("load", ()=> {
            elem.classList.remove("loading");
        });
    }
    handleProductBatch(data, batchDescription, parent){
        parent.classList.remove("empty");
        parent.querySelector(".catagory-description").textContent = this.firstLetterUppercase(batchDescription);
        parent.querySelectorAll(".product-container").forEach((i, index)=>{
            this.asignProduct(data[index], i);
    })
    }
    createTemplate(numProduct, parent, productTemplate){
        const container = createElem("div", ["product-batch-container", "empty"]);
        let productHTML = "";
        for(let i=0; i< numProduct; i++){
            productHTML = productHTML + productTemplate;
        }
        container.innerHTML = `
        <div class="catagory-description-container">
        <h3 class="catagory-description"></h3>
        </div>
        <div class="product-batch">
            ${productHTML}
        </div>
        `;
        parent.append(container);
    }
    firstLetterUppercase(str){
        return str.replace(/^\w/, match => match.toUpperCase());
    }
    filterProducts(products, category){
        return products.filter(i => i.category === category);
    }
    catagoryToRoute(str){
        const answer = str.replace("'", "").replace(/\s/g, "-");
        return answer;
    }
    async retrieveData(sourceURL, keyName){
        const cached = getCache(keyName);
        if(Array.isArray(cached)){
            return cached;
        }
        console.log("continued")
        try{
            const data = await fetch(sourceURL);
            const response = await data.json();
            createCache(keyName, response);
            return response
        }
        catch(error){
            return error;
        }
    }
    async getHtml() {
        return "";
    }
}