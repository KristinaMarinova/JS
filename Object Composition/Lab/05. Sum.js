function solve(){
    let obj = (() => {
        let firstSelector;
        let secondSelector;
        let resultSelector;

        let init = function(selector1, selector2, resSelector) {
            firstSelector = $(selector1);
            secondSelector = $(selector2);
            resultSelector = $(resSelector);
        }

        let add = function () {
            let result = Number(firstSelector.val()) + Number(secondSelector.val());
            resultSelector.val(result);
        }

        let subtract = function () {
            let result = Number(firstSelector.val()) - Number(secondSelector.val());
            resultSelector.val(result);
        }

        return { init, add, subtract };
    })();

    return obj;
}