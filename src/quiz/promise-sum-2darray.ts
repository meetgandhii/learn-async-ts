const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

async function sum2DArrayConcurrently(array: number[][]): Promise<number> {
    const rowSums = await Promise.all(
        array.map(async (row) => row.reduce((sum, num) => sum + num, 0))
    );
    return rowSums.reduce((total, rowSum) => total + rowSum, 0);
}

// Example usage:
sum2DArrayConcurrently(array2D_1)
    .then((result) => console.log(`Sum: ${result}`)) // Output: Sum: 45
    .catch((err) => console.error(err));
