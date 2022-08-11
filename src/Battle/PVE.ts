import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  constructor(
    player: Fighter, 
    private _fighters: SimpleFighter[],
  ) { super(player); }
  
  fight(): number {
    for (let index = 0; 
      index < this._fighters.length && this.player.lifePoints > 0; 
      index += 1
    ) {
      const fighter: SimpleFighter = this._fighters[index];
      
      let isFightInProgress = true;
      
      while (isFightInProgress) {
        this.player.attack(fighter);
        fighter.attack(this.player);
        isFightInProgress = this.player.lifePoints > 0 
        && fighter.lifePoints > 0;
      }
    }
    return super.fight();
  }
}

export default PVE;