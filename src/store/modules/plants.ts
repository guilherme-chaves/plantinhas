import store from "../index";
import { Module, VuexModule, getModule } from 'vuex-module-decorators';
import { PlantInterface } from "../interfaces/plants";


@Module({name: 'plants', dynamic: true, store})
class Plants extends VuexModule {
    plantList: Array<PlantInterface> | null = null;
}


export default getModule(Plants)