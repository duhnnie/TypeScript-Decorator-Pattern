import EnemyDecorator from './EnemyDecorator.ts';

class HelmetDecorator extends EnemyDecorator {
  takeDamage(): number {
    return this.enemy.takeDamage() / 2;
  }
}

export default HelmetDecorator;