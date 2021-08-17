import store from "../index";
import { Module, VuexModule, getModule } from 'vuex-module-decorators';
import { UserPlantInterface } from "../interfaces/user";


@Module({name: 'userPlants', dynamic: true, store})
class UserPlants extends VuexModule {
    userPlantsList: Array<UserPlantInterface> | null = null;
}


export default getModule(UserPlants)