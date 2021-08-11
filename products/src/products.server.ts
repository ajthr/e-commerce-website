import express, { Application, urlencoded } from 'express'
import mongoose from 'mongoose'

import router from './products.routes'

const app: Application = express()

app.use(urlencoded({ extended:true }))
console.log("uri", process.env.DB_URI);

mongoose.connect(<string>process.env.DB_URI), {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
};

app.use('/', router)
app.listen(5000, ():void => console.log('Server up and running'))
