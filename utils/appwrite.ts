import {Account, Client, Databases, Storage} from 'appwrite';
import {ENDPOINT, PROJECT_ID} from "~/app.constants";

export const client = new Client()

client.setEndpoint(ENDPOINT).setProject(PROJECT_ID)

export const account = new Account(client)
export {ID} from "appwrite"
export const DB = new Databases(client)
export const storage = new Storage(client)
