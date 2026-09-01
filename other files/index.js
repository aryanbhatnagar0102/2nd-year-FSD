import { writeFile,readFile } from "fs/promises";

// await writeFile("stud.txt","Ravikant Singh\nRollNo:82");
// console.log("File written");

// const data = await readFile("Stud.txt", "utf-8");
// console.log(`file contents: ${data}`);

const addContent = (fname, content) => {
    await writeFile(fname,content);
};

const readContent = (fname) => {
    
};

addContent("notes.txt", "FS is easy in JS");
console.log(readContent("notes.txt"));

