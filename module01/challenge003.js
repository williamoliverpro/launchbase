//
//  Construction and printing of objects

const company = {
    name: 'Rocketseat',
    color: 'Purple',
    focus: 'Programming',
    address: {
        street: 'Rua Guilherme Gembala',
        number: '260'
    }
}

console.log(`The company ${company.name} is located at ${company.address.street}, ${company.address.number}`)