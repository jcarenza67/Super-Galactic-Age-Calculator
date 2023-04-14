import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { SpaceAge } from '../Super-Galactic.js';

window.addEventListener('load', function() {
  this.document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const ageInput = document.getElementById('age');
    const pastBirthdayInput = document.getElementById('past-birthday');
    const futureBirthdayInput = document.getElementById('future-birthday');

    const age = parseInt(ageInput.value, 10);
    const pastBirthday = pastBirthdayInput.value ? parseInt(pastBirthdayInput.value, 10): null;
    const futureBirthday = parseInt(futureBirthdayInput.value, 10);

    const spaceAge = new SpaceAge(age);

    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML += `
      <h2>Results</h2>
      <p>Age on Earth: ${spaceAge.earthYears()}</p>
      <p>Age on Mercury: ${spaceAge.mercuryYears()}</p>
      <p>Age on Venus: ${spaceAge.venusYears()}</p>
      <p>Age on Mars: ${spaceAge.marsYears()}</p>
      <p>Age on Jupiter: ${spaceAge.jupiterYears()}</p>`;

    if (pastBirthday !== null) {
      const yearsPassed = spaceAge.yearsPassed(pastBirthday);
      resultsElement.innerHTML += `
        <h2>Years passed since your past birthday!</h2>
        <p>Earth: ${yearsPassed.earthYears}</p>
        <p>Mercury: ${yearsPassed.mercuryYears}</p>
        <p>Venus: ${yearsPassed.venusYears}</p>
        <p>Mars: ${yearsPassed.marsYears}</p>
        <p>Jupiter: ${yearsPassed.jupiterYears}</p>`;
    }

    if (futureBirthday !== null) {
      const yearsLeft = spaceAge.yearsLeft(futureBirthday);
      resultsElement.innerHTML += `
        <h2>Years left until your future birthday!</h2>
        <p>Earth: ${yearsLeft.earthYears}</p>
        <p>Mercury: ${yearsLeft.mercuryYears}</p>
        <p>Venus: ${yearsLeft.venusYears}</p>
        <p>Mars: ${yearsLeft.marsYears}</p>
        <p>Jupiter: ${yearsLeft.jupiterYears}</p>`;
    }
  });
});