const dropdownOptions = document.querySelector('.dropdown__options');
const input = document.querySelector('.dropdown__input');
const dropdown = document.querySelector('.details__sizes');
dropdownOptions.addEventListener('click', (e) => {
  const target = e.target;
  if (!target) return;
  input.value = target.dataset.value;
});

dropdown.addEventListener('click',()=>{
    dropdown.classList.toggle('active')
})
