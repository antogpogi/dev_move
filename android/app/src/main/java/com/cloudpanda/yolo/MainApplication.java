package com.cloudpanda.yolo;

import android.app.Application;

import android.support.annotation.NonNull;
import com.facebook.react.ReactApplication;
import com.reactnativecommunity.cameraroll.CameraRollPackage;
import com.rnfs.RNFSPackage;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.mg.app.PickerPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.cloudpanda.yolo.PESDKPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }
    
    @NonNull
    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new CameraRollPackage(),
            new RNFSPackage(),
            new PESDKPackage(),
            new RNFirebasePackage(),
            new RNFirebaseMessagingPackage(),
            new RNCWebViewPackage(),
            new PickerPackage(),
            new VectorIconsPackage(),
            new RNGestureHandlerPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
