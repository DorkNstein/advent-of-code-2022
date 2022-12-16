// great-common divisor of 2 numbers
const gcd = (a, b) => (a ? gcd(b % a, a) : b);

// least-common multiple of 2 numbers
const lcm = (a, b) => (a * b) / gcd(a, b);

const original = [
  {
    // Monkey 0
    count: 0,
    items: [75, 63],
    operation: (old) => old * 3,
    condition: (worry) => {
      if (worry % 11 === 0) {
        // true: throw to monkey 7
        return 7;
      }
      // false: throw to monkey 2
      return 2;
    },
  },
  {
    // Monkey 1
    count: 0,
    items: [65, 79, 98, 77, 56, 54, 83, 94],
    operation: (old) => old + 3,
    condition: (worry) => {
      if (worry % 2 === 0) {
        // true: throw to monkey 2
        return 2;
      }
      // false: throw to monkey 0
      return 0;
    },
  },
  {
    // Monkey 2
    count: 0,
    items: [66],
    operation: (old) => old + 5,
    condition: (worry) => {
      if (worry % 5 === 0) {
        // true: throw to monkey 7
        return 7;
      }
      // false: throw to monkey 5
      return 5;
    },
  },
  {
    // Monkey 3
    count: 0,
    items: [51, 89, 90],
    operation: (old) => old * 19,
    condition: (worry) => {
      if (worry % 7 === 0) {
        // true: throw to monkey 6
        return 6;
      }
      // false: throw to monkey 4
      return 4;
    },
  },
  {
    // Monkey 4
    count: 0,
    items: [75, 94, 66, 90, 77, 82, 61],
    operation: (old) => old + 1,
    condition: (worry) => {
      if (worry % 17 === 0) {
        // true: throw to monkey 6
        return 6;
      }
      // false: throw to monkey 1
      return 1;
    },
  },
  {
    // Monkey 5
    count: 0,
    items: [53, 76, 59, 92, 95],
    operation: (old) => old + 2,
    condition: (worry) => {
      if (worry % 19 === 0) {
        // true: throw to monkey 4
        return 4;
      }
      // false: throw to monkey 3
      return 3;
    },
  },
  {
    // Monkey 6
    count: 0,
    items: [81, 61, 75, 89, 70, 92],
    operation: (old) => old * old,
    condition: (worry) => {
      if (worry % 3 === 0) {
        // true: throw to monkey 0
        return 0;
      }
      // false: throw to monkey 1
      return 1;
    },
  },
  {
    // Monkey 7
    count: 0,
    items: [81, 86, 62, 87],
    operation: (old) => old + 8,
    condition: (worry) => {
      if (worry % 13 === 0) {
        // true: throw to monkey 3
        return 3;
      }
      // false: throw to monkey 5
      return 5;
    },
  },
];

const demo = [
  {
    // Monkey 0
    count: 0,
    items: [79, 98],
    operation: (old) => old * 19,
    divisible: 23,
    condition: (worry) => {
      if (worry % 23 === 0) {
        // true: throw to monkey 7
        return 2;
      }
      // false: throw to monkey 2
      return 3;
    },
  },
  {
    // Monkey 1
    count: 0,
    items: [54, 65, 75, 74],
    operation: (old) => old + 6,
    divisible: 19,
    condition: (worry) => {
      if (worry % 19 === 0) {
        // true: throw to monkey 2
        return 2;
      }
      // false: throw to monkey 0
      return 0;
    },
  },
  {
    // Monkey 2
    count: 0,
    items: [79, 60, 97],
    operation: (old) => old * old,
    divisible: 13,
    condition: (worry) => {
      if (worry % 13 === 0) {
        // true: throw to monkey 7
        return 1;
      }
      // false: throw to monkey 5
      return 3;
    },
  },
  {
    // Monkey 3
    count: 0,
    items: [74],
    operation: (old) => old + 3,
    divisible: 17,
    condition: (worry) => {
      if (worry % 17 === 0) {
        // true: throw to monkey 6
        return 0;
      }
      // false: throw to monkey 4
      return 1;
    },
  },
];


const secondProblem = async (rounds, divisible) => {
  let monkeys = [...original];
  for (let round = 0; round < rounds; round++) {
    for (let i = 0; i < monkeys.length; i++) {
      const monkey = monkeys[i];
      monkey.items.reverse();
      while(monkey.items.length) {
        monkey.count += 1;
        const worry = monkey.items.pop();
        const newWorry = monkey.operation(worry) % divisible;
        const newIndex = monkey.condition(newWorry);
        monkeys[newIndex].items.push(newWorry);
      }
      monkeys[i] = monkey;
    }
  }
  // console.log(monkeys.map((x, index) => `${index}: Count: ${x.count}, ${x.items.join()}`));
  const totalMonkeyBusiness = monkeys.map(x => x.count).sort((a, b) => a - b);
  console.log(`Second problem: ${totalMonkeyBusiness.pop() * totalMonkeyBusiness.pop()}`);
};

const firstProblem = async (rounds, divisible) => {
  let monkeys = [...original];
  for (let round = 0; round < rounds; round++) {
    for (let i = 0; i < monkeys.length; i++) {
      const monkey = monkeys[i];
      // monkey.items.reverse();
      monkey.count += monkey.items.length;
      while(monkey.items.length) {
        const worry = monkey.items.pop();
        const newWorry = Math.floor(monkey.operation(worry) / divisible);
        const newIndex = monkey.condition(newWorry);
        monkeys[newIndex].items.push(newWorry);
      }
      monkeys[i] = monkey;
    }
  }
  // console.log(monkeys.map((x, index) => `${index}: Count: ${x.count}, ${x.items.join()}`));
  const totalMonkeyBusiness = monkeys.map(x => x.count).sort((a, b) => a - b);
  // console.log(monkeys.map(x => x.count).join())
  console.log(`First problem: ${totalMonkeyBusiness.pop() * totalMonkeyBusiness.pop()}`);
};


const divisors = [];
demo.forEach((m) => divisors.push(m.divisible));
const manageableLvl = divisors.reduce(lcm);
firstProblem(20, 3);
secondProblem(10000, manageableLvl);