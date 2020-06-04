function sortedTickets(array, criterion){

    let tickets = [];

    class Ticket{
        constructor([destination, price, status]){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    array.forEach(element => {
        tickets.push(new Ticket(element.split('|')));
    });

   switch(criterion){
       case 'destination':  tickets.sort((a,b) => a['destination'].localeCompare(b['destination'])); break;
       case 'price':  tickets.sort((a,b) => a['price'] - b['price']); break;
       case 'status':  tickets.sort((a,b) => a['status'].localeCompare(b['status'])); break;
   }

   return tickets;
}

console.log(sortedTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
))