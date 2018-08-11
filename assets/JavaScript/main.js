// Global Variables
var wins = 0;
var losses = 0;
var goalNumber = 0; // calling math.random elsewhere
var playerGuess;
var crystals = ["crystal1", "crystal2", "crystal3", "crystal4"];
// calling each crystal with a crystal1: Math.Random() * (max - min) + min later
// Functions
// $(document).ready(function() {
    // Reset function
        //Show random number between 19 - 120
        function randomNumberFromRange() {
            goalNumber = (Math.floor(Math.random() * 101) +19);
            console.log(goalNumber);
        }
        randomNumberFromRange();
        //Assign each crystal hidden value between 1 - 12
        for (var i =0; i <crystals.length; i++){
            function randomCrystalNumbers() {
                crystals[i] = (Math.floor(Math.random() * 12) +1);
                console.log(crystals);
            }
        randomCrystalNumbers();
        }
        