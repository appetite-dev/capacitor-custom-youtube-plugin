var capacitorYoutubePlayer = (function (exports, core) {
    'use strict';

    const YoutubePlayer = core.registerPlugin('YoutubePlayer', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.YoutubePlayerWeb()),
    });

    class YoutubePlayerWeb extends core.WebPlugin {
        async play(options) {
            console.log("YoutubePlayerWeb play called", options);
            console.warn("Youtube player not supported on web");
            return {
                status: "web fallback"
            };
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        YoutubePlayerWeb: YoutubePlayerWeb
    });

    exports.YoutubePlayer = YoutubePlayer;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
