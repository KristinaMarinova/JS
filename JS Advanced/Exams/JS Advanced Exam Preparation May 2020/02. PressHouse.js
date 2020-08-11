function pressHouse() {
    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            const result = [
                `Title: ${this.title}`,
                `Content: ${this.content}`
            ];
            return result.join('\n');
        }

    }

    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            if (content.length >= 150) {
                throw new Error('Short reports content should be less then 150 symbols.');
            }
            super(title, content);
            this.originalResearch = originalResearch;
            this.comments = [];
        }

        get originalResearch() {
            return this._originalResearch;
        }

        set originalResearch(value) {
            if (!value.title || !value.author) {
                throw new Error('The original research should have author and title.');
            }
            this._originalResearch = value;
        }

        addComment(comment) {
            this.comments.push(this.content);
            return 'The comment is added.';
        }

        toString() {
            const result = [
                super.toString(),
                `Original Research: ${this.originalResearch.title} by ${this.originalResearch.author}`
            ];

            if (this.comments.length > 0) {
                result.push('Comments:');
                this.comments.forEach(c => result.push(c));
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
                throw new Error('This client has already ordered this review.');
            }
            this.clients.push({
                clientName,
                orderDescription
            });

            return `${clientName} has ordered a review for ${this.book.name}`;
        }

        toString() {
            const result = [
                super.toString(),
                `Book: ${this.book.name}`
            ];

            if (this.clients.length > 0) {
                result.push(`Orders:`);
                this.clients.forEach(c => result.push(`${c.clientName} - ${c.orderDescription}`));
            }


            return result.join('\n');
        }
    }

    return {
        Article,
        ShortReports,
        BookReview
    };
}
