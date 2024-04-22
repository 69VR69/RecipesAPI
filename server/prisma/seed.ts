import { createSeedClient } from "@snaplet/seed";

const main = async () => {

    const seed = await createSeedClient();
    console.log("Seeding started ")

    // Truncate all tables in the database
    await seed.$resetDatabase();
    console.log("Database truncated")

    await seed.Ingredient((x) => x(10), { connect: true });
    await seed.Recipe((x) => x(10), { connect: true });
    await seed.RecipeIngredient((x) => x(10), { connect: true });

    console.log("Seeding completed")

    process.exit();
};

main();