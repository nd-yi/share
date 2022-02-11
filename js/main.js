import { tns } from './src/tiny-slider.js';
console.log('========================= ~ tns', tns)

var slider = tns({
  container: '.user-profile-pets',
  items: 3,
  slideBy: 'page',
  speed: 400,
  mouseDrag: true,
  autoplay: false
});


const handleClick = () => {
  console.log('========dgsd')
  const targetUrl = 'https://apps.apple.com/us/app/pet/id1560912975';
  window.open(targetUrl)
};