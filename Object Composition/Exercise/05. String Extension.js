(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        let start = this.substring(0, str.length); // vzemi dumata
        if (start !== str) { //ako q nqma dobavi q
            return str + this; // hi kum tekushtoto izrechenie
        }
        return this.toString(); // ?
    };
    String.prototype.ensureEnd = function (str) {
        let end = this.substring(this.length - str.length); // krisi(5) - ei(2) = (3)
        if (end !== str) {
            return this + str;
        }
        return this.toString();
    };
    String.prototype.isEmpty = function () {
        if (this.length > 0) {
            return false;
        }
        return true;
    };
    String.prototype.truncate = function (n) {
        let stringLength = this.length;

        if (n < 4) {
            return '.'.repeat(n);
        }
        if (stringLength > n) { //split po speis i zamesti s tochki ako cqlata dyljina <= n
            if (this.indexOf(' ') !== -1) { // ako ima speisove
                let arr = this.split(' ');
                let res = [];

                for (let i = 0; i < arr.length; i++) {
                    const element = arr[i];
                    let resLength = res.reduce((a, b) => a + b.length, 0);
                    if ((resLength + element.length) <= n - i - 3) {
                        res.push(element);
                    }
                }
                let stringText = res.join(' ');
                return stringText.substring(0, stringText.length) + '...';
            } else {
                return this.substring(0, n - 3) + '...';
            }
        } else { // vurni syshtiq ako str < n
            return this.toString();
        }
    };
    String.format = function (text, ...params) {
        let arr = [...params];
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            let replaceValue = `{${i}}`;
            text = text.replace(replaceValue, element);
        }
        return text;
    };
}
)()