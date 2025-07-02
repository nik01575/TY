//! String

// let str = new String("Hello")
// console.log(str);
// console.log(typeof str);

// let str2 = "Hello"
// console.log(str2);

//! 7. codePointAt()

// let str = "eHi my name is Sentence"

// console.log(str.codePointAt(str.length-1));
// console.log(str.codePointAt(0));




//!9. endsWith()

// helps you to determine whether or not a string ends with another string. This method is case-sensitive.

// Syntax : endsWith(searchString, endPosition)

// const str = "To be, or not to be, that is the question.";

// console.log(str.endsWith("question.")); // true
// console.log(str.endsWith("to be")); // false
// console.log(str.endsWith("to be", 18)); // true

// Return : Boolean

//! 10. includes() : helps you to determine whether or not a string includes another string.

// Syntax : includes(searchString, position)

const str = "To be, or not to be, that is the question.";

// console.log(str.includes("To be")); // true
// console.log(str.includes("question")); // true
// console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false
// console.log(str.includes("TO BE")); // false
// console.log(str.includes("")); // true

//! 11. indexOf() :  searches the string for the first occurrence of a specified substring and returns the index (position) of the first character of that substring. If the substring is not found, it returns -1.

// Syntax : indexOf(searchString)
        // indexOf(searchString, position)

// const sentence = "The quick brown fox jumps over The lazy fox.";
// console.log(sentence.indexOf("the")); 
// You can also specify a starting position for the search:
// console.log(sentence.indexOf("fox", 17));


//! 12. isWellFormed() : it is like a grammar checker for computer text, specifically looking to see if all the special character "pieces" are present and correctly put together according to the Unicode rules.

// Syntax : isWellFormed()
// Return : Boolean

// const wellFormed1 = "Hello";
// console.log(wellFormed1.isWellFormed()); // Output: true

// const notWellFormed = String.fromCharCode(0xD800); // High surrogate without a low surrogate
// console.log(notWellFormed.isWellFormed()); // Output: false

// const fixedString = String.fromCharCode(0xD83D, 0xDE00); // Correct surrogate pair for 😀
// console.log(fixedString.isWellFormed()); // Output: true


//! 13. lastIndexOf

// Syntax : lastIndexOf(searchString, position)
// Return : The index of the last occurrence of searchString found, or -1 if not found.

// const anyString = "Brave, Brave New World";

// console.log(anyString.indexOf("Brave")); // 0
// console.log(anyString.lastIndexOf("Brave")); // 7


//! 14. localeCompare

// Syntax :
// localeCompare(compareString)
// localeCompare(compareString, locales)
// localeCompare(compareString, locales, options)

// Return : 
// Negative when the referenceStr occurs before compareString
// Positive when the referenceStr occurs after compareString
// Returns 0 if they are equivalent


// const string1 = "apple";
// const string2 = "banana";
// const string3 = "Apple"; // Note the capital 'A'

// console.log(string1.localeCompare(string2)); // Output: -1 (apple comes before banana)
// console.log(string2.localeCompare(string1)); // Output: 1 (banana comes after apple)
// console.log(string1.localeCompare(string1)); // Output: 0 (apple is equal to apple)



//! 15. match

// Syntax : match(regexp)

// Return : 
// If the regular expression has the g flag (global) set: It returns an array containing all the matches found.
// If the regular expression does NOT have the g flag set: It returns an array-like object (similar to the result of RegExp.exec()) that contains the first match and some extra information. 
// If no match is found, it returns null.

// let str = "He is a playboy"
// console.log(str.match("playboy"));


//! 16. String.prototype.matchAll()

// Syntax : matchAll(regexp)

// Return : 
// object (which is not restartable) of matches or an empty iterator if no matches are found.

// const word = "banana";
// const pattern = /a/g; // Find all "a"s

// const matches = word.matchAll(pattern);

// console.log(matches);

// for (const match of matches) {
//   console.log("Found 'a' at index:", match.index);
// }
// Output:
// Found 'a' at index: 1
// Found 'a' at index: 3
// Found 'a' at index: 5


//! 17. String.prototype.normalize(): The normalize() method takes a string and returns a new string where the characters have been converted to a standard Unicode format. This ensures that characters that are visually the same but represented by different sequences of Unicode code points are unified.

// Think of it like having a tool that takes different handwriting styles of the same letter and converts them all to a standard printed version, so you can easily compare them.

// Syntax : normalize()
//          normalize(form)

// const composedEAcute = "\u00e9";
// const decomposedEAcute = "\u0065\u0301";

// console.log(composedEAcute , decomposedEAcute );
// console.log(composedEAcute === decomposedEAcute);

// const normalizedComposed = decomposedEAcute.normalize("NFC");
// console.log(normalizedComposed === composedEAcute); 
// console.log(composedEAcute , decomposedEAcute ,  normalizedComposed);


//! 18. String.prototype.padEnd() : It pads a string from the end.

// Syntax : padEnd(targetLength)
// padEnd(targetLength, padString)

// let a = "abc"
// console.log(a.padEnd(10, "foo"));

//! 19. String.prototype.padStart() : It pads a string from the end.

// Syntax : padStart(targetLength)
// padStart(targetLength, padString)

// console.log("abc".padStart(6, "123465")); // "123abc");

//! 20. repeat() : It returns a string with a number of copies of a string.  It return a new String. It does not change the original string. 

// Syntax : repeat(count)

// let a = "Laila"
// console.log(a.repeat(5));

//! 21. String.prototype.replace() : 

// Syntax : replace(pattern, replacement)

// const paragraph = "I think Ruth's dog is cuter than your dog!";
// console.log(paragraph.replace("Ruth's", "my"));

//! 22. String.prototype.replaceAll()

// Syntax : replaceAll(pattern, replacement)
// Returns A new string, with all matches of a pattern replaced by a replacement.

// const text = "The quick brown fox jumps over the lazy fox.";

// Replace all occurrences of "fox" with "cat" (using a string)
// const newText1 = text.replaceAll("fox", "cat");
// console.log(newText1); 

//! 23. String.prototype.search() : it search the string for a string and return the position of the match

// search(regexp)
// Return index position of the first match. Else return -1.

// const text = "The quick brown fox jumps over the lazy fox.";
// const pattern1 = /fox/; // Find the first occurrence of "fox"
// const result1 = text.search(pattern1);
// console.log(result1);

//! 24. String.prototype.slice() : This method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

// Syntax : slice(indexStart, indexEnd)

// const str = "The quick brown fox jumps over the lazy dog.";
// console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

//! 25. String.prototype.split() : The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

// const str = "The quick brown fox jumps over the lazy dog.";
// const words = str.split(" ");
// console.log(words); 

//! 26. String.prototype.startsWith() : The startsWith() method checks if a string begins with the characters of a specified string.

// Returns true: If the string starts with the specified characters.
// Returns false: If the string does not start with the specified characters.

// Syntax : startsWith(searchString, position)

// const message = "Hello world!";

// console.log(message.startsWith("Hello"));   // Output: true
// console.log(message.startsWith("Hell")); 
// console.log(message.startsWith("world"));   // Output: false

//! 27. String.prototype.substring() : The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied. Start or end values are 0 are treated as 0. If start is greater than end then values are swapped.

// Syntax : substring(indexStart)
// substring(indexStart, indexEnd)

// const anyString = "Mozilla";
// console.log(anyString.substring(0, 6)); // "Mozill"
// console.log(anyString.substring(6, 0)); // "Mozill"

//! 28. String.prototype.toLocaleLowerCase() : The toLocaleLowerCase() method of String values returns this string converted to lower case, according to any locale-specific case mappings. You call toLocaleLowerCase() on a string. You can optionally provide a locale (or an array of locales) as an argument to specify which language's rules to use for the conversion. If you don't provide a locale, it uses the default locale of the user's system.


// Syntax : toLocaleLowerCase()
// toLocaleLowerCase(locales)

// const turkishWord = "ISPARTA";
// console.log(turkishWord.toLowerCase());         // Output: isparta (standard lowercase)
// console.log(turkishWord.toLocaleLowerCase("tr-TR")); // Output: ısparta (correct Turkish lowercase)


//! 29. String.prototype.toLocaleUpperCase() : The toLocaleUpperCase() method of String values returns this string converted to upper case, according to any locale-specific case mappings.

// const city = "istanbul";

// console.log(city.toLocaleUpperCase("en-US"));
// // Expected output: "ISTANBUL"
// console.log(city.toLocaleUpperCase("TR"));
// // Expected output: "İSTANBUL"

//! 30. String.prototype.toLowerCase() : The toLowerCase() method of String values returns this string converted to lower case. A new string representing the calling string converted to lower case.

// const sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.toLowerCase());

//! 31. String.prototype.toString() : For String values, the toString method returns the string itself (if it's a primitive) or the string that the String object wraps.

// const x = new String("Hello world");
// console.log(x);
// console.log(x.toString()); // "Hello world"

//! 32. String.prototype.toUpperCase() : The toUpperCase() method returns the value of the string converted to uppercase. This method does not affect the value of the string itself since JavaScript strings are immutable.

// const sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.toUpperCase());

//! 33. String.prototype.toWellFormed() : The toWellFormed() method takes a string and returns a new string where any malformed Unicode surrogate pairs have been replaced by the Unicode replacement character (). This ensures that the resulting string contains only well-formed Unicode.

// imagine you have a piece of text that might have some "broken" or incomplete characters, especially when dealing with special symbols or characters from different languages. The toWellFormed() method in JavaScript is like a fixer that tries to repair these broken characters into their correct, complete forms.

// Syntax : toWellFormed()

// A string with only a low surrogate (also malformed)
// const notWellFormed4 = String.fromCharCode(0xDC00);
// console.log(notWellFormed4);
// const wellFormed4 = notWellFormed4.toWellFormed();
// console.log(wellFormed4); // Output: 

//! 34. String.prototype.trim() : The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

// const greeting = "   Hello world!   ";

// console.log(greeting);
// // Expected output: "   Hello world!   ";

//! 35. String.prototype.trimEnd() : A new string representing str stripped of whitespace from its end (right side).

// const greeting = "   Hello world!   ";

// console.log(greeting.trimEnd());
// Expected output: "   Hello world!";

//! 36. String.prototype.trimStart() : The trimStart() method of String values removes whitespace from the beginning of this string and returns a new string, without modifying the original string.

// trimLeft() is an alias of this method.

// const greeting = "   Hello world!   ";

// console.log(greeting.trimStart());
// Expected output: "Hello world!   ";

//! 37. String.prototype.valueOf(): The valueOf() method of String values returns this string value.

// const stringObj = new String("foo");

// console.log(stringObj);
// Expected output: String { "foo" }

// console.log(stringObj.valueOf());
// Expected output: "foo"

//! 38. String.prototype[Symbol.iterator]() : Return A new iterable iterator object that yields the Unicode code points of the string value as individual strings.

// const str = "Hi";
// const iterator = str[Symbol.iterator]();

// console.log(iterator.next()); // Output: { value: 'H', done: false }
// console.log(iterator.next()); // Output: { value: 'i', done: false }
// console.log(iterator.next()); // Output: { value: undefined, done: true }

// The next() method of the iterator returns an object with two properties: value (the next character) and done (a boolean indicating if all characters have been visited).

