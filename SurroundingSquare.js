//TASK

// Complete the function that takes an odd integer (0 < n < 1000000)
// which is the difference between two consecutive perfect squares,
// and return these squares as a string in the format "bigger-smaller"

//EXAMPLE
// 5  -->  "9-4"
// 7  -->  "16-9"
//9  -->  "25-16"
//------------------------------------------------------------------------

function SurroundingSquares(x) {
    if (x % 2 === 1) {
      if (x > 0 && x < 1000000) {
        let z = 0,y;
        for (y = 0; y < 1000000; y++) {
          z = Math.sqrt(Math.pow(y, 2) + x);
          if (z % 1===0) {
           // z = Math.sqrt(Math.pow(y, 2) + x);
            if (z-y===1){
            return `${x} --> "${Math.pow(z, 2)}-${Math.pow(y, 2)}"`;
            }
          }
        }
      } else {
        return "Please choose number from 0 to 1000000";
      }
    } else {
      return "Please choose odd number";
    }
  }
  
  console.log(SurroundingSquares(81));