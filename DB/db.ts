import { MongoClient } from "mongodb";

export async function AppsClient(data: string) {
  const url = "mongodb://localhost:27017";

  const client = new MongoClient(url);

  const db = client.db("guessNumber");
  const coll = db.collection("guess");

  await coll.insertOne({ data: data });
}
