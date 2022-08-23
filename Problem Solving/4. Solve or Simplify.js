// The same problem from the last point - // Problem - Write a function that takes an input and returns counts of each character in a string.
// Now take the pseudo code and convert it into a proper code. 

function charCount(str)
{
    // make object to return at end
    let result = {};
    // loop over string, for each character 
    for (let i = 0; i < str.length; i++)
    {
        let char = str[i].toLowerCase();
        // if the char is a number/letter and a key in the object, add one to count
        if (result[char] > 0)
        {
            result[char]++;
        }
        // if char is is a number/letter and not in object, add it and set its value to 1.
        else
        {
            result[char] = 1;
        }
    }


    // if char is space, special character etc dont do anyhthing.
    // return an object with keys that are lowercase alphanumeric characters in a string. values should be their corresponding occurences. 
}