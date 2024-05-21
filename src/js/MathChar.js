export default class MathChar {
  constructor(name, attack, stoned, distance) {
    this.name = name;
    this.attack = attack;
    this.stoned = stoned;
    this.distance = distance;
  }

  set stoned(stoned) {
    this.realyStoned = stoned;
  }

  get stoned() {
    return this.realyStoned;
  }

  set attack(attack) {
    this.realyAttack = attack;
  }

  get attack() {
    let currentAttack = this.realyAttack - this.realyAttack * ((this.distance - 1) / 10);
    if (this.realyStoned) {
      currentAttack -= Math.log2(this.distance) * 5;
    }
    return Math.round(currentAttack);
  }
}
