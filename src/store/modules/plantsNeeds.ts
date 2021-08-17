import store from "../index";
import { Module, VuexModule, getModule } from 'vuex-module-decorators';
import { plantStage } from '../interfaces/enum'
import { NeedsInterface } from "../interfaces/plants";


@Module({name: 'plantsNeeds', dynamic: true, store})
class PlantNeeds extends VuexModule {
    plantId: string = '';
    plantStage: plantStage = 0;
    needs: NeedsInterface = {
        water: {
            level: 0.5,
            description: '',
        },
        soil: {
            level: 0.5,
            description: '',
        },
        sun: {
            level: 0.5,
            description: ''
        },
        pets: {
            level: 1,
            description: '',
        }
    };

    get waterNeed() {
        return this.needs.water;
    }

    get SoilNeed() {
        return this.needs.soil;
    }

    get SunNeed() {
        return this.needs.sun;
    }

    get PetFriendly() {
        return this.needs.pets;
    }
}


export default getModule(PlantNeeds)