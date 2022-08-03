function nestedFor(n) // O(n^2)
{
    for (let i = 0; i <= n; i++)
    {
        for (let j = 0; j <= n; j++)
        {
            console.log(i, j);
        }
    }
}
console.log(nestedFor(5));

// since it is nested, multiplication happens here. 