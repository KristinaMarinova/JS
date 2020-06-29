class Article {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];

    }
    get likes (){

        if(this._likes.length === 0){
            return `${this.title} has 0 likes`;
        }

        if(this._likes.length === 1){
            return `${this._likes[0]} likes this article!`;
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`;
    }
    like (username){

        if(this._likes.some(x => x === username)){
           throw new Error("You can't like the same article twice!");
        }

        if(this.creator === username){
            throw new Error("You can't like your own articles!");
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }
    dislike(username) {
        if (!this._likes.some(x => x === username)) {
            throw new Error("You can't dislike this article!");
        }
        return `${username} disliked ${this.title}`;
    }
    comment(username, content, id) {
        let comment = this._comments.find(c => c.id === id);

        if (comment === undefined) { 
            let newComment = {
                id: this._comments.length + 1,
                username: username,
                content: content,
                replies: []
            }
            this._comments.push(newComment);
            return `${username} commented on ${this.title}`;
        }

        let reply = {
            id: `${comment.id}.${comment.replies.length + 1}`,
            username: username,
            content: content
        }
        comment.replies.push(reply);
        return "You replied successfully";

    }
    toString(sortingType){
        let result = [
            `Title: ${this.title}`,
            `Creator: ${this.creator}`,
            `Likes: ${this._likes.length}`,
            "Comments:"
        ];

        this.customSort(this._comments, sortingType)
            .forEach(element => {
                result.push(`-- ${element.id}. ${element.username}: ${element.content}`);

                this.customSort(element.replies, sortingType)
                .forEach(rep => {
                    result.push(`--- ${rep.id}. ${rep.username}: ${rep.content}`);
                });
            });

        return result.join("\n");
    }

    customSort(array, sortingType) {
        if (sortingType === 'asc') {
            return array.sort((a, b) => a.id - b.id);
        }
        if (sortingType === 'desc') {
            return array.sort((a, b) => b.id - a.id);
        } 
        if (sortingType === 'username') {
            return array.sort((a, b) => a.username.localeCompare(b.username));
        }
    }
}


let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));