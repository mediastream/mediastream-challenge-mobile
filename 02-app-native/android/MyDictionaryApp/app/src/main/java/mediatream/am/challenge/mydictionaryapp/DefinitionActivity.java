package mediatream.am.challenge.mydictionaryapp;


import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.dictionary.Api;
import com.example.dictionary.DataCallback;
import com.example.dictionary.DownloadImageTask;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class DefinitionActivity extends AppCompatActivity {
   public String definition;
   public String soundUrl;
   public String word;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_definition);
        this.definition = getIntent().getStringExtra("definition");
        this.soundUrl = getIntent().getStringExtra("sound");
        this.word = getIntent().getStringExtra("word");
        TextView word = findViewById(R.id.wordId);
        word.setText(getIntent().getStringExtra("word"));
        TextView definition = findViewById(R.id.definitionText);
        definition.setText(getIntent().getStringExtra("definition"));

    }

    @Override
    public void onStart() {
        super.onStart();
        Api.searchImg(this, this.word, new DataCallback() {
            @Override
            public void onSuccess(JSONObject result) throws JSONException, IOException {
                ImageView img = findViewById(R.id.imageWord);
                new DownloadImageTask(img).execute(result.getString("imageurl"));
            }
        });
    }
}
