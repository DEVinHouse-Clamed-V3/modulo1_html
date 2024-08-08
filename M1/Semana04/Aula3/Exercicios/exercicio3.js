function canVote(person) {
    if (person.age >= 18 && person.citizenship === true) {
      return true
    }
    
    return false
  }
  
  let pessoa = {
    age: 18,
    citizenship: true
  }
  console.log(canVote(pessoa))

//   Outra possibilidade
//   function canVote(age, citizenship) {
//     if (age >= 18 && citizenship === true) {
//       return true
//     }
    
//     return false
//   }
  
//   const idade = 19
//   const doPais = true
//   canVote(idade, doPais)