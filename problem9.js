/**
 * Created by colinjsherman on 7/14/16.
 */
//Test 2
//Problem 9
var string = prompt("Enter a string!");
var palindrome = function(s){
    s=s.toLowerCase();
    var isPalindrome = false
    for (i=0;i<s.length/2;i++){
        if (s.charAt(i)===s.charAt(s.length-(1+i))){
            isPalindrome=true;
        }else{
            isPalindrome = false;
            break;
        }
    }
    if(isPalindrome){
        alert("'"+string+"'"+" is a palindrome!");
    }else{
        alert("'"+string+"'"+" is not a palindrome.");
    }
}
palindrome(string);