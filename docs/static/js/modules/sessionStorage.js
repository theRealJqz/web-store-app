export function createCache(name, obj){
    console.log("first time, creating cache")
    const json = JSON.stringify(obj);
    sessionStorage.setItem(name, json);
}

export function getCache(name){
    const item = sessionStorage.getItem(name);
    const response =  item === null ?  null: JSON.parse(item);
    return response
}

export function createPermaCache(name, obj){
    const json = JSON.stringify(obj);
    localStorage.setItem(name, json);
}

export function getPermaCache(name){
    const item = localStorage.getItem(name);
    const response =  item === null ?  null: JSON.parse(item);
    return response
}
export function authenticateUser(key){
    let response = getCache(key);
    response === null ? response = getPermaCache(key) : response;

    const logBttn = document.querySelector(".login-logout");
    const accountBttn = document.querySelector(".account-link");
    if(response === null){
        console.log("currently looged out");
        logBttn.textContent = "Login";
        logBttn.href = "/login"
        accountBttn.classList.add("hidden");
    }
    else{
        console.log("currently logged in");
        logBttn.textContent = "Logout";
        logBttn.href = "/logout"
        accountBttn.classList.remove("hidden");
    }
    return response;
}