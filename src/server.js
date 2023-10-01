import express from 'express'
import mainRoutes from './routes/main.routes'
import userRoutes from './routes/user.routes'

const app = express()
const port = 3000

app.use(express.json())

app.use('/v1', mainRoutes)
app.use('/v1/user', userRoutes)

app.listen(port, () => console.log(`Check Server http://localhost:${port}`));
