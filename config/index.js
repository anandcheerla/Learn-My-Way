import dotenv from 'dotenv'

dotenv.config();

const db_uri = process.env.PORT ? process.env.PROD_DB_URI : ((process.env.NODE_ENV||'test').trim() == 'test' ? process.env.TEST_DB_URI : process.env.DEV_DB_URI)

const db_secret = process.env.SECRET

export {db_uri,db_secret}