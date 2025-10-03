const users = [
  {
    id: 1,
    name: "Alice",
    age: 25,
    city: "New York",
    isActive: true,
    scores: [85, 90, 88],
  },
  {
    id: 2,
    name: "Bob",
    age: 30,
    city: "Los Angeles",
    isActive: false,
    scores: [70, 75, 80],
  },
  {
    id: 3,
    name: "Charlie",
    age: 22,
    city: "New York",
    isActive: true,
    scores: [95, 92, 96],
  },
  {
    id: 4,
    name: "David",
    age: 28,
    city: "Chicago",
    isActive: true,
    scores: [60, 65, 70],
  },
  {
    id: 5,
    name: "Eve",
    age: 35,
    city: "Los Angeles",
    isActive: false,
    scores: [88, 85, 90],
  },
];

// Get all users who are active (isActive: true).

let sum = 0;
const filterUser = users
  .filter((user) => user.isActive)
  .map((user) => user.name);

const sumAllAge = users.reduce((acc, user) => {
  acc += user.age;
  return acc;
}, 0);

const ageAbove = "ageAbove30";
const ageAbove30 = users.reduce((acc, user) => {
  acc["ageAbove30"] = acc["ageAbove30"] || [];
  if (user.age > 20) {
    acc["ageAbove30"].push({ name: user.name, age: user.age });
  }
  return acc;
}, {});

console.log(ageAbove30);
console.log(sumAllAge);
console.log(filterUser);

const orders = [
  { id: 1, customer: "Alice", total: 250, items: ["shirt", "hat"] },
  { id: 2, customer: "Bob", total: 150, items: ["pants"] },
  { id: 3, customer: "Alice", total: 300, items: ["shoes", "belt"] },
  { id: 4, customer: "Charlie", total: 200, items: ["shirt"] },
  { id: 5, customer: "Bob", total: 100, items: ["hat", "belt"] },
];

const reuceObject = orders.reduce((acc, order) => {
  acc[order.customer] = acc[order.customer] || {};
  acc[order.customer]["totalSpent"] =
    (acc[order.customer]["totalSpent"] || 0) + order.total;

  acc[order.customer]["items"] = [
    ...(acc[order.customer]["items"] || []),
    ...order.items,
  ];

  return acc;
}, {});

console.log(reuceObject);
