import { createSeedClient } from "@snaplet/seed";

const main = async () => {

    const seed = await createSeedClient({ connect: true });
    console.log("Seeding started ")

    // Truncate all tables in the database
    await seed.$resetDatabase();
    console.log("Database truncated")

    await seed.season(
        [
            { label: "Winter" },
            { label: "Spring" },
            { label: "Summer" },
            { label: "Autumn" }
        ]);

    await seed.ingredient((x) => x(35));
    await seed.recipe((x) => x(5));
    await seed.recipeIngredient((x) => x(23));
    await seed.step((x) => x(30));
    await seed.stepIngredient((x) => x(28));

    console.log("Seeding completed")

    process.exit();
};

main();