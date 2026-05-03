import bgservice from "./boardGamesService.js";

const boardGamesController = {};

boardGamesController.getAllBoardGames = (req, res) => {
  const IDgame = req.params.IDgame;
  const games = bgservice.getAllBoardGames();

  res.status(200).send({games: games});
}

boardGamesController.getBoardGameById = (req, res) => {
  const IDgame = req.params.IDgame;
  const game = bgservice.getBoardGameById(IDgame);

  if (game) {
    res.status(200).send({game: game});
  } else {
    res.status(404).send({error: "Game not found"});
  }
};

boardGamesController.addBoardGame = (req, res) => {
  const {name,minplayers,maxplayers,duration,dateAdd,currentStatus} = req.body;
  const game = bgservice.addBoardGame(name,minplayers,maxplayers,duaration,dateAdd,currentStatus);
  res.status(201).send({game: game});
}

boardGamesController.updateBoardGame = (req, res) => {
  const IDgame = req.params.IDgame;
  const {new_gameID,new_name,new_minplayers,new_maxplayers,new_duration,new_dateAdd,new_currentStatus} = req.body;
  const game = bgservice.updateBoardGame(IDgame, new_gameID,new_name,new_minplayers,new_maxplayers,new_duaration,new_dateAdd,new_currentStatus);
  if (game) {
    res.status(200).send({game: game});
  } else {
    res.status(404).send({error: "Game not found"});
  }
}

boardGamesController.deleteBoardGame = (req, res) => {
  const IDgame = req.params.IDgame;
  const deleted = bgservice.deleteBoardGame(IDgame);
  if (deleted) {
    res.status(200).send({message: "Game deleted successfully"});
  } else {
    res.status(404).send({error: "Game not found"});
  }
};

export default boardGamesController;