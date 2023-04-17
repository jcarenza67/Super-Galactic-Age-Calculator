import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { SpaceAge } from './Super-Galactic.js';


document.getElementById('space-age-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const age = parseInt(document.getElementById('age').value, 10);
  const pastBirthday = parseInt(document.getElementById('past-birthday').value, 10);
  const futureBirthday = parseInt(document.getElementById('future-birthday').value, 10);

  const spaceAge = new SpaceAge(age);

  const resultsElement = document.getElementById('results');
  resultsElement.innerHTML = `
    <h2>Results</h2>
    <p>Age on Earth: ${spaceAge.earthAge()}</p>
    <p>Age on Mercury: ${spaceAge.mercuryAge()}</p>
    <p>Age on Venus: ${spaceAge.venusAge()}</p>
    <p>Age on Mars: ${spaceAge.marsAge()}</p>
    <p>Age on Jupiter: ${spaceAge.jupiterAge()}</p>`;

  if (!isNaN(pastBirthday)) {
    const yearsPassed = spaceAge.yearsPassed(pastBirthday);
    resultsElement.innerHTML += `
      <h2>Years Passed Since Last Birthday</h2>
      <p>Earth: ${yearsPassed.earthYears}</p>
      <p>Mercury: ${yearsPassed.mercuryYears}</p>
      <p>Venus: ${yearsPassed.venusYears}</p>
      <p>Mars: ${yearsPassed.marsYears}</p>
      <p>Jupiter: ${yearsPassed.jupiterYears}</p>`;
  }

  if (!isNaN(futureBirthday)) {
    const yearsLeft = spaceAge.yearsLeft(futureBirthday);
    resultsElement.innerHTML += `
      <h2>Years Left Until Next Birthday</h2>
      <p>Earth: ${yearsLeft.earthYears}</p>
      <p>Mercury: ${yearsLeft.mercuryYears}</p>
      <p>Venus: ${yearsLeft.venusYears}</p>
      <p>Mars: ${yearsLeft.marsYears}</p>
      <p>Jupiter: ${yearsLeft.jupiterYears}</p>`;
  }
});
