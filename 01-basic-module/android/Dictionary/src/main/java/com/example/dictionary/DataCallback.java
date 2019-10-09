package com.example.dictionary;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public interface DataCallback {
    void onSuccess(JSONObject result) throws JSONException, IOException;
}
