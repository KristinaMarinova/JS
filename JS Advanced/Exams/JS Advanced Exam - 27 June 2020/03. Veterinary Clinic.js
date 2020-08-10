class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = Number(capacity);
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkLoad = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.currentWorkLoad == this.capacity) {
            throw new Error(`Sorry, we are not able to accept more patients!`);
        }

        this.clients.forEach(client => {
            client.pets.forEach(pet => {
                if (client.ownerName === ownerName && pet.petName == petName && pet.procedures.length > 0) {
                    throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${(pet.procedures).join(`, `)}.`);
                }
            })
        })

        kind = kind.toLowerCase();

        const doesClientExist = this.clients.find(c => c.ownerName == ownerName);
        const pet = {
            petName,
            kind,
            procedures
        };

        if (doesClientExist) {
            let doesPetExist = false;

            doesClientExist.pets.forEach(currenPet => {
                if (currenPet.petName == petName) {
                    doesPetExist = true;
                }
            })

            if (doesPetExist == false) {
                doesClientExist.pets.push(pet);
            }
        }
        else {
            const client = {
                ownerName,
                pets: [{
                    petName,
                    kind,
                    procedures
                }]
            }
            this.clients.push(client);
        }

        this.currentWorkLoad++;
        return `Welcome ${petName}!`;
    }

    onLeaving(ownerName, petName) {
        const client = this.clients.find(c => c.ownerName == ownerName);

        if (!client) {
            throw new Error(`Sorry, there is no such client!`);
        }

        const clientsPet = client.pets.find(p => p.petName == petName);
        const petsProcedures = clientsPet.procedures;

        if (!clientsPet || petsProcedures.length == 0) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        }

        petsProcedures.forEach(procedure => {
            this.totalProfit += 500;
        });

        this.currentWorkLoad--;
        clientsPet.procedures = [];

        return `Goodbye ${clientsPet.petName}. Stay safe!`;
    }

    toString() {
        const result = [];
        const howBusyIsClinicInPercent = Math.floor((this.currentWorkLoad / this.capacity) * 100);
        result.push(`${this.clinicName} is ${howBusyIsClinicInPercent}% busy today!`);
        result.push(`Total profit: ${(this.totalProfit).toFixed(2)}$`);


        this.clients = this.clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName));

        this.clients.forEach(client => {
            result.push(`${client.ownerName} with:`);

            client.pets = client.pets.sort((a, b) => a.petName.localeCompare(b.petName));
            client.pets.forEach(pet => {
                result.push(`---${pet.petName} - a ${pet.kind} that needs: ${pet.procedures.join(', ')}`);
            })
        })
        return result.join('\n');
    }
}

//let clinic = new VeterinaryClinic('SoftCare', 10);
//console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
//console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
//console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
//console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
//console.log(clinic.toString());
//clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
//console.log(clinic.toString());



