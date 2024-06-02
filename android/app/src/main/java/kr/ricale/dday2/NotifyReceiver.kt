package kr.ricale.dday2

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent

class NotifyReceiver: BroadcastReceiver() {
    override fun onReceive(context: Context?, intent: Intent?) {
        if(context != null) {
            DdayUtil.init(context)
            if(DdayUtil.hasOngoing()) {
                context.startService(Intent(context, OngoingNotificationService::class.java))
            }
        }
    }
}