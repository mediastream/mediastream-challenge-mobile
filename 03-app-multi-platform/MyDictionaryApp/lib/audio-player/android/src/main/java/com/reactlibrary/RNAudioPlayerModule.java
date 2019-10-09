
package com.reactlibrary;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import android.media.MediaPlayer;

import javax.annotation.Nullable;

public class RNAudioPlayerModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;
  private static MediaPlayer player;


  private void sendEvent(@Nullable WritableMap obj){
    this.reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("callback",obj);
  }

  public RNAudioPlayerModule(ReactApplicationContext reactContext) {
    super(reactContext);
      player = new MediaPlayer();
      player.setOnCompletionListener(new MediaPlayer.OnCompletionListener() {
          @Override
          public void onCompletion(MediaPlayer mp) {
            mp.reset();
          }
      });
      player.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
          @Override
          public void onPrepared(MediaPlayer mp) {
              WritableMap data = Arguments.createMap();
              data.putBoolean("loading",false);
              sendEvent(data);
          }
      });
    this.reactContext = reactContext;
  }


  @ReactMethod
  public void preparePlayer(String url, Callback callback){
      WritableMap data = Arguments.createMap();
      data.putBoolean("loading",true);
      data.putBoolean("error",false);
      sendEvent(data);
      try{
        player.setDataSource(url);
        player.prepare();
      }catch (Exception e){
          data = Arguments.createMap();
          data.putBoolean("loading",false);
          data.putBoolean("error",true);
          data.putString("errorM",e.getMessage());
        sendEvent(data);
      }
  }

  @ReactMethod
  public void play(Callback callback){
    try{
      player.start();
    }catch (Exception e) {
      System.out.println("Error al play "+e);
    }
  }

  @ReactMethod
  public void stop(Callback callback){
    try{
      player.pause();
    }catch (Exception e) {
      System.out.println("Error al stop "+e);
    }
  }


  @Override
  public String getName() {
    return "RNAudioPlayer";
  }
}
