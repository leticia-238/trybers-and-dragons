import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  constructor(
    name: string,
    private _energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Ranger._createdArchetypeInstances += 1;
  }
  
  get energyType(): EnergyType { return this._energyType; }
  
  static createdArchetypeInstances(): number {
    return Ranger._createdArchetypeInstances;
  }
}

export default Ranger;