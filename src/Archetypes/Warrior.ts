import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  constructor(
    name: string,
    private _energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Warrior._createdArchetypeInstances += 1;
  }
  
  get energyType(): EnergyType { return this._energyType; }
  
  static createdArchetypeInstances(): number {
    return Warrior._createdArchetypeInstances;
  }
}

export default Warrior;