#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const crypto = require("crypto");
const {program} = require("commander");

const hashFile = (filePath) =>{
    const hash = crypto.createHash("sha256")
    const fileBuffer = fs.readFileSync(filePath)
    hash.update(fileBuffer)
    return hash.digest('hex')
}

const scanDirectory = (dir, fileList=[])=>{
    const files = fs.readdirSync(dir)

    files.forEach((file)=>{
        const fullPath = path.join(dir,file);
        const stat = fs.statSync(fullPath);

        if(stat.isDirectory()){
            scanDirectory(fullPath, fileList);
        }else{
            fileList.push(fullPath)
        }
    })
    return fileList;
}

const findDuplicates = (dir)=>{
    const files = scanDirectory(dir);
    const hashes = {};
    const duplicates = [];

    files.forEach((file)=>{
        const fileHash = hashFile(file);
        if(hashes[fileHash]){
            duplicates.push([hashes[fileHash],file])
        }else{
            hashes[fileHash] = file
        }
    });

    if(duplicates.length === 0){
        console.log("No duplicates found")
    }else{
        console.log("Duplicates found")
        duplicates.forEach(([original, duplicate])=>{
            console.log(`Original file: ${original}`)
            console.log(`Duplicate file: ${duplicate}`)
        })
    }

}

// cli setup
program
.version("1.0.0")
.description("CLI for finding duplicate files")
.argument('<directory>',"directory to be searched")
.action((dir)=>{
    if(fs.existsSync(dir)){
        findDuplicates(dir)
    }else{
        console.log(`${dir} doesn't exists`)
    }
})

program.parse(process.argv);