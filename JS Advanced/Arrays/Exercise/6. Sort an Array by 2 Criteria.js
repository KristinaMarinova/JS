function sortArr(array) {
    return array.sort((a, b) => {
        if (a.length === b.length) {
            return (a.toLowerCase()).localeCompare(b.toLowerCase());
        }
        return a.length - b.length;
    }).join('\n');
}
console.log(sortArr(['alpha', 'beta', 'gamma']));