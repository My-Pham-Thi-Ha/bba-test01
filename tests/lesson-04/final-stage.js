let numbers = [];
let count = 0;
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}
function findPairsDivisibleBy17(number) {
    number.forEach(function (value, index) {
        // console.log(value);
        number.forEach(function (value2, index2) {
            if (index2 >= index) {
                let sum = value + value2;
                if (sum % 17 === 0) {
                    console.log(`${value} + ${value2} = ${sum}`);
                    count += 1;
                }

            }
        })
    })
    console.log(`\nTong cong: ${count} cap`);
}
findPairsDivisibleBy17(numbers);