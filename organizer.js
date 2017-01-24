let main = document.getElementsByClassName('main')[0];

function goToMain(){
    console.log(main);
    document.getElementsByClassName('lockScreen')[0].style.display = 'none';
    document.getElementsByClassName('main')[0].style.visibility = 'visible';
};

function doSth (event){
    const x = event.keyCode;
    if(x === 13){
        const loginBut = document.getElementsByClassName('loginBut')[0];
        loginBut.click();
    };
};

function logIn (){
    const user = document.getElementById('userName');
    const pass = document.getElementById('password');
    console.log(user.value);
    console.log(pass.value);
    if(user.value === 'admin' && pass.value === 'admin'){
        document.getElementsByClassName('main')[0].style.display = 'none';
        document.getElementsByClassName('tasksScreen')[0].style.visibility= 'visible';
    } else {
        alert('Wrong user name or passwod. Try again.');
    };
};

function useAddBut (event){
    const x = event.keyCode;
    if(x === 13){
        document.getElementsByClassName('addTaskBut')[0].click();
    }
};

function addTask (){
        const warning = document.getElementsByClassName('warning')[0];
        const taskName = document.getElementsByClassName('taskName')[0];
        if(taskName.value.length === 0 ){
            warning.style.display = 'block';
        } else{
            warning.style.display = 'none';
            document.getElementsByClassName('ist')[0].innerHTML = '';
        }
}