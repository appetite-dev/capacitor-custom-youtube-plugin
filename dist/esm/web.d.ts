import { WebPlugin } from '@capacitor/core';
import type { YoutubePlayerPlugin } from './index';
import type { PlayOptions } from './interface';
export declare class YoutubePlayerWeb extends WebPlugin implements YoutubePlayerPlugin {
    play(options: PlayOptions): Promise<any>;
}
