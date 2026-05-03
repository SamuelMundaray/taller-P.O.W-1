const boardGamesService = {};

let boardGames = [];
let gameId = 1;

boardGamesService.getAllBoardGames = () => {
  return boardGames;
}

boardGamesService.getBoardGameById = (id) => {
    const targetId = Number(id);
    for (let game of boardGames) {
        if (game.id === targetId) {
            return game;
        }
    }
    return null;
}

boardGamesService.addBoardGame = (name,minplayers,maxplayers,duration,dateAdd,currentStatus) => {
    const game = {
        id: gameId,
        name,
        minplayers,
        maxplayers,
        duration,
        dateAdd,
        currentStatus
    };
    gameId++;
    boardGames.push(game);
    return game;
}

boardGamesService.updateBoardGame = (id, name, minplayers, maxplayers, duration, dateAdd, currentStatus) => {
  const index = boardGames.findIndex(game => game.id == id);

  if (index !== -1) {
    const nuevosDatos = { name, minplayers, maxplayers, duration, dateAdd, currentStatus };

    Object.keys(nuevosDatos).forEach(key => nuevosDatos[key] === undefined && delete nuevosDatos[key]);

    boardGames[index] = { 
      ...boardGames[index], 
      ...nuevosDatos 
    };

    return boardGames[index];
  }
  return null;
};



boardGamesService.deleteBoardGame = (id) => {
  const targetId = Number(id);
  for (let game of boardGames) {
    if (game.id === targetId) {
      boardGames.splice(boardGames.indexOf(game), 1);
      return true;
    }
}
return false;
}

export default boardGamesService;