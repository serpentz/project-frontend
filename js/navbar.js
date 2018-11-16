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
    
    
    function veiwcategory(category){
    }
    setupLogin()
    setupCategories()
    loadSelectedMemes()
}

function loadSelectedMemes(){
    
    
    function loadUserSelected(userId){
        getBackendData(`users/${userId}`, veiwUserSelected)
    }
    function veiwUserSelected(data){
        // debugger
        const postList = document.querySelector('#memes')
        for (card of postList.children){
            if (!data['selected'].includes(parseInt(card.id))){
                card.style.display="none"
            }
        }
        // clearCards()
        // render(data[selected_posts])
    }
    document.querySelector('#selected_posts').addEventListener('click', (event) => {
                if (document.querySelector('.username').id){
                    loadUserSelected(document.querySelector('.username').id)
                }
            })
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
            newEl.addEventListener('click', (event) => {
                console.log('test1')
                 loadCategory(event.toElement.parentElement.id)
            })
            categoriesDropdown.appendChild(newEl)
            
        }
    }
    function loadCategory(category){
        getBackendData(`categories/${category.split("_")[1]}`, console.log)
    }
    function veiwCategoryPosts(data){
        clearCards()
        render(data)
    }
    
    getCategoriesIndex()
    
}

function setupLogin(){
    const userNameShow = document.querySelector('.username')
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
        // console.log(navLoginInput.value)
        postBackendData("users", JSON.stringify({"user": {"name": navLoginInput.value}}), renderUserData)
        navLoginLogout.innerHTML="Logout"
        userNameShow.innerHTML="Hello "+navLoginInput.value
        userNameShow.style.visibility="visible"
        navLoginInput.style.visibility="hidden"
        removeSelectToCards()
        //addSelectToCards({id:userNameShow.id})
    }
     
    function logout(){
        console.log("logout")
        logoutReset()
        navLoginLogout.innerHTML="Login"
        userNameShow.style.visibility="hidden"
        navLoginInput.style.visibility="visible"
        userNameShow.setAttribute("id",null)
        
    }
    
    function logoutReset(){
        clearCards()
        getCards()
    }
    
    function renderUserData(data){
        // add fetures for loged in users
        userNameShow.setAttribute("id",data.id)
        addSelectToCards(data)
        
        // console.log(data)
    }
}