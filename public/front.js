//let request = new XMLHttpRequest();

//request.open("POST", "/api/questions", true);   
//request.setRequestHeader("Content-Type", "application/json");
//let questions;
//request.addEventListener("load", function () {
//    // получаем и парсим ответ сервера
//     questions = JSON.parse(request.response);
//     console.log(questions);   // смотрим ответ сервера
// });
//request.send();
//console.log(questions);

let count = 0;
clear_question();
clear_answer();

function start_question(id){

}

function clear_answer() {
    $('.second_page').hide();
    $('.third_page').hide();
    $('.fourth_page').hide();
    $('.fifth_page').hide();
    $('.sixth_page').hide();
    $('.seventh_page').hide();
    $('.eighth_page').hide();
    $('.ninth_page').hide();
    $('.menu').hide();
}

function clear_question(){
    subbtns = $('.answer_block').find('.subanswer_block').hide();
    $('.answer_block').removeClass('selected');
    $('.answer_block').find('.subanswer_block').removeClass('selected')
}

$('#start_btn').on('click', function (event) {
    $('.first_page').hide();
    //$('.menu').show();
    $('.final_page').show();
});

$('#btn_2').on('click', function (event) {
    $('.second_page').hide();
    $('.third_page').show();
});

$('#btn_3').on('click', function (event) {
    $('.third_page').hide();
    $('.fourth_page').show();
});

$('#btn_4').on('click', function (event) {
    $('.fourth_page').hide();
    $('.fifth_page').show();
});

$('#btn_5').on('click', function (event) {
    $('.fifth_page').hide();
    $('.sixth_page').show();
});

$('#btn_6').on('click', function (event) {
    $('.sixth_page').hide();
    $('.seventh_page').show();
});

$('#btn_7').on('click', function (event) {
    $('.seventh_page').hide();
    $('.eighth_page').show();
});

$('#btn_8').on('click', function (event) {
    $('.eighth_page').hide();
    $('.ninth_page').show();
});

$('.answer').on('click', function (event) {
    clear_question();
    btn = event.target;
    btn.parentElement.className += " selected";    
    $(this).parent().children('.subanswer_block').show();     
});
