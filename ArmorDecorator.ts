import EnemyDecorator from './EnemyDecorator.ts';

class ArmorDecorator extends EnemyDecorator {
  takeDamage(): number {
    return this.enemy.takeDamage() / 1.5;
  }
}

export default ArmorDecorator;