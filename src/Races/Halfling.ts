import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._createdRacesInstances += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  } 
  
  static createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }
}

export default Halfling;