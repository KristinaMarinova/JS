class Library {
    constructor(libraryName){
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
         normal: libraryName.length, 
         special: libraryName.length * 2, 
         vip: Number.MAX_SAFE_INTEGER
        }
    }
 
    subscribe(name, type){
        if(!this.subscriptionTypes.hasOwnProperty(type)){
             throw new Error(`The type ${type} is invalid`);
        }
 
        let subscriber = this.subscribers.find(s => s.name === name);
 
        if(subscriber === undefined){
            subscriber = {
                 name: name,
                 type: type,
                 books: []           
            };
 
            this.subscribers.push(subscriber);
        }
 
        subscriber.type = type;
        return subscriber;
    }
 
     unsubscribe(name){
         let subscriber = this.subscribers.find(s => s.name === name);
 
         if(subscriber === undefined){
             throw new Error(`There is no such subscriber as ${name}`);
         }
 
         this.subscribers = this.subscribers.filter(s => s.name !== name);
 
         return this.subscribers;
     }
 
     receiveBook(subscriberName, bookTitle, bookAuthor){
         let subscriber = this.subscribers.find(s => s.name === subscriberName);
 
         if(subscriber === undefined){
             throw new Error(`There is no such subscriber as ${subscriberName}`);
         }
 
         if(subscriber.books.length === this.subscriptionTypes[subscriber.type]){
             throw new Error(`You have reached your subscription limit ${this.subscriptionTypes[subscriber.type]}!`);
         }
 
         subscriber.books.push({
             title: bookTitle, 
             author: bookAuthor
         });
 
         return subscriber;
     }
 
     showInfo (){
 
         if(this.subscribers.length === 0){
             return `${this.libraryName} has no information about any subscribers`;
         }
 
         let result = [];
 
         this.subscribers.forEach(sub => {
             result.push(`Subscriber: ${sub.name}, Type: ${sub.type}`)
             let books = sub.books.map(x => `${x.title} by ${x.author}`);
             result.push("Received books: " + books.join(", "));
         });
 
         return result.join("\n") + "\n";
     }
 }
 
 let lib = new Library('Lib');
 
 lib.subscribe('Peter', 'normal');
 lib.subscribe('John', 'special');
 
 //lib.unsubscribe('John');
 
 lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
 lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
 lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');
 
 console.log(lib.showInfo());