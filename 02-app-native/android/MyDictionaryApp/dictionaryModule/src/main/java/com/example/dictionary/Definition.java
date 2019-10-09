package com.example.dictionary;


import android.content.Context;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.widget.FrameLayout;

import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;
import java.util.List;


public class Definition extends FrameLayout {


    public Definition(@NonNull Context context) {
        super(context);
    }

    public Definition(@NonNull Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
    }

    public Definition(@NonNull Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    private void initView(){

    }
}
