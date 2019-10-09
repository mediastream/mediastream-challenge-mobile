package mediatream.am.challenge.mydictionaryapp;

import android.content.Context;
import android.content.Intent;
import android.util.AttributeSet;
import android.util.Log;
import android.widget.TextView;

import com.example.dictionary.Api;

import com.example.dictionary.Container;
import com.example.dictionary.DataCallback;

import org.json.JSONException;
import org.json.JSONObject;

public class DictionaryView extends Container {
    Context mContext;
    public DictionaryView(Context context) {
        super(context);
        this.mContext = context;

    }

    public DictionaryView(Context context, AttributeSet attrs) {
        super(context, attrs);
        this.mContext = context;

    }

    public DictionaryView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        this.mContext = context;
    }


    @Override
    public void getData() {
       Api.search(getContext(), input.getText().toString(), new DataCallback() {
           @Override
           public void onSuccess(JSONObject result) throws JSONException {
            Intent intent = new Intent(getContext(), DefinitionActivity.class);
            intent.putExtra("definition",result.getString("definition"));
            intent.putExtra("word",result.getString("word"));
            intent.putExtra("sound",result.getJSONArray("sound_urls").getString(0));
            mContext.startActivity(intent);
           }
       });
    }

}
