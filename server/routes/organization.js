const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const organizationRouter = express.Router();

//function for read file
const readData = () => {
  const organizationData = fs.readFileSync("./data/organizationList.json");
  return JSON.parse(organizationData);
};

// function for write file
const writeFile = (organizationData) => {
  fs.writeFileSync(
    "./data/organizationList.json",
    JSON.stringify(organizationData, null, 2)
  );
};

organizationRouter.get("/", (req, res) => {
  let organizationData = readData();
  return res.status(200).send(organizationData);
});

organizationRouter.post("/", (req, res) => {
  let organizationData = readData();

  const newDonationObj = {
    id: uuidv4(),
    date: Date.now(),
    organizationID: req.body.organizationID,
    itemName: req.body.item,
    information: req.body.info,
    status: req.body.status,
  };

  const organizationID = req.body.organizationID;
  organizationData.find((organization) => {
    if (organization.id === organizationID) {
      organization.donations.push(newDonationObj);
      return;
    }
  });

  writeFile(organizationData);
  res.status(201).json(newDonationObj);
});

//get item by ID
// organizationRouter.get("/:organizationID/:itemID", (req,res)=> {
//   let organizationData = readData();

//   let tragetItem = req.
// })

organizationRouter.patch(
  "/profile/:organizationID/item/:itemID/edit",
  (req, res) => {
    let organizationData = readData();

    let traget = organizationData.find;
  }
);

module.exports = organizationRouter;