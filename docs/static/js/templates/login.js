import BaseTemplate from "./baseTemplate.js";
import { createCache, getCache, createPermaCache, authenticateUser} from "../modules/sessionStorage.js";
export class Login extends BaseTemplate{
    constructor(p) {
        super(p);
        this.setTitle(p);
        this.key = "user"
    }
    onLoginError(){
        const errorMessage = document.querySelector(".error-login");
        const button = document.querySelector("#signin-container button");
        errorMessage.classList.add("invalid", "animate");
        button.disabled = true;
        errorMessage.addEventListener("animationend", ()=>{
            button.disabled = false;
            errorMessage.classList.remove("animate");
        })
    }
    handleLogin(user, password){//terrible...
        localStorage.removeItem(this.key);
        sessionStorage.removeItem(this.keyTemp);
        const remembered = document.getElementById("remember-login").checked; 
        fetch('https://fakestoreapi.com/users')
            .then(res=>res.json())
            .then(data=>{
                for(let i=0; i < data.length; i++){
                    if(data[i].username === user && data[i].password === password){
                        remembered ?
                            createPermaCache(this.key, data[i])
                            :createCache(this.key, data[i]);
                        window.location.href = "/account";
                        return;
                    }
                }
                this.onLoginError();
            }).catch(error=>{
                console.log(error)
            })
           
    }
    async handler(){
        authenticateUser(this.key) === null ? this.sendHTML() : window.location.href = "/account";
        document.querySelector("#signin-container button").onclick = (e)=>{
            e.target.disabled = true;
            e.preventDefault();
            this.handleLogin(
                document.querySelector("#username").value, document.querySelector("#user-password").value, 
            )
        }
    }
    sendHTML(){
        document.querySelector("#content-container").innerHTML = `<div id="signin-container" class="flex-center">
        <div>
        <h1>Login to your account:</h1>
        <form action="">
            <div class="input-custom signin-user">
                <input autofocus="true" class="input-one" type="text" value="kevinryan" id="username" autocomplete="off">
                <label for="username">Username</label>
            </div>
            <div class="input-custom signin-password">
                <input autofocus="true" class="input-one" type="password" value="kev02937@" id="user-password">
                <label for="user-password">Password</label>
            </div>
            <div class="error-login"> Incorrect login or username</div>
            <div id="signup-checkbox">
                <input type="checkbox" id="remember-login" name="remember">
                <label for="remember-login">Remember me</label>
            </div>
        <button type="submit">Login</button>
        </form>
        </div>   
        </div>`
    }
    async getHtml(){ 
        let html = `

        `;
        //add loading screen
        return html;
    }
}