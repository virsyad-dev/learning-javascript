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

    console.log ("Skills     :")

    studentData.skills.forEach((skill, index) => {
      console.log(`${index + 1}. ${skill}`);
    });

    console.log("=====================");
  });
}

function addNewStudent(newStudent) {
  students = [...students, ...newStudent];

  console.log(
`Berhasil ditambahkan ${newStudent.length} data siswa baru kedalam database`  );
}

function findStudentById(idSiswa) {
  const findId = students.find(student => student.id === idSiswa)

  if (findId) {
    console.log("Data berhasil ditemukan")
  } else {
  console.log("Data tidak Ditemukan");
  }

  return findId;
}

const newStudents = [
  { id: 2, name: "Budi", age: 18, major: "Finance", skills: ["Math"] },
  { id: 3, name: "Siti", age: 19, major: "Design", skills: ["UI/UX"] },
  { id: 4, name: "Andi", age: 18, major: "Informatics", skills: ["Python"] },
];

displayStudents(students);

addNewStudent(newStudents);

console.log(findStudentById(1));