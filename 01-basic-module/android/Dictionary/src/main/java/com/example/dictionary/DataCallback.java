package com.example.dictionary;

import org.json.JSONException;
import org.json.JSONObject;

public interface DataCallback {
    void onSuccess(JSONObject result) throws JSONException;
}
