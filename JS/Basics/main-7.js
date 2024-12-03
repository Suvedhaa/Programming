function area(l,b)
{
    return "Area is " +l*b
}

var totalarea1 = area(10,20)
var totalarea2 = area(20,20)
var totalarea3 = area(20,30)

console.log(totalarea1)
console.log(totalarea2)
console.log(totalarea3)

function diffareas()
{
    console.log(totalarea1)
    console.log(totalarea2)
    console.log(totalarea3)
    console.log("3 Area altogether - "+totalarea1,totalarea2,totalarea3)
}

diffareas()