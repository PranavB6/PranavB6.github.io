# TMA1

## Part 1

Description
  * We were tasked with converting our resume into XML format
  * Our XML resume had to contain at least three sections: general-info, education and work experience
  * After that, we were tasked with creating a xsd file. With this if we make any changes to the xml file in the future, we can be sure our format is correct and there are no breaking changes by validating the file (and its schema).
  * Finally, we were to an xsl file to display our xml in a nice looking format 
       
Analysis and Design
  * From the requirements, we can deduce the three major sections: general-info, education and work-exp, so lets make those the top three elements
  * Since this is a technical resume, we will also put in computer languages in the general info
  * In work-exp, a user may put in multiple jobs, so we need to make sure to allow that
  * I also want to make the gpa optional since the user may not want to show it
  * The xsd file is relatively simple because the schema of the document is simple
  * For the xsl file, I tried to make it look similar to my current resume

Documentation
  * There are 3 main sections: general-info, education and work-exp
  * In general-info, the user can input the computer languages they know, the awards they earned, their hobbies and their licence 
  * In the education section, the user may put in one or more schools they have studied at along with the school name, their degree, grad-year and optionally, their gpa
  * In the work-exp section, the user can put in one or more jobs they have worked at, with the company name, their title, the duration as well as a description

User Guide
  * Click on the "part1" from the home page to view the resume

## Part 2

Description
  * In this part, we were tasked with creating a tutorial of the 3 units we have learned so far, including HTML5, CSS3, JavaScript, XML and Ajax.
  * There must be a welcome page with a name, a banner, navigation menus and buttons
  * *There should also be an explanation of the applications, what it does and how they should proceed*
  * For the HTML5 tutorial, we must cover at least 5 page-structure elements and 6 new input types
  * There must also be a quiz for each tutorial
    * Each quiz should be able to be accessed in the navigation menu
    * There should also be a submit button, which, when pressed should display your score in % and show the correct answers
    * Quizzes should be easily modifiable
  * We must use an external stylesheet to ensure consistent styling
  * We must use the technologies taught in the first 3 units: HTML5, CSS3, JavaScript, XML and Ajax
       
Analysis and Design
  * The content of every tutorial is different, however the page layout will be mostly the same
  * Every quiz will be in an XML format which will be put into the webpage via AJAX
  * Quizzes will be at the bottom of every unit
  * We will trigger a method to mark the quizzes and display the correct answers and the final result
  * To mark the quizzes, we will put in an "is-answer" attribute to the correct answer and simply make sure that it is marked

Documentation
  * Every quiz is an XML file with a similar format: a question tag with its options inside of it. 
  * The question tag will have an attribute of text display the actual question. 
  * If an option has an "is-answer" attribute set to "true", it is the correct option. There should be at least one "is-answer: "true"" for every question.
  * The init() function is called for every unit which loads and setups the quiz
  * To mark the quizzes, each option element is reviewed. If the element is checked and has an "is-answer" attribute set to "true", it is correct, otherwise, if it is checked but its not the answer, it is incorrect

User Guide
  * Navigate throughout the tutorial using the navigation links
  * Read the sections
  * After you are done reading the sections, go through the quiz, marking off what you think is the correct answer.
  * See how you did by pressing the submit button.

## Part 3

Description
  * In this section, we were tasked with creating a slideshow viewer
  * The slideshow had to contain at least 20 pictures that were taken by ourselves to avoid copyright
  * Each pic was to have a caption
  * There should be a way to control the slideshow: Play/Pause Forward/Back
  * We must also add different transitions (3 in total)
  * Also a shuffle mode (which should disable moving forward/back)
  * The images were to be in JSON format to make them and thier captions easily changeable
       
Analysis and Design
  * Since we will be handling a lot of images and frequently needed to get the next/previous/random image, we will create an Images class which will handle them.
  * The Images class will have a getNext(), getPrevious() and getRandom() method to easily by able to obtain the correct images to display
  * The Images class also eliminates the need for global variables to handle which image to display next
  * Icons were obtained from the Material Icons website: https://material.io/resources/icons/
  * The three transitions I chose are: None, Slide and Fade. I chose these because they are common and intuitive transitions.

Documentation
  * The window.onload function creates a new canvas context instance and initializes all the buttons and their functions
  * The main method is continueSlideshow() which obtains the next image to be displayed and then calls the appropriate transition.
  * drawImg handles drawing of the image as well as its caption
  * Every transition only requires the images to be transitioned, so they are self contained
  * I used requestAnimationFrame instead of setTimeout because I found it to be alot smoother in creating the transition effect

User Guide
  * Use the ">>" button to move to the next image
  * Use the "<<" button to move to the previous image
  * Use the shuffle/random icon to toggle between sequential and randomize mode
  * Use the play icon to start the slideshow playing automatically
  * Use the pause icon to stop the slideshow
  * Use the select dropdown menu to select the transition


### Part 4

Description
  * For this part, we were tasked with create 3 utility tools
  * The first tool was a measurement converter which should be able to convert between units of weights, lengths, areas and volumes.
  * The second tool was a mortgage calculator. Since the output was not specified, I decided to include the number of payments, the amount of each payment, the total amount paid and the total interest.
  * The third tool was one of our choosing. The requirements specifically say to make a useful tool, so I decided to make a number converter that can converter to different bases of numbers.
  * Why a number converter is useful:
    * While studying software there have been a number of times where I needed to convert between different bases of numbers, however, all the tools I found online were not very satisfactory.
  * Advantages of my implementation:
    * It updates the values as you type, there's no extra step of clicking a submit button
    * It shows you the input in decimal, hexadecimal, octal, and binary all at once so you don't need a separate search for different numbers
    * You can enter in multiple numbers in a comma-separated list so you can check multiple numbers at the same time
       
Analysis and Design
  * For the measurement converter, I decided to create an object representing equivalent units. For example - kg: 1, g: 1000, lb: 2.20. I could then take any weight unit, divide it by its value in the object to get its equivalent unit in kg and then multiply it by the expected unit value to get the result. For example: 2lb -> _g; (2lb / 2.2) * 1000 ~ 907g
  * For the mortgage calculator, we needed the mortgage amount, the annual interest rate, the amortization period and the payment frequency. We could then simply input these values into a formula and obtain the information we need.
  * For the number converter, I take the string of comma-separated numbers, split it into an array, convert the number and display it into the boxes. I took advantage of the parseInt() function's ability to parse an input into a specific base and I used the toString() function's ability to convert a number into another base.

Resources
  * Where I obtained conversions values between units: https://www.unitconverters.net/
  * Where I obtained amortization formula: https://www.vertex42.com/ExcelArticles/amortization-calculation.html

Documentation
  * For the measure calculator, the conversions object is used to store equivalent measurements. There is an event listener on all of the inputs. When a user changes the input, the value is converted into all other units using the formula output_value = (input_value / input_equivalent_value) * output_equivalent_value.
  * For the mortgage calculator, there is an event listener on all of the inputs. When a user changes any of the inputs, the resulting values are calculated based on the formula given in Resources.
  * For the number calculator, the input has an event listener. Whenever the user changes the input, the input string is split by the commas to create an array. Each number in the array is converted into its decimal, hexadecimal, octal and binary equivalent. 

User Guide
  * Click on the appropriate button to load the tool you want
  * For the measurement converter, select the measurement, the unit and its value and see the results
  * For the mortgage calculator, input the appropriate values and see the results!
  * For the number calculator, type in your number value and your number's base, and see the results!