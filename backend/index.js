import express from 'express';

const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
    res.json({
        sucess: 1,
        message: "This is Homepage",
    });
});

app.get("/login", (req, res) => {
    res.json({
        sucess: 1,
        message: "This is Homepage",
    });
});

app.listen(PORT, () => {
    console.log("->", `http://localhost:${PORT}`);
});