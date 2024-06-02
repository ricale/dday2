package kr.ricale.dday2

import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class OngoingNotificationModule(private val reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {
    init {
        DdayUtil.init(reactContext)
        DdayNotification.init(reactContext)
    }

    override fun getName(): String {
        return "OngoingNotification"
    }

    @ReactMethod
    fun set(name: String, year: Int, month: Int, day: Int) {
        DdayUtil.setOngoing(name, year, month, day)
        val content = DdayUtil.getOngoingMessageContent(name, year, month, day)
        DdayNotification.runOngoingNotification(reactContext, content.first, content.second)
        DdayUpdater.set(reactContext)
    }

    @ReactMethod
    fun release() {
        DdayUtil.removeOngoing()
        DdayNotification.releaseOngoingNotification(reactContext)
        DdayUpdater.cancel(reactContext)
        reactContext.stopService(Intent(reactContext, OngoingNotificationService::class.java))
    }
}
