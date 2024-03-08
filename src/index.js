import { app } from "./app/app.js";

const startServer = () => {
    try {
        app.listen(app.get("PORT") || 3000, () => {
            console.log(`Servidor escuchando en el puerto ${app.get("PORT") || 3000}`);
        });
    } catch (error) {
        console.error(`Error al iniciar el servidor: ${error}`);
    }
};

startServer();
