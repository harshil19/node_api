import compression from 'compression'
import cors from 'cors'
import express from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import mainRoutes from './routes/main.routes'
import userRoutes from './routes/user.routes'

const app = express()
const port = 3000

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
  limit: 100 // Limit each IP to 100 requests per `window` (here, per 2 minutes)
})

// Apply the rate limiting middleware to API calls only
app.use(limiter)

app.use(compression())
app.use(express.json())
app.use(helmet())
app.use(cors())

app.use('/v1', mainRoutes)
app.use('/v1/user', userRoutes)

app.listen(port, () => console.log(`Check Server http://localhost:${port}`))
