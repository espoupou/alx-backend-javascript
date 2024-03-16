export default function getListStudentIds(students) {
  let studentId = [];
  if (!(students instanceof Array)) {
    return studentId;
  }
  studentId = students.map((student) => student.id);
  return studentId;
}
