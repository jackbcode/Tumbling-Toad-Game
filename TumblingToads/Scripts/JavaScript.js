
window.onload = function () {

   

    var img6 = document.createElement('img');
    img6.id = "mainPic"
    img6.src = "Images/01.%20Frog%20Sitting.png";
    document.getElementById("container").appendChild(img6);


    // declaring letters in alphabet to make available for buttons
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var word; // Random word selection of category chosen;
    var guess; // User Guess
    var guesses = []; //  array to store letters(user's guesses)
    var lives;   //Lives available to user
    var counter; //Counts correct guesses
    var space;   //creates number of spaces in word

    //Get elements from HTML 

    var showLives = document.getElementById("userlives");
    var showCatagory = document.getElementById("catagoryNameHolder");
    var toadframe = document.getElementById("toadpic");

    //**need to get this from C# session state*************

    // gets button div and creates list for alphabet buttons
    var buttons = function () {
        alphButtons = document.getElementById("buttons");
        letters = document.createElement("ul");

        //for loop to loop through alphabet variable and asign buttons to list/create button

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = "alphabet";
            //assign list to alphabet
            list = document.createElement("li");
            list.id = "letters";
            list.innerHTML = alphabet[i];
            //assign html of list to letters
            check();
            alphButtons.appendChild(letters);
            //append letters list to html
            letters.appendChild(list);
            //append individual letters to list
        }
    };

    //create categories for word js/c#

    getCategory = function () {

        // gets category choice selected from home screen windows form, converts to data readable by Javascript.
        // sets Category Paragraph to Category choice
        var CategoryChoice = document.getElementById("categoryInfo").value;
        showCatagory.innerHTML = "The chosen Category is " + CategoryChoice;
    }


    //Creation of word to guess, creating '-' for each letter in word;

    wordConstructor = function () {

        categoryWordHolder = document.getElementById("hold");
        //creating list 
        correct = document.createElement("ul");

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            //adds letter to word if correct
            if (word[i] === "-") {                           //LOOK INTO BETTER OPTION????
                guess.innerHTML = "-";
                space = 1;
                //if word incorrect stays the same
            } else {
                guess.innerHTML = "_";
            }
            guesses.push(guess); //add guess to guesses[] array
            categoryWordHolder.appendChild(correct);
            // add correct list to hold div in HTML. list equals guesses array[]
            correct.appendChild(guess);

        }

    }




    //amount of lives left - for if statement

    resultDisplay = function () {
        showLives.innerHTML = "You have " + lives + " lives before you croak!";
        if (lives < 1) {
            displayToadPicture();
            showLives.innerHTML = "* Game over - The Toad Tumbled *";
            showLives.setAttribute('class', 'lose');
            reset();

            

        }

        //for loop through guesses if counter(correct guess) is equal to the amount of guesses, win.
        for (var i = 0; i < guesses.length; i++) {
            if (counter + space === guesses.length) {
                showLives.setAttribute('class', 'won');
                showLives.innerHTML = "* You Win - You Stopped The Toad From Tumbling *" + "<br>";
                var winner = document.createElement('img');
                winner.id = "winner";
                winner.src = "Images/win.jpg";
                showLives.appendChild(winner);
               
                reset();

          
            }
        }
    };

    // Function to Display Toad picture depending on how many incorrect guesses

    //**************** FIGURE OUT HOW TO DISPLAY PICTURES IN ARRAY *****************



    //// function to display picture depending on how many lives the user has


    displayToadPicture = function () {

       

        if (lives == 0) {
            var image_x = document.getElementById('mainPic5');
            image_x.parentNode.removeChild(image_x);
            var img1 = document.createElement('img');
            img1.id = "mainPic6";
            img1.src = "Images/06.%20Splash.png";
            document.getElementById("container").appendChild(img1);


        } else if (lives == 1) {
            var image_x = document.getElementById('mainPic4');
            image_x.parentNode.removeChild(image_x);
            var img2 = document.createElement('img');
            img2.id = "mainPic5";
            img2.src = "Images/05.%20Frog%201%20Leg%20Left.png";
            document.getElementById("container").appendChild(img2);

        } else if (lives == 2) {
            var image_x = document.getElementById('mainPic3');
            image_x.parentNode.removeChild(image_x);
            var img3 = document.createElement('img');
            img3.id = "mainPic4";
            img3.src = "Images/04.%20Frog%202%20Arms%20Off.png";
            document.getElementById("container").appendChild(img3);

        } else if (lives == 3) {
            var image_x = document.getElementById('mainPic2');
            image_x.parentNode.removeChild(image_x);
            var img4 = document.createElement('img');
            img4.id = "mainPic3";
            img4.src = "Images/03.%20Frog%201%20Arm%20Off.png";
            document.getElementById("container").appendChild(img4);
            
        } else if (lives == 4) {
            var image_x = document.getElementById('mainPic');
            image_x.parentNode.removeChild(image_x);
            var img5 = document.createElement('img');
            img5.id = "mainPic2";
            img5.src = "Images/02.%20Frog%20Upside%20Down.png";
            document.getElementById("container").appendChild(img5);

            

        }



    }



    //create array of images to display depending on number of lives 
    //var imgArray = new array();

    // 6 images in total - Max Lives is 5
    // 0 = splash, 1 = 1 arm hang, 2 = 2 arm hang, 3= 1 leg hang
    //4 = whole body hang, 5 = sitting on branch.
    //imgArray[0] = new Image();
    //imgArray[0].src = "Images/06.%20Splash.png"

    //    imgArray[1] = new Image();
    //    imgArray[1].src = "Images/05.%20Frog%201%20Leg%20Left.png";

    //    imgArray[2] = new Image();
    //    imgArray[2].src = "Images/04.%20Frog%202%20Arms%20Off.png";

    //    imgArray[3] = new Image();
    //    imgArray[3].src = "Images/03.%20Frog%201%20Arm%20Off.png";

    //    imgArray[4] = new Image();
    //    imgArray[4].src = "Images/02.%20Frog%20Upside%20Down.png";

    //    imgArray[5] = new Image();
    //    imgArray[5].src = "Images/01.%20Frog%20Sitting.png";


    // For loop to loop through pictures of array and display picture in HTML depending on number of lives




    //var img =d
    //    var img = document.getElementById("toadframe");

    //    for (var i = 0; i < imgArray.length; i++) {


    //    if (imgArray[i] == lives) {
    //        document.getElementById("toadframe").src = imgArray[i].src;

    //        //May have to put img src in HTML = div id ="toadpic"
    //        //<img src="SITTING ON BRANCH PIC" alt="" id="mainImg">
    //        //if doesnt work -
    //        //
    //        //document.body.appendChild(toadframe);
    //    }
    //}




    //// Letter Clicked function - OnClick

    check = function () {

        //click on alphabet button(list)
        list.onclick = function () {

            var guess = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;

            //if guess is correct - replaces guess inner html in guess array 



            for (var i = 0; i < word.length; i++) {

                if (word[i] === guess) {

                    guesses[i].innerHTML = guess;

                    counter += 1;
                }
            }
            //if guess is incorrect
            //if value is not found in wordindex(-1) will reduce lives
            var t = (word.indexOf(guess));
            console.log()

            if (t === -1) {

                lives -= 1;

                resultDisplay(lives);

                displayToadPicture();
               
       
               

            } else {

                resultDisplay();
            }

        }

    }

    reset = function () {

            correct.parentNode.removeChild(correct);
            letters.parentNode.removeChild(letters);
            showCatagory.innerHTML = "";
        }
    

    //Play game
    play = function () {
        //word to guess, converted wordgenerator CS to JS
        var wordtoguess = document.getElementById("hiddenCsharpdata").value;
        word = wordtoguess;
        console.log(word); //log word to screen for developer use
        buttons(); //call create button function
        guesses = []; //creates empty array
        lives = 5; //number of guesses user has to get word or gameover
        counter = 0;
        space = 0;
        getCategory();
        resultDisplay();
        check();
        wordConstructor();
   

    }
    play();

    

};























