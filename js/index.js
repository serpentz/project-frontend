 document.addEventListener("DOMContentLoaded" , () => {
 
startLoadingBar()
    getCards()

    getNavbar()
    dropDown()

  
 })

 function stopLoadingBar(){
  document.querySelector(".spinner__container").style.display = "none"
 }
 function startLoadingBar(){
  document.querySelector(".spinner__container").style.display = "block"
 }

 function dropDown(){
  [].slice.call(document.querySelectorAll('.dropdown .nav-link')).forEach(function(el){
    el.addEventListener('click', onClick, false);
});

function onClick(e){
    e.preventDefault();
    var el = this.parentNode;
    el.classList.contains('show-submenu') ? hideSubMenu(el) : showSubMenu(el);
}

function showSubMenu(el){
    el.classList.add('show-submenu');
    document.addEventListener('click', function onDocClick(e){
        e.preventDefault();
        if(el.contains(e.target)){
            return;
        }
        document.removeEventListener('click', onDocClick);
        hideSubMenu(el);
    });
}

function hideSubMenu(el){
    el.classList.remove('show-submenu');
}
 }
var c = 0;

 function getCards(){
    console.log('done 2')
  //fetch
  //data => render(data)

  getBackendData("posts", render)

 }

 function getList(){
  return document.querySelector("#memes")
 }

 function render(backendData){
     console.log(backendData)
   console.log('done 3')
  let list = getList()
  let posts = getPostObjects(backendData)

    for( let x = 0 ; x < posts.length ; x++){
      // console.log(posts[x])
      let div = document.createElement("article")
      div.className = "card"
      div.setAttribute("id", posts[x].id)
      div.innerHTML = posts[x].render()

      list.appendChild(div)
    }
    stopLoadingBar()
    //getPostObjects()

 }

 function getPostObjects(backendData){

  // debugger
  let objArray = []
  let array = backendData

    for (let post in array){
        // debugger
      let title = array[post].text
      let picture = array[post].url
      let id = array[post].id
      let postData = {title: title, picture: picture, id: id}
      objArray.push(new Post(postData))
    }

    return objArray
 }  
  
  function clearCards(){
    getList.innerHTML=""
}
