package com.reactlibrary;
import android.content.Context;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.util.Log;
import android.view.KeyEvent;
import android.view.inputmethod.EditorInfo;
import android.widget.EditText;
import android.widget.TextView;
import com.example.dictionary.Api;
import com.example.dictionary.Container;
import com.example.dictionary.DataCallback;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class DictionaryView extends Container {
    ReactContext reactContext = (ReactContext)getContext();

    public DictionaryView(@NonNull Context context) {
        super(context);
        start();
    }

    public DictionaryView(@NonNull Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        start();
    }

    public DictionaryView(@NonNull Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        start();
    }


   @Override
    public void getData() {
        final EditText editText = this.input;
       Api.search(reactContext, editText.getText().toString(), new DataCallback() {
           @Override
           public void onSuccess(JSONObject res) throws JSONException {

               JSONArray wordSond = res.getJSONArray("sound_urls");
               WritableMap event = Arguments.createMap();
               if(wordSond.length() > 0){
                event.putString("sound",wordSond.getString(0));
               }
               event.putString("definition", res.getString("definition"));
               event.putString("word", editText.getText().toString());
               reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                       getId(),
                       "onData",
                       event);
           }
       });


   }

   public void start(){
       EditText editText = this.input;
       editText.setOnEditorActionListener(new EditText.OnEditorActionListener(){
           @Override
           public boolean onEditorAction(TextView textView, int i, KeyEvent event) {
               if (event != null && event.getKeyCode() == KeyEvent.KEYCODE_ENTER
                       || i == EditorInfo.IME_ACTION_DONE) {
                   getData();
                   return true;
               }
               return false;
           }
       });

   }


}
