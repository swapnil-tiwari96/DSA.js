//for loop implementation - O(n)
function addNumbers(n)
{
    let total = 0;
    for (let i = 1; i <= n; i++)
    {
        total += i;
    }
    return total;
}

// Using formula - O(1)
function addNumbersSecond(n)
{
    return n * (n + 1) / 2;
}

console.log(addNumbers(6));
console.log(addNumbersSecond(6));

// The second would be better since first uses a for loop while the second is direct formula
// Constants don't matter. 