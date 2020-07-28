const PaymentPackage = require("./solution.js");

let expect = require("chai").expect;
let assert = require("chai").assert;

describe("PaymentPackage", function(){
    describe("Instantiation", function(){
        it("should create instanve with correct parameters", function(){
            expect(() => new PaymentPackage("name", 100)).to.not.throw();
        });
        it("should throw error with non-string name parameter", function(){
            expect(() => new PaymentPackage(5, 100)).to.throw("Name must be a non-empty string");
        });
        it("should throw error with empty string name parameter", function(){
            expect(() => new PaymentPackage("", 100)).to.throw("Name must be a non-empty string");
        });
        it("should return correct result with string name parameter", function(){
            let instance = new PaymentPackage("name", 100);
            instance.name = "newName";
            assert.equal(instance.name, "newName" ); 
        });
        it("should throw error with non-number value parameter", function(){
            expect(() => new PaymentPackage("name", "aaa")).to.throw("Value must be a non-negative number");
        });
        it("should throw error with negative number value parameter", function(){
            expect(() => new PaymentPackage("name", -10)).to.throw("Value must be a non-negative number");
        });
        it("should return correct result with number value parameter", function(){
            let instance = new PaymentPackage("name", 100);
            instance.value = 200;
            assert.equal(instance.value, 200 ); 

        });
        it("should throw error when set string VAT", function(){
            let instance = new PaymentPackage("name", 100);
            expect(() => (instance.VAT = "aaa")).to.throw("VAT must be a non-negative number");
        });
        it("should throw error when set negative VAT", function(){
            let instance = new PaymentPackage("name", 100);
            expect(() => (instance.VAT = -10)).to.throw("VAT must be a non-negative number");
        });
        it("should return correct result with number VAT", function(){
            let instance = new PaymentPackage("name", 100);
            instance.VAT = 30;
            assert.equal(instance.VAT, 30 ); 

        });
        it("should throw error when set non-boolean active", function(){
            let instance = new PaymentPackage("name", 100);
            expect(() => (instance.active = -10)).to.throw("Active status must be a boolean");
        });
        it("should return correct result with boolean active", function(){
            let instance = new PaymentPackage("name", 100);
            instance.active = false;
            assert.equal(instance.active, false ); 
        });

        it("It should have initialized toString method", function() {
            let instance = new PaymentPackage("name", 100);
            expect(Object.getPrototypeOf(instance).hasOwnProperty('toString')).to.be.equal(true);
        });

        it("It should set correct properties", function() {
            let instance = new PaymentPackage("name", 100);

            assert.equal(instance.name, "name" );   
            assert.equal(instance.value, 100 ); 
            assert.equal(instance.active, true );  
            assert.equal(instance.VAT, 20 );      
        });
    });

    describe("toString", function(){
        let instance = null;

        beforeEach(() => {
            instance = new PaymentPackage("name", 100);
        });

        it("should contains the name", function(){
            expect(instance.toString()).to.contains("name");
        });
        it("should contains value without Vat", function(){
            expect(instance.toString()).to.contains("100");
        });
        it("should contains value with Vat", function(){
            expect(instance.toString()).to.contains("120");
        });
        it("should return correct result", function(){
            instance.value = 0;
            instance.VAT = 0;
            expect(instance.toString()).to.equal('Package: name\n- Value (excl. VAT): 0\n- Value (VAT 0%): 0');
        });
    });
})