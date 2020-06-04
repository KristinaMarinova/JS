function game(turns) {
    const field = [[], [], []];
    for (const row of field) {
        for (let index = 0; index < 3; index++) {
            row.push(false);
        }
    }
    let player = 'X';
    for (const turn of turns) {

        let [row, col] = turn.split(' ');
        row = Number(row);
        col = Number(col);
        if (field[row][col] === false) {
            field[row][col] = player;
        }
        else {
            console.log('This place is already taken. Please choose another!');
            continue;
        }


        if (checkRows(field) || checkCols(field) || checkDiag(field) || checkSecDiag(field)) {
            console.log(`Player ${player} wins!`);
            for (const row of field) {
                console.log(row.join('\t'));
            }
            break;
        }
        if (fieldFull(field)) {
            console.log('The game ended! Nobody wins :(');
            for (const row of field) {
                console.log(row.join('\t'));
            }
            break;
        }

        if (player === 'X') {
            player = 'O';
        }
        else {
            player = 'X';
        }
    }

    function checkRows(field) {
        let breaked = false;
        for (const row of field) {
            let value = row[0];
            let check = true;
            row.forEach(element => {
                if (element !== value || value === false) {
                    check = false;
                }
            });
            if (check !== false) {
                breaked = true;
                break;
            }
        }
        if (breaked) {
            return true;
        }
        return false;
    }

    function checkCols(field) {
        let getCol = col => field.map(row => row[col]);
        for (let col = 0; col < field[0].length; col++) {
            let value = getCol(col)[0];
            let check = true;
            getCol(col).forEach(element => {
                if (element !== value || value === false) {
                    check = false;
                }
            });
            if (check) {
                return true;
            }
        }
        return false;
    }

    function checkDiag(field) {
        let value = field[0][0];
        for (let row = 0; row < field.length; row++) {
            if (field[row][row] !== value || value === false) {
                return false;
            }
        }
        return true;
    }

    function checkSecDiag(field) {
        let value = field[0][field[0].length - 1];
        let check = true;
        for (let row = 0; row < field[0].length; row++) {
            if (field[row][field[0].length - row -1] !== value || value === false) {
                return false;
            }
        }
            return true;
    }

    function fieldFull(field) {
        for (const row of field) {
            let check = true;
            row.forEach(element => {
                if (element === false) {
                    check = false;
                }
            });
            if (check === false) {
                return false;
            }
        }
        return true;
    }
}