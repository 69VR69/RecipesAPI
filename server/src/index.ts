import express from 'express'
import recipesRoute from './recipes/routes/recipeRoutes'
import ingredientsRoute from './ingredients/routes/ingredientRoutes'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/recipes', recipesRoute)
app.use('/api/ingredients', ingredientsRoute)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})