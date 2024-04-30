# Recipe API

## Description

This is a Recipes and Ingrdients based application built with Prisma. It provide somes APIs documented via OpenAPI3

## Dependencies

This project uses the following dependencies:

- `@prisma/client`: For database operations using Prisma.
- `@snaplet` : For seeding the database

## Setup

### Dockerless

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

### Dockermore

1. 
   -  Linux: Start Docker if not already running
      ```bash
      sudo service docker start
      ```

   - Windows: Start Docker Desktop.


2. Clone the repository
```bash
git clone https://github.com/69VR69/RecipesAPI
```

3. Start the services
```bash
docker compose up
```

4. The Express (APIs) server will start at http://localhost:4200.
The client will start at http://localhost:2400.
Grafana will start at http://localhost:3000.
Prometheus will start at http://localhost:9090.

# Prisma

To update the database schema use the command
```bash
npm run update-schema
```

To seed the database use the command
```bash
npx prisma schema seed
```

To visualize the database's data, use the command
```bash
npm run visualize-schema
```