import { db } from "./dbConnect.js";
import { FieldValue } from "firebase-admin/firestore";

const coll = db.collection("alcohols");

export async function addNewAlcohol(req, res) {
  const newAlcohol = req.body;

  newAlcohol.createAt = FieldValue.serverTimestamp();
  await coll.add(newAlcohol);
  res.status(201).send({ message: "New Alcohol added." });
}

export async function getAllAlcohols (req, res) {
    const collection =await coll.get()
    const alcohol = collection.docChanges.map(
        doc => ({...doc.data(), id:doc.id})
    )
    res.status(200).send({})
}
export async function deleteAlcohol (req, res) {
    const {id} = req.params

    await coll.doc(id).delete()
    res.status(202).send("Alcohol has been deleted.")
}

export async function updateAlcohol(req, res) {
    const {id} = req.params
    const updateInfo = req.body

    await coll.doc(id).update(updateInfo)
    res.status(202).send("Alcohol has been updated!")
}