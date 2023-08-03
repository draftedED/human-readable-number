module.exports = function toReadable (number) {
   const primes = ["zero","one","two","three","four","five","six","seven","eight","nine",];
   const derivateWithTeen = ["eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
   const derivateWithTy = ["ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
   const numberToString = number.toString(); // Convert a given number to String
   const stringLength = number.toString().length; // The length of given number in String

   return stringLength === 2 && number % 10 === 0 ?
            derivateWithTy[parseInt(numberToString[0]) - 1]: /* Numbers 10, 20, 30...90 */
          stringLength === 2 && number < 20 ?
            derivateWithTeen[parseInt(numberToString[1] - 1)]: /* Numbers 11-19 */ 
          stringLength === 2 && number % 10 != 0 ?
            derivateWithTy[parseInt(numberToString[0]) - 1] + ' ' + primes[parseInt(numberToString[1])]: /* Numbers 21-29, 31-39, 41-49...91-99 */
          stringLength === 3 && number % 100 === 0 ?
            primes[parseInt(numberToString[0])] + ' hundred': /* Numbers 100, 200, 300...900 */
          stringLength === 3 && parseInt(numberToString.slice(1, )) < 20 && parseInt(numberToString.slice(1, )) > 10 ?
            primes[parseInt(numberToString[0])] + ' hundred ' + derivateWithTeen[parseInt(numberToString[2]) - 1]: /* Numbers 111-119, 211-219, 311-319...911-919 */
          stringLength === 3 && parseInt(numberToString.slice(1, )) < 10 ?
            primes[parseInt(numberToString[0])] + ' hundred ' + primes[parseInt(numberToString[2])]: /* Numbers 101-109, 201-209, 301-309...901-909 */
          stringLength === 3 && number % 10 != 0 ?
            primes[parseInt(numberToString[0])] + ' hundred ' + derivateWithTy[parseInt(numberToString[1]) - 1] + ' ' + primes[parseInt(numberToString[2])]: /* Numbers 121, 123, 256, 625, etc.... */
          stringLength === 3 && number % 10 === 0 ?
            primes[parseInt(numberToString[0])] + ' hundred ' + derivateWithTy[parseInt(numberToString[1]) - 1]: /* Numbers 110-190, 210-290, 310-390...910-990 */
          primes[number]; /* Numbers 0-9 */
}