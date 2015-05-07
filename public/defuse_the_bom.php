<!DOCTYPE html>
<html>
<head>
    <title>Defuse the BOM</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <style>
    	body {
    		font-family: sans-serif;
    	}
    	img {
    		margin: auto auto;
    	}
    	#message {
    		color:pink;
    		font-size: 40px;
    		text-align: center;
    	}
    	#defuser {
    		text-align: center;
    		font-size: 20px;
    		margin-left: 0 auto;
    		padding: 30px;
    		background-color: pink;
    		color: #fff;
    		position: absolute;
    	}

    </style>
</head>
<body>
    <h2 id="message">This BOM will self destruct in <span id="timer">50</span> seconds...</h2>

    <a id="defuser">Defuse the BOM</a>

    <script>
    	"use strict";

        var detonationTimer = 50;
        var button = document.getElementById("defuser");

        //TODO: This function needs to be called once every second
        var intervalID = setInterval(function updateTimer()
        {
            if (detonationTimer == 0) {
                alert('EXTERMINATE!');
                document.body.innerHTML = '<img src="http://static.tvtropes.org/pmwiki/pub/images/dead-unicorn1.jpg" />';
            } else if (detonationTimer > 0) {
                document.getElementById('timer').innerHTML = detonationTimer;
            }

            detonationTimer--;
        },1000);

        // TODO: When this function runs, it needs to
        // cancel the interval/timeout for updateTimer()
        function defuseTheBOM()
        {
        	clearInterval(intervalID);
        	clearInterval(buttonInterval)
        	alert("YOU ARE A HERO! LALALA");
        	document.body.innerHTML = '<img src="https://33.media.tumblr.com/d0b583b117842783d39c4bad3faa986f/tumblr_myhkjwE1ad1t2mlhfo1_400.gif" />'
        }

        var buttonInterval = setInterval(function buttonMove ()
        {	        
        	var top = Math.floor(Math.random()*100);
	        var left = Math.floor(Math.random()*100);
        	button.style["top"] = top + "%";
        	button.style["left"] = left + "%";
        }, 700);

        // Don't modify anything below this line!
        //
        // This causes the defuseTheBOM() function to be called
        // when the "defuser" button is clicked.
        // We will learn about events in the DOM lessons
        var defuser = document.getElementById('defuser');
        defuser.addEventListener('click', defuseTheBOM, false);
    </script>
</body>
</html>