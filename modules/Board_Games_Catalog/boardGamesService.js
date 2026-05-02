const boardGamesService = {};

let boardGames = [];
let gameId = 1;

boardGamesService.getAllBoardGames = () => {
  return boardGames;
}

boardGamesService.getBoardGameById = (id) => {
    for (let game of boardGames) {
        if (game.id === id) {
            return game;
        }
    }
    return null;
}

boardGamesService.addBoardGame = (gameID,name,minplayers,maxplayers,duaration,dateAdd,currentStatus) => {
    const game = {
        id: gameId++,
        gameID,
        name,
        minplayers,
        maxplayers,
        duaration,
        dateAdd,
        currentStatus
    };
    boardGames.push(game);
    return game;
}

boardGamesService.updateBoardGame = (id, new_gameID,new_name,new_minplayers,new_maxplayers,new_duaration,new_dateAdd,new_currentStatus) => {
  for (let game of boardGames) {
    if (game.id === id) {
      game.gameID = new_gameID;
      game.name = new_name;
      game.minplayers = new_minplayers;
      game.maxplayers = new_maxplayers;
      game.duaration = new_duaration;
      game.dateAdd = new_dateAdd;
      game.currentStatus = new_currentStatus;
      return game;
    }
}
return null;
}

boardGamesService.deleteBoardGame = (id) => {
  for (let game of boardGames) {
    if (game.id === id) {
      boardGames.splice(boardGames.indexOf(game), 1);
      return true;
    }
}
return false;
}