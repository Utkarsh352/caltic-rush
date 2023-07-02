window.onload = function() {
    var timer = document.getElementById('time');
    var calculation = document.getElementById('calculation');
    var answerInput = document.getElementById('answer');
    var result = document.getElementById('result');
    var highestStreak = document.getElementById('highestStreak');
    var submitBtn = document.getElementById('submit');
    var currentStreak = 0;
    var highest = 0;
    var timerInterval;

    function generateQuestion() {
        var num1 = Math.floor(Math.random() * 10) + 2;
        var num2 = Math.floor(Math.random() * 10) + 2;
        return num1 + " + " + num2;
    }

    function startTimer() {
        var seconds = 0;
        timerInterval = setInterval(function() {
            seconds++;
            timer.innerText = seconds; 
            
        }, 1000);
    } 
    

    function resetTimer() {
        clearInterval(timerInterval);
        timer.innerText = 0;
    }

    function checkAnswer() {
        var answer = parseInt(answerInput.value);
        var numbers = calculation.innerText.split(" + ");
        var correctAnswer = parseInt(numbers[0]) + parseInt(numbers[1]);

        if (answer === correctAnswer) {
            result.innerText = "Correct!";
            currentStreak++;
            if (currentStreak > highest) {
                highest = currentStreak;
                highestStreak.innerText = highest;
            }
        } else {
            result.innerText = "Wrong!";
            currentStreak = 0;
        }

        answerInput.value = "";
        resetTimer();
        generateNextQuestion();
    }

    function generateNextQuestion() {
        calculation.innerText = generateQuestion();
        startTimer();
    }

    submitBtn.addEventListener('click', checkAnswer);
    generateNextQuestion();
};