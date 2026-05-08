package com.stockedge.plugins.yotubeplayer;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import com.google.android.youtube.player.YouTubePlayerSupportFragmentX;

public class YoutubePlayer extends AppCompatActivity {
    private static final String TAG = "YoutubePlayer";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_player);

        YouTubePlayerSupportFragmentX youTubePlayerFragment =
            YouTubePlayerSupportFragmentX.newInstance();

        getSupportFragmentManager()
            .beginTransaction()
            .replace(R.id.youtube_player_fragment, youTubePlayerFragment)
            .commit();
    }
}
