function add(a,b)
{
    return a+b;
}

// console.log(add(12,12));

let pro=function(x,y)
{
    console.log(x**y);
}
// pro(12,12);

const func=(n)=>{
    let f=1;
    for(let i=1;i<=n;i++)
    {
        f*=i;
    }
    return f;
}
console.log(func(10));