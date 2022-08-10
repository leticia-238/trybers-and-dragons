import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  constructor(
    name: string,
    private _energyType: EnergyType = 'mana',
  ) {
    super(name);
    Necromancer._createdArchetypeInstances += 1;
  }
  
  get energyType(): EnergyType { return this._energyType; }
  
  static createdArchetypeInstances(): number {
    return Necromancer._createdArchetypeInstances;
  }
}

export default Necromancer;