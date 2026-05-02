import { Router } from "express";

import bgrouter from "../modules/Board_Games_Catalog/boardGamesroutes.js";

const indexrouter = Router();

indexrouter.use("/catalog", bgrouter);

export default indexrouter;