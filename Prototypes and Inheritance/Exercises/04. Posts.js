function solve(){
    class Post{
        constructor(title, content){
            this.title = title,
            this.content = content
        }

        toString() {
            let result = [`Post: ${this.title}`, `Content: ${this.content}`];
            return result.join("\n");
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(comment){
            this.comments.push(comment);
        }

        toString(){
            let result = [
                `Post: ${this.title}`,
                `Content: ${this.content}`,
                `Rating: ${this.likes - this.dislikes}`
            ]

            if(this.comments.length > 0){
                result.push("Comments:");

                this.comments.forEach(element => {
                   result.push(` * ${element}`);
                });
            }

            return result.join("\n");
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content);
            this.views = Number(views);
        }

        view() {
            this.views++;
            return this;
        }

        toString(){
            let result = [
                `Post: ${this.title}`,
                `Content: ${this.content}`,
                `Views: ${this.views}`,               
            ];

            return result.join("\n");
        }
    }

    return {Post, SocialMediaPost, BlogPost }
}

let classes = solve();

let test = new classes.SocialMediaPost("TestTitle", "TestContent", 5, 10);

test.addComment("1");
test.addComment("2");
test.addComment("3");

console.log(test.toString());

// expect(test.toString()).to.be.equal(
//   "Post: TestTitle\n" +
//   "Content: TestContent\n" +
//   "Rating: -5\n" +
//   "Comments:\n" +
//   " * 1\n" +
//   " * 2\n" +
//   " * 3",
//   "'SocialMediaPost toString()' function does not return correct results");