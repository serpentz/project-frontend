 document.addEventListener("DOMContentLoaded" , () => {
  console.log('done 1')
    getCards()
    getNavbar()
    dropDown()

  
 })

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

  render(null)

 }

 function getList(){
  return document.querySelector("#memes")
 }

 function render(data){
   console.log('done 3')
  let list = getList()
  let posts = getPostObjects()

    for( let x = 0 ; x < posts.length ; x++){
      // console.log(posts[x])
      let div = document.createElement("article")
      div.className = "card"
      div.setAttribute("id", posts[x].id)
      div.innerHTML = posts[x].render()

      list.appendChild(div)
    }
    //getPostObjects()

 }

 function getPostObjects(){

  // debugger
   let objArray = []
  let array = data['data']['children']

    for (let post in array){
      let title = array[post]['data']['title']
      let picture = array[post]['data']['url']
      let id = array[post]['data']['id']
      let postData = {title: title, picture: picture, id: id}
      objArray.push(new Post(postData))
    }

    return objArray
 }

 
 function getPostsImageArray(){
    return ["https://i.ytimg.com/vi/a8c5wmeOL9o/maxresdefault.jpg",
            "https://i.imgur.com/hXLIfXU.jpg",
            "https://i.redd.it/yrun0mfr94u01.jpg",
            "https://preview.redd.it/egewwisbnix11.jpg?width=640&crop=smart&auto=webp&s=20cd33f298eaaf477122eb222156b250f5b315ad"
            ]
 }









  // <div id='card'>
  //       <div id='identicon'>
  //         <h1>Title</h1>
  //       </div>

  //       <!-- <form id='identicon-form'>
  //         <div class='field'>
  //           <input type='text' placeholder='Add Comment'/>
  //           <input type='submit' class='btn' value="Generate" />
  //         </div>
  //       </form> -->

  //     </div>
  
  
  
  
  