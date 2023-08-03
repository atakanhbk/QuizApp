
let answerBtn = document.querySelectorAll(".answer-btn");
let resultsCheck = document.querySelectorAll(".fa-check");
let resultsX = document.querySelectorAll(".fa-x");
let nextBtn = document.querySelector(".next-btn");



AddQuestionNumber();

CheckResults();

var questionNumberInt = parseInt(localStorage.getItem("questionNumber"));
var userCanSkipNextQuestion = false;


function AddAllButtonsEvents() {

    answerBtn.forEach(element => {
        element.addEventListener('click', function () {
            ClickedAnswerButton(element);
        })
    });

    nextBtn.addEventListener('click', function () {

        if (userCanSkipNextQuestion) {
            let indexName = 'index' + (questionNumberInt + 2) + '.html';

            if (questionNumberInt < 2) {
                window.location = indexName;

                console.log(parseInt(indexName));
                localStorage.setItem("questionNumber", questionNumberInt + 1);
            }
            else {
                localStorage.clear();
                window.location = "index.html";
            }

        }




    })


}

function AddQuestionNumber() {
    if (localStorage.getItem("questionNumber") === null) {
        localStorage.setItem("questionNumber", 0);
    }
}

function CheckResults() {

    if (JSON.parse(localStorage.getItem("window.location")) != null) {
        results = JSON.parse(localStorage.getItem("window.location"));

        console.log(results.length);

        if (results[0] == 1) {
            resultsCheck[0].style.display = 'block';
            resultsCheck[0].parentNode.style.backgroundColor = 'green';
        }

        else {
            resultsX[0].style.display = 'block';
            resultsX[0].parentNode.style.backgroundColor = 'black';
        }
        if (results.length >= 2) {
            if (results[1] == 1) {
                resultsCheck[1].style.display = 'block';
                resultsCheck[1].parentNode.style.backgroundColor = 'green';
            }

            else {
                resultsX[1].style.display = 'block';
                resultsX[1].parentNode.style.backgroundColor = 'black';
            }
        }

        if (results.length >= 3) {
            if (results[2] == 1) {
                resultsCheck[2].style.display = 'block';
                resultsCheck[2].parentNode.style.backgroundColor = 'green';
            }

            else {
                resultsX[2].style.display = 'block';
                resultsX[2].parentNode.style.backgroundColor = 'black';
            }
        }



    }


}




function ClickedAnswerButton(e) {

    let results;
    userCanSkipNextQuestion = true;;

    if (localStorage.getItem("window.location") === null) {
        results = [];
    }

    else {
        results = JSON.parse(localStorage.getItem("window.location"));
    }

    if (e.value == "correct") {
        e.style.backgroundColor = 'green';
        resultsCheck[questionNumberInt].style.display = 'block';
        resultsCheck[questionNumberInt].parentNode.style.backgroundColor = 'green';
        results.push(1);

    }
    else {
        e.style.backgroundColor = 'red';
        resultsX[questionNumberInt].style.display = 'block';
        resultsX[questionNumberInt].parentNode.style.backgroundColor = 'black';
        results.push(0);

    }
    localStorage.setItem("window.location", JSON.stringify(results));



    TurnOffAllButtons();
}


function TurnOffAllButtons() {
    answerBtn.forEach(element => {
        element.disabled = true;
    })
}
AddAllButtonsEvents();