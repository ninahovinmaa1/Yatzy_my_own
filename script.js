document.addEventListener("DOMContentLoaded", function(event) {
    
    let player1_ones = document.getElementById("player1_ones");     // sparar elementet i en variabel. <input type="text" id="player1_ones">.
    let player1_twos = document.getElementById("player1_twos");
    let player1_threes = document.getElementById("player1_threes");
    let player1_fours = document.getElementById("player1_fours");
    let player1_fives = document.getElementById("player1_fives");
    let player1_sixes = document.getElementById("player1_sixes");
    let player1_sum = document.getElementById("player1_sum");
    let player1_bonus = document.getElementById("player1_bonus");

    document.getElementById("form").addEventListener("input", function(e) {  //when user inputs in form, run the following: 
        let sum = 0;                        // value 0 given to variables sum & tmp in case user input is 0.
        let tmp = 0;

        tmp = player1_ones.value;           // saves user inputen from field player1_ones in variabel tmp. 
        if (!isNaN(Number(tmp))) {          // Checks if value of tmp(=user input) is of type not-not-a-number, aka if it is a number. Non-numeric string will result in NaN. Number(tmp) converts tmp (user input) into a type number.
            sum += Number(tmp);             // sum = sum + tmp. Adds value of tmp (as type number) to variable sum. 
        };

        tmp = player1_twos.value;            // does the same as above but for player1_twos. 
        if (!isNaN(Number(tmp))) {          
            sum += Number(tmp);             // includes results for ones and twos.
        };

        tmp = player1_threes.value;         // does the same as above but for player1_threes. 
        if (!isNaN(Number(tmp))) {
            sum += Number(tmp);             // includes results for ones, twos and threes.
        };

        tmp = player1_fours.value;
        if (!isNaN(Number(tmp))) {
            sum += Number(tmp);
        };

        tmp = player1_fives.value;
        if (!isNaN(Number(tmp))) {
            sum += Number(tmp);
        };

        tmp = player1_sixes.value;
        if (!isNaN(Number(tmp))) {
            sum += Number(tmp);             // includes results for ones, twos, threes, fours, fives and sixes.
        };

        player1_sum.value = sum;            // puts value of sum (that now includes ones+twos+threes+fours+fives+sixes) to field player1_sum. 

        if (sum >= 63) {                    // if sum value is at least 63 -> 
            player1_bonus.value = 50;       // give player a bonus of 50 points. Puts value of bonus (50) to field player1_bonus.
        };

    });

   /* calc_button.addEventListener("click", function(event){  //Ha koll på om någon klickar på beräkna-knappen. 
                                                            // om ja, då händer detta.
    }); */
    
});