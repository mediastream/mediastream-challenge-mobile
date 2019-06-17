package com.example.dictionary;


import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;
import java.util.List;


public class Definition {

   private String definition;
   private List<String> soundsUrl = new ArrayList<String>();
   public Definition(String definition){
        this.definition = definition;
   }

    public String getDefinition() {
        return definition;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
    }

    public List<String> getSoundsUrl() {
        return soundsUrl;
    }

    public void setSoundsUrl(List<String> soundsUrl) {
        this.soundsUrl = soundsUrl;
    }

}
