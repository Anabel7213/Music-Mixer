//------------ SOUND CONTROLLER //
/* The sound controller is meant to support visuals and serves no technical purpose 
due to the inability to target a user device's native volume up volume down keyboard keys and potential cross-bowser compatibility disruption */
const soundController = document.getElementById("soundController"); //accessing our div styled as a button
let currentVolume = 0; //setting the starting point

function updateSoundControllerRotation() { //updating the sound controller rotation along with a user playing sound with key presses
  const angle = -60 + (currentVolume / 100) * 180; // Calculate the angle based on the current volume (the initial position of our button is -60deg)
  soundController.style.transform = `rotate(${angle}deg)`; //making the angle parameter dynamic
}
//------------ END SOUND CONTROLLER //

//------------- KEBOARD PLAYING //
//LISTENING TO CLICKS//
for (var i = 0; i < document.querySelectorAll(".keyboard").length; i++) { //setting a loop to iterate through each one of the keyboard elements
    document.querySelectorAll(".keyboard")[i].addEventListener("click", function() { //making our keyboard elements listen to mouse clicks 
        var keyClicked = this.innerHTML; //identifying which keyboard exactly was pressed
        playSound(keyClicked); //associated with another function that allows us to play a relevant to each keyboard sound thanks to it being identified with the .this
        playAnimation(keyClicked); //associated with another function that allows us to play animation once a keyboard is pressed or clicked on
    });
}
//LISTENING TO KEY PRESSES//
document.addEventListener("keydown", function(event) { //establishing that our event occurs upon a keypress (keydown) and when it occurs we want this set of instructions (function) to be executed
    playSound(event.key); //tapping into our event and telling it that we're looking for a key press to trigger sound play
    playAnimation(event.key); //tapping into our event and telling it that we're looking for a key press to trigger animation play
});
//MAKING INDIVIDUAL KEYBOARDS PLAY THEIR RELEVANT SOUND
function playSound(key) { //setting up the actual playSound function
  switch (key) { //using switch to play different sound based on what key was pressed or clicked on
    case "w": //in the case of the keyboard associated with "w" being pressed or clicked on trigger the following:
      var audioOne = new Audio("./sound-effects/Beep.mp3"); //play this specific record if the keyboard associated with "w" is pressed or clicked on
      audioOne.play(); //execute the record
      audioOne.addEventListener("play", function () { //circling back to our sound controller, we listen to when our keyboard is playing sound and triggering our sound controller rotation
        currentVolume += 10; //we increment by 10 given that our range is 00 to a 100
        if (currentVolume > 100) { //we restrict it to a 100 with the conditional if statement
          currentVolume = 100;
        }
        updateSoundControllerRotation(); //finally we update position (rotation) of our sound controller and repeat the exact same set of instructions for every key that we have
      });
      break; //with the break we declare the end of this case and allow ourselves to begin another

    case "a":
      var audioTwo = new Audio("./sound-effects/Dark-Bass.mp3");
      audioTwo.play();
      audioTwo.addEventListener("play", function () {
        currentVolume -= 10; //we decrement by 10 to differenciate between the visuals of our sound controller, so it changes from increment to decrement and vise versa, otherwise we wouldn't see the visual effect
        if (currentVolume < 0) { //we limit our range to a 0 with the conditional if statement
          currentVolume = 0;
        }
        updateSoundControllerRotation(); //update the rotation position of our sound controller again
      });
      break;

    case "s":
      var audioThree = new Audio("./sound-effects/Double-Horn.mp3");
      audioThree.play();
      audioThree.addEventListener("play", function () {
        currentVolume += 10;
        if (currentVolume > 100) {
          currentVolume = 100;
        }
        updateSoundControllerRotation();
      });
      break;

    case "d":
      var audioFour = new Audio("./sound-effects/OMG.mp3");
      audioFour.play();
      audioFour.addEventListener("play", function () {
        currentVolume -= 10;
        if (currentVolume < 0) {
          currentVolume = 0;
        }
        updateSoundControllerRotation();
      });
      break;

    case "z":
      var audioFive = new Audio("./sound-effects/Space-Sound.mp3");
      audioFive.play();
      audioFive.addEventListener("play", function () {
        currentVolume += 10;
        if (currentVolume > 100) {
          currentVolume = 100;
        }
        updateSoundControllerRotation();
      });
      break;

    case "x":
      var audioSix = new Audio("./sound-effects/Voice.mp3");
      audioSix.play();
      audioSix.addEventListener("play", function () {
        currentVolume -= 10;
        if (currentVolume < 0) {
          currentVolume = 0;
        }
        updateSoundControllerRotation();
      });
      break;

    default:
      console.log();
  }
}

//updating the rotation position of our sound-controller when our web page reloads / sort of reseting it
updateSoundControllerRotation();

function playAnimation(pressedKey) { //setting up the actual playAnimation function (set of instructions to be triggered upon a certain event)
    var activeKey = document.querySelector("." + pressedKey); //declaring a varibale to pull up our class related to a keyboard element, concatenating it with a period because it's essentially a class
    activeKey.classList.add("pressed"); //adding our SCSS defined set of rules to our variable as our animation
    activeKey.classList.remove("keyboard"); //removing the initially SCSS defined set of rules from our keyboard element so as to not have it override our new one

    setTimeout(function() {
        activeKey.classList.remove("pressed"); //since we don't want our pressed our clicked on keyboard remain in its active state style we set it back to its initial default style with our timeOut function that delays the switch back by 250ms in our case
        activeKey.classList.add("keyboard"); //declaring that we want our keyboard style switched back to its default one after 250ms
    }, 250);
}
//------------- END KEBOARD PLAYING //

//------------- ROUND BUTTONS //
for (var i = 0; i < document.querySelectorAll(".spin-button").length; i++) { //once again we just tap into all of our round buttons defined with the class named spin buttons (idk why cuz they don't spin but whatever that's the best I came up with)
    document.querySelectorAll(".spin-button")[i].addEventListener("click", function () { //we listen to mouse clicks on our round buttons
        var spinClicked = this.getAttribute('data-key'); //we identify which round button out of the three exactly was clicked on with the .this and getAttribute to tap into its data-key (we don't use the much simpler innerHTML in this case because our div has no inner content)
        playSpinSound(spinClicked); //we execute our other play sound function created specifically for these three buttons on our variable defined as spinClicked that gets to our spin button divs
    });
}

function playSpinSound(key) { //this function is exactly the same as our playSound for the keyboards and in fact we could just reuse that with the new key presses added to it of course
    switch (key) { //we are switching between different statements 
      case "b":
        var spinOne = new Audio("./sound-effects/Hip-Hop-Beats.mp3");
        spinOne.play();
        spinOne.addEventListener("play", function () {
          currentVolume += 10;
          if (currentVolume > 100) {
            currentVolume = 100;
          }
          updateSoundControllerRotation();
        });
        break;
  
      case "n":
        var spinTwo = new Audio("./sound-effects/Deep-Bass.mp3");
        spinTwo.play();
        spinTwo.addEventListener("play", function () {
          currentVolume -= 10;
          if (currentVolume < 0) {
            currentVolume = 0;
          }
          updateSoundControllerRotation();
        });
        break;
  
      case "m":
        var spinThree = new Audio("./sound-effects/Move-Over-Rover.mp3");
        spinThree.play();
        spinThree.addEventListener("play", function () {
          currentVolume += 10;
          if (currentVolume > 100) {
            currentVolume = 100;
          }
          updateSoundControllerRotation();
        });
        break;
  
      default:
        console.log(); //if some other than the defined key is pressed we console log it, we could also console log it as an error message
    }
  }

document.addEventListener("keydown", function(event) {
    playSpinSound(event.key); //we listen to the key presses and play our sound on our spin buttons (round buttons)
});
//------------- END ROUND BUTTONS //

//--------------- RECORDING - PAUSING - RESETING - ST0PING OUR SOUND & MORE //
//DEFINING ALL VARIABLES WE WILL NEED FIRST//
let soundMeterInterval;
let seconds = 0;
let isRecording = false;
let isRecordingPaused = false;

const startButton = document.querySelector(".start-recording"); //here we esentially grab all of our buttons that we want to manipulate in a certain way
const stopButton = document.querySelector(".stop-recording");
const resetButton = document.querySelector(".reset-recording");
const pauseButton = document.querySelector(".pause-recording");
const soundMeter = document.getElementById("sound-meter");
//ADDING CORE EVENT LISTENERS//
startButton.addEventListener("click", startRecording);
stopButton.addEventListener("click", stopRecording);
resetButton.addEventListener("click", resetRecording);
pauseButton.addEventListener("click", toggleRecordingPause);

startButton.addEventListener("mousedown", () => {
    if (!isRecording) { //because we set our isRecording to false initially this statement checks if isRecording is true, if it is true, meaning from the moment we started our recording and while it's being recorded our startButton will remain in its "pressed" style
      startButton.classList.add("start-recording-pressed");
    }
  }); //forcing our startButton remain in pressed position (style defined with SCSS) until we click on our stopButton
  
  stopButton.addEventListener("mouseup", () => {
    startButton.classList.remove("start-recording-pressed");
  }); //switching our startButton's style to its default one once we have clicked on our stopButton

function toggleRecordingPause() { //this function deals with our pause-recording button
  if (isRecordingPaused) { //this stament checks if the recording is currently paused
    mediaRecorder.resume(); //if so it resumes it (executes the function that hold the set of instructions on how to resume our record)
    isRecordingPaused = false; //we declare that it is indeed now not paused, it is resumed
    pauseButton.innerHTML = '<div class="rectangle"></div>'; //we keep our primary HTML element that we created
    resumeSoundMeter(); //we force our sound meter count (increment by one second every second) again because our recording is resumed
  } else { //in any other case (that is when our recording is playing) we pause it
    mediaRecorder.pause(); //we execute the function which contains a set of instructions on how to pause our recording
    isRecordingPaused = true; //we declare that now it is paused indeed
    pauseSoundMeter();
    pauseButton.innerHTML = '<div class="resume d-flex gap-2"><div class="left-resume"></div><div class="right-resume"></div></div>'; //we swap our primary HTML element that we created with another element that we did not create in HTML but want to add dynamically upon a certain condition
  }

//TOGGLING VISIBILITY OF THE PAUSE/RESUME//
  const resumeElements = pauseButton.querySelectorAll(".resume > div"); //because our .resume acts as a container for our left and right resume button bars we tap into its children
  resumeElements.forEach((element) => { //we say that we want it executed for every child of our .resume container
    element.classList.toggle("d-block"); //we say that we want to display them as a block which essentially makes them visible
  });
}
function pauseSoundMeter() {
    clearInterval(soundMeterInterval); //we stop counting with our sound meter because our recording is not being recorded when we pause it
  }
  
  function resumeSoundMeter() {
    soundMeterInterval = setInterval(updateSoundMeter, 1000); //we resume counting with our sound meter because our recording is being recorded now again
  }

//BEGIN RECORDING OUR RECORD
function startRecording() {
    if (!isRecording) { //because we set our isRecording to false initially (obviously because nothing is being recorder until we begin recording) this statement check if our isRecording is true (why? because of the "!" in front)
      seconds = 0; //we start with our sound meter set to 0
      soundMeter.innerText = formatTime(seconds); //we want our sound meter increment in seconds that will further on be converted to hh.mm.ss
      soundMeterInterval = setInterval(updateSoundMeter, 1000); //every 1000ms we increment by 1s (1000ms)
  
      navigator.mediaDevices //this is mediaDevices API that allows us to get our hands on our users' microphone and request access to it
        .getUserMedia({ audio: true }) //if we are granted access
        .then(function (stream) { //we begin streaming our audio 
          mediaRecorder = new MediaRecorder(stream); //we say that we essentially create a new audio by recording it
  
          mediaRecorder.addEventListener("dataavailable", handleDataAvailable); //we gather data from our recorded sounds to transale it into chunks that will eventually form a blob
          mediaRecorder.addEventListener("stop", handleStop); //we listen to when our recording is done being recorded and we execute our handleStop function which is described below
  
          mediaRecorder.start(); //if we got access to our user's microphone we execute our start function from our mediaDevice API
        })
        .catch(function (error) { //if we weren't granted access to our user's microphone we will not record anything but console log an error
          console.error("Error accessing microphone:", error);
        });
  
      isRecording = true; //now that we have actually started recording our isRecording becomes certainly true
    }
  }

function updateSoundMeter() { //this is an actual function that updates our sound meter, that is increments it by one second every second
  seconds++; //simply increment by one
  soundMeter.innerText = formatTime(seconds); //format it to seconds
}

function handleDataAvailable(event) { //we handle all the data that we gather with dataavailable and transform it into chunks
  console.log("Received data:", event.data);
  chunks.push(event.data); //pushing a new chunk to the end of our initially empty array of chunks
} 

function formatTime(totalSeconds) { //finally we make sure to convert our seconds to minutes and hours should we get to those with our recording
  const hours = Math.floor(totalSeconds / 3600); //simple math to convert it to hours (there are 3600 seconds in one hour so)
  const minutes = Math.floor((totalSeconds % 3600) / 60); //do the math
  const seconds = totalSeconds % 60; //and one more

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`; //this sort of allows us to ensure 0s in front of our hours, minutes, and seconds when necessary
}

function pad(value) {
  return String(value).padStart(2, "0"); //here all we do is say that until our string (because we convert our numerical value to a string) reaches 2 characters in length we keep a 0 in front, so if our pad is the value of 28s there will be no 0, but if it's 6s there will be a 0 in front like so 06s
}
//TERMINATING OUR RECORDING AHEAD OF TIME - RESETING//
function resetRecording() {
    clearInterval(soundMeterInterval); //essentially we clear our sound meter or reset it to 0
    seconds = 0; //to 0
    soundMeter.innerText = formatTime(seconds); //we still want it in seconds
    if (mediaRecorder && mediaRecorder.state === "recording") {
        mediaRecorder.removeEventListener("stop", handleStop); // Remove the event listener to prevent handleStop from executing
        mediaRecorder.stop();
        chunks = [];
    }
}

function handleStop() { //defining our handleStop function that we pass inside our other function
    if (chunks.length === 0) {
      window.alert("Yay! That one didn't make it. Let's try again!"); //if we decide that our recording did not go as planned and reset it this is the message we will see as an alert (NOT WORKING - COULDN'T SOLVE YET - NOT A CRITICAL ISSUE)
    } else { //this is what happens if we don't reset our recording and it carries on
      const recordedBlob = new Blob(chunks, { type: 'audio/webm' }); //in this case it will end up as a blob made up of chunks which is but an audio record, we set its format to webm here but it can be anything
      const downloadLink = document.createElement("a"); //we create a link to be actually able to download our recorded recording
      downloadLink.href = URL.createObjectURL(recordedBlob); //generating link
      downloadLink.download = "recorded_audio.webm"; //this is what we name our record file
  
      window.alert("Recording finished! Click OK to download the audio file."); //and now we say that we want our link to pop up on our screen as an alert (we can also make it a button and style it and place in a specific place on the screen but my focus here was on functionality so I decided to go with a simple alert)
      downloadLink.click(); //we click to download 
    }
    clearInterval(soundMeterInterval);
    seconds = 0; //we reset our sound meter because we are done recording
    chunks = []; //we also clear our array free of any chunks because we don't want to carry them over to our next recording shall we decide to record another one
    mediaRecorder.addEventListener("stop", handleStop); //we add our event listener again to handle stops for future recordings
  }
//STOPPING OUR RECORDING - INCLUDING THE FLUSHING RED DOT//
  function stopRecording() {
    clearInterval(soundMeterInterval);
    seconds = 0; //we reset our sound meter again because we no longer record

    if (mediaRecorder && mediaRecorder.state !== "inactive") { //this is what allows us to stop that red dot from flushing because we set our mediaRecorder's state to inactive
      mediaRecorder.stop(); //and we stop it if it is indeed equal to inactive (we check for it first)
      chunks = []; //we reset our array of chunks because it's now done recording
      const tracks = mediaRecorder.stream.getTracks(); //we stop all of our recordings in our media stream, we are no longer streaming so there's nothing to record and it stops
      tracks.forEach((track) => track.stop()); //we reinforce the statement that it's done for each one of them
    }
    isRecording = false; //now that we're no longer recording our isRecording becomes false again
  }