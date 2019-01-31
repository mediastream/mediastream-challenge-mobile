package com.example.mylibrary;

import android.content.DialogInterface;
import android.content.Intent;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;

import com.squareup.picasso.Picasso;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Response;

public class MainActivityLibrary extends AppCompatActivity {
    private Button search;
    public View layout1;
    public View layout2;
    private View progress;
    private ImageView image;
    private ImageView back;
    private ImageView share;
    protected JSONArray jsonResult;
    protected TextView definition;
    protected String imageText;
    private EditText word;
    private AlertDialog alertDialog;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_library);
        layout1 = (View)findViewById(R.id.layout1);
        layout2 = (View)findViewById(R.id.layout2);
        progress = (View)findViewById(R.id.progressBarContent);
        image = (ImageView)findViewById(R.id.imageViewDescription);
        back = (ImageView)findViewById(R.id.imageView4);
        share = (ImageView)findViewById(R.id.imageView3);
        definition = (TextView)findViewById(R.id.textViewDescrip);
        word = (EditText)findViewById(R.id.editText);
        search = (Button)findViewById(R.id.button);
        image.setImageResource(R.mipmap.alert);
        alertDialog = new AlertDialog.Builder(this).create();
        alertDialog.setTitle("Ups!");
        alertDialog.setMessage("Tienes que ingresar una palabra.");
        alertDialog.setCancelable(false);
        alertDialog.setButton(AlertDialog.BUTTON_NEUTRAL, "OK",
                new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {
                        alertDialog.dismiss();
                    }
                });
        search.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (!word.getText().toString().isEmpty()){
                    postDefinitions();
                    postImage();
                    layout1.setVisibility(View.GONE);
                    layout2.setVisibility(View.VISIBLE);
                } else {
                    alertDialog.show();
                }
            }
        });
        share.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent sharingIntent = new Intent(android.content.Intent.ACTION_SEND);
                sharingIntent.setType("text/plain");
                startActivity(Intent.createChooser(sharingIntent, "Share via"));
            }
        });
        back.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                layout1.setVisibility(View.VISIBLE);
                layout2.setVisibility(View.GONE);
            }
        });

        //Picasso.with(getBaseContext()).load("https://farm8.staticflickr.com/7886/31993212067_7b1a45e4fa_m.jpg").into(image);
    }

    static OkHttpClient client = new OkHttpClient();
    public static Call post(String url, okhttp3.Callback callback) {
        okhttp3.Request request = new okhttp3.Request.Builder()
                .url(url)
                .build();
        Call call = client.newCall(request);
        call.enqueue(callback);
        return call;
    }

    public  void postDefinitions(){
        String url = "http://api.urbandictionary.com/v0/define?term="+word.getText();
        post(url,new Callback(){
            @Override
            public void onFailure(Call call, IOException e) {
                Log.v("POSTNoPayments!", e.getMessage());
            }
            @Override
            public void onResponse(Call call, Response response) throws IOException {
                if (response.isSuccessful()) {
                    String responseStr = response.body().string();
                    try {
                        parseJSon(responseStr);
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                } else {
                    String responseStr = response.body().string();
                    Log.v("POSTNoPayments!", responseStr);
                }
            }
        });
    }

    public void postImage(){
        String url = "https://api.flickr.com/services/feeds/photos_public.gne?tags="+word.getText()+"&tagmode=any&format=json";
        post(url,new Callback(){
            @Override
            public void onFailure(Call call, IOException e) {
                Log.v("POSTNoPayments!", e.getMessage());
            }
            @Override
            public void onResponse(Call call, Response response) throws IOException {
                if (response.isSuccessful()) {
                    String responseStr = response.body().string();
                    //Log.v("POSTYesPayments!", responseStr);
                    try {
                        parseJSonImage(responseStr);
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                    //Picasso.with(MainActivityLibrary.this).load(photo).into(image);
                } else {
                    String responseStr = response.body().string();
                    Log.v("POSTNoPayments!", responseStr);
                }
            }
        });
    }

    public void parseJSon(String data) throws JSONException {
        if (data == null )
            return;
        Log.v("Data", data);
        JSONObject jsonData = new JSONObject(data);
        Log.v("ParseJSon!1", jsonData.toString());
        jsonResult = jsonData.getJSONArray("list");
        Log.v("ParseJSon!2", jsonResult.toString());
        JSONObject jsonResults = jsonResult.getJSONObject(0);
        Log.v("ParseJSon!3", jsonResults.getString("definition"));
        definition.setText(jsonResults.getString("definition"));
    }

    public void parseJSonImage(String data) throws JSONException {
        if (data == null )
            return;
        Log.v("Data", data);
        String newData = data.replace("jsonFlickrFeed(", "");
        JSONObject jsonData = new JSONObject(newData.replace(")", ""));
        Log.v("ParseJSon!1", jsonData.toString());
        jsonResult = jsonData.getJSONArray("items");
        Log.v("ParseJSon!2", jsonResult.toString());
        JSONObject jsonResults = jsonResult.getJSONObject(0).getJSONObject("media");
        Log.v("ParseJSon!3", jsonResults.getString("m"));
        imageText = jsonResults.getString("m");
    }


}
