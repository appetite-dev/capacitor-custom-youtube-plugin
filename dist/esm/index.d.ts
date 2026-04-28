export interface YoutubePlayerPlugin {
    play(options: {
        videoId: string;
    }): Promise<{
        status: string;
    }>;
}
declare const YoutubePlayer: YoutubePlayerPlugin;
export { YoutubePlayer };
