/**
 * An asynchronous function that sums all numbers in a 2D array
 * @param arr 2D array of numbers
 * @returns a promise that resolves to the sum of all numbers in the 2D array
 * or rejects if the array is empty
 */
function sum2DArray(arr: number[][]): Promise<number> {
    return new Promise((resolve, reject) => {
      console.log('Sum called ...');
  
      if (arr.length === 0) {
        reject('Cannot sum an empty array');
        return; // Prevent further execution
      }
  
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          console.log(`Adding ${arr[i][j]} to sum`);
          sum += arr[i][j];
        }
      }
  
      resolve(sum); // Resolve after summing all elements
      console.log('Returning from sum');
    });
  }
  
  // Example usage:
  const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const sumPromise1 = sum2DArray(array2D);
  sumPromise1.then(result => console.log('Sum:', result)).catch(err => console.error(err));
  
  const sumPromise2 = sum2DArray([]);
  sumPromise2.then(result => console.log('Sum:', result)).catch(err => console.error(err));  