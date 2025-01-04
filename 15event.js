//Events yes even nide,js depends on events though it runs on server side
//many inbuilt modules use events under the hood
import EventEmitter from 'events'
//event emitter is a class and based on your needs you can create multiple instances expand other 
//classes and use them so play around and find out what works best for you
const customEmitter = new EventEmitter()
customEmitter.on('response',()=>{
    console.log(`data recieved user`)
})
customEmitter.on('response',()=>{
    console.log(`some other functionality`)
})

customEmitter.emit('response')