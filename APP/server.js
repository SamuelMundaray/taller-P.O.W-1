import express, {json} from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.set("port",3000);




//Configuracion 

app.use(json());
app.use(helmet());
app.use(cors());
app.use(morgan("combined"));

/*app.listen(app.get("port"),()=>{
    console.log("Servidor escuchando en el puerto",app.get("port"));
});*/

/*app.get("/",(req,res)=>{
    res.send("Hola Lizbeth Fabbro, bienvenido a tu servidor");
});*/

export default app;