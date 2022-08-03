function upAndDown() //O(n)
{
    for (i = 1; i <= n; i++)
    {
        console.log(i);
    }

    for (i = n; i >= 1; i--)
    {
        console.log(i);
    }
}

// this will have 2 O(n) but since they are added they don't give a significant change thats why time complexity will be O(n)