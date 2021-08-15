

document.getElementById('myBtn').addEventListener('click', function() {
    const emailAddress = document.getElementById('email');
    const password = document.getElementById('pwd');
    if(emailAddress.value == 'probir_ray20@gmail.com' && password.value == 'welcome2021') {
        window.location.href = "dashboard.html";
    }
})
