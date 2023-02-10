const monthlyExpenses = [ 201.43, 189.22, 132.09, 238.85, 195.41 ]
let totalExpenses = 0 

for(const expenses  of monthlyExpenses) {
    totalExpenses += expenses
}

const averageExpenses = totalExpenses / monthlyExpenses.length

console.log(`Average expense ${averageExpenses}`)