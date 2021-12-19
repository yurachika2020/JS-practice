const team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 21
        }
    ],
    _games: [
        {
            opponent: 'Dragons',
            teamPoints: 105,
            opponentPoints: 97
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        this.games.push(game);
    }
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Giants', '80', '75');
team.addGame('Bears', '89', '65');
team.addGame('Carps', '80', '72');

console.log(team.games);
