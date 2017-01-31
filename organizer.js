window.onload = function () {
    const main = document.getElementsByClassName('main')[0];
    const list = document.getElementsByClassName('list')[0];
    const task = document.getElementsByClassName('taskName')[0];
    const taskScr = document.getElementsByClassName('tasksScreen')[0];
    const newAcc = document.getElementsByClassName('createAcc')[0];
    const lockScreen = document.getElementsByClassName('unlockScr')[0];

    window.goToMain = function () {
        console.log(main);
        lockScreen.style.display = 'none';
        main.style.visibility = 'visible';
    };

    window.logIn = function () {
        const user = document.getElementById('userName');
        const pass = document.getElementById('password');
        console.log(user.value);
        console.log(pass.value);
        if (user.value === 'admin' && pass.value === 'admin') {
            main.style.display = 'none';
            taskScr.style.visibility = 'visible';
        } else {
            alert('Wrong user name or passwod. Try again.');
        };
    };

    window.doSth = function (event, element) {
        const x = event.keyCode;
        if (x === 13) {
            const loginBut = document.getElementsByClassName(element)[0];
            loginBut.click();
        };
    };
    //ADD TASKS
    window.newTask = function (taskName) {
        //Label
        const newlabel = document.createElement("Label");
        newlabel.for = taskName;
        newlabel.innerHTML = taskName.value;
        newlabel.className = 'taskLabel';
        newlabel.id = taskName;
        //Delete icon
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'material-icons';
        deleteIcon.id = 'deleteIcon';
        deleteIcon.innerHTML = 'delete';
        //Delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        //deleteButton.onclick = deleteTask();
        //Checkbox
        const newCheckbox = document.createElement('input');
        newCheckbox.type = 'checkbox';
        newCheckbox.className = 'taskCheckbox';
        newCheckbox.id = taskName;
        //Adding all to element
        list.appendChild(newCheckbox);
        list.appendChild(newlabel);
        list.appendChild(deleteButton);
        deleteButton.appendChild(deleteIcon);
        list.appendChild(document.createElement('hr'));

        task.value = '';
    };

    window.addTask = function () {
        const warning = document.getElementsByClassName('warning')[0];
        if (task.value.length === 0) {
            warning.style.display = 'block';
        } else {
            warning.style.display = 'none';
            list.style.visibility = 'visible'
            const addToList = newTask(task);
        };
    };
    //REGISTER
    window.createAcc = function () {
        main.style.display = 'none';
        lockScreen.style.display = 'none';
        taskScr.style.display = 'none';
        newAcc.style.visibility = 'visible';
    };

    const fields = [
        document.getElementsByClassName('newUserEmail')[0],
        document.getElementsByClassName('newUserName')[0],
        document.getElementsByClassName('newUserPass')[0],
        document.getElementsByClassName('newUserPassRe')[0]
    ];

    window.signUpFunc = function () {
        const regMsg = document.getElementsByClassName('regMsg')[0];
        if (fields.every(arrayItem => arrayItem.checkValidity() === true)) {
            if (fields[2].value === fields[3].value) {
                regMsg.innerHTML = 'Your account is created';
                regMsg.style.display = 'block';
            } else {
                alert(`Passwords don't match`);
            }
        } else {
            alert('Check all fields');
        }
    }
}
