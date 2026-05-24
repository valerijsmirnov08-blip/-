const input_login = document.getElementById('input_login');
const input_password = document.getElementById('input_password');
const welcom = document.getElementById('welcom');


welcom.addEventListener("click", function()
{
   
    if(input_login.value == "Admin@" || input_password.value == "admi_123")
    {
        window.location.replace('../../Practis/xab_admin/xab_admin.html')
    }
    else
    {
        alert("Неправельный логин или пароль")
    }
})







