import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  constructor(
    player: Fighter, 
    private _fighters: SimpleFighter[],
  ) { super(player); }
  
  fight(): number {
    this._fighters.forEach((fighter: SimpleFighter) => {
      let isFightInProgress = this.player.lifePoints > 0;
      
      while (isFightInProgress) {
        this.player.attack(fighter);
        fighter.attack(this.player);
        isFightInProgress = this.player.lifePoints > 0 
        && fighter.lifePoints > 0;
      }
    });
    return super.fight();
  }
}

export default PVE;