import { registerPlugin } from '@capacitor/core';
const YoutubePlayer = registerPlugin('YoutubePlayer', {
    web: () => import('./web').then(m => new m.YoutubePlayerWeb()),
});
export { YoutubePlayer };
//# sourceMappingURL=index.js.map