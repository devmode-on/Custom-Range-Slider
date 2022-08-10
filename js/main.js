const slider = document.querySelector('.slider__input');
const valueRight = document.querySelector('.slider__value--right');
const sliderProgress = document.querySelector('.slider__progress');

valueRight.textContent = slider.max;

slider.addEventListener('input', () => {
  valueRight.textContent = slider.value;

  let widthProgress = (slider.value * 100) / slider.max;
  sliderProgress.style.width = `${widthProgress}%`; 
})

