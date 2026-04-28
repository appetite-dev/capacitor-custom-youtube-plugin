import { WebPlugin } from '@capacitor/core';
export class YoutubePlayerWeb extends WebPlugin {
    async play(options) {
        console.log("YoutubePlayerWeb play called", options);
        console.warn("Youtube player not supported on web");
        return {
            status: "web fallback"
        };
    }
}
//# sourceMappingURL=web.js.map