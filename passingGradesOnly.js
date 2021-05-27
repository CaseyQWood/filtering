const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

// const above70 = (array) => passTest = array.filter((index) => index >= 70 )
// console.log(above70(grades))
// I did the above my self

const passingGrades = grades.filter((grade) => grade > 69);

console.log(passingGrades)

// brandon and I worked ont his together