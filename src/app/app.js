import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/getReviews", async (req, res) => {
    try {
        const placeName = "TaKiero";
        const apiKey = "AIzaSyAmqns69u9M576urM4bj05Pfj-eK-8txU0";
        const responsePlaceId = await fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${placeName}&inputtype=textquery&fields=place_id&key=${apiKey}`);
        const dataPlaceId = await responsePlaceId.json();

        const placeId = dataPlaceId.candidates[0]?.place_id;

        if (placeId) {
            const responseReviews = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`);
            const dataReviews = await responseReviews.json();

            const reviews = dataReviews.result.reviews || [];

            return res.send(reviews);
        } else {
            console.error("No se encontró el placeId para el lugar:", placeName);
            return res.status(404).send("PlaceId no encontrado");
        }
    } catch (error) {
        console.error("Error al obtener detalles del lugar o reseñas:", error);
        return res.status(500).send("Error interno del servidor");
    }
});

export { app };
