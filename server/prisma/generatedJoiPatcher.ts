import fs from 'fs';

fixThisShit();

// This file is used to patch the generated Joi schema validators.
// For the the index.ts files in schemas/enum and schemas/objects folders, we need to add the '.js' extension to the import statements.
// For the files in schemas folder we need to add the '/index.js' extension to the import statements.
function fixThisShit()
{
    const schemaPath = './prisma/generated/schemas';
    const schemaIndexPath = './prisma/generated/schemas/index.ts';
    const schemaObjectsPath = `${schemaPath}/objects`;
    const schemaEnumsPath = `${schemaPath}/enums`;

    console.log('Patching the Joi schema validators');

    console.log('\nPatching the objects folder');
    // Fix the index.ts files in the objects folder
    const objectsIndexFiles = fs.readdirSync(schemaObjectsPath);
    objectsIndexFiles.forEach(file => {
        const filePath = `${schemaObjectsPath}/${file}`;
        replaceByJsExtension(filePath);
    });

    console.log('\nPatching the enums folder');
    // Fix the index.ts files in the enums folder
    const enumsIndexFiles = fs.readdirSync(schemaEnumsPath);
    enumsIndexFiles.forEach(file => {
        const filePath = `${schemaEnumsPath}/${file}`;
        replaceByJsExtension(filePath);
    });

    console.log('\nPatching the schemas folder');
    // Fix the aggregate files in the objects folder
    const objectsFiles = fs.readdirSync(schemaPath, {recursive:false});
    objectsFiles.forEach(file => {
        if(file === 'enums' || file === 'objects') return;
        const filePath = `${schemaPath}/${file}`;
        replaceByObjectsIndexJsExtension(filePath);
        replaceByEnumsIndexJsExtension(filePath);
    });

    // Fix the index.ts file in the schemas folder
    replaceByJsExtension(schemaIndexPath);

    console.log('Patched the Joi schema validators');
}

function replaceByJsExtension(filePath: string)
{
    console.log(`Patching js in ${filePath}`);
    const data = fs.readFileSync(filePath, 'utf8');
    const regex = '.schema'; // to replace by .schema.js';
    const result = data.replace(new RegExp(regex, 'g'), '.schema.js');
    fs.writeFileSync(filePath, result, 'utf8');
}

function replaceByObjectsIndexJsExtension(filePath: string)
{
    console.log(`Patching index js in ${filePath}`);
    const data = fs.readFileSync(filePath, 'utf8');
    const regex = './objects'; // to replace by ./objects/index.js';
    const result = data.replace(new RegExp(regex, 'g'), './objects/index.js');
    fs.writeFileSync(filePath, result, 'utf8');
}

function replaceByEnumsIndexJsExtension(filePath: string)
{
    console.log(`Patching index js in ${filePath}`);
    const data = fs.readFileSync(filePath, 'utf8');
    const regex = './enums'; // to replace by ./objects/index.js';
    const result = data.replace(new RegExp(regex, 'g'), './enums/index.js');
    fs.writeFileSync(filePath, result, 'utf8');
}
