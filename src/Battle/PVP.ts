import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  constructor(player: Fighter, private _player2: Fighter) {
    super(player);
  }
  
  fight(): number {
    let isFightInProgress = true;
    
    while (isFightInProgress) {
      this.player.attack(this._player2);
      this._player2.attack(this.player);
      isFightInProgress = this.player.lifePoints > 0 
      && this._player2.lifePoints > 0;
    }
    return super.fight();
  }
}

export default PVP;