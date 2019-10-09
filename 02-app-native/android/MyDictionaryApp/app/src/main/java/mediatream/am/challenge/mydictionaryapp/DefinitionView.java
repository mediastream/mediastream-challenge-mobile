package mediatream.am.challenge.mydictionaryapp;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.util.Log;
import android.widget.TextView;

import com.example.dictionary.Api;
import com.example.dictionary.DataCallback;
import com.example.dictionary.Definition;

public class DefinitionView extends Definition {
    Context mContext;
    public DefinitionView(@NonNull Context context) {
        super(context);
        mContext = context;
    }

    public DefinitionView(@NonNull Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        mContext = context;
    }

    public DefinitionView(@NonNull Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        mContext = context;
    }



}
