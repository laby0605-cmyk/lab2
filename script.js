//The Class List Display
const classListDisplay = document.getElementById('studentList');

//Input Fields
const inputStudent = document.getElementById('studentNameInput');
const inputIndex = document.getElementById('studentIndexInput')
const inputSeparator = document.getElementById('separatorInput');

//Results Text
const addResult = document.getElementById('addStudentResult');
const removeResult = document.getElementById('removeStudentResult');
const findResult = document.getElementById('findStudentResult');
const joinResult = document.getElementById('joinListResult');
const toStringResult = document.getElementById('stringResult');
const studentCount = document.getElementById('studentCount');

//Buttons
const addStudent = document.getElementById('btnAdd');
const removeStudent = document.getElementById('btnRemove');
const findStudent = document.getElementById('btnFind');
const joinStudent = document.getElementById('btnJoin');
const toStringStudent = document.getElementById('btnToString');


const studentNames = [
    "John Doe",
    "LaMelo Ball",
    "Albert Pogi",
    "Taylor Swift",
    "Sabrina Karpintero"
];

// Displays the full list and its length
function render() {
    // Clear the old list first so names don't repeat
        classListDisplay.innerHTML = "";
    // Create one <li> per name in the array
    for (let i = 0; i < studentNames.length; i++) {
        const li = document.createElement('li');
        li.textContent = studentNames[i];
        classListDisplay.appendChild(li);
    }

    // length property: how many items are in the array
    studentCount.textContent = "Total students: " + studentNames.length;
}

// Call the FUnction to add the initial array
render();

function pushStudent(name) {
    const nameTrim = name.trim();
    if(nameTrim === ""){
        addResult.innerHTML = "Please Enter a Student Name!";
        return;
    } 

    if(!isNaN(nameTrim)){
        addResult.innerHTML = "Please Enter a Name (Strings) Only! "
        return;
    }

    studentNames.push(nameTrim);
    render();

    addResult.innerHTML = nameTrim + " was Successfully Added to the List.";
    inputStudent.value = ""; //Automatically Clears the Input Field
}

function popStudent() {
    removeResult.innerHTML = studentNames[studentNames.length-1] + " was Successfully Removed."
    studentNames.pop();
    render();
};

function findStudentIndex(studentIndex) {
    //If user Input Empty Spaces
    if(studentIndex === ""){
        findResult.innerHTML = "Please Input a Valid Index Number!";
        return;
    }

    // Convert the Input into NUmber (because it will always be string when we retrieve value from Input Field)
    const indexNumber = Number(studentIndex);

    //If User Input Decimals like 1.5
    if (!Number.isInteger(indexNumber)) {
        findResult.innerHTML = "Index must be a whole number.";
        return;
    }
    //If Index is Out of Range(negative and over the array index)
    if(indexNumber < 0 || indexNumber >= studentNames.length){
        findResult.innerHTML = "Index " + indexNumber + " is out of range. Use 0 to " + (studentNames.length - 1) + ".";
        return;
    }

    const student = studentNames.at(indexNumber);
    findResult.innerHTML = "Index: " + indexNumber + " Student Name: " + student;
}

function joinStudents(separator) {
    //If Nothing to Join (Empty List or Only One Student)
    if (studentNames.length === 0 || studentNames.length === 1) {
        joinResult.textContent = "The list is empty, nothing to join.";
        return;
    }

    //If No Separator Typed
    if (separator === "") {
        joinResult.textContent = "Please enter a separator (try ',' or '|' or '-').";
        return;
    }

    //If the Separator is Not on the Choices/Options
    if(separator !== "," && separator !== "|" &&  separator !== "-") {
        joinResult.textContent = "Please Choose ( ',' or '|' or '-') Only.";
        return;
    }

    joinResult.textContent = studentNames.join(separator);
}

function convertToString() {
    if (studentNames.length === 0) {
        toStringResult.textContent = "The list is empty, nothing to convert.";
        return;
    }

    toStringResult.textContent = studentNames.toString();
}

addStudent.addEventListener('click', () => {
    pushStudent(inputStudent.value);
});

removeStudent.addEventListener('click', () => {
    popStudent();
});

findStudent.addEventListener('click', () => {
    findStudentIndex(inputIndex.value);
});

joinStudent.addEventListener('click', () => {
    joinStudents(inputSeparator.value);
});

toStringStudent.addEventListener('click', () => {
    convertToString();
});
