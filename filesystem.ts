// Testing FS Standard Lib
// Forced to use an older version of the fs lib to use readJson and writeJson
import { readJson, writeJson } from "https://deno.land/std@0.65.0/fs/mod.ts"; 

const jsonObj = await readJson('scripts.json')
console.log(jsonObj)

const users = [
     { name: "Alessandro", level: 7 },
     { name: "Yani", level: 8 },
     { name: "Lukas", level: 11 },
     { name: "Ken", level: 15 },
]

await writeJson('users.json', users, { spaces: 2 })
const jsonObj2 = await readJson('users.json')

console.log(jsonObj2)