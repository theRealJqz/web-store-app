import BaseTemplate from "./baseTemplate.js";
import { authenticateUser } from "../modules/sessionStorage.js";

export class Account extends BaseTemplate{
    constructor(p) {
        super(p);
        this.setTitle(p);
        this.key = "user";
    }
    handler(){
        const a = authenticateUser(this.key);
        a === null ? window.location.href = "/login"
            : document.querySelector("#content-container").innerHTML =`
            <img class="placeholder-img" src="https://via.placeholder.com/1280x200.png?text=Placeholder%20Image">
            <h1>My Account</h1>
            <nav class="breadcrumb-nav">
            <a href="/">Home</a><span> > Acount</span>
            </nav>
            <form action="" class="account-info">
            <div class="label-column">
                <input type="text" id="account-username" value="kevinryan" class="input-custom">
                <label for="account-username">Username</label>
             </div>
             <hr>
             <h2>Personal info</h2>
             <div class="input-row">
            <div class="label-column">
                <input type="text" id="account-first-name" class="input-custom" value="${a.name.firstname}">
                <label for="account-first-name">First Name</label>
            </div>
            <div class="label-column">
                <input type="text" id="account-last-name" class="input-custom" value="${a.name.lastname}">
                <label for="account-last-name">Last Name</label>
            </div>
            </div>
            <div class="label-column">
            <input type="email" id="account-email" class="input-custom" value="${a.email}">
            <label for="account-email">Email</label>
            </div>
            <div class="label-column">
            <input type="text" id="account-number" class="input-custom" value="${a.phone}">
            <label for="account-number">Phone Number</label>
            </div>
            <br>
            <h2>Address</h2>
            <div class="label-column">
            <input type="text" id="account-city" class="input-custom" value="${a.address.number} ${a.address.street}">
            <label for="account-city">Street</label>
        </div>
        <div class="input-row">
            <div class="label-column">
                <input type="text" id="account-city" class="input-custom" value="${a.address.city}">
                <label for="account-city">City</label>
            </div>
            <div class="label-column">
                <select name="" id="account-state">
                    <option value="">Choose State...</option>
                    <option value="">Choose State...</option>
                </select>
                <label for="account-state">State</label>
            </div>
            <div class="label-column">
                <input type="text" id="account-zip" class="input-custom" value="${a.address.zipcode}">
                <label for="account-zip">Zip Code</label>
            </div>
        </div>
            <br>
            <button type="submit">Update Changes</button>
            </form>
            `
        
    }
    async getHtml() {
        return "";
    }
}
