import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { SpaceAge } from '../Super-Galactic.js';

function planetAge () {
  const age = parseInt(document.getElementById('age').value);
  const spaceAge = new SpaceAge(age);
  document.getElementById('earth').textContent = spaceAge.earthAge();
  document.getElementById('mercury').textContent = spaceAge.mercuryAge();
  document.getElementById('venus').textContent = spaceAge.venusAge();
  document.getElementById('mars').textContent = spaceAge.marsAge();
  document.getElementById('jupiter').textContent = spaceAge.jupiterAge();

  const birthdate = prompt("Enter your birthdate (YYYY-MM-DD):");


  const earthBirthdate = new Date(birthdate);

  
  const earthTime = new Date();
  const earthDiff = earthTime.getTime() - earthBirthdate.getTime();
  const earthAge = Math.floor(earthDiff / (1000 * 60 * 60 * 24 * 365.25));

  
  const myAge = new SpaceAge(earthAge);
  const mercuryAge = myAge.mercuryAge();
  const venusAge = myAge.venusAge();
  const marsAge = myAge.marsAge();
  const jupiterAge = myAge.jupiterAge();

  
  const result = `Your age on Mercury is ${mercuryAge} years.
  \nYour age on Venus is ${venusAge} years.
  \nYour age on Mars is ${marsAge} years.
  \nYour age on Jupiter is ${jupiterAge} years.
  \nYour age on Earth is ${earthAge} years.`;
  alert(result);

}

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('age-form').addEventListener('submit', (event) => {
    event.preventDefault();
    planetAge();
  });
});