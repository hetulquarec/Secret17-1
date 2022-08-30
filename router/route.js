const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const mongoose = require("mongoose");
require("../db/conn");
const Users = require("../model/userSchema");
const User = require("../model/appointmentSchema");
const blogSchema = require("../model/blogSchema");
const Reviews = require("../model/reviews");
const Membership = require("../model/MembershipSchema");
// const multer = require("multer");

// Create Storage
// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "./client/public/uploads");
//   },
//   filename: (req, file, callback) => {
//     console.log("-----file------",file)
//     callback(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// Create new user Registration
// router.post("/signup", async (req, res) => {
//   const { name, email, password, cpassword } = req.body;

//   if (!name || !email || !password || !cpassword) {
//     return res.status(400).send("Please fill all the fields");
//   }
//   try {
//     const userExist = await Users.findOne({ email: email });
//     if (userExist) {
//       return res.status(400).send("User already exists");
//     } else if (password !== cpassword) {
//       return res.status(400).send("Password does not match");
//     } else {
//       const user = new Users({ name, email, password, cpassword });

//       await user.save();
//       res.status(200).send("User created successfully");
//     }
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });
// Register

router.post("/register", async (req, res) => {
  const { email, password, cpassword } = req.body;

  if (!email || !password || !cpassword) {
    return res.status(422).json({ error: "Plz filled the field properly" });
  }

  try {
    const userExist = await Users.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already Exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password are not matching" });
    } else {
      const user = new Users({ email, password, cpassword });
      await user.save();
      res.status(201).json({ message: "you are registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// Login user
router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Plz Filled the data" });
    }
    const userLogin = await Users.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credientials " });
      } else {
        // need to genereate the token and stored cookie after the password match
        token = await userLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });

        res.json({
          message: "user Signin Successfully",
          data: { access_token: token },
        });
      }
    } else {
      res.status(400).json({ error: "Invalid login credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});
// Blog api

// router.post("/blog", upload.single("atricleImage"), (req, res) => {
  
//   const newArticle = new blogSchema({
//     title: req.body.title,
//     article: req.body.article,
//     authorname: req.body.authorname,
//     articleImage: req.file.originalname,
//     category: req.body.category,
//   });
//   console.log(req.file.originalname);
//   newArticle
//     .save()
//     .then(() => res.json("new article posted"))
//     .catch((err) => res.status(400).json(`Error: ${err}`));
// });

router.post("/blog", async (req, res) => {
  try {
    const blog = await blogSchema.create(req.body);
    res.status(200).send(blog);
    console.log(blog);
  } catch (err) {
    res.status(500).send(err);
  }
});

// get blog data
router.get("/blog", (req, res) => {
  blogSchema
    .find()
    .then((articles) => res.json(articles))
    .catch((err) => res.status(400).json(`Error: ${err}`));
}),
  // get single blog data

  router.get("/blog/:id", async (req, res) => {
    var regex = new RegExp(req.params.id);
    blogSchema.find({ id: regex }).then((result) => {
      res.status(200).json(result);
      console.log(result);
    });
  }),
  // delete blog data
  router.delete("/blog/:id", async (req, res) => {
    try {
      const blogDelete = await blogSchema.findOneAndDelete({
        _id: req.params.id,
      });
      if (!blogDelete) {
        return res.status(404).json({ error: "Blog not found" });
      }
      res.status(200).json({ message: "Blog Delete Successfully" });
    } catch (err) {
      console.log(err);
    }
  }),
  //     let token;
  //     // const { email, password } = req.body;

  //     if (!email || !password) {
  //       return res.status(400).send("Please fill all the fields");
  //     }
  //     const userLogin = await Users.findOne({ email: email });
  //     if (userLogin) {
  //       const isMatch = await bcrypt.compare(password, userLogin.password);
  //       if (!isMatch) {
  //         res.status(400).send({ error: "Invalid Credientials" });
  //       } else {
  //         token = await userLogin.generateAuthToken();
  //         console.log(token);
  //         res.cookie("jwtoken", token, {
  //           expires: new Date(Date.now() + 25892000000),
  //           httpOnly: true,
  //         });

  //         res.json({ message: "user Signin Successfully" });
  //       }
  //     }else{
  //       res.status(400).send({ error: "Invalid Credientials" });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // });

  // BLog api

  // Logout user
  router.get("/logout", (req, res) => {
    res.clearCookie("jwtoken", { path: "/" });
    res.status(200).send("logout successfully");
  }),
  // Post User data to the database
 // Post User data to the database
 router.post("/appointments", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res
        .status(400)
        .json({ message: "Appointment Date, Name and email are required" });
    }
    const user = new User({ name, email, phone });
    await user.save();
    res.status(201).json({ message: "As soon as We Contact with  you" });
  } catch (err) {
    console.log(err);
  }
}),
// Get User data from the database
router.get("/appointments", async (req, res) => {
  try {
    const appointments = await User.find();
    res.status(200).json(appointments);
  } catch (err) {
    console.log(err);
  }
}),
  //Post Reviews Data in database
  router.post("/reviews", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      if (!name || !email  || !message) {
        return res
          .status(400)
          .json({ message: "Please Fill the Reviews Field." });
      } else {
        const review = new Reviews({ name, email, message });
        await review.save();

        res.status(201).json({ message: "Thank you for your reviews" });
      }
    } catch (err) {
      console.log(err);
    }
  }),
  // Post Salon Membership Data in database
  router.post("/membership", async (req, res) => {
    try {
      const { number } = req.body;
      const membership = new Membership({ number });
      await membership.save();
      res.status(201).json({ message: "Thank you for your membership" });
    } catch (err) {
      console.log(err);
    }
  }),
  // Get Salon Membership Data from the database
  router.get("/membership", async (req, res) => {
    try {
      const membership = await Membership.find();
      res.status(200).json(membership);
    } catch (err) {
      console.log(err);
    }
  }),
  (module.exports = router);
