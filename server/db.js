const mongoose = require('mongoose');
const DB_PORT = 27017
const DB_NAME = "Job_Tracker"
const uri = `mongodb+srv://shuhat:shuhat234@newcluster.adznrpo.mongodb.net/?retryWrites=true&w=majority`

module.exports = { mongoose, uri };