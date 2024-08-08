function gradeClassification(nota) {
    if (nota >= 90 && nota <= 100) return 'A'
    if (nota >= 80 && nota <= 89) return 'B'
    if (nota >= 70 && nota <= 79) return 'C'
    if (nota >= 60 && nota <= 69) return 'D'
    if (nota >= 0 && nota <= 59) return 'F'
  
    return 'Nota inválida'
}
console.log(gradeClassification(90))

  // console.log(gradeClassification(70))
// function gradeClassification(nota) {
//     let classification;
  
//     switch (true) {
//       case (nota >= 90 && nota <= 100):
//         classification = 'A'
//       break;
//       case (nota >= 80 && nota <= 89):
//         classification = 'B'
//       break;
//       case (nota >= 70 && nota <= 79):
//         classification = 'C'
//       break;
//       case (nota >= 60 && nota <= 69):
//         classification = 'D'
//       break;
//       case (nota >= 0 && nota <= 59):
//         classification = 'F'
//       break;
//       default:
//         classification = 'Nota inválida'
//     }  
  
//     // return 'A|B|C|D|F'
  
//     return classification
//   }
  
//   console.log(gradeClassification(70))