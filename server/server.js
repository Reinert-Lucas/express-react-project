const express = require("express");
const cors = require("cors");
const app = express();

// App Config
const corsOptions = {
    origin: ["http://localhost:5173"],
}
app.use(cors(corsOptions));
app.use(express.json());

app.post('/login', (req, res) => {
    const {user, pass} = req.body;

    // Database Connection & Validation here
    if(user === 'user1' && pass === '123') {
        res.json({success: true, message: 'Succesfuly Logged Into ur Account', redirectTo: '/weather'});
    } else {
        res.json({success: false, message: 'Wrong User or Password',  redirectTo: '/'});
    }

});

app.listen(3000, () => {
    console.log(`Server started on http://localhost:3000`);
});