import BaseEnemy from './BaseEnemy.ts';
import HelmetDecorator from './HelmetDecorator.ts';
import ArmorDecorator from './ArmorDecorator.ts';

const enemy = new BaseEnemy();
const enemyWithHelmet = new HelmetDecorator(enemy);
const enemyWithHelmetAndArmor = new ArmorDecorator(enemyWithHelmet);

console.log(enemy.takeDamage());
console.log(enemyWithHelmet.takeDamage());
console.log(enemyWithHelmetAndArmor.takeDamage());
