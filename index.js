import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

try {
    app.listen(process.env.PORT, () => {
        console.log(`Server listening on port ${process.env.PORT}`);
    });
} catch (error) {
    console.log(error);
}

app.get("/reviews", (req, res) => {
    const apiKey = process.env.GOOGLE_API_KEY;
    const placeId = process.env.PLACE_ID;

    try {
        fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                return res.status(200).json({
                    success: true,
                    data: data.result.reviews,
                });
            })
            .catch((error) => {
                console.log(error);
                return res.status(500).json({
                    success: false,
                    message: "Internal server error",
                });
            });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});
