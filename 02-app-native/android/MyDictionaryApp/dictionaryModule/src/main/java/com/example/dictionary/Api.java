package com.example.dictionary;

import android.content.Context;
import android.util.Log;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;

import org.json.JSONObject;

import java.util.List;

import static com.android.volley.Request.Method.GET;


public class Api {
    private static final String URI_DEF = "http://api.urbandictionary.com/v0/define?term=dog";
    public static JSONObject res;

    public static void getDefinition( Context context){
        RequestQueue rq = Volley.newRequestQueue(context);

        JsonObjectRequest objectRequest = new JsonObjectRequest(
                GET,
                URI_DEF,
                null,
                new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        Log.d("eddie", response.toString());
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
