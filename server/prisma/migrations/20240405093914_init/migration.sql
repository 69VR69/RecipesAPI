-- CreateTable
CREATE TABLE "Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "season" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "RecipeIngredients" (
    "ingredient" INTEGER NOT NULL,
    "reciep" INTEGER NOT NULL,
    "number" INTEGER NOT NULL,

    PRIMARY KEY ("ingredient", "reciep"),
    CONSTRAINT "RecipeIngredients_ingredient_fkey" FOREIGN KEY ("ingredient") REFERENCES "Ingredient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RecipeIngredients_reciep_fkey" FOREIGN KEY ("reciep") REFERENCES "Recipe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
