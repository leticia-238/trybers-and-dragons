import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  constructor(
    name: string,
    private _energyType: EnergyType = 'mana',
  ) {
    super(name);
    Mage._createdArchetypeInstances += 1;
  }
  
  get energyType(): EnergyType { return this._energyType; }
  
  static createdArchetypeInstances(): number {
    return Mage._createdArchetypeInstances;
  }
}

export default Mage;