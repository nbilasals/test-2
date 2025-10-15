const quizzes = [
    {
        id: 1,
        title: "Basic JavaScript Function",
        description: "Write a function that returns the square of a number.",
        difficulty: "Easy",
        solution: "function square(num) { return num * num; }",
        test: (code) => {
            try {
                eval(code);
                return square(5) === 25 && square(3) === 9;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 2,
        title: "Array Sum",
        description: "Write a function that returns the sum of all numbers in an array.",
        difficulty: "Medium",
        solution: "function sumArray(arr) { return arr.reduce((sum, num) => sum + num, 0); }",
        test: (code) => {
            try {
                eval(code);
                return sumArray([1, 2, 3]) === 6 && sumArray([4, 5, 6]) === 15;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 3,
        title: "Reverse String",
        description: "Write a function that reverses a given string.",
        difficulty: "Easy",
        solution: "function reverseString(str) { return str.split('').reverse().join(''); }",
        test: (code) => {
            try {
                eval(code);
                return reverseString('hello') === 'olleh' && reverseString('world') === 'dlrow';
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 4,
        title: "Find Maximum",
        description: "Write a function that finds the maximum number in an array.",
        difficulty: "Medium",
        solution: "function findMax(arr) { return Math.max(...arr); }",
        test: (code) => {
            try {
                eval(code);
                return findMax([1, 5, 3, 9, 2]) === 9 && findMax([10, 0, -5]) === 10;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 5,
        title: "Fibonacci Sequence",
        description: "Write a function that returns the nth number in the Fibonacci sequence (0-based index).",
        difficulty: "Hard",
        solution: "function fibonacci(n) { if (n <= 1) return n; let a = 0, b = 1; for (let i = 2; i <= n; i++) { let temp = a + b; a = b; b = temp; } return b; }",
        test: (code) => {
            try {
                eval(code);
                return fibonacci(5) === 5 && fibonacci(7) === 13;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 6,
        title: "Check Palindrome",
        description: "Write a function that checks if a string is a palindrome (case-insensitive).",
        difficulty: "Medium",
        solution: "function isPalindrome(str) { str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); return str === str.split('').reverse().join(''); }",
        test: (code) => {
            try {
                eval(code);
                return isPalindrome('A man a plan a canal Panama') === true && isPalindrome('hello') === false;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 7,
        title: "Factorial",
        description: "Write a function that returns the factorial of a non-negative integer.",
        difficulty: "Easy",
        solution: "function factorial(n) { if (n === 0 || n === 1) return 1; return n * factorial(n - 1); }",
        test: (code) => {
            try {
                eval(code);
                return factorial(5) === 120 && factorial(3) === 6;
            } catch (e) {
                return false;
            }
        }
    }
];

let currentQuiz = null;
let scores = JSON.parse(localStorage.getItem('scores')) || [];

function showQuizList() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('quiz-list').style.display = 'block';
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('leaderboard').style.display = 'none';

    const quizList = document.getElementById('quiz-items');
    quizList.innerHTML = '';
    quizzes.forEach(quiz => {
        const li = document.createElement('li');
        li.textContent = `${quiz.title} (${quiz.difficulty})`;
        li.onclick = () => startQuiz(quiz);
        quizList.appendChild(li);
    });
}

function startQuiz(quiz) {
    currentQuiz = quiz;
    document.getElementById('quiz-list').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    document.getElementById('quiz-title').textContent = quiz.title;
    document.getElementById('quiz-description').textContent = quiz.description;
    document.getElementById('code-input').value = '';
    document.getElementById('feedback').textContent = '';
}

function submitSolution() {
    const code = document.getElementById('code-input').value;
    const feedback = document.getElementById('feedback');
    const isCorrect = currentQuiz.test(code);
    
    if (isCorrect) {
        feedback.textContent = 'Correct! Well done!';
        feedback.className = 'feedback-correct';
        const timeTaken = Math.floor(Math.random() * 60) + 30; // Simulated time in seconds
        const score = Math.max(100 - timeTaken, 10); // Simple scoring: max 100, decreases with time
        updateLeaderboard(score);
    } else {
        feedback.textContent = 'Incorrect. Please try again.';
        feedback.className = 'feedback-incorrect';
    }
}

function updateLeaderboard(score) {
    const playerName = prompt('Enter your name for the leaderboard:') || 'Anonymous';
    scores.push({ name: playerName, score });
    scores.sort((a, b) => b.score - a.score);
    scores = scores.slice(0, 10); // Keep top 10 scores
    localStorage.setItem('scores', JSON.stringify(scores));
    showLeaderboard();
}

function showLeaderboard() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('leaderboard').style.display = 'block';
    const leaderboardBody = document.getElementById('leaderboard-body');
    leaderboardBody.innerHTML = '';
    scores.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${index + 1}</td><td>${entry.name}</td><td>${entry.score}</td>`;
        leaderboardBody.appendChild(row);
    });
}

function backToQuizList() {
    document.getElementById('quiz-screen').style.display = 'none';
    showQuizList();
}

function backToWelcome() {
    document.getElementById('leaderboard').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'block';
}

// Initialize
showQuizList();