import { parse } from "@babel/core";

export class SpaceAge{
  constructor(age) {
    this.age = age;
  }

  earthAge() {
    return this.age;
  }

  mercuryAge() {
    return parseFloat((this.age / .24).toFixed(2));
  }

  venusAge() {
    return parseFloat((this.age / .62).toFixed(2));
  }

  marsAge() {
    return parseFloat((this.age / 1.88).toFixed(2));
  }

  jupiterAge() {
    return parseFloat((this.age / 11.86).toFixed(2));
  }

  yearsPassed(pastBirthday) {
    const earthYears = this.age - pastBirthday;
    return {earthYears,
      mercuryYears: Math.round(earthYears / .24),
      venusYears: Math.round(earthYears / .62),
      marsYears: Math.round(earthYears / 1.88),
      jupiterYears: Math.round(earthYears / 11.86),
    };
  }
  yearsLeft(futureBirthday) {
    const earthLeft = futureBirthday - this.age;
    return {earthYears: earthLeft,
      mercuryYears: Math.round(earthLeft / .24),
      venusYears: Math.round(earthLeft / .62),
      marsYears: Math.round(earthLeft / 1.88),
      jupiterYears: Math.round(earthLeft / 11.86),
    };
  }

}