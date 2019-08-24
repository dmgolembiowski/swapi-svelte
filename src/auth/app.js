import UserManager from './UserManager.svelte';
import Login from './Login.svelte';

const app = {
    name: "Auth",
    unlisted: true,
    routes: {
        default: Login,
        admin: {
            name: "Auth Admin",
            require: 'accountmanager',
            icon: 'icons/user.png',
            routes: {
                default: UserManager
            }
        }
    }
}

export default app
