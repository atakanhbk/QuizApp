
let answerBtn = document.querySelectorAll(".answer-btn");
let resultsCheck = document.querySelectorAll(".fa-check");
let resultsX = document.querySelectorAll(".fa-x");
let nextBtn = document.querySelector(".next-btn");


AddQuestionNumber();

CheckResults();

var questionNumberInt = parseInt(localStorage.getItem("questionNumber"));
function AddAllButtonsEvents() {
  
    answerBtn.forEach(element => {
        element.addEventListener('click', function () {
            ClickedAnswerButton(element);
        })
    });

    nextBtn.addEventListener('click', function () {
        window.location = 'index2.html';
        localStorage.setItem("questionNumber",questionNumberInt + 1);


    })
}

function AddQuestionNumber() {
    if(localStorage.getItem("questionNumber") === null){
        localStorage.setItem("questionNumber",0);
    }
}

function CheckResults() {

    if (JSON.parse(localStorage.getItem("window.location")) != null) {
        results = JSON.parse(localStorage.getItem("window.location"));



        if (results[0] == 1) {
            resultsCheck[0].style.display = 'block';
            resultsCheck[0].parentNode.style.backgroundColor = 'green';
        }

        else {
            resultsX[0].style.display = 'block';
            resultsX[0].parentNode.style.backgroundColor = 'black';
        }

        if (results[1] == 1 && results.length > 1) {
            resultsCheck[1].style.display = 'block';
            resultsCheck[1].parentNode.style.backgroundColor = 'green';
        }

        else if(results[1] == 1 && results.length > 1) {
            resultsX[1].style.display = 'block';
            resultsX[1].parentNode.style.backgroundColor = 'black';
        }
    }


}




function ClickedAnswerButton(e) {

    let results;

    
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