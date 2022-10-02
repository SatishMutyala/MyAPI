const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const port = process.env.PORT || 3000 ;

app.listen(port, () => {
    console.log("API is working on 3000 Port")
});
app.get("/", (req, res) => {
    res.status(200).send("Welcome to API");
});
const Cars = [{
    "Id": "9fa7768c-fe72-4dc1-822e-22494b2e91df",
    "Make": "GMC",
    "Model": "Envoy",
    "Year": 2005,
    "VIN": "WAUSG78E86A652314",
    "Color": "Aquamarine",
    "Price": 13690,
    "MPG": 14,
    "Mileage": 221688,
    "State": "TX",
    "Engine": "Internal combustion",
    "Sold": false
},
{
    "Id": "683f5c4a-3998-4eae-897c-a0867f6f756d",
    "Make": "Ford",
    "Model": "Bronco II",
    "Year": 1985,
    "VIN": "SCFFDAAE6AG666790",
    "Color": "Crimson",
    "Price": 14857,
    "MPG": 28,
    "Mileage": 67633,
    "State": "FL",
    "Engine": "Internal combustion",
    "Sold": false
},
{
    "Id": "d4cb1e28-f4fa-4969-ba11-36c15a6ce997",
    "Make": "Ford",
    "Model": "F-250 Super Duty",
    "Year": 2006,
    "VIN": "3VW4S7AT9EM085015",
    "Color": "Mauv",
    "Price": 12258,
    "MPG": 14,
    "Mileage": 137214,
    "State": "MD",
    "Engine": "Electric engine",
    "Sold": false
},
{
    "Id": "7fb5efab-f4f6-4368-9700-de99dfca08ff",
    "Make": "Pontiac",
    "Model": "Firebird Formula",
    "Year": 1992,
    "VIN": "WBA5B1C5XFG472281",
    "Color": "Fuscia",
    "Price": 8260,
    "MPG": 18,
    "Mileage": 212452,
    "State": "PA",
    "Engine": "Internal combustion",
    "Sold": true
},
{
    "Id": "7c131e77-6cb7-49b9-822c-5ca8c90b0be4",
    "Make": "Maserati",
    "Model": "Spyder",
    "Year": 1991,
    "VIN": "5N1AL0MM0FC365452",
    "Color": "Yellow",
    "Price": 6532,
    "MPG": 17,
    "Mileage": 217108,
    "State": "MO",
    "Engine": "Hybrid engine",
    "Sold": false
},
{
    "Id": "e69e12d9-14db-4375-a18a-a7446e9ff467",
    "Make": "Chevrolet",
    "Model": "Blazer",
    "Year": 1996,
    "VIN": "WBA3C1C54FK699385",
    "Color": "Blue",
    "Price": 9240,
    "MPG": 20,
    "Mileage": 178103,
    "State": "AZ",
    "Engine": "V6 engine",
    "Sold": false
}];


app.get("/GetData", (req, res) => {
    res.status(200).send(Cars);
});