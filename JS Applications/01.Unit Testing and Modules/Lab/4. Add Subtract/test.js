let createCalculator = require("./addSubtract.js");
let expect = require("chai").expect;
let assert = require("chai").assert;

describe("createCalculator", function(){
    let instance = null;
    beforeEach(function () {
        instance = new createCalculator();
    });
        
    it("should return correct result with number param", function(){
        instance.add(5);
        let actual = instance.get();
        expect(actual).to.be.equal(5);
    })
    it("should return correct result with number param", function(){
        instance.subtract(5);
        let actual = instance.get();
        expect(actual).to.be.equal(-5);
    })

    it("should return correct result with number param as string", function(){
        instance.add("5");
        let actual = instance.get();
        expect(actual).to.be.equal(5);
    })
    it("should return correct result with number param as string", function(){
        instance.subtract("5");
        let actual = instance.get();
        expect(actual).to.be.equal(-5);
    })

    it("should return number with number param", function(){
        instance.subtract(10);
        let actual = instance.get();
        expect(typeof actual).to.be.equal("number");
    })
    
    it("should return NaN with non-number param", function(){
        instance.subtract("aaa");
        assert.equal(isNaN(instance.get()), true);
    })
    it("should return NaN with non-number param", function(){
        instance.add("aaa");
        assert.equal(isNaN(instance.get()), true);
    })
})