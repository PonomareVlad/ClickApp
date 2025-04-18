import { MongoClient } from 'mongo-realm-web-wrapper'

export const {
    DB_NAME: name,
    DATA_API_URL: url,
    DATA_API_KEY: key,
    DATA_SOURCE_NAME: serviceName,
} = process.env

export const client = new MongoClient({ url, key, serviceName })
export const db = client.db(name)
export const balance = db.collection('balance')
