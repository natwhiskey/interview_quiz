const school = [{
    student: { name: 'A', number: 1 },
    classroom: { subject: 'Art' },
}, {
    student: { name: 'B', number: 2 },
    classroom: { subject: 'Math' },
}, {
    student: { name: 'C', number: 3 },
    classroom: { subject: 'Art' },
}, {
    student: { name: 'D', number: 4 },
    classroom: { subject: 'Math' },
}, {
    student: { name: 'E', number: 5 },
    classroom: { subject: 'Art' },
}, {
    student: { name: 'F', number: 6 },
    classroom: { subject: 'Math' },
}];
const classroomOdd = [];
const classroomEven = [];
for (let i = 0; i < school.length; i++) {
    if (school[i].student.number % 2 == 0) {
        classroomEven.push(school[i]);
    }else{
        classroomOdd.push(school[i]);
    }
}

console.log("class room even ", classroomOdd);
console.log("class room odd ", classroomEven);