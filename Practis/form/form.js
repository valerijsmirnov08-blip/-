const request = document.getElementById('request')
const form = document.getElementById('form')
const out = document.getElementById('out')
const back = document.getElementById('back')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')



request.addEventListener("click", function()
{
    form.style.display = 'block';
})

out.addEventListener("click", function()
{
    if(input1.value == "" || input2 == "")
    {
        alert("Пожалуйста заполните форму полностью")
    }
    else
    {
        form.style.display = 'none';
        localStorage.setItem('input1' ,input1.value)
        localStorage.setItem('input2' ,input2.value)
    }
    
})

back.addEventListener("click", function()
{
    form.style.display = 'none';
})











