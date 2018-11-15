class Post {

	constructor(data){
		this.picture = data["picture"]
		this.title = data['title'].length > 125 ?  data['title'].substring(0,125) + ".." : data['title']
		this.id = data['id']
		this.timestamp = new Date(data['created_at']).toDateString().split(" ").slice(0, -1).join(" ")
	}

	render(){
		return`
		      <header class="card__thumb">
		          <img src="${this.picture}">
		      </header>
		      <div class="card__body">
		        <div class="card__category">User</div>
		        <h2 class="card__title">${this.title}</h2>
		      </div>
		      <br>
		      <footer class="card__footer">
		        <span class="icon icon--time"></span>${this.timestamp}
		        <span class="icon icon--comment"></span>0 comments
		      </footer>
		`
	}
}

