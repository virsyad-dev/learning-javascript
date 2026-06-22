let students = [
  {
    id: 1,
    name: "Virsyad",
    age: 18,
    major: "Informatics",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

function displayStudents(allStudentData) {
  allStudentData.forEach((studentData) => {
    console.log("=====================");
    console.log("id         :" + studentData.id);
    console.log("name       :" + studentData.name);
    console.log("age        :" + studentData.age);
    console.log("major      :" + studentData.major);

    studentData.skills.forEach((skill) => {
      console.log("Skills     :" + skill);
    });
    console.log("=====================");
  });
}

function addNewStudent(newStudent) {
  students = [...students, ...newStudent];

  console.log(
    `Berhasil ditambahkan data siswa baru dengan nama "${newStudent.name}" kedalam database`,
  );
}

const newStudents = [
  { id: 2, name: "Budi", age: 18, major: "Finance", skills: ["Math"] },
  { id: 3, name: "Siti", age: 19, major: "Design", skills: ["UI/UX"] },
  { id: 4, name: "Andi", age: 18, major: "Informatics", skills: ["Python"] },
];

addNewStudent(newStudents);

displayStudents(students);
