import { app } from "./app/app.js";
import dotenv from "dotenv";
dotenv.config();

const startServer = () => {
    try {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Servidor escuchando en el puerto ${process.env.PORT || 3000}`);
        });
    } catch (error) {
        console.error(`Error al iniciar el servidor: ${error}`);
    }
};

startServer();
