# Interactive Code Quiz Platform
## Overview
This is a web-based interactive quiz platform designed for students to practice coding skills through engaging challenges. The platform features a mobile-friendly UI, instant feedback on coding solutions, and gamification elements like scoring and a leaderboard.
### Features
- User Interface: Simple, responsive, and mobile-friendly design.
- Quiz Functionality: Displays a list of coding challenges with varying difficulty levels. Allows users to select a challenge and input code in a textarea. Provides instant feedback on whether the solution is correct.
- Gamification: Scoring system based on correctness and simulated time taken. Leaderboard displaying top 10 scores.
- Local Storage: Persists leaderboard data across sessions.

## Setup Instructions
- Clone the Repository:git clone <repository-url>
- Navigate to the Project Directory:cd code-quiz-platform
- Open the Application: Open `index.html` in a web browser (e.g., Chrome, Firefox).cNo additional server setup is required as the app runs entirely in the browser.
- Dependencies: No external libraries are required. The application uses vanilla HTML, CSS, and JavaScript.

## Usage Instructions

1. Start the Quiz:
Click "Start Quiz" on the welcome screen to view available quizzes.
Select a quiz from the list to begin.

2. Solve the Challenge:
Read the quiz description and write your code in the provided textarea.
Click "Submit Solution" to receive instant feedback.

3. View Leaderboard:
After a correct submission, enter your name to add your score to the leaderboard.
View the top 10 scores at any time via the leaderboard screen.

4. Navigation:
Use "Back to Quiz List" or "Back to Home" buttons to navigate between screens.

## Project Structure
index.html: Main HTML file for the application.
styles.css: CSS file for styling the UI.
script.js: JavaScript file containing quiz logic, feedback, and leaderboard functionality.
README.md: This file, providing setup and usage instructions.

Enhance the scoring system to account for code quality or efficiency.
Add syntax highlighting for the code input area.
