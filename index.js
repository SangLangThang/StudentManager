var readlineSync = require('readline-sync');
var fs = require('fs');
var allStudent = [];
var check=true;
function showMenu() {
    console.log('1.Show all students');
    console.log('2.Add new students');
    console.log('3.Save and exits');
}
function loadData() {
    allStudent = JSON.parse(fs.readFileSync('./data.json'));
    
}
function showStudent() {
    console.log(allStudent);
}
function AddNewStudent() {
    let nameStudent = readlineSync.question('Name :');
    let ageStudent = readlineSync.question('Age :');
    allStudent.push({ name: nameStudent, age: ageStudent });
    var allStudentString = JSON.stringify(allStudent);
    fs.writeFileSync('./data.json', allStudentString);
}
function SaveExit(){
    check=false;
}
function main() {
    loadData();
    showMenu();
    let option = readlineSync.question('>');
    switch (option) {
        case '1':
            showStudent();
            break;
        case '2':
            AddNewStudent();
            break;
        case '3':
            SaveExit();
            break;

    }
}
while(check){
main();
}