//
//  Sum of expenses and revenues

const users = [
    {
      name: "Salvio",
      income: [115.3, 48.7, 98.3, 14.5],
      expenses: [85.3, 13.5, 19.9]
    },
    {
      name: "Marcio",
      income: [24.6, 214.3, 45.3],
      expenses: [185.3, 12.1, 120.0]
    },
    {
      name: "Lucia",
      income: [9.8, 120.3, 340.2, 45.3],
      expenses: [450.2, 29.9]
    }
  ]

for (let i = 0; i < users.length; i++) {
    let result = calcBalance(users[i].income, users[i].expenses)
    let balanceStatus = ''

    if (result > 0) {
        balanceStatus = 'POSITIVE'
    } else {
        balanceStatus = 'NEGATIVE'
    }
    
    console.log(`${users[i].name} has a ${balanceStatus} balance of ${result}`)
}

function calcBalance(income, expenses) {
    let incomeTotal = addNumbers(income)
    let expensesTotal = addNumbers(expenses)

    return incomeTotal - expensesTotal
}


function addNumbers(numbers) {
    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]
    }

    return  sum
  }