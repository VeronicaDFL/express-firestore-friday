import functions from "firebase-functions"
import express from "express";
import  cors  from "cors";
import { addNewAlcohol, getAllAlcohols, deleteAlcohol, updateAlcohol } from "./src/alcohols.js";

const app = express()
app.use(cors())
app.use(express.json())

app.get("/",(req, res) => {
res.send("I am Root!🌱")
})

app.get("/test", (req, res) => {
    res.send("My cloud API is working!🤩")
})

app.post("/alcohols", addNewAlcohol)
app.get("/alcohols", getAllAlcohols)
app.patch("/alcohols/:id", updateAlcohol)
app.delete("/alcohols/:id", deleteAlcohol)

export const api = functions.https.onRequest(app)

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
