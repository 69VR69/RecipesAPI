import { createSeedClient } from "@snaplet/seed";

const main = async () => {

    const seed = await createSeedClient();
    console.log("Seeding started ")

    // Truncate all tables in the database
    await seed.$resetDatabase();
    console.log("Database truncated")

    await seed.Season(
        [
            {label: "Winter"},
            {label: "Spring"},
            {label: "Summer"},
            {label: "Autumn"}
        ], { connect: true }
    );

    await seed.Ingredient((x) => x(35), { connect: true });
    await seed.Recipe((x) => x(5), { connect: true });
    await seed.RecipeIngredient((x) => x(23), { connect: true });
    await seed.Step((x) => x(30), { connect: true });
    await seed.StepIngredient((x) => x(28), { connect: true });

    console.log("Seeding completed")

    process.exit();
};

main();