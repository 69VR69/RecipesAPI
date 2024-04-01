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

4. Running the Server
   To start the server, run:

```bash
cd ./server
npm run start
```

5. Running the Client
   To start the client, run:

```bash
cd ./client
npm run dev
```

# Prisma

To update the database schema use the command
```bash
npx prisma migrate dev --name <NameOfMigration>
npx prisma generate
```
