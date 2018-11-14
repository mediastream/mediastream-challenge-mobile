package rayout.cl.testmodule;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
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

public class ModuleActivity extends AppCompatActivity {
Button searchBtn;
EditText searchText;
    ProgressDialog pd;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_module);
        searchBtn = findViewById(R.id.searchBtn);
        searchText = findViewById(R.id.searchText);
        searchBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String termino = searchText.getText().toString();
                if (termino.isEmpty()){
                    Toast.makeText(getApplicationContext(), "Enter text to search", Toast.LENGTH_SHORT).show();
                }else{
                    new JsonTask().execute("http://api.urbandictionary.com/v0/define?term="+termino);

                }

            }
        });
    }

    private class JsonTask extends AsyncTask<String, String, JSONObject> {

        protected void onPreExecute() {
            super.onPreExecute();

            pd = new ProgressDialog(ModuleActivity.this);
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
                JSONArray contactArray = new JSONArray(result.getString("list"));
                JSONObject contactObject = new JSONObject(contactArray.get(0).toString());
                Log.i(" RESPUESTA", contactObject.getString("definition"));
                resultado = contactObject.getString("definition");
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
            Intent intent = new Intent(ModuleActivity.this, Details.class);
            intent.putExtra("termino", searchText.getText().toString());
            intent.putExtra("resultado", resultado);
            intent.putExtra("imagen", " ");
            startActivity(intent);

            //txtJson.setText(result);
        }
    }

}
