function getFizzBuzzString(i: number): string {
    if (i % 3 === 0 && i % 5 === 0) {
      return "FizzBuzz";
    } else if (i % 3 === 0) {
      return "Fizz";
    } else if (i % 5 === 0) {
      return "Fizz";
    } else {
      return String(i);
    }
}

for (let i =1; i <= 100; i++) {
  const message = getFizzBuzzString(i);
  console.log(message);
}

function sequence(start: number, end: number): number[] {
  const result: number[] = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result
}

for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i);
  console.log(message);
}

// コールバック関数の練習
function map<T, U>(array: T[], callback: (value: T) => U): U[] {
  const result: U[] = [];
  for (const element of array) {
    result.push(callback(element));
  }
  return result
}

const data = [1, 1, 2, 3, 5, 8, 13];
const result = map(data, (x) => x * 10);
console.log(result);
