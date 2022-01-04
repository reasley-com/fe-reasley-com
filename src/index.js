import express from 'express'
import morgan from 'morgan'

import homeRouter from './routers/homeRouter'

const app    = express()
const logger = morgan('dev')

// View Engine Setting
app.set('view engine', 'pug')
app.set('views', process.cwd() + '/src/views')
app.use(logger)
app.use('/', homeRouter)

export default app