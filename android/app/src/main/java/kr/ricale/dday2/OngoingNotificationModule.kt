package kr.ricale.dday2

import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class OngoingNotificationModule(private val reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "OngoingNotification"
    }

    @ReactMethod
    fun startService() {
        reactContext.startService(Intent(reactContext, OngoingNotificationService::class.java))
    }
}
