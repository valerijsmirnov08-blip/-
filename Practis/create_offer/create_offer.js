const back = document.getElementById('back')
const create = document.getElementById('create')
const upload_img_center = document.getElementById('upload_img_center')
const upload_img = document.getElementById('upload_img')
const upload_img_input = document.getElementById('upload_img_input')
const upload_img_text = document.getElementById('upload_img_text');

back.addEventListener("click", function()
{
    window.location.replace('../../Practis/xab_admin/xab_admin.html')
})
// create.addEventListener("click", function()
// {
//     window.location.replace('../../Practis/xab_admin/xab_admin.html')
// })

upload_img_center.addEventListener("click", function()
{
    upload_img_input.click();
})

upload_img_input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            upload_img_text.textContent = file.name;
        }
    };

    // 3. Перетаскивание файла
    upload_img_center.ondragover = (e) => {
        e.preventDefault();
        upload_img_center.style.background = '#e0e0e0';
    };

    upload_img_center.ondragleave = () => {
        upload_img_center.style.background = '';
    };

    upload_img_center.ondrop = (e) => {
        e.preventDefault();
        upload_img_center.style.background = '';
        const file = e.dataTransfer.files[0];
        if (file) {
            upload_img_text.textContent = file.name;
        }
    };









