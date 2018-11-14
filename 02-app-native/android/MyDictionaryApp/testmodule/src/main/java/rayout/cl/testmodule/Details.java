package rayout.cl.testmodule;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

public class Details extends AppCompatActivity {
ImageView shareImage, backImage, soundBtn;
String termino, descripcion;
    ProgressDialog pd;
TextView terminoLabel, descripcionLabel;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_details);
        shareImage = findViewById(R.id.shareImg);
        backImage = findViewById(R.id.backImg);
        soundBtn = findViewById(R.id.audioBtn);
        termino = getIntent().getStringExtra("termino");
        descripcion = getIntent().getStringExtra("resultado");
        terminoLabel = findViewById(R.id.terminoLabel);
        descripcionLabel = findViewById(R.id.descripcionLabel);

        terminoLabel.setText(termino);
        descripcionLabel.setText(descripcion);
       // new JsonTask().execute("https://api.flickr.com/services/feeds/photos_public.gne?tags="+ termino +"&tagmode=any&format=json");
        shareImage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent sharingIntent = new Intent(Intent.ACTION_SEND);
                sharingIntent.setType("text/plain");
                sharingIntent.putExtra(Intent.EXTRA_SUBJECT, "MediaStream");
                sharingIntent.putExtra(Intent.EXTRA_TEXT, "Esto es un test! " );
                try {
                    startActivity(Intent.createChooser(sharingIntent, "Compartir vía"));
                } catch (Exception e) {
                    Toast.makeText(getApplicationContext(), "No fue posible compartir", Toast.LENGTH_LONG).show();
                }
            }
        });

        backImage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });

        soundBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(getApplicationContext(), "No fue posible reproducir audio", Toast.LENGTH_LONG).show();
            }
        });
    }

    private class JsonTask extends AsyncTask<String, String, JSONObject> {

        protected void onPreExecute() {
            super.onPreExecute();

            pd = new ProgressDialog(Details.this);
            pd.setMessage("Please wait");
            pd.setCancelable(false);
            pd.show();
        }

        protected JSONObject doInBackground(String... params) {


            HttpURLConnection connection = null;
            BufferedReader reader = null;

            try {
                URL url = new URL(params[0]);
                connection = (HttpURLConnection) url.openConnection();
                connection.connect();


                InputStream stream = connection.getInputStream();

                reader = new BufferedReader(new InputStreamReader(stream));

                StringBuffer buffer = new StringBuffer();
                String line = "";

                while ((line = reader.readLine()) != null) {
                    buffer.append(line+"\n");

                }

                return new JSONObject(buffer.toString());


            } catch (MalformedURLException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }catch (JSONException e){
                e.printStackTrace();
            } finally {
                if (connection != null) {
                    connection.disconnect();
                }
                try {
                    if (reader != null) {
                        reader.close();
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            return null;
        }

        @Override
        protected void onPostExecute(JSONObject result) {
            super.onPostExecute(result);
            if (pd.isShowing()){
                pd.dismiss();
            }
            String resultado = "";
            try {
               /* JSONArray contactArray = new JSONArray(result.getString("items"));
                JSONObject contactObject = new JSONObject(contactArray.get(0).toString());
                JSONObject item = new JSONObject(contactObject.getString("media"));*/

               // Log.i(" IMAGEN", result.get("items").toString());
                //resultado = contactObject.getString("definition");
                /*for (int i=0; i < result.length(); i++){
                    JSONArray object = result.getJSONArray("list");
                    for (int j=0; j < object.length(); j++){
                        Log.i(" RESPUESTA", object.getString(0));
                        resultado = object.getString(0);

                    }

                }*/

            }catch (Exception e){
                e.printStackTrace();
            }


            //txtJson.setText(result);
        }
    }
}
