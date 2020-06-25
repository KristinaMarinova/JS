function pressHouse() {
    class Article {
        constructor(title, content) {
            this.title = title,
                this.content = content
        }
        toString() {
            let result = [
                `Title: ${this.title}`,
                `Content: ${this.content}`,
            ]
            return result.join('\n');
        }
    }
    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            super(title, content);
            this.comments = [];
            this.originalResearch = originalResearch
        }

        get content() {
            return this._content;
        }
        set content(value) {
            if (value.length >= 150) {
                throw new Error('Short reports content should be less then 150 symbols.');
            }
            this._content = value;
        }
        get originalResearch() {
            return this._originalResearch;
        }
        set originalResearch(value) {
            if (!value.hasOwnProperty("title") || !value.hasOwnProperty("author")) {
                throw new Error("The original research should have author and title.");
            }
            this._originalResearch = value;
        }
        addComment(comment) {
            this.comments.push(comment);
            return 'The comment is added.';
        }
        toString() {
            let result = [
                `Title: ${this.title}`,
                `Content: ${this.content}`,
                `Original Research: ${this.originalResearch.title} by ${this.originalResearch.author}`
            ]
            if (this.comments.length > 0) {
                result.push('Comments:');

                this.comments.forEach(element => {
                    result.push(element);
                });
            }
            return result.join('\n');
        }

    }
    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content);
            this.book = book;
            this.clients = [];
        }
        addClient(clientName, orderDescription) {
            if (this.clients.some(c => c.clientName === clientName && c.orderDescription === orderDescription)) {
                throw new Error("This client has already ordered this review.");

            }
            this.clients.push({
                clientName: clientName,
                orderDescription: orderDescription
            })
            return `${clientName} has ordered a review for ${this.book.name}`;
        }
        toString() {
            let result = [
                `Title: ${this.title}`,
                `Content: ${this.content}`,
                `Book: ${this.book.name}`
            ]

            if (this.clients.length > 0) {
                result.push("Orders:");

                this.clients.forEach(element => {
                    result.push(`${element.clientName} - ${element.orderDescription}`);
                });
            }
            return result.join("\n");
        }
    }
    return {
        Article,
        ShortReports,
        BookReview
    }
}