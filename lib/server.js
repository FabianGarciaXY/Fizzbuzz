const ExplorerController = require('./controllers/ExplorerController');
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

// Main route
app.get('/', (req, res) => {
    res.status(200).json({message: 'Hiii'});
});

// Endpoint = localhost:3000/v1/explorers/:mission
// Request example = localhost:3000/v1/explorers/node
app.get('/v1/explorers/:mission', (req, res) => {
    const request = req.params.mission;
    console.log(request)
    const listOfExplorersByMission = ExplorerController.getExplorersByMission(request);

    res.status(200).json(listOfExplorersByMission);
});


app.listen(port, () => {
    console.log(`Server Running in port ${port} ${new Date()}`)
})
