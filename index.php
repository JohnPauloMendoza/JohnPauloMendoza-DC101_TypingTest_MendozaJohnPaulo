<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typing Speed Test</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <img src="assets/logo.jpg" alt="Typing Speed Test Logo" class="logo">
</header>


<main>
    <section class="game-container">
        <p id="quote">Click start to begin typing test.</p>

        <textarea
            id="text-input"
            placeholder="Start typing here..."
            disabled
        ></textarea>

      <div class="stats">
    <p>Time: <span id="time">0</span>s</p>
    <p>WPM: <span id="wpm">0</span></p>
    <p>Best WPM: <span id="best-wpm">0</span></p>
</div>

        <button id="start-btn">Start Test</button>
    </section>
</main>

<footer>
    <p>© 2026 Typing Speed Test</p>
</footer>

<script src="script.js"></script>
</body>
</html>
