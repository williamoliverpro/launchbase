//
//  Search for technology

const users = [
    {name: 'John', techs: ['Javascript', 'CSS']},
    {name: 'Sophia', techs: ['C++', 'Unreal Engine']},
    {name: 'Patrick', techs: ['Python', 'TensorFlow']}
]

function checkIfUserUsesCSS(user) {
    for (let i = 0; i < user.techs.length; i++) {
        if (user.techs[i] === 'CSS') {
            return true
        }
    }
}

for (let i = 0; i < users.length; i++) {
    const userWorksWithCSS = checkIfUserUsesCSS(users[i]);
  
    if (userWorksWithCSS) {
      console.log(`The user ${users[i].name} works with CSS`);
    }
  }