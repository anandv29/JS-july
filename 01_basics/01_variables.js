const accountId = 08217711922;
 // This is a number, but it will be interpreted as octal in some environments

// In JavaScript, a number literal can be interpreted as octal if it is prefixed with a 0 (zero) and all subsequent digits are between 0 and 7.
// For example:

//     07 is interpreted as octal, which is equivalent to decimal 7.
//     010 is interpreted as octal, which is equivalent to decimal 8.
//     012 is interpreted as octal, which is equivalent to decimal 10. 

// However, if a number prefixed with 0 contains digits 8 or 9, it will be interpreted as a decimal number instead of an octal number. For instance: 08 is interpreted as decimal 8 and 09 is interpreted as decimal 9. 
// To explicitly define an octal literal in modern JavaScript, you can use the 0o or 0O prefix (e.g., 0o10 for decimal 8). This syntax is preferred as it avoids the ambiguity of the leading 0 and is more explicit about the base of the number.

let accountEmail = "anand@gmail.com";
let accountPassword = "12345";
accountcity = "Delhi";

// accountId = 12345 //TypeError: Assignment to constant variable.
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountcity])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/