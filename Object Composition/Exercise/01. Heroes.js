function solve() {

    this.mage = function createMage(input) {
        let objMage = {
            name: input,
            health: 100,
            mana: 100,
            cast: function (spell) {
                this.mana--;
                console.log(`${this.name} cast ${spell}`);
            }
        }
        return objMage;
    }

    this.fighter = function createFighter(name) {
        let objFighter = {
            name: name,
            health: 100,
            stamina: 100,
            fight: function () {
                this.stamina--;
                console.log(`${this.name} slashes at the foe!`);
            }
        }
        return objFighter;
    }
    return {
        mage,
        fighter,
    }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);