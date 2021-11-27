const Users = require("../model/personnels");
const Products = require("../model/products");
const ArchiveData = require("../model/Archive");
const CollectingEggs = require("../model/EggsCollection");
const CollectingFeed = require("../model/FeedCollection");
const Vertinary = require("../model/Vertinary");
const Income = require("../model/Income");
const Enroll = require("../model/Enroll");
const Expenditure = require("../model/Expenditure");
const NewsFeed = require("../model/NewsFeed");
const Orders = require("../model/Orders");
const History = require("../model/History");
const Supply = require("../model/Supply");
const Flock = require("../model/FlockManagement");
const Chat = require("../model/Chat");
const DeleteRequest = require("../model/DeleteRequest");

//User Sign Up
module.exports.UserSignUp = async (req, res) => {
  const { username, password, role, secret, phoneNo, location } = req.body;
  console.log(req.body);
  try {
    const User = await Users.create({
      username,
      password,
      role,
      secret,
      phoneNo,
      location,
    });
    res.status(201).json(User);
  } catch (err) {
    console.log(err);
    res.status(400).send("error, user not created");
  }
};

//Workers Adding Random Farm Product
module.exports.WorkerAddProducts = async (req, res) => {
  console.log(req.body);
  const { title, quantity, qtyPrice, price, description, image } = req.body;
  let Img = new Buffer.from(req.body.image.sendData.data, "base64");
  let ImgType = req.body.image.sendData.mime;
  try {
    const NewProduct = await Products.create({
      title,
      quantity,
      qtyPrice,
      price,
      Img,
      ImgType,
      description,
    });
    res.status(201).json(NewProduct);
  } catch (err) {
    console.log(err);
    res.status(400).send("error, Products are not added");
  }
};

//Add To Breed
module.exports.AddBreed = async (req, res) => {
  const { breed, quantity, description, image } = req.body;
  let Img = new Buffer.from(req.body.image.sendData.data, "base64");
  let ImgType = req.body.image.sendData.mime;
  try {
    const NewFlock = await Flock.create({
      breed,
      quantity,
      Img,
      ImgType,
      description,
    });
    res.status(201).json(NewBreed);
  } catch (err) {
    res.status(400).send("error, Flocks are not added");
  }
};

// Worker Egg Collection
module.exports.CollectEggs = async (req, res) => {
  const { date, week, numberOfEggs } = req.body;
  console.log(req.body);
  try {
    const NewCollectEggs = await CollectingEggs.create({
      date,
      week,
      numberOfEggs,
    });
    res.status(201).json(NewCollectEggs);
  } catch (err) {
    console.log(err);
    res.status(400).send("error, Eggs are not collected");
  }
};

// Worker Feed Management
module.exports.CollectFeed = async (req, res) => {
  console.log(req.body);
  const { date, week, quantityOfFeed } = req.body;
  try {
    const NewCollectFeed = await CollectingFeed.create({
      date,
      week,
      quantityOfFeed,
    });
    res.status(201).json(NewCollectFeed);
  } catch (err) {
    res.status(400).send("error, Feeds are not collected");
  }
};

// Add News Feed
module.exports.AddNews = async (req, res) => {
  const { title, news } = req.body;
  try {
    const NewNewsFeed = await NewsFeed.create({
      title,
      news,
    });
    res.status(201).send(NewNewsFeed);
  } catch (err) {
    res.status(400).send("Error, News are not added");
  }
};

//Vertinary Add
module.exports.AddVertinary = async (req, res) => {
  const { drugs, medication } = req.body;
  try {
    const NewVertinary = await Vertinary.create({
      drugs,
      medication,
    });
    res.status(201).send(NewVertinary);
  } catch (err) {
    res.status(400).send("Error, Vertinary are not added");
  }
};

//Income Add
module.exports.AddIncome = async (req, res) => {
  const {
    date,
    type,
    noOfProducts,
    itemUnit,
    saleAmt,
    paymentMethod,
    paymentStatus,
    soldTo,
  } = req.body;
  try {
    const NewIncome = await Income.create({
      date,
      type,
      noOfProducts,
      itemUnit,
      saleAmt,
      paymentMethod,
      paymentStatus,
      soldTo,
    });
    res.status(201).send(NewIncome);
  } catch (err) {
    res.status(400).send("Error, Income not added");
  }
};

//Expenditure Add
module.exports.AddExpenditure = async (req, res) => {
  const {
    date,
    type,
    noOfExpenditure,
    quantity,
    amount,
    paymentMethod,
    paymentStatus,
    description,
  } = req.body;
  try {
    const NewExpenditure = await Expenditure.create({
      date,
      type,
      noOfExpenditure,
      quantity,
      amount,
      paymentMethod,
      paymentStatus,
      description,
    });
    res.status(201).send(NewExpenditure);
  } catch (err) {
    res.status(400).send("Error, Expenditure not added");
  }
};

// Enrolling Students
module.exports.AddEnroll = async (req, res) => {
  const { username, name, phoneNo, reason, duration } = req.body;
  try {
    const NewEnroll = await Enroll.create({
      username,
      name,
      phoneNo,
      reason,
      duration,
    });
    res.status(201).send(NewEnroll);
  } catch (err) {
    res.status(400).send("Error, Enroll not added");
  }
};

// Supply Added
module.exports.AddSupply = async (req, res) => {
  const { products, badget, status } = req.body;
  let d = new Date();
  let date = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
  try {
    const NewSupply = await Supply.create({
      date,
      products,
      badget,
      status,
    });
    res.status(201).send(NewSupply);
  } catch (err) {
    res.status(400).send("Error, Supplys not added");
  }
};

//Add Orders of client
module.exports.AddOrders = async (req, res) => {
  console.log(req.body);
  const {
    orderNo,
    date,
    user,
    phoneNo,
    location,
    orders,
    status,
    totalPrice,
  } = req.body;
  try {
    const NewOrder = await Orders.create({
      orderNo,
      date,
      user,
      phoneNo,
      location,
      orders,
      status,
      totalPrice,
    });
    res.status(201).send(NewOrder);
  } catch (err) {
    res.status(400).send("Error, Orders not added");
  }
};

//Add To history
module.exports.AddHistorys = async (req, res) => {
  const { date, user, orders, status, totalPrice } = req.body;
  try {
    const NewHistory = await History.create({
      date,
      user,
      orders,
      status,
      totalPrice,
    });
    res.status(201).send(NewHistory);
  } catch (err) {
    res.status(400).send("Error, History not added");
  }
};

//Add To Chart
module.exports.AddChat = async (req, res) => {
  const { id, user, message } = req.body;
  console.log(req.body);
  try {
    const NewChat = await Chat.create({
      id,
      user,
      message,
    });
    res.status(201).send(NewChat);
  } catch (err) {
    res.status(400).send("Error, Chart not added");
  }
};

//Compare data
module.exports.CompareToReset = async (req, res) => {
  const { username, phoneNo, secret } = req.body;
  try {
    const User = await Users.find({ username });
    if (
      User.username == username &&
      User.phoneNo == phoneNo &&
      User.secret == secret
    ) {
      res.status(200).send("grant");
    } else {
      res.status(200).json("deny");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("No user, found");
  }
};

//Forgot Password
module.exports.Reset = async (req, res) => {
  const { username, password } = req.body;
  try {
    const User = await Users.findOneAndUpdate(
      {
        username: username,
      },
      {
        password: password,
      }
    );
    res.status(201).json(User);
  } catch (err) {
    console.log(err);
    res.status(400).send("error, user not created");
  }
};

//Archiving Client
module.exports.Archive = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  try {
    const User = await Users.findOne({
      _id: id,
    });
    if (User) {
      try {
        let NewArchive = await ArchiveData.create({
          username: User.username,
          role: User.role,
          phoneNo: User.phoneNo,
          location: User.location,
        });
        if (NewArchive) {
          try {
            const User = await Users.findOneAndDelete({
              _id: id,
            });
            res.status(201).json(User);
          } catch (err) {
            res.status(201).json(err);
          }
        }
      } catch (err) {
        res.status(201).json(err);
      }
    }
  } catch (err) {
    res.status(201).json(err);
  }
};

//Request To Delete
module.exports.RequestToDelete = async (req, res) => {
  const { reason, username, password } = req.body;
  try {
    const user = await Users.login(username, password);
    if (user.username) {
      let NewDeleteRequest = await DeleteRequest.create({
        username,
        reason,
      });
      res.status(201).json(NewDeleteRequest);
    }
  } catch (err) {
    res.status(400).send("Error, User not found");
  }
};

//Get Login Data
module.exports.Login = async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  try {
    const user = await Users.login(username, password);
    res.status(200).json({
      user: user.username,
      role: user.role,
      secret: user.secret,
      phoneNo: user.phoneNo,
      location: user.location,
    });
  } catch (err) {
    res.status(400).send("Error, User not found");
  }
};

//Delete Order from Orders
module.exports.DeleteOrders = async (req, res) => {
  console.log(req.body);
  const { id } = req.body;
  try {
    Orders.findOneAndDelete({ _id: id })
      .then((deleteOrder) => {
        res.status(201).send(deleteOrder);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(400).send("Error, Client Orders not found");
  }
};

// Get Data to display to client others
module.exports.GetAllProducts = async (req, res) => {
  try {
    Products.find({})
      .then((productsResult) => {
        res.status(201).send(productsResult);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(400).send("Error, Products not found");
  }
};

//Get All Chats to Admin
module.exports.GetAllChats = async (req, res) => {
  try {
    Chat.find({})
      .then((chatResults) => {
        res.status(201).send(chatResults);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(400).send("Error, Chats not found");
  }
};

// Get All Orders
module.exports.GetAllUsers = async (req, res) => {
  try {
    Users.find({})
      .then((userResults) => {
        res.status(201).send(userResults);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(400).send("Error, User not found");
  }
};

//Get All Archived Data
module.exports.GetAllArchived = async (req, res) => {
  try {
    ArchiveData.find({})
      .then((archivedResults) => {
        res.status(201).send(archivedResults);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(400).send("Error, User not found");
  }
};

// Get All Orders
module.exports.GetAllOrders = async (req, res) => {
  try {
    Orders.find({})
      .then((orderResults) => {
        res.status(201).send(orderResults);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(400).send("Error, Orderss not found");
  }
};

// Get All Orders For Client
module.exports.GetAllClientOrders = async (req, res) => {
  console.log(req.body);
  const { user } = req.body;
  try {
    Orders.find({ user: user })
      .then((orderClientResults) => {
        console.log(orderClientResults);
        res.status(201).send(orderClientResults);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(400).send("Error, Client Orders not found");
  }
};

// Get All History
module.exports.GetAllHistory = async (req, res) => {
  try {
    History.find({})
      .then((historyResults) => {
        res.status(201).send(historyResults);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(400).send("Error, History not found");
  }
};

// Get All Eggs
module.exports.GetAllEggsCollection = async (req, res) => {
  try {
    CollectingEggs.find({})
      .then((eggsResult) => {
        res.status(201).send(eggsResult);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(400).send("Error, Eggs not found");
  }
};

//Get All Breeds
module.exports.GetAllBreeds = async (req, res) => {
  try {
    Flock.find({})
      .then((flocksResult) => {
        res.status(201).send(flocksResult);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(400).send("Error, Get All Breeds");
  }
};

// Get All Feed
module.exports.GetAllFeedCollection = async (req, res) => {
  try {
    CollectingFeed.find({})
      .then((feedsResult) => {
        res.status(201).send(feedsResult);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(400).send("Error, Feed not found");
  }
};

// Get All Vertinary
module.exports.GetAllVertinary = async (req, res) => {
  try {
    Vertinary.find({})
      .then((vertinaryResult) => {
        res.status(201).send(vertinaryResult);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(400).send("Error, Vertinary not found");
  }
};

// Get All News
module.exports.GetAllNews = async (req, res) => {
  try {
    NewsFeed.find({})
      .then((newsResult) => {
        res.status(201).send(newsResult);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(400).send("Error, News Result not found");
  }
};

//Get All Income
module.exports.GetAllIncome = async (req, res) => {
  try {
    Income.find({})
      .then((incomeResult) => {
        res.status(201).send(incomeResult);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(400).send("Error, Income not found");
  }
};

//Get All Expenditure
module.exports.GetAllExpenditure = async (req, res) => {
  try {
    Expenditure.find({})
      .then((expenditureResult) => {
        res.status(201).send(expenditureResult);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(400).send("Error, Expenditure not found");
  }
};

//Get All Enroll
module.exports.GetAllEnroll = async (req, res) => {
  try {
    Enroll.find({})
      .then((enrollResult) => {
        res.status(201).send(enrollResult);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(400).send("Error, Enroll not found");
  }
};

//Get All Enroll
module.exports.GetAllSupply = async (req, res) => {
  try {
    Supply.find({})
      .then((supplyResult) => {
        res.status(201).send(supplyResult);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(400).send("Error, Supply not found");
  }
};
