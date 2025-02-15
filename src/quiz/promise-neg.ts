const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

async function logRowsWithNegatives(array: number[][]): Promise<void> {
    const results = await Promise.all(
        array.map(async (row) => {
            if (row.some((num) => num < 0)) {
                console.log(`Row with negative number: ${row}`);
            }
        })
    );
}

// Example usage:
logRowsWithNegatives(array2D_3)
    .catch((err) => console.error(err));
// Output: Row with negative number: [7,8,-9]
