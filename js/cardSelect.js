
// !userData.selected_posts.includes(card.id

function removeSelectToCards(){
    const postList = document.querySelector('#memes')
    function removeSelect(card){
        card.querySelector(".card__add").remove
    }
    for (card of postList.children){
        removeSelect(card)
    }
    
}
function addSelectToCards(userData){
    console.log('test1')
    const postList = document.querySelector('#memes')
    
    function userSelect(card, userId){
        postBackendData(`posts/${card.id}/add`, JSON.stringify({user_id: userId}), setSelected)
    }
    
    function setSelected(data){
        return 1
    }
    
    // function userUnSelect(){
    //     postBackendData(route, data, confirmFn)
    // }
    
    // function SelectEl(userId){
    //     newEl = document.createElement('span');
    //     newEl.innerHTML= `<>`
    //     newEl.addEventListener('click', (event) => {
    //         console.log('test1')
    //     })
    //     return newEl
    // }
    
    function removeSelect(card){
        card.querySelector(".card__add").remove
    }
    
    // function unSelectEL(userId){
    //     return `<>`
    // }
    for (card of postList.children){
        let newEl = document.createElement('div');
        if (true){
            newEl.setAttribute('class', "card__add")
            newEl.innerHTML= `
                     <div class="card__add__plus">
                     +
                     </div>`
            newEl.addEventListener('click', (event) => {
                userSelect(card, userData.id)
            })
        }
        // }else{
        //      newEl.innerHTML= `${card.id}`
        //      newEl.addEventListener('click', (event) => {
        //         console.log('test1')
                
        //     })
        // }
        card.querySelector('.card__thumb').prepend(newEl)

    }
}




