
let answerBtn = document.querySelectorAll(".answer-btn");
let resultsCheck = document.querySelectorAll(".fa-check");
let resultsX = document.querySelectorAll(".fa-x");







function AddAllButtonsEvents() {
    answerBtn.forEach(element => {
        element.addEventListener('click', function () {
            ClickedAnswerButton (element);
        })
        
    });
    
}


function ClickedAnswerButton(e) {
    if (e.value == "correct") {
        e.style.backgroundColor = 'green';
        resultsCheck[0].style.display = 'block';
        resultsCheck[0].parentNode.style.backgroundColor = 'green';
    }
    else{
        e.style.backgroundColor = 'red';
        resultsX[0].style.display = 'block';
        resultsX[0].parentNode.style.backgroundColor = 'black';
    }

    TurnOffAllButtons();
}

function TurnOffAllButtons() {
    answerBtn.forEach(element => {
        element.disabled = true;
    })
}
AddAllButtonsEvents();