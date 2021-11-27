const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
//const ValidateLogin = require('../validator/loginReg')
const Administrator = require('../model/personnels')
const EmployeeSignUp = require('../model/employees')
// Egg Imports
const EggRecords = require('../model/eggRecords')
const EggReport = require('../model/eggReports')
const EggTypes = require('../model/eggsType')
const EggImg = require('../model/eggImg')
const TotalEggsModel = require('../model/totalEggs')
//Day Old Imports
const DayOldRecords = require('../model/dayOldRecords')
const DayOldReport = require('../model/dayOldReports')
const DayOldTypes = require('../model/dayOldTypes')
const DayOldImg = require('../model/dayOldImg')
const TotalDayOldModel = require('../model/totalDayOld')
//Mortality Imports
const MortalityRecords = require('../model/mortalityRecords')
const MortalityReport = require('../model/mortalityReports')
const MortalityTypes = require('../model/mortalityType')
const MortalityImg = require('../model/mortalityImg')
const TotalMortalityModel = require('../model/mortalityTotal')
//Breeding Imports
const BreedRecords = require('../model/breedRecords')
const BreedReport = require('../model/breedReports')
const BreedTypes = require('../model/breedTypes')
const BreedImg = require('../model/breedImg')
const TotalBreedModel = require('../model/breedTotal')
//Client Imports
const ClientReg = require('../model/clientReg')
const ClientOrder = require('../model/clientOrder')
const ClientRecords = require('../model/clientRecord')
const ClientReport = require('../model/clientReport')
const ClientImg = require('../model/clientImg')
//Supplier Imports
const SupplierReg = require('../model/supplierReg')
const SupSupplier = require('../model/supplierSupplys')


const fs = require('fs')
const keys = require('../config/key')
//const multer = require('multer')
//const DIR = '../upload/'

//Admin Sign Up
module.exports.AdminSignUp = async (req, res) => {
  const {name, username, password} = req.body
  try {
    const Admin = await Administrator.create({name, username, password})
      res.status(201).json(Admin)
    } catch (err) {
    console.log(err)
    res.status(400).send('error, user not created')
  }
}

//Client Registration
module.exports.ClientSignUp = async (req, res) => {
  const {username, password, phoneNo} = req.body
   try{
     const Client = await ClientReg.create({username, password, phoneNo})
      res.status(200).json(Client)
   } catch (err){
     res.status(400).send('error, Client not Created')
   }
}

//Client Login
module.exports.ClientLogin = (req, res) => {
  const {username, password} = req.body
  let errors = {}
  ClientReg.findOne({username: username})
    .then(Client => {
        if(!Client){
           errors.Client = "Cannot find username"
            return res.status(400).send("There is a problem")
        } else {
          bcrypt.compare(password, Client.password)
            .then(isMatch => {
              /*
              const payload = {
                id: Admin._id,
                username: Admin.username,
                name: Admin.name
              } */
              //Log out payload
            //console.log(payload)
            //res.json(payload)
            })
        }
  })
}

//Client Order Production
module.exports.OrderProduct = async (req, res) => {
  const {date, username, product, noOfProduct, description, status} = req.body
  try{
    const Order = await ClientOrder.create({date, username, product, noOfProduct, description, status})
      res.status(200).json(Order)
    } catch (err){
    res.status(400).send('error, Order not created')
  }
}

//Supplier Register
module.exports.SupplyReg = async (req, res) => {
  const {username, password, phoneNo, address, companyName} = req.body
  try{
    const SupplyReg = await SupplierReg.create({
      username, password, phoneNo
    })
  } catch (err){
    res.send(400).send('error, Supply Registered created')
    console.log(err)
  }
}

//Supplier Supplys
module.exports.SupplierSupplyApi = async (req, res) => {
  const {date, username, product, Qty, pricePerQty, description} = req.body
  try {
    const SupplierSups = await SupSupplier.create({
      date, username, product, Qty, pricePerQty, description
    })
  } catch(err){
    res.send(400).send('error, Supplys')
    console.log(err)
  }
}

//Admin Login
module.exports.AdminLogin = (req, res) => {
  const {username, password} = req.body
  let errors = {}
  Administrator.findOne({username: username})
    .then(Admin => {
        if(!Admin){
           errors.Admin = "Cannot find username"
            return res.status(400).send("There is a problem")
        } else {
          bcrypt.compare(password, Admin.password)
            .then(isMatch => {
              const payload = {
                id: Admin._id,
                username: Admin.username,
                name: Admin.name
              }
              //Log out payload
            //console.log(payload)
            res.json(payload)
            })
        }
  })
}

//Employee Sign Up
module.exports.EmployeeSignUp = async (req, res) => {
  const {fullName,  employeeId, password, department, role, startDate, email, address, telNo} = req.body
//  console.log(`${fullName} , ${employeeId}, ${password}, ${department}, ${role}, ${startDate}, ${email}, ${address}, ${telNo}`)
//  res.send("success")
  try {
    const EmployeeReg = await EmployeeSignUp.create({
      fullName, employeeId, password, department, role, startDate, email, address, telNo
    })
    res.send("Success")
  } catch (err){
    console.log(err)
    res.status(400).send('error, Employee Not created')
  }
}

//Employee Login
module.exports.EmployeeLogin = (req, res) => {
  const {employeeId, password} = req.body
    let errors = {}
  EmployeeSignUp.findOne({employeeId: employeeId})
    .then(Employee => {
        if(!Employee){
           errors.Employee = "Cannot find employee"
            return res.status(400).send("There is a problem")
        } else {
          bcrypt.compare(password, Employee.password)
            .then(isMatch => {
              const payload = {
                id: Employee._id,
                fullName: Employee.fullName,
                employeeId: Employee.employeeId,
                department: Employee.department,
                role: Employee.role,
                startDate: Employee.startDate,
                email: Employee.email,
                address: Employee.address,
                telNo: Employee.telNo
              }
              //Log out payload
            //console.log(payload)
            res.json(payload)
            })
        }
        //res.send('Employee Login')
    })
  }


//Get All Employees
module.exports.Home = async (req, res)=>{
  res.sendFile(process.cwd() + '/index.html')
  //res.send('Use Mobile App')
}
//End Get All Employees

//Get All data
module.exports.GetAllData = async (req, res)=> {
  try {
    TotalEggsModel.find({})
      .then((responseTE) => {
        //Get Total Day Olds
        TotalDayOldModel.find({})
        .then((responseDO) => {
        //Getting Total Mortality
        TotalMortalityModel.find({})
        .then((responseMM) => {
        //Getting Total Breeding
        TotalBreedModel.find({})
        .then((responseBM) => {
        //Getting The Egg Records
        EggRecords.find({})
        .then((response1)=>{
          //Getting Day Old Records
          DayOldRecords.find({})
          .then((response2)=> {
          //Getting Mortality Records
            MortalityRecords.find({})
            .then((response3)=>{
              //Getting Breeding Records
              BreedRecords.find({})
              .then((response4)=>{
                //Getting Client Records
                ClientRecords.find({})
                .then((response5)=>{
                  //Getting Egg Images
                    EggImg.find({})
                      .then((response6)=>{
                      //Getting Day Old Images
                      DayOldImg.find({})
                        .then((response7)=>{
                        //Getting Mortality Images
                        MortalityImg.find({})
                          .then((response8)=>{
                              //Getting Breed Images
                              BreedImg.find({})
                                .then((response9)=>{
                                  //Getting All Employees
                                  EmployeeSignUp.find({})
                                  .then((response10)=>{
                                    //Getting EggReport
                                    EggReport.find({})
                                    .then((response11)=>{
                                    //Getting DayOldReport
                                    DayOldReport.find({})
                                    .then((response12)=>{
                                    //Getting Mortality Report
                                    MortalityReport.find({})
                                    .then((response13)=>{
                                    //Getting Breeding Report
                                    BreedReport.find({})
                                    .then((response14)=>{
                                    //Getting Client Report
                                    ClientReport.find({})
                                    .then((response15)=>{
                                    //Getting Egg Types
                                     EggTypes.find({})
                                     .then((response16)=>{
                                    //Getting Day Old Types
                                    DayOldTypes.find({})
                                    .then((response17)=> {
                                    //Getting MortalityTypes
                                    MortalityTypes.find({})
                                    .then((response18)=>{
                                    //Getting Breed Types
                                    BreedTypes.find({})
                                    .then((response19)=>{
                                    //Getting Clients Orders
                                    OrderProduct.find({})
                                    .then((response20)=>{
                                    //Getting Suppliers Supply
                                    SupplierSupplys.find({})
                                    .then((response21)=>{
                                  //Processing And Print Out PayLoad
                                  //Get an array of total Eggs
                                  let arrayOfTotalEggs = []
                                  let arrayOfTotalDayOld = []
                                  let arrayOfTotalMortality = []
                                  let arrayOfTotalBreed = []

                                  arrayOfTotalEggs = responseTE.map((data)=>(data.eachWeekEgg))
                                  arrayOfTotalDayOld = responseDO.map((data)=>(data.eachWeekDayOld))
                                  arrayOfTotalMortality = responseMM.map((data)=>(data.eachWeekMortality))
                                  arrayOfTotalBreed = responseBM.map((data)=>(data.eachWeekBreedNo))
                                  // Get total Eggs
                                  let sumOfTotalEggs = 0
                                  let sumOfTotalDayOld = 0
                                  let sumOfTotalMortality = 0
                                  let sumOfTotalBreed = 0
                                  responseTE.map((data) => (sumOfTotalEggs = sumOfTotalEggs + data.eachWeekEgg))
                                  responseDO.map((data) => (sumOfTotalDayOld = sumOfTotalDayOld + data.eachWeekDayOld))
                                  responseMM.map((data) => (sumOfTotalMortality = sumOfTotalMortality + data.eachWeekMortality))
                                  responseBM.map((data) => (sumOfTotalBreed = sumOfTotalBreed + data.eachWeekBreedNo))
                                  //console.log(sumOfTotalEggs)
                                  let eggImage = response3
                                  let payLoad = {
                                    sumOfEggs: sumOfTotalEggs,
                                    sumOfDayOld: sumOfTotalDayOld,
                                    sumOfMortality: sumOfTotalMortality,
                                    sumOfBreed: sumOfTotalBreed,
                                    weeklyEggs: arrayOfTotalEggs,
                                    weeklyDayOld: arrayOfTotalDayOld,
                                    weeklyMortality: arrayOfTotalMortality,
                                    weeklyBreed:  arrayOfTotalBreed,
                                    eggRecordSent: response1,
                                    dayOldRecordSent: response2,
                                    mortalityRecordSent: response3,
                                    breedingRecordSent: response4,
                                    clientRecordSent: response5,
                                    eggImage: response6,
                                    dayOldImg: response7,
                                    mortalityImg: response8,
                                    breedImg: response9,
                                    employee: response10,
                                    eggReport: response11,
                                    dayOldReport: response12,
                                    mortalityReport: response13,
                                    breedReport: response14,
                                    clientReport: response15,
                                    eggType: response16,
                                    dayOldType: response17,
                                    mortalityType: response18,
                                    breedType: response19,
                                    Orders: response20,
                                    supplys: response21
                                  }
                                  res.status(200).send(payLoad)
                                  })
                                  })
                                })
                                })
                              })
                              })
                            })
                            })
                          })
                          })
                        })
                        })
                      })
                      })
                    })
                    })
                  })
                  })
                })
                })
              })
            })
          })
        })
      }).catch((err)=>console.log(err))
          } catch (err){
              console.log(err)
            }
          }

//Entering Egg Records
module.exports.EggRecords = async (req, res) => {
  const {date, noOfEggs, noOfLayers, status } = req.body
  try {
    const EggReg = await EggRecords.create({
      date, noOfEggs, noOfLayers, status
    })

  TotalEggsModel.create({eachWeekEgg: noOfEggs})

  } catch (err){
    console.log(err)
    res.status(400).send('error, Egg Records')
  }
  res.send("Data Received")
}


//Entering Egg Types
module.exports.EggTypes = async (req, res) => {
  const {eggType, noOfEggs, description, price} = req.body
  try{
    const EggType = await EggTypes.create({
      eggType, noOfEggs, description, price
    })
  } catch (err){
    console.log(err)
    res.status(400).send('error, EggTypes')
  }
}

//Entering EggImages
module.exports.EggImg = async (req, res) => {
  try{
     let description = req.body.description
     let Img = new Buffer.from(req.body.sendData.data, 'base64')
     let imgType = req.body.sendData.mime
    // console.log(data)
     //data will be stored in the database
    const eggImg = await EggImg.create({
      Img, imgType, description
    }).then((res)=>{
      //console.log(res)
    })
    res.status(200).send("Image Saved Successfully")
  } catch (err){
    console.log(err)
    res.status(400).send('error, Egg Images')
  }
}

//Entering Egg Report
module.exports.EggReport = async (req, res) => {
  const {date, report} = req.body
  try{
    const eggReport = await EggReport.create({
      date, report
    })
  } catch (err){
    console.log(err)
    res.status(400).send('Egg Report')
  }
}

//Entering Day Old Records
module.exports.AddDayOld = async (req, res) => {
  const {date, noOfDayOlds, status} = req.body
  try{
    const dayOldRecord = await DayOldRecords.create({
      date, noOfDayOlds, status
    })

    TotalDayOldModel.create({eachWeekDayOld: noOfDayOlds})

  } catch (err){
    console.log(err)
    res.status(400).send('DayOlds')
  }
}


//Entering Day Old Types
module.exports.DayOldTypes = async (req, res) => {
  const {dayOldType, noOfDayOld, description, price} = req.body
  try{
    const DayOldType = await DayOldTypes.create({
      dayOldType, noOfDayOld, description, price
    })
  } catch (err){
    console.log(err)
    res.status(400).send('error, Day Old Types')
  }
}

//Entering Day Old Images
module.exports.DayOldImg = async (req, res) => {
  try{
     let description = req.body.description
     let Img = new Buffer.from(req.body.sendData.data, 'base64')
     let imgType = req.body.sendData.mime
    // console.log(data)
     //data will be stored in the database
    const dayOldImg = await DayOldImg.create({
      Img, imgType, description
    }).then((res)=>{
      //console.log(res)
    })
    res.status(200).send("Image Saved Successfully")
  } catch (err){
    console.log(err)
    res.status(400).send('error, Day Old Images')
  }
}

//Entering Day Old Report
module.exports.DayOldReport = async (req, res) => {
  const {date, report} = req.body
  try{
    const dayOldReport = await DayOldReport.create({
      date, report
    })
  } catch (err){
    console.log(err)
    res.status(400).send('Day Old Report')
  }
}

//Entering Mortality Records
module.exports.AddMortality = async (req, res) => {
  const {date, noOfMortality, status} = req.body
  try{
    const mortalityRecord = await MortalityRecords.create({
      date, noOfMortality, status
    })

  TotalMortalityModel.create({eachWeekMortality: noOfMortality})

  } catch (err){
    console.log(err)
    res.status(400).send('Mortality')
  }
}

//Entering Mortality Types
module.exports.MortalityTypes = async (req, res) => {
  const {mortalityType, noOfMortality, description, cost} = req.body
  try{
    const mortalityType = await MortalityTypes.create({
      mortalityType, noOfMortality, description, cost
    })
  } catch (err){
    console.log(err)
    res.status(400).send('error, Mortality Types')
  }
}

//Entering Mortality Images
module.exports.MortalityImg = async (req, res) => {
  try{
     let description = req.body.description
     let Img = new Buffer.from(req.body.sendData.data, 'base64')
     let imgType = req.body.sendData.mime
    // console.log(data)
     //data will be stored in the database
    const mortalityImg = await MortalityImg.create({
      Img, imgType, description
    }).then((res)=>{
      //console.log(res)
    })
    res.status(200).send("Image Saved Successfully")
  } catch (err){
    console.log(err)
    res.status(400).send('error, Mortality Images')
  }
}

//Entering Mortality Report
module.exports.MortalityReport = async (req, res) => {
  const {date, report} = req.body
  try{
    const mortalityReport = await MortalityReport.create({
      date, report
    })
  } catch (err){
    console.log(err)
    res.status(400).send('Mortality Report')
  }
}

//Entering Breeding Records
module.exports.AddBreeding = async (req, res) => {
  const {date, noOfBreeds, status} = req.body
  try{
    const breedRecord = await BreedRecords.create({
      date, noOfBreeds, status
    })

    TotalBreedModel.create({eachWeekBreedNo: noOfBreeds})

  } catch (err){
    console.log(err)
    res.status(400).send('Breeding')
  }
}

//Entering Breeding Types
module.exports.BreedType = async (req, res) => {
  const {breedType, noOfBreedType, description, price} = req.body
  try{
    const breedType = await BreedTypes.create({
      breedType, noOfBreedType, description, price
    })

  } catch (err){
    console.log(err)
    res.status(400).send('error, Breed Types')
  }
}

//Entering Breed Images
module.exports.BreedImg = async (req, res) => {
  try{
     let description = req.body.description
     let Img = new Buffer.from(req.body.sendData.data, 'base64')
     let imgType = req.body.sendData.mime
    // console.log(data)
     //data will be stored in the database
    const breedImg = await BreedImg.create({
      Img, imgType, description
    }).then((res)=>{
      //console.log(res)
    })
    res.status(200).send("Image Saved Successfully")
  } catch (err){
    console.log(err)
    res.status(400).send('error, Egg Images')
  }
}

//Entering Breed Report
module.exports.BreedReport = async (req, res) => {
  const {date, report} = req.body
  try{
    const breedReport = await BreedReport.create({
      date, report
    })
  } catch (err){
    console.log(err)
    res.status(400).send('Breed Report')
  }
}

//Entering Client Records
module.exports.AddClient = async (req, res) => {
  const {date, noOfBreeds, status} = req.body
  try{
    const clientRecord = await ClientRecords.create({
      date, noOfClients, status
    })
  } catch (err){
    console.log(err)
    res.status(400).send('Client')
  }
}

//Entering Breed Images
module.exports.ClientImg = async (req, res) => {
  try{
     let description = req.body.description
     let Img = new Buffer.from(req.body.sendData.data, 'base64')
     let imgType = req.body.sendData.mime
    // console.log(data)
     //data will be stored in the database
    const clientImg = await ClientImg.create({
      Img, imgType, description
    }).then((res)=>{
      //console.log(res)
    })
    res.status(200).send("Image Saved Successfully")
  } catch (err){
    console.log(err)
    res.status(400).send('error, Egg Images')
  }
}

//Entering Breed Report
module.exports.ClientReport = async (req, res) => {
  const {date, report} = req.body
  try{
    const clientReport = await ClientReport.create({
      date, report
    })
  } catch (err){
    console.log(err)
    res.status(400).send('Client Report')
  }
}



const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const breedImages = new Schema({
  Img: {
      type: Buffer
  },
  imgType: {
    type: String
  },
  description: {
    type: String
  }
})

const breedImagesModel = mongoose.model('breedImages', breedImages)
module.exports = breedImagesModel


const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const breedRecords = new Schema({
  date: String,
  noOfBreeds: String,
  status: String
})

const breedRecordsModel = mongoose.model('breedRecords', breedRecords)
module.exports = breedRecordsModel
