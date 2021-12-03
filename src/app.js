const express = require('express');
require("./db/conn")
const Student = require("./models/students")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Home Sweet Home')
})


app.post("/students", async (req, res) => {
    try {
          const user = new Student(req.body);               // creating Document
          const createUser = await user.save();
          res.status(201).send(createUser);
  
    } catch (e) {

          res.status(400).send(e);

    }    
  });

 app.get("/students", async (req,res)=>{
     
    try{
        const result = await Student.find();
        res.send(result);
 
    }catch(e){
        res.send(e);
    }

 }) 

// app.post("/students",(req,res)=>{
//     console.log(req.body)
//     const user = new Student(req.body)

//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(201).send(e);
//     })

//     res.send('Hello from the other side');

// })

app.listen(port,()=>{
    console.log(`Connected at http://127.0.0.1:${port}`)
})