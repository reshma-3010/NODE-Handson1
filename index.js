const http=require('http');
const data={
    Name:'Reshma',
    Age:"22",
    city:"Nandyal",
    state:"Andhra Pradesh"
}
const jsonData=JSON.stringify(data);

const server=http.createServer((request,response)=>{
    response.write(`<h1>HELLO! HAPPY NEW YEAR</h1>`);
    response.write(jsonData);
    response.end();
})

server.listen(9000,()=>{
    console.log("Connected to port 9000");
})