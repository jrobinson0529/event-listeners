//Event selectors
const button = document.querySelector('#main-btn');
const otherButton = document.querySelector('#other-btn');
const container = document.querySelector('#container');

// button.addEventListener('click', (event) => {
//   console.log(`You clicked #${event.target.id}!`);
//   // console.log(event.target.id);
// });

const whatIsTheId = (event) => {
  console.log(`You clicked #${event.target.id}!`);
  
  if(event.target.id === 'main-btn' && container.innerHTML !== 'You clicked the MAIN BUTTON') {
      container.innerHTML = 'You clicked the MAIN BUTTON';
  } else if (event.target.id === 'other-btn' && container.innerHTML !== 'You clicked the OTHER BUTTON') {
    container.innerHTML = 'You clicked the OTHER BUTTON';
  } else if (event.target.id === 'main-btn' && container.innerHTML === 'You clicked the MAIN BUTTON') {
    container.innerHTML = '';
  } else if (event.target.id === 'other-btn' && container.innerHTML === 'You clicked the OTHER BUTTON') {
    container.innerHTML = null;
  }
};
console.log(typeof container.innerHTML);
button.addEventListener('click', whatIsTheId); //Targets button
otherButton.addEventListener('click', whatIsTheId); //targets other button
