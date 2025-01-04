// import { writeFileSync } from 'fs';

// for(let i = 0 ; i < 1000 ; i++){
//     writeFileSync('content/big.txt',`Hello World ${i}\n`,{flag:'a'});
//   console.log(i);
// }


import { createReadStream } from 'fs';
import http from 'http';

//below is sending data in chunks
const server = http.createServer();

server.on('request',(req,res)=>{
    if(req.url === '/'){
        const fileStream = createReadStream('./content/big.txt','utf8');
        fileStream.on('open',()=>{
            fileStream.pipe(res);
        })
        fileStream.on('error',(err)=>{
            res.end(err);
        })
    }
})

server.listen(5000);
    // const fileStream = createReadStream('./content/big.txt','utf8');
    // fileStream.on('open',()=>{
    //     fileStream.pipe(res);
    // })
    // fileStream.on('error',(err)=>{
    //     res.end(err);
    // })

//     const readStream = fs.createReadStream('./content/big.txt');
//     readStream.pipe(res);
// })
//this is reading data in chunks
// you can also choose the size of the chunks and also the  below line is the example
// const stream = createReadStream('./content/big.txt',{highWaterMark:90000,encoding:'utf8'});
// const stream = createReadStream('./content/big.txt');
// stream.on('data',(result)=>{
//     console.log(result);
// })


//practical application of the above case