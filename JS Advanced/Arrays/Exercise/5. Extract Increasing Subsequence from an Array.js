function subsequence(array){
    let max = Number.MIN_SAFE_INTEGER;
    array.forEach(element =>{
        if(element >= max){
            max = element;
            console.log(max);
        }
    });
}