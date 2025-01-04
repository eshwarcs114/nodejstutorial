import { readFile , writeFile } from "fs";
import util from "util";
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);


const start = async () => {
    try{
        const first = await readFilePromise('./content/first.txt','utf8');
        const second = await readFilePromise('./content/second.txt','utf8');
        await writeFilePromise('./content/result-async.txt',`Here is the result : ${first},${second}`,{flag:'a'});
        console.log(first);
        console.log(second);
    } catch (error){
        console.log(error);
    }
};

start();
// const getText = (path) => {
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         })
//     })
// };