import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // Get the current file path
const __dirname = path.dirname(__filename); // Get the directory name



console.log(path.sep)
const filePath = path.join('/content','subfolder','test.txt') //this give the normalised path if i add folder structure
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)

