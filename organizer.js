window.onload = function () {
    const main = document.getElementsByClassName('main')[0];
    console.log(main);

    window.goToMain = function/* goToMain*/() {
        console.log(main);
        document.getElementsByClassName('lockScreen')[0].style.display = 'none';
        main.style.visibility = 'visible';
    };

    window.logIn = function /*logIn*/() {
        const user = document.getElementById('userName');
        const pass = document.getElementById('password');
        console.log(user.value);
        console.log(pass.value);
        if (user.value === 'admin' && pass.value === 'admin') {
            main.style.display = 'none';
            document.getElementsByClassName('tasksScreen')[0].style.visibility = 'visible';
        } else {
            alert('Wrong user name or passwod. Try again.');
        };
    };
};

function doSth(event) {
    const x = event.keyCode;
    if (x === 13) {
        const loginBut = document.getElementsByClassName('loginBut')[0];
        loginBut.click();
    };
};

function useAddBut(event) {
    const x = event.keyCode;
    if (x === 13) {
        document.getElementsByClassName('addTaskBut')[0].click();
    }
};

const list = document.getElementsByClassName('list')[0];

function newTask(taskName) {
//Label
    const newlabel = document.createElement("Label");
    newlabel.for = taskName;
    newlabel.innerHTML = taskName.value;
    newlabel.className = 'taskLabel';
//Delete icon
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'material-icons';
    deleteIcon.innerHTML = 'delete';
//Checkbox
    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.className = 'taskCheckbox';
//Adding all to element
    document.getElementsByClassName('list')[0].appendChild(newCheckbox);
    document.getElementsByClassName('list')[0].appendChild(newlabel);
    document.getElementsByClassName('list')[0].appendChild(document.createElement('br'));
    document.getElementsByClassName('list')[0].appendChild(document.createElement('hr'));

    const task = document.getElementsByClassName('taskName')[0];
    task.value = '';
};

function addTask() {
    const warning = document.getElementsByClassName('warning')[0];
    const task = document.getElementsByClassName('taskName')[0];
    if (task.value.length === 0) {
        warning.style.display = 'block';
    } else {
        warning.style.display = 'none';
        const addToList = newTask(task);
    }
}
