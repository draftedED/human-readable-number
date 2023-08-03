module.exports = function toReadable (number) {
   const primes = ["zero","one","two","three","four","five","six","seven","eight","nine",];
   const derivateWithTeen = ["eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
   const derivateWithTy = ["ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
   const numToStr = number.toString(); // Convert a given number to String
   const strLen = number.toString().length; // The length of given number in String
   let result = ''; // Variable with output result

   if (strLen === 2 && number % 10 === 0) {
      result += derivateWithTy[parseInt(numToStr[0]) - 1]; /* Numbers 10, 20, 30...90 */      
   } else if (strLen === 2 && number < 20) {
      result += derivateWithTeen[parseInt(numToStr[1] - 1)]; /* Numbers 11-19 */     
   } else if (strLen === 2 && number % 10 != 0) {
      result += derivateWithTy[parseInt(numToStr[0]) - 1] + ' ' + primes[parseInt(numToStr[1])]; /* Numbers 21-29, 31-39, 41-49...91-99 */      
   } else if (strLen === 3 && number % 100 === 0) {
      result += primes[parseInt(numToStr[0])] + ' hundred'; /* Numbers 100, 200, 300...900 */      
   } else if (strLen === 3 && parseInt(numToStr.slice(1, )) < 20 && parseInt(numToStr.slice(1, )) > 10) {
      result += primes[parseInt(numToStr[0])] + ' hundred ' + derivateWithTeen[parseInt(numToStr[2]) - 1]; /* Numbers 111-119, 211-219, 311-319...911-919 */      
   } else if (strLen === 3 && parseInt(numToStr.slice(1, )) < 10) {
      result += primes[parseInt(numToStr[0])] + ' hundred ' + primes[parseInt(numToStr[2])]; /* Numbers 101-109, 201-209, 301-309...901-909 */     
   } else if (strLen === 3 && number % 10 != 0) {
      result += primes[parseInt(numToStr[0])] + ' hundred ' + derivateWithTy[parseInt(numToStr[1]) - 1] + ' ' + primes[parseInt(numToStr[2])]; /* Numbers 121, 123, 256, 625, etc.... */     
   } else if (strLen === 3 && number % 10 === 0) {
      result += primes[parseInt(numToStr[0])] + ' hundred ' + derivateWithTy[parseInt(numToStr[1]) - 1]; /* Numbers 110-190, 210-290, 310-390...910-990 */     
   } else {
      result += primes[number]; /* Numbers 0-9 */ 
   }
   return result;
}