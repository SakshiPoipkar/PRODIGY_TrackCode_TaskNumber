# PRODIGY_TrackCode_TaskNumber
Stopwatch web application 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stopwatch</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="stopwatch">
        <h1 id="display">00:00:00</h1>
        <div class="buttons">
            <button id="start">Start</button>
            <button id="pause">Pause</button>
            <button id="reset">Reset</button>
            <button id="lap">Lap</button>
        </div>
        <div id="laps" class="laps"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
