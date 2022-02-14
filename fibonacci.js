const number = parseInt(prompt('Enter the number you wish to test: '));
function isPerfectSquare( x)
{
    let s = parseInt(Math.sqrt(x));
    return (s * s == x);
}
 
// Returns true if n is a Fibonacci Number, else false
function isFibonacci( n)
{
 
    // n is Fibonacci if one of 5*n*n + 4 or 5*n*n - 4 or both
    // is a perfect square
    return isPerfectSquare(5 * n * n + 4) ||
           isPerfectSquare(5 * n * n - 4);
}
 
//Test
                      
if (isFibonacci(number)==true)
{
    console.log(`${number} is a fibonacci`)

}else{
    console.log(`${number} is not a fibonacci`)

}