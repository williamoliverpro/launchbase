//
//  Users and technologies

const users = [
    {name: 'John', techs: ['Javascript', 'Python']},
    {name: 'Sophia', techs: ['C++', 'Unreal Engine']},
    {name: 'Patrick', techs: ['Python', 'TensorFlow']}
]

for (let i = 0; i < users.length; i++) {
    console.log(`${users[i].name} works with ${users[i].techs[0]}, ${users[i].techs[1]}`)
}