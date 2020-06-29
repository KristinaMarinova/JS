function elements(array){
    let count = 1 ; 
    const result = [];
    for (const command of array) {
        if (command === 'add') {
         result.push(count);   
        }
        else{
            result.pop();
        }
        count++;
    }

    if (result.length === 0) {
        console.log('Empty');
    }
    else{
        console.log(result.join('\n'));
    }
}
elements(['add', 'add', 'add'])