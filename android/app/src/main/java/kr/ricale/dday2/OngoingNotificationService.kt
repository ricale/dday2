package kr.ricale.dday2

import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.app.Service
import android.content.Intent
import android.os.Build
import android.os.IBinder
import androidx.core.app.NotificationCompat

class OngoingNotificationService : Service() {
    private val channelId = "ONGOING_NOTIFICATION"
    private val serviceNotificationId = 123

    private fun createNotificationChannel() {
        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val importance = NotificationManager.IMPORTANCE_DEFAULT
            val channel = NotificationChannel(channelId, "Ongoing", importance)
            channel.description = "Ongoing notifications"
            val notificationManager = getSystemService(NotificationManager::class.java)
            notificationManager.createNotificationChannel(channel)
        }
    }

    override fun onBind(p0: Intent?): IBinder? {
        TODO("Not yet implemented")
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        createNotificationChannel()
        val notificationIntent = Intent(this, MainActivity::class.java)
        val contentIndent = PendingIntent.getActivity(
                this,
                0,
                notificationIntent,
                PendingIntent.FLAG_CANCEL_CURRENT or PendingIntent.FLAG_IMMUTABLE)
        val notification = NotificationCompat.Builder(this, channelId)
                .setContentTitle("Ongoing")
                .setContentText("Ongoing content")
                .setSmallIcon(R.mipmap.ic_launcher)
                .setContentIntent(contentIndent)
                .setOngoing(true)
                .build()

        startForeground(serviceNotificationId, notification)

        return START_STICKY
    }
}