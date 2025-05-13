const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	let result = [];
    let current = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (currentSum + arr[i] <= n) {
            current.push(arr[i]);
            currentSum += arr[i];
        } else {
            result.push(current);
            current = [arr[i]];
            currentSum = arr[i];
        }
    }

    // Push the last group if it exists
    if (current.length > 0) {
        result.push(current);
    }

    return result;
  // Write your code here
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));