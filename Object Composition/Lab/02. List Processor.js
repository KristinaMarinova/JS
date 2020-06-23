function listProcessor(array) {
    let collection = [];

    array.forEach(element => {
        [command, text] = element.split(' ');
        if (command === 'add') {
            collection.push(text);
        }
        else if (command === 'remove') {
            collection = collection.filter(x => x !== text);
        }
        else if (command === 'print') {
            console.log(collection.join(','));
        }
    });
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);