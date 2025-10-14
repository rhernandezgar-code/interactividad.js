const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const colorPicker = document.getElementById('color-picker');
const backgroundPicker = document.getElementById('background-picker');
toggleThemeBtn.addEventListener('click',function (){
document.body.classList.toggle('dark-mode'); 
if (document.body.classList.contains('dark-mode')) {
    toggleThemeBtn.textContent = 'Activar Light Mode';
} else {
    toggleThemeBtn.textContent = 'Activar Dark Mode';
}
})
colorPicker.addEventListener('change', function() {
    document.body.style.color = colorPicker.value;
});

backgroundPicker.addEventListener('change', function() {
    document.body.style.backgroundColor = backgroundPicker.value;
});
