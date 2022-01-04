import express from 'express'
import { homePage } from '../controllers/homeController'
const homeController = express.Router()

homeController.get('/', homePage)

export default homeController