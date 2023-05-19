const Speaker = require("../model/SpeakerModel");// for database
async function creation (data, res){
  try {
    const respons=  await Speaker.create(data)

    res.status(201).json("create accout seccessful "+respons )
  } catch (e) {
    res.status(500).json(e)
  }}

async function getting (res){
  try {
    const respons=  await Speaker.find()    
  // const respons=  await usermodel.find({firstName:"John"})    
    console.log("done")
    console.log(respons)
    res.status(201).json("come with delete method by id "+respons )
  } catch (e) {
    res.status(500).json("error")
  }}

async function gettingbyId (id,res){

  try {
    const respons=  await Speaker.find({_id:id})   ;    
  // const respons=  await usermodel.find({firstName:"John"})    
    console.log("done")
    console.log(respons)
    res.status(201).json("come with get one id method by id "+respons )
  } catch (e) {
    res.status(500).json("error")
    }}

async function edit (id,data,res){
  try {
   const respons=  await Speaker.findByIdAndUpdate(id,data)    
    res.status(201).json("come with updata method by id "+respons )
    } catch (e) {
    res.status(500).json("error")
  }}


async function remove (id,res){
  try {
    await   Speaker.findByIdAndRemove(id)    
    res.status(201).json("come with delete method by id ")
    } catch (e) {
    res.status(500).json("error")
}}

      module.exports={
        creation,getting,gettingbyId,remove,edit
        // ,gettingbyid,edit ,remove
            // add,edit,remove,parse2 ,checked,show
        }