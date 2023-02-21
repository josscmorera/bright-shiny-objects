// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function createUser(firstName, lastName) {
    let user = {
      firstName: firstName,
      lastName: lastName
    };
    return user;
  }  
  
  function setAge(user, age) {
    user.age = age;
    return user;
  }
  
  function incrementAge(user) {
    user.age++;
    return user;
  }
  
  function fixCar(car) {
    car.needsMaintenance = false;
    return car;
  }
  
  function addGrades(student, grades) {
    for (let i = 0; i < grades.length; i++) {
      student.grades.push(grades[i]);
    }
      return student;
  }
  
  function getDataType(obj, key) {
    return typeof obj[key];
  }
  
  function addTodo(todos, todo) {
    todos.push(todo);
    return todos;
  }
  
  function addSong(playlist, song) {
    playlist.duration += song.duration;
    playlist.songs.push(song);
    return playlist;
  }
  
  function updateReportCard(reportCard, newGrade) {
    reportCard.grades.push(newGrade);
    let lowestGrade = reportCard.grades[0];
    for (let i = 1; i < reportCard.grades.length; i++) {
      if (reportCard.grades[i] < lowestGrade) {
        lowestGrade = reportCard.grades[i];
      }
    }
    reportCard.lowestGrade = lowestGrade;
    let highestGrade = reportCard.grades[0];
    for (let i = 1; i < reportCard.grades.length; i++) {
      if (reportCard.grades[i] > highestGrade) {
        highestGrade = reportCard.grades[i];
      }
    }
    reportCard.highestGrade = highestGrade;
    let sum = 0;
    for (let i = 0; i < reportCard.grades.length; i++) {
      sum += reportCard.grades[i];
    }
    reportCard.averageGrade = sum / reportCard.grades.length;
    return reportCard;
  }
  

// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
