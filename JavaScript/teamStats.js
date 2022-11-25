function teamStats() {
    const team = {
        _players: [{
            firstName: "Abby",
            lastName: "A",
            age: 11
        }, {
            firstName: "Britney",
            lastName: "B",
            age: 22
        }, {
            firstName: "Chloe",
            lastName: "C",
            age: 33
        }],
        _games: [{
            opponent: "Game 1",
            teamPoints: 1,
            opponentPoints: 1
        }, {
            opponent: "Game 2",
            teamPoints: 2,
            opponentPoints: 2
        }, {
            opponent: "Game 3",
            teamPoints: 3,
            opponentPoints: 3
        }],
        get players() {
            return this._players
        },
        get games() {
            return this._games
        },
        addPlayer(newFirstName, newLastName, newAge) {
            const player = {
                firstName: newFirstName,
                lastName: newLastName,
                age: newAge
            }

            this._players.push(player)
        },
        addGame(newOpponent, newTeamPoints, newOpponentPoints) {
            const game = {
                opponent: newOpponent,
                teamPoints: newTeamPoints,
                opponentPoints: newOpponentPoints
            }
            
            this._games.push(game)
        }
    }

    team.addPlayer("Danielle", "D", 44) // adds new player
    team.addGame("Game 4", 4, 4) // adds new game
    console.log("team: \n players:", team._players, "\n games:", team._games)
}

teamStats()

/*
Prints:

team: 
 players: [
  { firstName: 'Abby', lastName: 'A', age: 11 },
  { firstName: 'Britney', lastName: 'B', age: 22 },
  { firstName: 'Chloe', lastName: 'C', age: 33 },
  { firstName: 'Danielle', lastName: 'D', age: 44 }
] 
 games: [
  { opponent: 'Game 1', teamPoints: 1, opponentPoints: 1 },
  { opponent: 'Game 2', teamPoints: 2, opponentPoints: 2 },
  { opponent: 'Game 3', teamPoints: 3, opponentPoints: 3 },
  { opponent: 'Game 4', teamPoints: 4, opponentPoints: 4 }
]

*/