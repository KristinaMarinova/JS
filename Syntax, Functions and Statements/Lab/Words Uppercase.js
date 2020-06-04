function upperCase(text) {
    let patternWord = /\w+/g;
    let result = text.match(patternWord).map(x => x.toUpperCase());
    console.log(result.join(', '));
}
upperCase('Hi, how are you?')