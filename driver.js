// const { linearSearch, binarySearch } = require('./searching.js');

// console.log(linearSearch);

const fs = require('fs/promises');

async function readSampleFile() {
    const data = await fs.readFile('./sample.txt', 'utf-8');
    console.log(data);
}

async function writeSampleFile() {
    await fs.writeFile('./sample.txt', 'Hello World');
}

async function appendSampleFile() {
    await fs.appendFile('./sample.txt', 'Hello World');
}

appendSampleFile();