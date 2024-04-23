# Recipe API

## Description

This is a Recipes and Ingrdients based application built with Prisma. It provide somes APIs documented via OpenAPI3

## Dependencies

This project uses the following dependencies:

- `@prisma/client`: For database operations using Prisma.
- `@snaplet` : For seeding the database

## Setup

1. Clone the repository:

```bash
git clone https://github.com/69VR69/RecipesAPI
```

2. Navigate into the project directory and install the dependencies on Server side:

```bash
cd ./server
npm install
```

3. Navigate into the project directory and install the dependencies on Client side:

```bash
cd ./client
npm install
```
-- DOCKER NOT INSTALLED FOR MOMENT --
4. On you desktop, start docker by using the following command (for linux) :

   ```bash
   sudo service docker start
   ```

   Or start docker desktop for windows.
-- DOCKER NOT INSTALLED FOR MOMENT --

5. Running the Server
   To start the server, run:

```bash
cd ./server
npm run start
```

The Express (APIs) server will start at http://localhost:4200.

6. Running the Client
   To start the client, run:

```bash
cd ./client
npm run dev
```

The client will start at http://localhost:2400.

# Prisma

To update the database schema use the command

```bash
npm run update-schema
```

To seed the database use the command

```bash
npx prisma schema seed
```

To visualize the database datas use the command

```bash
npm run visualize-schema
```