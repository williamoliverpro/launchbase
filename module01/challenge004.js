//
//  Vectors and objects

const user = {
    name: 'William',
    age: 22,
    techs: [
        {name: 'Javascript', specialty: 'Web'},
        {name: 'C++', specialty: 'Games'},
        {name: 'Python', specialty: 'Data Science'}
    ]
}

console.log(`The user ${user.name} is ${user.age} years old and uses ${user.techs[0].name} technology with specialization in ${user.techs[0].specialty}`)