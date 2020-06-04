class List{

    constructor(){
        this.array = [];
        this.size = 0;
    }

   
    add(element) {
        this.array.push(element);
        this.array.sort((a, b) => a - b);
        this.size++;
    }

    remove(position) {
        if(position <= this.size - 1 && position >= 0){
            this.array.splice(position, 1);
            this.size--;
        }       
    }

    get(position) {
       if(position <= this.size - 1 && position >= 0){
            return this.array[position];
       }
    }
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(-1));
console.log(list.size);