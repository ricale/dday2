package kr.ricale.dday2

import android.app.Service
import android.content.Intent
import android.os.IBinder

class OngoingNotificationService : Service() {

    override fun onBind(intent: Intent?): IBinder? {
        TODO("Not yet implemented")
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        val content = DdayUtil.getOngoingMessageContent()
        if(content != null) {
            val notification = DdayNotification.getOngoingNotification(
                applicationContext,
                content.first,
                content.second,
            )
            startForeground(DdayNotification.SERVICE_NOTIFICATION_ID, notification)
        }
        return START_STICKY
    }

    override fun onDestroy() {
        stopForeground(true)
        super.onDestroy()
    }
}