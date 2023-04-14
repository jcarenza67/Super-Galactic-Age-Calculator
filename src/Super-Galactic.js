export class SpaceAge{
  constructor(age) {
    this.age = age;
  }

  mercuryAge() {
    return Math.round(this.age / .24);
  }
}