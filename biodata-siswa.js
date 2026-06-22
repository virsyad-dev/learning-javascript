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

    console.log("Skills     :");

    studentData.skills.forEach((skill, index) => {
      console.log(`${index + 1}. ${skill}`);
    });

    console.log("=====================");
  });
}

function addNewStudents(newStudents) {
  const clearStudent = []

  newStudents.forEach(newStudent => {
    const existsInDatabase = students.some(student => student.id === newStudent.id);

    const existsInQueue = clearStudent.some(student => student.id === newStudent.id);

    const isDuplicate = existsInDatabase || existsInQueue;
    
    if(!isDuplicate) {
      clearStudent.push(newStudent);
      console.log(`Aman: Tidak ada duplikasi untuk ID ${newStudent.id} (${newStudent.name})`);
    } else {
          console.log(`Terdapat duplikasi id ${newStudent.id} ${newStudent.name}`)
    }
  })

  students = [...students, ...clearStudent];

  console.log(
    `Berhasil ditambahkan ${newStudents.length} data siswa baru kedalam database`,
  );
}

function findStudentById(idSiswa) {
  const findId = students.find((student) => student.id === idSiswa);

  if (findId) {
    console.log("Data berhasil ditemukan");
    console.log(findId)
  } else {
    console.log("Data tidak Ditemukan");
  }
}

function findStudentByMajor(majorSiswa) {
  const findMajor = students.find((student) => student.major === majorSiswa);

  if (findMajor) {
    console.log("Data berhasil ditemukan");
    console.log(findMajor)
  } else {
    console.log("Data tidak Ditemukan");
  }
}

function getTotalStundents(allStudents) {
  console.log(`There are ${allStudents.length} student total`);
}

const newStudents = [
  { id: 3, name: "Budi", age: 18, major: "Finance", skills: ["Math"] },
  { id: 2, name: "Siti", age: 19, major: "Design", skills: ["UI/UX"] },
  { id: 1, name: "Andi", age: 18, major: "Informatics", skills: ["Python"] },
];

console.log("=== DATA SEBELUM DITAMBAH ===");
displayStudents(students);

addNewStudents(newStudents);

console.log("=== DATA SETELAH DITAMBAH ===");
displayStudents(students);

console.log("=== ID DITEMUKAN ===")
findStudentById(2)

console.log("=== MAJOR DITEMUKAN ===")
findStudentByMajor("Finance");

console.log("===Total Student===");
getTotalStundents(students)