import express from 'express'
import { StatusCodes } from 'http-status-codes'
import userServices from '../services/user.service'

const router = express.Router()

const STATUS  = {
    success: 'OK',
    failure: 'ERROR'
}

router.get('/get-all-users', (req, res) => {
        const users = userServices.getAllUsers();

        if(users?.length){
            return res.status(StatusCodes.OK).send({
                status: STATUS.success,
                data: users, 
            })
        }

        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: 'No User Found', 
        })
})

router.get('/get-user/:id', (req, res) => {
    const id = parseInt(req.params.id, 10)
    const user = userServices.getUser(id);

    if(user){
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            data: user, 
        })
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: `User ${id} Not Found`, 
    })
})

router.post('/add-user', (req, res) => {
    const { body: user } = req;

    const addedUSer = userServices.addUser(user);

    return res.status(StatusCodes.CREATED).send({
       status: STATUS.success,
       data: addedUSer, 
    });
})

router.put('/update-user/:id', (req, res) => {
    const { body: user } = req;

    const id = parseInt(req.params.id, 10)

    const updatedUser = userServices.updateUser(id, user);

    if(updatedUser){
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            data: updatedUser, 
        });
    } else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User ${id} Not Found`, 
        });
    }
})

router.delete('/delete-user/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const user = userServices.getUser(id);

    if(user){
        userServices.removeUser(id);
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            message: `User Delete SuccessFully `, 
        });
    } else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User ${id} not found `, 
        });
    }
    
})

export default router;