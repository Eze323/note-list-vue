const express = require ("express");
const cors = require('cors');
const server = express();

server.use(cors());
//middlewares
function logger(req,res,next){
    console.log(req.url);
    next();
}

server.use(express.json());

server.get("/", logger,(req,res)=>{
    res.send("hello world server");
})

server.post("/",function(req,res){
res.send("Aca van los posts")
})




server.post("/api/auth/register", function (req, res) {
    const { name, email, password } = req.body;
    if (name && email && password) {
        if (name == "Ezequiel" && email == "a.ezequielirace@gmail.com" && password == '12345678') {
            return res.json({ status: 'true', message: 'User Logged Successfully', token: "1|kvKgtvWcUiAzjDjkzgHupSGRNLLaeiaqwe654asd7" });
        } else {
            return res.status(400).json({ status: 'false', message: 'Usuario inexistente' });
        }
    } else {
        return res.status(400).send("Datos Erroneos");
    }
});

server.post("/api/auth/login", function (req, res) {
    const { email, password } = req.body;
    if (email && password) {
        if (email == "a.ezequielirace@gmail.com" && password == '12345678') {
            return res.json({ status: 'true', message: 'User Logged Successfully', token: "1|kvKgtvWcUiAzjDjkzgHupSGRNLLaeiaqwe654asd7" });
        } else {
            return res.status(400).json({ status: 'false', message: 'Usuario inexistente' });
        }
    } else {
        return res.status(400).send("Datos Erroneos");
    }
});




server.listen("3001",()=>{
    console.log("server is running");
});