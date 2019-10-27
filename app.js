//экспресс заглушка
const express = require("express");
const app = express();
const jsonParser = express.json();

app.use(express.static(__dirname + "/public"));

let fs = require('fs');
let questions = fs.readFileSync("questions.json", "utf8");

app.listen(3000);

app.post("/api/questions", jsonParser, function (request, response) {
    response.json(questions);
});

app.post("/api/results", jsonParser, function (request, response) {
    //сопоставление с матрицей тарифов и выдача тарифа

    
    //тариф заглушка
    let plan = {
        "title": "Бизнес-старт",
        "description": "Идеален для начала работы со счетом и для компаний с небольшими оборотами",
        "price": "1200"
    }
    response.json(JSON.stringify(plan));
});