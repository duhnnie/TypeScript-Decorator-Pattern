import Enemy from './Enemy.ts';

class BaseEnemy implements Enemy {
  takeDamage(): number {
    return 10;
  }
}

export default BaseEnemy;