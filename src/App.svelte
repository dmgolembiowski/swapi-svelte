<script>
    // Templates and Routing
    import Router from './router/Router.svelte';
    import Home from './Home.svelte';
    import AuthError from './auth/AuthError.svelte';

    // Apps
    import Auth from './auth/app.js'

    const app = {
        name: "Application Host",
        special: {
            authError: AuthError
        },
        routes: {
            default: Home,
            auth: Auth
        }
    };
</script>

<Router {app}/>
