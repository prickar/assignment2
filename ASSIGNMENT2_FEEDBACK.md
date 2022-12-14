Hi Paola!

Nice work!

Although you've ticked all the boxes there's some bugs in the logic that I'd like you to take a look at.

It's coming up to Christmas, so if you are running short on time you have a Godkänt grade right now if you want it, because almost everything is great,  but I can't give you the VG until the logic is fixed.

I've added some notes below about possible fixes, and if you want to have a call about it we'll have time on friday to go through it. Let me know what you want to do

*************************************

CRITERIA FOR GRADING

*************************************

GODKÄNT:
-------------------------------------

Constant or let variable: ✅

Array: ✅

Random selection from array: ✅

Loops:
  For: ✅

  While: ✅

Comparison with user entered data: ✅

Final message: ✅
  Show the user what the word was when they get it wrong!

-------------------------------------

VÄLGODKÄNT:
-------------------------------------

Comparison with an array: ✅

Nested logic: ✅ ❌
  A few things aren't working as expected, especially with words containing two of the same letter:

  1. I'll use "scripts" as an example: If the user enters "s" the loop at line 30 runs; line 31 the "if" is assessed as true and line 35 increases maximumTries.

  The loop then runs again and when the second 's' is found it increases maximumTries again. The next time the prompt fires the user has one extra guess!

  If the word is "statement" they get an extra 2 guesses when they enter "t".

  This is caused in part by the removal of the "break" you showed me.

  The fix is to move maximumTries to outside the for loop - there is an array/string .includes function - you could test if the string includes the letter, then if it does call the for loop to handle adding to arrayAnswer - thhen after the for loop is finished it increases maximumTries. Read about includes here:  https://www.w3schools.com/jsref/jsref_includes_array.asp

  However: in the assignment specs I clearly say that words with multiple characters will NOT be tested so you could just remove the words with multiple occurrences of the same letter. I'd love to see you solve this, but you do have the option to avoid the problem entirely and it will not affect your assessment.

  2. If the user enters the same letter again after it has already been found, the same thing happens: the loop runs, the if is true, maximumTries is increased then Line 33 "remainingLetter" will decrease once for each time the letter is found and the values in arrayAnswer are assigned again.


  The fix for this is to not let a user enter the same letter twice OR to test the letter is not already in arrayAnswer. I haven't written the code, but in theory this should help with points 1 and 2 - add just before line 30
  if (word.includes(guess) {
    if (!arrayAnswer.includes(guess)) {

  3. Because one of the while conditions is remainingLetter > 0 once a letter is found the user can keep entering the same letter and they will win 100% of the time by only guessing one letter correctly!

  Lots of ways to deal with this, but since each time a correct letter is found, arrayAnswer gets bigger a fix could be comparing the lengths of word and arrayAnswer (and not using remainingLetters at all since it is word.length) - word.length doesn't change and arrayAnswer.length always starts at 0 and gets bigger so rather than counting down you could count up

Input validation: ✅ 

Cancel button handling: ✅

Semantic variable naming: ✅

Code style:✅