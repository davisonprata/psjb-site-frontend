import { WpService } from "./wp.service";

export function appInitializer (wpService: WpService) {
    return async () => {
        console.log('Initializing WP...');

        await wpService.initialize();

        console.log('WP initialized.');
    }
}
