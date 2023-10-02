import userDao from '../models/persistence/user.dao'

const getAllUsers = () => userDao.getAll()

const getUser = (userId) => userDao.get(userId)

const addUser = (details) => userDao.insert(details)

const updateUser = (userId, details) => userDao.update(userId, details)

const removeUser = (userId) => userDao.remove(userId)

export default { getAllUsers, getUser, updateUser, removeUser, addUser }
