import { WpService } from "./wp.service";

export function appInitializer (wpService: WpService) {
    return async () => {
        console.log('syncronizing with cms...');

        await wpService.initialize();

        console.log('syncronized.');
    }
}
