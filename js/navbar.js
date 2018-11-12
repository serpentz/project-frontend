function getNavbar(){
    const userUrl = ""
    const catagoriesUrl = ""

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
        navLoginLogout.innerHTML="Logout"
        userNameShow.innerHTML="Hello "+navLoginInput.value
        userNameShow.style.visibility="visible"
        navLoginInput.style.visibility="hidden"
    }
     
    function logout(){
        console.log("logout")
        navLoginLogout.innerHTML="Login"
        userNameShow.style.visibility="hidden"
        navLoginInput.style.visibility="visible"
    }
     
    function veiwSavedMemes(){
    }
    
    function veiwCatagory(catagory){
    }
     
     
}
