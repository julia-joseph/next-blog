import { MongoClient } from "mongodb";

const USERNAME = "";
const PASSWORD = "";
const DB_NAME = "blog";

const DB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@sandbox.dtugy.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

export const getClient = async () => {
  const client = await MongoClient.connect(DB_URL);
  return client;
};

export const insertCollections = async (client, collection, data) => {
  const db = client.db();
  return await db.collection(collection).insertOne(data);
};

export const getCollection = async (
  client,
  collection,
  sort = {},
  filter = {}
) => {
  const db = client.db();
  return await db.collection(collection).find(filter).sort(sort).toArray();
};
