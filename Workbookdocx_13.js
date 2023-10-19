/** 13 Function */
/** 13-1-0 Functional Commenting */
/**
 *   13-1-1
 *   Initialise a variable called chips to function called chip box. 
 *   Use camel case where need. 
 *   The first parameter is Doritos. 
 *   The Second parameter is 5. 
 *   The third parameter is Pringles. 
 *   The fourth parameter is 4.
 * 
 *   Initialise a variable called calculation to the value of zero
 * 
 *   Set up the function of chip box to contain the default parameters of option one, 
 *   number of option one, option two, number of option two. 
 *   Inside the function add number of option one and number of option two together
 *    which is assigned to those values that are added.
 *   Then return a sentence to say:
 *   I have 5 Doritos and 4 pringles. This gives me a total of 9 chips.
 *   
 *   Write the description, four parameters and the return in documentation notes above the function
 *   Then console log out the chips at the end.
 *  
 */










/** 13-2-0 Functions with returns */
/**
 * 13-2-1
 * Initialise the variable x to the function called my function. 
 * Multiply a times b in the function.
 * Return the answer. 
 * Then console log the value below the function. 
 * Add the answer as a single line comment. 
 * Write a multiline comment above the function to describe it.
 * 
 */







/** 
 * 13-2-2 
 * Initialise the variable shopping to the function called called my shopping list. 
 * Have parameter values be 12 and 4. 
 * Multiply quanitiy time price in the function. 
 * Return the answer. 
 * Then console log the value below the function.
 * Add the answer as a comment. 
 * Write a multiline comment above the function to describe it.
 * */












/** 
 * 13-2-3
 * Initialise the variable x to the function called myFunction. 
 * Have the function take in the number 5 and 6. Return the answer a multiplied by b.
 * Then console log the value below the function. Add the answer as a single line comment. 
 * Write a comment above the function to describe it.
 * 
 * Next, create a variable d and give it the value of 5. 
 * Initialise another variable z to the function addingFive. 
 * Make addingFive take in the variables x and d. 
 * Then inside the function add the variables g and h.
 * After the function console log out the variable z.
 * Write a comment above the function to describe it. 
 * Add a comment to give the answer.
 * 
 */









/**
 * 13-2-4 
 * Take the question 15-3 we just did above and organise it in terms of having the variables at the top, then the function followed by the console log each time.
 */













/**
 * 13-2-5 Take the question 15-5 we just did above and organise it in terms of having both the functions at the top then the variables after.
 * Lastly, have the console logs display the answer.
 */

/**
 * 15-5
 * Initialise the variable microsoft to a new Object.
 * 
 * Add items to the new object that contain:
 * laptop equal to Surface Laptop 4
 * screen inches equal to 14.3
 * memory GB equal to 16
 * Battery life hours equal to 19
 * Processor equal to Quad Core 11th Intel Core i7-1185G7 processor
 * 
 * Then console dir out microsoft and console log out the processor.
 */

//15-5
var microsoft = {
    laptop:"Surface Laptop 4",
    screenInches:14.3,
    memoryGB:16,
    batteryLife:19,
    laptop:"Quad Core 11th Intel Core i7-1185G7 processor",
}
console.dir(microsoft);
console.log(microsoft.laptop);



/**
 * 13-2-6
 * Inialise a function called sentence function that takes in the name and age.
 * This will return the sentence My name is _name_ and I am _age_ years old.
 * 
 * Write a variable called person one and make it equal to the sentence function that has the values George Smith and 25.
 * 
 * Then console log out person one.
 */


/**
 * 13-2-7 
 * Initialise a function on line using the variable first name. 
 * This function should be call name fix.
 * This will take in the value george which is all lowercase.
 * 
 * Initialise the second function to the variable person one. 
 * This function should be called sentence function.
 * This will take in the value of the first name we just created and also the number 25.
 * 
 * Below the variables just created write the function for sentence function which takes in the value first name and age.
 * Then have it return the sentence saying: My nameis _firstName_ and I am _age_ years old. 
 * Write functional comments.
 * 
 * Initialise the second function that is called name ifx and have it take in the first name. 
 * Then it return the name formatted the proper way with the first letter being capitalised.
 * Write functional comments
 * 
 * Lastly, at the bottom console log person one. Write the output in a single line comment.
 */









/**
* 13-3-0 Function without return
*/

/**
 * 13-3-1
 * Initialise the variable number to the value of 10
 * Initialise the variable sentence to an empty string
 * 
 * Setup a function that is called info and has the parameter digit.
 * Inside the if statement add a if statement that checks to see if digit is equal to 10. If it is then
 * console log out the sentence: You guessed right.
 * Else then console log out: You did not guess correctly
 * 
 * Call the function info and pass the variable number in the bracket. 
 */






/**
 * 13-3-2
 * Initialise the variable hobby to the value of gardening
 * Initialise the variable city to the value of vancouver
 * The word vancouver will ba all lowercase
 * 
 * Setup a function called sentence that has the parameters of activity and location
 * 
 * Inside the function setup a if statement  that will check if activity is equal to gardening. 
 * If it is true then console log out (use consatenation and make sure the first letter of the location is capitalized):
 * I live in _location_ and I like _activity_.
 * 
 * else then console log out:
 * Not the right hobby.
 * 
 * Call the function sentence under the function that passes the variables hobby and city,
 */





/**
 * 13-3-3
 * Initialise the variable first name to the value of Steven
 * Initialise the variable age to the value of 14
 * Initialise the variable country to the value of Canada
 * 
 * Initialise the variable minimum age as magic number to value 16
 * Initialise the variable law in country as magic number to value Canada
 * 
 * Setup a function call drive that takes in the parameters of name, year and location.
 * Inside the function add an if statement that checks if year is greater than or equal to minimum age AND location is equal to law in country. 
 * If it is then console log out the sentence:
 * __name__ you are able to get your licence.
 * else ten console log out:
 * __name__ you are too young.
 * 
 * call the function call drive that passes the values of the first name, age and country
 * 
 */






/**
 * Setup a function called find grade that has the parameters of name and marks
 * Setup the following if/else statements (Use backticks)
 * 
 * If marks are greater than or equal to 85 AND less than or equal to 100. 
 * Than console log out the message: __name__ you got an A.
 * 
 * Else if marks are greater than or equal to 70 AND less than 85. 
 * Then console log out the message: __name__ you got a B.
 * 
 * Else if marks are greater than or equal to 50 AND less than 70. 
 * Then console log out the message: __name__ you got a C.
 * 
 * Else if marks are greater than or equal to 0 AND less than 50. 
 * Then console log out the message: _name__ you have failed.
 * 
 * Else then console log out the sentence: Invalied mark of _marks_.
 * 
 * Then under the function call the function with the following values (write a single line comment beside each one of them once you run it)
 * Sarah, 91
 * George, 85
 * Sam, 73
 * Emily, 53
 * Tom, 20
 * Wilson, 120
 * 
 */





/**
 * 13-3-5
 * Setup a function that is called evaluate numbers that has the parameters of num1, num2, and operator
 * 
 * Inside the function add the following if/else statements
 * If the operator is equal to add then console log out the sentence:
 * Sum of __num1__ and __num2__ is ____.
 * 
 * Else if the opeerator is equal to subtract then console log out the sentence:
 * Difference of __num1__ and __num2__ is __.
 * 
 * Else if the operator is equal to multiply then console log out the sentencd:
 * Product of __num1__ and __num2__ is __.
 * 
 * Else if the operator is equal to divide then console log out the sentence:
 * Division of __num1__ and __num2__ is __.
 * 
 * Else if the operator is equal to modulus then console log out the sentence:
 * Modulus of __num1__ and __num2__ is __.
 * 
 * 
 * Else then console log out the sentence:
 * __operator__ is an invalid operation.
 * 
 * Call the function evaluate numbers with the following parameters (write a single line as to what will be displayed for each of them):
 * 15, 10, add
 * 20, 8, subtract
 * 12, 4, multipy
 * 28, 7, divide
 * 22, 3, modulus
 * 31, 3, square
 * 
 */



