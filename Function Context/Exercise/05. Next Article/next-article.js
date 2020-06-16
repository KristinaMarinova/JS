function getArticleGenerator(articles) {
    let container = document.getElementById("content");
    let count = Array.from(container.children).length;

    return function(){
        if(articles.length > 0){
            let content = articles.shift();
            let newArticle = document.createElement("article");
            container.appendChild(newArticle);
            document.getElementById("content").lastChild.textContent = content;
        }
    }   
}