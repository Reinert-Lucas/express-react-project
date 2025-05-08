const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
    origin: ["http://localhost:5173"],
}
app.use(cors(corsOptions));
app.use(express.json());

app.post('/login', (req, res) => {
    const {user, pass} = req.body;

    if(user === 'user1' && pass === '123' || user === 'user2' && pass === '456') {
        res.json({success: true, message: 'Succesfuly Logged Into ur Account'});
    } else {
        res.json({success: false, message: 'Wrong User or Password'});
    }
});

app.listen(8080, () => {
    console.log(`Server started on http://localhost:8080`);
});