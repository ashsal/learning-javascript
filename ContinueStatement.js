for(let i = 0; i <= 10; i++)
{
    if(i === 3)
    {
        continue;
    }
    //console.log(i);
}

for(let i = 0; i <= 10; i++)
{
    if(i >= 3 && i <= 5)
    {
        continue;
    }
    //console.log(i);
}
for(let i = 0; i <= 3; i++)
{
    //console.log("Outer loop i", i);
    for(let j = 0; j <= 3; j++) {
        if(j > 1)
        {
            //console.log("Skipping loop j", j);
            continue;
        }
        //console.log("inner loop j", j);
    }
}

OuterLoop: for(let i = 0; i <= 3; i++)
{
    console.log("Outer loop i", i);
    Innerloop: for(let j = 0; j <= 3; j++) {
        if(j > 1)
        {
            console.log("Skipping loop j", j);
            continue Innerloop;
        }
        console.log("inner loop j", j);
    }
}