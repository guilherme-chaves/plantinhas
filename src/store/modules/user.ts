import store from "../index";
import { Module, VuexModule, getModule } from 'vuex-module-decorators';
import { UserData } from "../interfaces/user";

@Module({name: 'user', dynamic: true, store})
class User extends VuexModule implements UserData {
    userId: string = '';
    userName: string = '';
    userEmail: string = '';
    userPoints: number = 0;
    userLevel: number = 0;
    firstLogin: boolean = true;
}


export default getModule(User)