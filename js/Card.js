class Post {

	constructor(data){
		this.picture = data["picture"]
		this.title = data['title'].substring(0,125) + ".."
		this.id = data['id']

	}
	
	render(){
		return`
		      <header class="card__thumb">
		          <img src="${this.picture}">
		      </header>
		      <div class="card__body">
		        <div class="card__category">Category</div>
		        <div class="card__user">User</div>
		        <h2 class="card__title">${this.title}</h2>
		      </div>
		      <br>
		      <footer class="card__footer">
		        <span class="icon icon--time"></span>6 min
		        <span class="icon icon--comment"></span>0 comments
		      </footer>
		`
	}
}

