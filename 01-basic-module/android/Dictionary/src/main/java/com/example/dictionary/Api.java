package com.example.dictionary;

import android.app.AlertDialog;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.util.Log;

import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;


import static com.android.volley.Request.Method.GET;


public class Api {
    private static final String URI_DEF = "http://api.urbandictionary.com/v0/define?term=";
    public static JSONObject res;

    public static void search(final Context context, String word, final DataCallback callback){
        final ProgressDialog pd = ProgressDialog.show(context,"Please Wait...","Please Wait...");
        pd.setCancelable(false);
        pd.show();
        RequestQueue rq = Volley.newRequestQueue(context);
        JsonObjectRequest objectRequest = new JsonObjectRequest(
                GET,
                URI_DEF + word,
                null,
                new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            JSONArray list = response.getJSONArray("list");
                            callback.onSuccess(list.getJSONObject(0));
                            pd.dismiss();
                        } catch (JSONException e) {
                            pd.dismiss();
                            Log.d("eddieError",e.toString());
                            final AlertDialog.Builder dialog = new AlertDialog.Builder(context);
                            dialog.setTitle("Not Found");
                            dialog.setMessage("We couldn't find that word. Try another one.")
                                    .setCancelable(false)
                                    .setPositiveButton("Ok", new DialogInterface.OnClickListener() {
                                        @Override
                                        public void onClick(DialogInterface dialogInterface, int i) {
                                            dialogInterface.dismiss();
                                        }
                                    });
                            dialog.show();
                            e.printStackTrace();
                        }

                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                    Log.d("ERROR", error.toString());
                    }
                }

        );

        rq.add(objectRequest);
    }


}
