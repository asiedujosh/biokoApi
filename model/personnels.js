const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const Users = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },
  secret: {
    type: String,
  },
  phoneNo: {
    type: String,
  },
  location: String,
});

Users.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

Users.statics.login = async function (username, password) {
  const user = await this.findOne({ username });
  if (user) {
    const auth = bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("Incorrect Password");
  }
  throw Error("Incorrect Username");
};

const UsersModel = mongoose.model("UsersModel", Users);
module.exports = UsersModel;
