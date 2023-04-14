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


  const spaceAgeSinceBirthday = new SpaceAge(planetAge(birthdate));

  document.getElementById('mercury-birthday').textContent = spaceAgeSinceBirthday.mercuryAge();
  document.getElementById('venus-birthday').textContent = spaceAgeSinceBirthday.venusAge();
  document.getElementById('mars-birthday').textContent = spaceAgeSinceBirthday.marsAge();
  document.getElementById('jupiter-birthday').textContent = spaceAgeSinceBirthday.jupiterAge();


  
}

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('age-form').addEventListener('submit', (event) => {
    event.preventDefault();
    planetAge();
  });
});