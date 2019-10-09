package com.example.dictionary;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.view.View;
import android.widget.FrameLayout;


public class Definition extends FrameLayout {
    Context mContext;
    View view;

    public Definition(@NonNull Context context) {
        super(context);
        this.mContext = context;
        initView();
    }

    public Definition(@NonNull Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        this.mContext = context;
        initView();
    }

    public Definition(@NonNull Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        this.mContext = context;
        initView();
    }

    public void initView(){
        view = inflate(this.mContext, R.layout.res_layout, null);
        addView(view);
    }


}
