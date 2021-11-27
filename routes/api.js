const { Router } = require("express");
const authController = require("../controller/authController");
const passport = require("passport");
const router = Router();

//Start Router
router.get("/GetAllUsers", authController.GetAllUsers);
router.get("/GetAllProducts", authController.GetAllProducts);
router.get("/GetAllOrders", authController.GetAllOrders);
router.get("/GetAllHistory", authController.GetAllHistory);
router.get("/GetAllEggsCollection", authController.GetAllEggsCollection);
router.get("/GetAllFeedCollection", authController.GetAllFeedCollection);
router.get("/GetAllVertinary", authController.GetAllVertinary);
router.get("/GetAllNews", authController.GetAllNews);
router.get("/GetAllIncome", authController.GetAllIncome);
router.get("/GetAllExpenditure", authController.GetAllExpenditure);
router.get("/GetAllEnroll", authController.GetAllEnroll);
router.get("/GetAllSupply", authController.GetAllSupply);
router.get("/GetAllBreeds", authController.GetAllBreeds);
router.get("/GetAllChats", authController.GetAllChats);
router.get("/GetAllArchived", authController.GetAllArchived);

//Admin Routers
router.post("/UserSignUp", authController.UserSignUp);
router.post("/UserLogIn", authController.Login);
router.post("/Archive", authController.Archive);

//Client Post
router.post("/GetAllClientOrders", authController.GetAllClientOrders);

//Worker Routers
router.post("/WorkerAddProduct", authController.WorkerAddProducts);
router.post("/AddEggCollection", authController.CollectEggs);
router.post("/AddFeedCollection", authController.CollectFeed);
router.post("/AddIncome", authController.AddIncome);
router.post("/AddExpenditure", authController.AddExpenditure);
router.post("/AddEnroll", authController.AddEnroll);
router.post("/AddSupply", authController.AddSupply);
router.post("/AddOrders", authController.AddOrders);
router.post("/AddHistorys", authController.AddHistorys);
router.post("/AddNews", authController.AddNews);
router.post("/AddVertinary", authController.AddVertinary);
router.post("/AddBreed", authController.AddBreed);
router.post("/AddChat", authController.AddChat);
router.post("/CompareToReset", authController.CompareToReset);
router.post("/Reset", authController.Reset);
router.post("/RequestToDelete", authController.RequestToDelete);
//News Routers

//Delete
router.delete("/DeleteOrders", authController.DeleteOrders);

module.exports = router;
