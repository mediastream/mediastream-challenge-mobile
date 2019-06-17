package com.reactlibrary;

import android.view.View;

import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import java.util.Map;

public class DictionaryViewManager extends SimpleViewManager<View> {
    public static final String REACT_CLASS = "DictionaryView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected View createViewInstance(ThemedReactContext reactContext) {
        return new DictionaryView(reactContext);
    }



    @Override
    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder()
                .put("onData", MapBuilder.of("phasedRegistrationNames",
                        MapBuilder.of("bubbled", "onData")))
                .build();
    }


}
