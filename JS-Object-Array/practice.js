// Total & Percentage 
let students = [
    { name: "Krrish", marks: [70, 80, 90] },
    { name: "Rahul", marks: [60, 75, 85] }
];

    for (let student of students) {
    let total = 0;

    for (let m of student.marks) {
    total += m;
}

    let percentage = total / student.marks.length

    console.log(student.name, total, percentage);
}
/*
Logic samjho:
student.marks → array
loop se sum nikala
percentage = total / subjects*/


//Small Project — Student List Manager (Console Based)
//Features:
//Student add
//Total & percentage calculate
//Show list
let students2= [];

function addStudent(name, marks) {
  let total = 0;
  for (let m of marks) total += m;

  let percentage = total / marks.length;

  students.push({
    name,
    marks,
    total,
    percentage
  });
}

addStudent("Rahul", [70, 80, 90]);
addStudent("Aman", [60, 75, 85]);

console.log(students);