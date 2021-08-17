import store from "../index";
import { Module, VuexModule, getModule } from 'vuex-module-decorators';
import { AchievementInterface } from '../interfaces/achievements'

@Module({name: 'achievements', dynamic: true, store})
class Achievements extends VuexModule {
    achievementList: Array<AchievementInterface> | null = null;
}


export default getModule(Achievements)