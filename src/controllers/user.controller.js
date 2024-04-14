import { StatusCodes } from 'http-status-codes'
import userServices from '../services/user.service'
import pino from 'pino'

const logger = pino()

const STATUS = {
  success: 'OK',
  failure: 'ERROR'
}

const getAllUsersController = (req, res) => {
  const users = userServices.getAllUsers()

  if (users?.length) {
    logger.info(`get All  User ${JSON.stringify(users)}`)
    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      data: users,
      message: 'All Users Found Successfully'
    })
  }

  return res.status(StatusCodes.NOT_FOUND).send({
    status: STATUS.failure,
    message: 'No User Found'
  })
}

const getUserController = (req, res) => {
  const id = parseInt(req.params.id, 10)
  const user = userServices.getUser(id)

  if (user) {
    logger.info(`get User ${JSON.stringify(user)}`)
    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      data: user
    })
  }

  return res.status(StatusCodes.NOT_FOUND).send({
    status: STATUS.failure,
    message: `User ${id} Not Found`
  })
}

const addUserController = (req, res) => {
  const { body: user } = req

  const addedUSer = userServices.addUser(user)
  logger.info(`Create  User : ${JSON.stringify(user)}`)
  return res.status(StatusCodes.CREATED).send({
    status: STATUS.success,
    data: addedUSer,
    message: 'Data added Successfully'
  })
}

const updateUserController = (req, res) => {
  const { body: user } = req

  const id = parseInt(req.params.id, 10)

  const updatedUser = userServices.updateUser(id, user)

  if (updatedUser) {
    logger.info(`update User : ${id} updated ${JSON.stringify(user)}`)
    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      data: updatedUser,
      message: 'Updated Successfully'
    })
  } else {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      message: `User ${id} Not Found`
    })
  }
}

const deleteUserController = (req, res) => {
  const id = parseInt(req.params.id)
  const user = userServices.getUser(id)

  if (user) {
    logger.info(`delete User : ${id}`)
    userServices.removeUser(id)
    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      message: 'User Delete SuccessFully'
    })
  } else {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      message: `User ${id} not found `
    })
  }
}

export default {
  addUserController,
  deleteUserController,
  getAllUsersController,
  getUserController,
  updateUserController
}
