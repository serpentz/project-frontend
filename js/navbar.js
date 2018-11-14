const backendUrl = "https://vast-tundra-79588.herokuapp.com/"
function getBackendData(route, confirmFn){
    return fetch(backendUrl+route).then(res => res.json()).then(json => confirmFn(json));
}


function postBackendData(route, data, confirmFn){
    return fetch(backendUrl+route,{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        },
        body: data
    }).then(res => res.json()).then(json => confirmFn(json));
}

function getNavbar(){
    
    // function addNewEvent(element, fn, action='click'){
    //     document.querySelector(element).addEventListener(action, () => {
    //         fn()
    //     })
    // }
    
    // saved memes
    // const navSavedMemes= document.querySelector('#saved')
    // navSavedMemes.addEventListener('click', () => {
    //     veiwSavedMemes()
    // })
    
    // const navcategories= document.querySelector('#categories')
    // navSavedMemes.addEventListener('click', () => {
    //     veiwSavedMemes()
    // })
    
    // login
    console.log('updated js')
    function getCategoryMemes(category){
        
    }
    
    function veiwSavedMemes(){
    }
    
    function veiwcategory(category){
    }
    setupLogin()
    setupCategories()
}

function setupCategories(){
    
    function getCategoriesIndex(){
        getBackendData("categories", categoriesMenu)
    }
    function categoriesMenu(data){
        const categoriesDropdown = document.querySelector('#categories')
        for (x of data){
            let newEl = document.createElement('li')
            newEl.setAttribute("class", "submenu-item")
            newEl.setAttribute("id", `category_${x.id}`)
            newEl.innerHTML=`<a href="#" class="submenu-link">${x.name}</a>`
            newEl.addEventListener('click', () => {
                 veiwcategory(x.id)
            })
            categoriesDropdown.appendChild(newEl)
            
        }
    }
    function veiwcategory(category){
        getBackendData(`categories/${category}`, console.log)
    }
    
    getCategoriesIndex()
    
}

function setupLogin(){
    const userNameShow = document.querySelector('#username')
    const navLoginInput = document.querySelector('#login-text')
    const navLoginLogout = document.querySelector('#login-logout')
    const savedMemesLink = document.querySelector("#saved-memes-link")
    navLoginLogout.addEventListener('click', () => {
        if (userNameShow.style.visibility==="hidden"){
            login()
        }
        else {
            logout()
        }
    })
    
    
    function login(){
        console.log('login')
        console.log(navLoginInput.value)
        postBackendData("users", JSON.stringify({"user": {"name": navLoginInput.value}}), renderUserData)
        navLoginLogout.innerHTML="Logout"
        userNameShow.innerHTML="Hello "+navLoginInput.value
        userNameShow.style.visibility="visible"
        navLoginInput.style.visibility="hidden"
        savedMemesLink.style.display = "block"
    }
     
    function logout(){
        console.log("logout")
        logoutReset()
        navLoginLogout.innerHTML="Login"
        userNameShow.style.visibility="hidden"
        navLoginInput.style.visibility="visible"
        savedMemesLink.style.display = "none"
    }
    
    function logoutReset(){
        clearCards()
        getCards()
    }
    
    function renderUserData(data){
        // add fetures for loged in users
        console.log(data)
    }
}