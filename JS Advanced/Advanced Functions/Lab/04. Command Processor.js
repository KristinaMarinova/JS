function solution() {
    this.text = '';
    function append(appendText) {
        this.text += appendText
    }
    function removeStart(n) {
        this.text = this.text.substring(n)
    }
    function removeEnd(n) {
        this.text = this.text.substring(0, this.text.length - n)
    }
    function print() {
        console.log(this.text)
    }
    return {
        text,
        append,
        removeStart,
        removeEnd,
        print
    }
}

// let firstZeroTest = solution();

// firstZeroTest.append('hello');
// firstZeroTest.append('again');
// firstZeroTest.removeStart(3);
// firstZeroTest.removeEnd(4);
// console.log(firstZeroTest.print());

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();