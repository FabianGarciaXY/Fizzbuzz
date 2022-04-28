const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());


// Main route
app.get("/", (req, res) => {
    res.status(200).json({message: "Hiii"});
});

// Endpoint = localhost:3000/v1/explorers/:mission
// Request example = localhost:3000/v1/explorers/node
app.get("/v1/explorers/:mission", (req, res) => {
    
    const request = req.params.mission;
    const listOfExplorersByMission = ExplorerController.getExplorersByMission(request);
    res.status(200).json(listOfExplorersByMission);
});

// Endpoint = localhost:3000/v1/explorers/amount/:mission
// Request example = localhost:3000/v1/explorers/amount/node
app.get("/v1/explorers/amount/:mission", (req, res) => {
    
    const request = req.params.mission;
    const result = ExplorerController.getExplorersAmonutByMission(request);
    res.status(200).json({mission: request, quantity: result});
});

// Endpoint = localhost:3000/v1/explorers/usernames/:mission
// Request example = localhost:3000/v1/explorers/usernames/node
app.get("/v1/explorers/usernames/:mission", (req, res) => {

    const request = req.params.mission;
    const result = ExplorerController.getExplorersUsernamesByMission(request);
    res.status(200).json(result);
});

// Nuevo endpoint 
// Endpoint = localhost:3000/v1/fizzbuzz/:number
// Request example = localhost:3000/v1/fizzbuzz/30
app.get("/v1/fizzbuzz/:number", (req, res) => {

    const request = req.params.number;
    const result = ExplorerController.applyValidationInNumber(parseInt(request));
    res.status(200).json({ score: request, trick: result});
})


app.listen(port, () => {
    console.log(`Server Running in port ${port} ${new Date()}`);
});
