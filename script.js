const imageList = ['images/1.jpeg', 'images/2.jpeg', 'images/3.jpeg', 'images/4.jpeg', 'images/5.jpeg', 
                  'images/6.jpeg', 'images/7.jpeg', 'images/8.jpeg', 'images/9.jpeg', 'images/10.jpeg', 
                  'images/11.jpeg', 'images/12.jpeg',  'images/13.jpeg', 'images/14.jpeg', 'images/15.jpeg',
                  'images/16.jpeg', 'images/17.jpeg', 'images/18.jpeg', 'images/19.jpeg', 'images/20.jpeg',
                  'images/21.jpeg', 'images/22.jpeg', 'images/23.jpeg', 'images/24.jpeg', 'images/25.jpeg',
                  'images/26.jpeg', 'images/27.jpeg', 'images/28.jpeg', 'images/29.jpeg', 'images/30.jpeg',
                  'images/31.jpeg', 'images/32.jpeg', 'images/33.jpeg', 'images/34.jpeg', 'images/35.jpeg',
                  'images/36.jpeg', 'images/37.jpeg', 'images/38.jpeg', 'images/39.jpeg', 'images/40.jpeg', 'images/41.jpeg'];

const mainImage = document.getElementById('mainImage');
const countdownElement = document.getElementById('countdown');

function changeImage() {
  
    const randomIndex = Math.floor(Math.random() * imageList.length);
    mainImage.src = imageList[randomIndex];

    updateCountdownTimer();
  
}

function updateCountdownTimer() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);

  const timeUntilMidnight = midnight - now;

  const hours = Math.floor(timeUntilMidnight / (1000 * 60 * 60));
  const minutes = Math.floor((timeUntilMidnight % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeUntilMidnight % (1000 * 60)) / 1000);

  countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
}
function playNoise() {
  const audio = new Audio('sound.mp3');
  audio.play();
}

window.onload = function () {

  const randomIndex = Math.floor(Math.random() * imageList.length);
  mainImage.src = imageList[randomIndex];
  localStorage.setItem('selectedImageIndex', randomIndex);
  

  setInterval(changeImage, 50*100);

  updateCountdownTimer();

  setInterval(updateCountdownTimer, 1000);

  mainImage.addEventListener('click', playNoise);
}