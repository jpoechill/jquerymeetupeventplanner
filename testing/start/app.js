/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

/*
You'll probably find this function useful...
 */
submit.onclick = function () {
    // if (firstPasswordInput.value != secondPasswordInput.value) {
    //     firstPasswordInput.setCustomValidity("The passwords do not match");
    // } // else if (/^(/[0-9]/)g$/.test(firstPasswordInput) == false ) {
    //     // match a number
    //     firstPasswordInput.setCustomValidity("The passwords do not match");
    // } else if (/^/[a-z]/g$/.test(firstPasswordInput) == false ) {
    //     // match a lower case letter
    //     firstPasswordInput.setCustomValidity("The passwords needs a lowercase letter");
    // } else if (/^/[A-Z]/g$/.test(firstPasswordInput) == false ) {
    //     // match a upper case letter
    //     firstPasswordInput.setCustomValidity("The password needs an uppercase letter");
    // } else if (/[^A-z0-9\!\@\#\$\%\^\&\*]/gg$/.test(firstPasswordInput) == false ) {
    //     // match a upper case letter
    //     firstPasswordInput.setCustomValidity("The password needs a special character");
    // } else {
    if (firstPasswordInput.value == "") {
        firstPasswordInput.setCustomValidity("Please fill this field.");
    }
    else {
        firstPasswordInput.setCustomValidity("");
    }

};