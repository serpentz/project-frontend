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

    function getCategoriesIndex(){
        getBackendData("catagories", catagoriesMenu)
    }
    function catagoriesMenu(data){
        
    }
    
    function getCategoryMemes(catagory){
        
    }
    
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
    

    // const navCatagories= document.querySelector('#categories')
    // navSavedMemes.addEventListener('click', () => {
    //     veiwSavedMemes()
    // })
    
    // login
    
    
     
    function veiwSavedMemes(){
    }
    
    function veiwCatagory(catagory){
    }
    setupLogin()
}









function setupCategories(){
    
}


function setupLogin(){
    const userNameShow = document.querySelector('#username')
    const navLoginInput = document.querySelector('#login-text')
    const navLoginLogout = document.querySelector('#login-logout')
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
    }
     
    function logout(){
        console.log("logout")
        logoutReset()
        navLoginLogout.innerHTML="Login"
        userNameShow.style.visibility="hidden"
        navLoginInput.style.visibility="visible"
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