import express from 'express'
import { expressYupMiddleware } from 'express-yup-middleware'
import userController from '../controllers/user.controller'
import { addUserValidationSchema, getUserValidationSchema, removeUserValidationSchema, updateUserValidationSchema } from '../user.schemas'

const router = express.Router()

router.get('/get-all-users', userController.getAllUsersController)

router.get(
  '/get-user/:id',
  expressYupMiddleware({ schemaValidator: getUserValidationSchema }),
  userController.getUserController
)

router.post(
  '/add-user',
  expressYupMiddleware({ schemaValidator: addUserValidationSchema }),
  userController.addUserController
)

router.put(
  '/update-user/:id',
  expressYupMiddleware({ schemaValidator: updateUserValidationSchema }),
  userController.updateUserController
)

router.delete(
  '/delete-user/:id',
  expressYupMiddleware({ schemaValidator: removeUserValidationSchema }),
  userController.deleteUserController
)

export default router
