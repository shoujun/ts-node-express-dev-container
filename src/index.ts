import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server in dev container (TypeScript)')
})

app.post('/example', (req: Request, res: Response) => {
  // Access POST parameters with req.body
  console.log(req.body);

  // Send a response
  res.send('Received your POST request!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
