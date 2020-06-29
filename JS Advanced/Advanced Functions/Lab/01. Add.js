function solution(number) { 
    this.sum = number; 

    return function (number) { 
        return this.sum + number; 
    }
}