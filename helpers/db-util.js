import { MongoClient } from "mongodb";

export const connectDatabase = async () => {
  const username = process.env.mongodb_username;
  const password = process.env.mongodb_password;
  const cluster = process.env.mongodb_clustername;
  const database = process.env.mongodb_database;

  const connectionString = `mongodb+srv://${username}:${password}@${cluster}.aezu0.mongodb.net/${database}?retryWrites=true&w=majority`;
  
  console.log(connectionString);

  const client = await MongoClient.connect(connectionString);

  return client;
};

export const insertDocument = async (client, collection, document) => {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
};

export const getAllDocuments = async (
  client,
  collection,
  sort,
  filter = {}
) => {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
};
