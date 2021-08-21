import express, { Application, urlencoded } from 'express'
import mongoose from 'mongoose'

import router from './cart.routes'

const app: Application = express()

app.use(urlencoded({ extended:true }))

mongoose.connect(<string>process.env.DB_URI), {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
};

app.use('/', router);
app.use(express.json());
app.use(express.urlencoded());
app.listen(process.env.PORT || 5000, ():void => console.log('Server up and running'));
