import BaseTemplate from "./baseTemplate.js";
import { authenticateUser } from "../modules/sessionStorage.js";

export class Logout extends BaseTemplate{
    constructor(p) {
        super(p);
        this.setTitle(p);
        this.keyTemp = "userTemp";
        this.key = "user"
    }
    handler(){
        localStorage.removeItem(this.key);
        sessionStorage.removeItem(this.key);
        authenticateUser(this.key)
    }
    async getHtml() {
        return `
        <div class="logged-out">
        <div>
        <h1>Successfully logged off</h1>
        <button>
            <a href="/">Okay</a>
        </button>
        </div>
        </div>
        `;
    }
}
