package com.example.dictionary;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.FrameLayout;


public class Container extends FrameLayout {
    public Button dictionaryButton;
    public View dictionary;
    Context mContext;
    public EditText input;
    public Container(@NonNull Context context) {
        super(context);
        this.mContext = context;
        initView();
    }

    public Container(@NonNull Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        this.mContext = context;
        initView();
    }

    public Container(@NonNull Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        this.mContext = context;
        initView();
    }

    private void initView() {
        dictionary = inflate(getContext(), R.layout.layout, null);
        addView(dictionary);
        dictionaryButton = dictionary.findViewById(R.id.buttonId);
        dictionaryButton.setOnClickListener(onClick);
        input = dictionary.findViewById(R.id.inputId);

    }

    private OnClickListener onClick = new OnClickListener(){
        @Override
        public void onClick(View view) {
            try {
                String txt = input.getText().toString();
                if (!txt.isEmpty()) {
                    getData();
                }

            } catch (Exception e) {
                Log.d("error",e.getMessage());
                e.printStackTrace();
            }

        }
    };

    public void getData() throws Exception {
     // Para usar
    }



}
