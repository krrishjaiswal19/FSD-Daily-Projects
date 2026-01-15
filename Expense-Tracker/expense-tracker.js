let expenses = [
  { title: "Food", amount: 200 },
  { title: "Travel", amount: 500 },
  { title: "Shopping", amount: 300 }
];
let total = expenses.reduce((acc, item) => {
  return acc + item.amount;
}, 0);

console.log("Total Expense:", total);
