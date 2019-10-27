//экспресс заглушка
const express = require("express");
const app = express();
const jsonParser = express.json();

app.use(express.static(__dirname + "/public"));

app.listen(3000);

app.post("/api/questions", jsonParser, function (request, response) {
    res.sendFile(path.normalize(__dirname + '/questions.json'))
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