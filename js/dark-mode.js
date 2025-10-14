const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const colorPicker = document.getElementById('color-picker');
const backgroundPicker = document.getElementById('background-picker');
toggleThemeBtn.addEventListener('click',function (){
document.body.classList.toggle('dark-mode'); 

})
colorPicker.addEventListener('change', function() {
    document.body.style.color = colorPicker.value;
});

backgroundPicker.addEventListener('change', function() {
    document.body.style.backgroundColor = backgroundPicker.value;
});
