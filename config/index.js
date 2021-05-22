
//process.env.PROD_DB_URI works because this was added in heroku config vars in heroku

const db_uri = process.env.PORT ? process.env.PROD_DB_URI : process.env.DEV_DB_URI;

const db_secret = process.env.SECRET

export {db_uri,db_secret}