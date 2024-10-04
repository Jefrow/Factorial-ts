let cache : { [ key: number ]: number} = {}

const factorial = (n: number): number => {
   if (n === 0) {
    return 1; 
   }

   if ( n in cache) {
    return cache[n];
   }

   cache[n] = n * factorial(n - 1) ;
   return cache[n]; 
}

const getFactorial = (n: number) => {
  if ( n < 0 ) {
    return "Not a positive "
  }
  return factorial(n); 
}
