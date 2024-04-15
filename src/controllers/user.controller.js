import { StatusCodes } from 'http-status-codes'
import userServices from '../services/user.service'
import pino from 'pino'
import { pool } from '../pool'

const logger = pino()

const STATUS = {
  success: 'OK',
  failure: 'ERROR'
}

const getAllUsersController = async (req, res) => {
  try {
    // Execute a SELECT query to fetch all users
    const users = await pool.query('SELECT * FROM users')

    if (users?.length) {
      logger.info(`Get All Users: ${JSON.stringify(users)}`)
      res.status(StatusCodes.OK).send({
        status: STATUS.success,
        data: users,
        message: 'All Users Found Successfully'
      })
    } else {
      res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: 'No Users Found'
      })
    }
  } catch (error) {
    console.error('Error fetching users:', error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      status: STATUS.error,
      message: 'An error occurred while fetching users'
    })
  }
}

const getUserController = async (req, res) => {
  const userId = parseInt(req.params.id, 10)

  try {
    // Execute a SELECT query to fetch the user with the specified ID
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [userId])

    if (rows.length) {
      const user = rows[0] // Assuming the query returns only one user
      logger.info(`Get User: ${JSON.stringify(user)}`)
      res.status(StatusCodes.OK).send({
        status: STATUS.success,
        data: user
      })
    } else {
      res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: `User ${userId} Not Found`
      })
    }
  } catch (error) {
    console.error('Error fetching user:', error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      status: STATUS.error,
      message: 'An error occurred while fetching user'
    })
  }
}

const addUserController = async (req, res) => {
  const { body: user } = req

  try {
    // Format the values for the 'topics' and 'levels' columns
    const formattedUser = {
      ...user,
      types: user.types.join(', '),
      topics: user.topics.join(', '), // Join array elements into a comma-separated string
      levels: user.levels.join(', ') // Join array elements into a comma-separated string
    }

    // Insert data into the 'users' table
    const result = await pool.query(
      'INSERT INTO users SET ?',
      formattedUser
    )

    logger.info(`Create  User : ${JSON.stringify(user)}`)
    res.status(StatusCodes.CREATED).send({
      status: STATUS.success,
      data: result.insertId,
      message: 'Data added Successfully'
    })
  } catch (error) {
    console.error('Error inserting data:', error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      status: STATUS.error,
      message: 'An error occurred while inserting data'
    })
  }
}

const updateUserController = async (req, res) => {
  const { body: user } = req

  const id = parseInt(req.params.id, 10)

  try {
    const updatedUser = userServices.updateUser(id, user) // Assuming updateUser returns the updated user
    await pool.query(
      'UPDATE users SET description = ?, url = ?, types = ?, topics = ?, levels = ? WHERE id = ?',
      [user?.description, user?.url, user?.types.join(', '), user?.topics.join(', '), user?.levels.join(', '), id]
    )

    if (updatedUser) {
      logger.info(`update User : ${id} updated ${JSON.stringify(user)}`)
      res.status(StatusCodes.OK).send({
        status: STATUS.success,
        data: updatedUser,
        message: 'User updated successfully'
      })
    } else {
      res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: `User ${id} not found`
      })
    }
  } catch (error) {
    console.error('Error updating user:', error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      status: STATUS.error,
      message: 'An error occurred while updating user'
    })
  }
}

const deleteUserController = async (req, res) => {
  const id = parseInt(req.params.id)
  const user = userServices.getUser(id)
  try {
    await pool.query('DELETE FROM users WHERE id = ?', id)

    if (user) {
      logger.info(`User deleted successfully with ID: ${id}`)
      userServices.removeUser(id)
      res.status(StatusCodes.OK).send({
        status: STATUS.success,
        message: 'User deleted successfully'
      })
    } else {
      res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: `User ${id} not found`
      })
    }
  } catch (error) {
    console.error('Error deleting user:', error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      status: STATUS.error,
      message: 'An error occurred while deleting user'
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
