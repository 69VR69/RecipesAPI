import express from 'express'
import cors from 'cors';
import recipesRoute from './recipes/routes/recipeRoutes.js'
import ingredientsRoute from './ingredients/routes/ingredientRoutes.js'

const app = express()

// Utilisez le middleware cors pour autoriser les requêtes cross-origin
app.use(cors());

// Ajoutez le middleware express.json() pour analyser les corps de requête en JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/api', (req, res) => {
  res.send('Hello World!')
});

app.use('/api/recipes', recipesRoute);
app.use('/api/ingredients', ingredientsRoute);

app.listen(4200, () => {
  console.log(`App listening on port 4200`)
});

// Logging server errors
process.on('uncaughtException', function (err) {
  console.log(err);
});

process.on('unhandledRejection', function (err) {
  console.log(err);
});

process.on('SIGINT', function () {
  console.log("Caught interrupt signal");
  process.exit();
});

process.on('SIGTERM', function () {
  console.log("Caught interrupt signal");
  process.exit();
});