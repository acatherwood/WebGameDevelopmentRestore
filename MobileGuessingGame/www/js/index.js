/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 window.onload = function generateServerGuess() {

		var serverChoice = Math.floor(Math.random() * 10) + 1;
		document.getElementById("checkAnswer").addEventListener("click", checkAnswer);
		document.getElementById("checkAnswer").myParam = serverChoice;

 }


var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');


    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }


};


app.initialize();

//hold number of guesses
var guess = 0;



function checkAnswer(serverChoice) {
 var serverNumber = serverChoice.currentTarget.myParam;
    //userchoice
    var userChoice = document.getElementById("userChoice");
    var selectedChoice = userChoice.options[userChoice.selectedIndex].value;

    //game logic

    //do not allow user to guess more than 9 times.
    if (guess > 9){
        navigator.notification.alert("You exceeded the guess limit, game over. You lost.");
        window.location.reload(true);
        guess = 0;
    }
    else if (selectedChoice == serverNumber){
		guess++;
        navigator.notification.alert("You win! You guess the right answer in " + guess + " guesses!");
		window.location.reload(true);
		guess = 0;

    }
    else if(selectedChoice > serverNumber)
        {
            guess++;
            navigator.notification.alert("Wrong. Hint: Try a smaller number.");
        }
        else if(selectedChoice < serverNumber)
        {
            guess++;
            navigator.notification.alert("Wrong. Hint: Try a larger number.")
        }

		document.getElementById('guessCount').innerHTML = "Total Guesses: " + guess;

};

