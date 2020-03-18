var express = require("express");
const Joi = require("joi");
var router = express.Router();
var multer = require("multer");
const requestSchema = require("../schemas/intake-schema");
const path = require("path");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

var upload = multer({ storage: storage });

router.post("/intake", upload.single("myfile"),(req, res) => {
  var dataToValidate = JSON.parse(req.body.mydata);
  Joi.validate(dataToValidate, requestSchema.intakeschema, (error, result) => {
    if (error) {
      console.log(error);
      res.send("Joi Error");
    } else {
      console.log(result);
      // upload(req, res, function(err) {
      //   if (err) {
      //     return res.end("Something went wrong!");
      //   }
      //   return res.end(" valid payload and File uploaded sucessfully!.");
      // });
      res.send("valid payload")
    }
  });
});

module.exports = router;
