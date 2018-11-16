

// !userData.selected_posts.includes(card.id

function removeSelectToCards(){
    console.log('remove')
    const postList = document.querySelector('#memes')
    // debugger
    for (card of postList.children){
        // console.log(card)
        card.querySelector(".card__add").remove()
    }
    
}
function addSelectToCards(userData){
    // debugger
    console.log('test1')
    const postList = document.querySelector('#memes')
    
    function userSelect(card, userId){
        console.log('plus')
        removeSelect(card)
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
        if (!userData['selected'].includes(parseInt(card.id))){
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
