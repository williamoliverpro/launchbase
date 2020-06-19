//
//

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction({ type, value }) {
    if (type == 'credit') {
        user.transactions.push({ type, value })
        user.balance = user.balance + value
    } else {
        user.transactions.push({ type, value })
        user.balance = user.balance - value
    }
}

function getHigherTransactionByType(type) {
    if (type === 'credit') {
        let bigger = { type: 'credit', value: 0 }

        for (let i = 0; i < user.transactions.length; i++) {
            if (user.transactions[i].value > bigger.value) {
                if (user.transactions[i].type === 'credit') {
                    bigger = user.transactions[i]
                }
            }
        }

        return bigger
    } else {
        let bigger = { type: 'debit', value: 0 }

        for (let i = 0; i < user.transactions.length; i++) {
            if (user.transactions[i].value > bigger.value) {
                if (user.transactions[i].type === 'debit') {
                    bigger = user.transactions[i]
                }
            }
        }

        return bigger
    }

}

function getAverageTransactionValue() {
    let sum = 0
    let average = 0

    for (let i = 0; i < user.transactions.length; i++) {
        sum = sum + user.transactions[i].value
    }

    average = sum / user.transactions.length

    return average
}

function getTransactionsCount() {
    let transactionsCount = { credit: 0, debit: 0 }

    for (let i = 0; i < user.transactions.length; i++) {
        if (user.transactions[i].type === 'credit') {
            transactionsCount.credit = transactionsCount.credit + 1
        } else {
            transactionsCount.debit = transactionsCount.debit + 1
        }
    }

    return transactionsCount
}


createTransaction({ type: 'credit', value: 15 })
createTransaction({ type: 'credit', value: 55 })
createTransaction({ type: 'credit', value: 100 })
createTransaction({ type: 'debit', value: 200 })
createTransaction({ type: 'debit', value: 300 })


console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))
console.log(getAverageTransactionValue())
console.log(getTransactionsCount())