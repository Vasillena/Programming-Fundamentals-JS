function reverse(count, numbers) {
    let reversedNumbers = [];
    for (let i = 0; i < count; i++) {
        reversedNumbers[i] = numbers[count - 1 - i];
    }
    let result = '';
    for (let i = 0; i < reversedNumbers.length; i++) {
        result += reversedNumbers[i];

        if (i < reversedNumbers.length - 1) {
            result += ' ';
        }
    }

    console.log(result);
}

reverse(3, [10, 20, 30, 40, 50]);
