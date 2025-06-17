require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes'); // Example route
const categoryRoutes = require('./routes/categoryRoutes'); // Example route

const app = express();
app.use(express.json());

const corsOptions = {
  origin: process.env.APPLICATION_URL, // 👈 Frontend URL from env
  credentials: true,
};
app.use(cors(corsOptions));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB error", err));

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");


// const postRoutes = require('./routes/posts')
// const categoryRoutes = require('./routes/categories');
// const cors = require('cors')
// require('dotenv').config();

// const app = express();

// //Middleware
// app.use(bodyParser.json());
// app.use(cors())

// //Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log("DB error", err));

// //Use routes
// app.use('/api/posts', postRoutes)
// app.use('/api/categories', categoryRoutes);

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
