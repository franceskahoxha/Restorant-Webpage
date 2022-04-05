const breakfastTab = document.querySelector('.breakfast')
const lunchTab = document.querySelector('.lunch')
const dinnerTab =  document.querySelector('.dinner')
const dessertTab = document.querySelector('.dessert')

const allFilteredDivs = document.querySelectorAll('.filtered-div')

// Turns node list into an array
const allFilteredDivsArray = Array.from(allFilteredDivs)



breakfastTab.addEventListener('click', showBreakfast)
function showBreakfast() {
  allFilteredDivsArray.forEach(div => {
    div.classList.remove('remove')

    if (!div.dataset.breakfast) {
      div.classList.add('remove')
    }

  })
}

lunchTab.addEventListener('click', showLunch)
function showLunch() {
  allFilteredDivsArray.forEach(div => {
    div.classList.remove('remove')

    if (!div.dataset.lunch) {
      div.classList.add('remove')
    }

  })
}

dinnerTab.addEventListener('click', showDinner)
function showDinner() {
  allFilteredDivsArray.forEach(div => {
    div.classList.remove('remove')
    
    if (!div.dataset.dinner) {
      div.classList.add('remove')
    }

  })
}

dessertTab.addEventListener('click', showDessert)
function showDessert() {
  allFilteredDivsArray.forEach(div => {
    div.classList.remove('remove')
    
    if (!div.dataset.dessert) {
      div.classList.add('remove')
    }

  })
}