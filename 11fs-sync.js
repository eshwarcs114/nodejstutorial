import {readFileSync,writeFileSync} from 'fs';
console.log('start');
//first param is the path of the file i wish to read
//second param is the encoding type readfile is to read
const first = readFileSync('./content/first.txt','utf8'); 
const second = readFileSync('./content/second.txt','utf8');
console.log(first,second);

//writeFileSync is to write to a file or create a file if it does not exist
writeFileSync('./content/result-sync.txt',`Here is the result : ${first},${second}`,{flag:'a'}); 
console.log('done with this task');
console.log('starting the next one');
//flag a is to append to the file
