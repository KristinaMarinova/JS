class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer({ firstName, lastName, personalId }) {
        if (this.allCustomers.some(c => c.personalId === personalId)) {
            throw new Error(`${firstName} ${lastName} is already our customer!`);
        }

        this.allCustomers.push({
            firstName,
            lastName,
            personalId,
            totalMoney: 0,
            transactions: []
        });

        return { firstName, lastName, personalId };
    }

    depositMoney(personalId, amount) {
        const customer = this.allCustomers.find(c => c.personalId === personalId);

        if (customer === undefined) {
            throw new Error(`We have no customer with this ID!`);
        }

        customer.totalMoney += amount;
        customer.transactions.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);

        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        const customer = this.allCustomers.find(c => c.personalId === personalId);

        if (customer === undefined) {
            throw new Error(`We have no customer with this ID!`);
        }

        if (customer.totalMoney < amount) {
            throw new Error(`${custmoer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }

        customer.totalMoney -= amount;
        customer.transactions.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);

        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {
        const customer = this.allCustomers.find(c => c.personalId === personalId);

        if (customer === undefined) {
            throw new Error(`We have no customer with this ID!`);
        }

        let result = `Bank name: ${this._bankName}\nCustomer name: ${customer.firstName} ${customer.lastName}\nCustomer ID: ${customer.personalId}\nTotal Money: ${customer.totalMoney}$\n`;
        let transactions = [];

       for (let i = customer.transactions.length - 1; i >= 0; i--) {
            transactions.push(`${i + 1}. ` + customer.transactions[i]);
        }

        result += transactions.join('\n');

        return result.trim();
    }

}