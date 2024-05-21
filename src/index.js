import MathChar from './js/MathChar';
import Daemon from './js/Daemon';
import Magician from './js/Magician';
import './css/style.css';

const mag = new Magician('mag', 100, true, 2);
const dae = new Daemon('dae', 50, false, 3);
const math = new MathChar('math', 70, false, 5);

console.log(mag.stoned);
console.log(dae.attack);
console.log(math.name);
