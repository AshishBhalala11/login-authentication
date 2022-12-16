const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");

const server = jsonServer.create();
const userdb = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const ACCESS_TOKEN_KEY = "963258741";

const expiresIn = "1h";

function getAccessToken(payload) {
    return jwt.sign(payload, ACCESS_TOKEN_KEY, { expiresIn });
}

function isLoginAuthenticated({ email, password }) {
    return (
        userdb.users.findIndex(
            (user) => user.email === email && user.password === password) !== -1
    );
}

server.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;
    if (!isLoginAuthenticated({ email, password })) {
        const status = 401;
        const message = "Incorrect Email or Password";
        res.status(status).json({ status, message });
        return;
    }
    const access_token = getAccessToken({ email, password });
    res.status(200).json({ access_token });
});

server.get("/api/auth/token", (req, res) => {
    const header = req.headers['authorization'];
    if (typeof header !== 'undefined') {
        const headers = header.split(' ');
        const token = headers[1];
        req.token = token;
        jwt.verify(req.token, ACCESS_TOKEN_KEY, (err) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.status(200).json({});
            }
        })
    }

})

server.listen(8000, () => {
    console.log("running login server");
});