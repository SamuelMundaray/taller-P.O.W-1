import { Router } from "express";
import bgcontroller from "./boardGamesController";

const gamesRouter = Router();

gamesRouter.get("/boardgames", bgcontroller.getAllBoardGames);
gamesRouter.get("/boardgames/:IDgame", bgcontroller.getBoardGameById);
gamesRouter.post("/boardgames", bgcontroller.addBoardGame);
gamesRouter.put("/boardgames/:IDgame", bgcontroller.updateBoardGame);
gamesRouter.delete("/boardgames/:IDgame", bgcontroller.deleteBoardGame);

export default gamesRouter;