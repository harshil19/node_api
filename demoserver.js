import express from 'express'
import { StatusCodes } from 'http-status-codes'

const app = express()
const port = 3000

const STATUS = {
  SUCCESS: 'OK',
  FAILURE: 'ERROR'
}

// all data convert in JSON format
app.use(express.json())

app.get('/', (req, res) => {
  // res.status(200) using with package just like below
  res.status(StatusCodes.OK)
  res.send('server working')
})
app.post('/add', (req, res) => {
  const { body } = req
  const data = []
  data.push(req.body)
  if (!body.name) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      status: STATUS.FAILURE,
      message: 'Name is Required'
    })
  }
  // res.status(201) using with package just like below
  return res.status(StatusCodes.CREATED).send({
    status: STATUS.SUCCESS,
    data
  })
})
// app as api listen
app.listen(port, () => {
  console.log(`server link http://localhost:${port}`)
})
