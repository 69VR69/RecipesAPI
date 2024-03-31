import express from 'express'
import recipesRoute from './routes/recipeRoutes'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/recipes', recipesRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})