function findMaxValue(arr) {
    if (arr.length ===0) {
        console.log("Array is empty");
        return;
    }

    let maxValue = arr[0];
    for (let i = 1; i <arr.length) {
        if (arr[i] >maxValue){
            maxValue = arr[i];
        }
    }
    console.log("The maximum value is:", maxValue)
}

// Example usage:
const numbers = [10, 5, 25, 8, 30];
findMaxValue(numbers);