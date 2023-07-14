import { authenticateUser } from "./modules/sessionStorage.js";
import { router } from "./modules/handleRoutes.js"

document.addEventListener("DOMContentLoaded", ()=>{
    authenticateUser("user");
    router();
})
document.querySelector(".nav-to-top").addEventListener("click", ()=>{
    window.scrollTo(0, 0);
})
setTimeout(() => {
    document.querySelectorAll(".input-one").forEach(input => {
        input.addEventListener("blur", ()=>{
            if (input.value !== '') {
                input.classList.add("focused");
              }
              else input.classList.remove("focused");
        })
    })
}, 1800);