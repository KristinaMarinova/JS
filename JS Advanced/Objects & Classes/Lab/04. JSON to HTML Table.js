function fromJSONToHTMLTable(input){

    let arr = JSON.parse(input);
    let outputArr = ["<table>"];
    outputArr.push(makeKeyRow(arr));
     
    for (let index = 0; index < arr.length; index++) {
        outputArr.push(makeValueRow(arr[index]));       
    }

     outputArr.push("</table>"); 

    function makeKeyRow(arr) {

        let trKeyContent = ['   <tr>'];

        for (const key of Object.keys(arr[0])) {
            trKeyContent.push(`<th>${escapeHtml(key)}</th>`);
        }
        trKeyContent.push('</tr>');
        return trKeyContent.join('');
    }

    function makeValueRow(obj) { 
        let trValueContent = ['   <tr>'];

        for (const val of Object.values(obj)) {
            trValueContent.push(`<td>${escapeHtml(val)}</td>`);
        }
        trValueContent.push('</tr>');
        return trValueContent.join('');
    }

    function escapeHtml(value) {
        return value.toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');          
    };

    console.log(outputArr.join('\n'));
}