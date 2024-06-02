package kr.ricale.dday2

import android.Manifest
import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import androidx.core.app.ActivityCompat
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat

object DdayNotification {
    private const val CHANNEL_ID = "ONGOING_NOTIFICATION"
    const val SERVICE_NOTIFICATION_ID = 123

    private fun createNotificationChannel(context: Context) {
        val channel = NotificationChannel(
            CHANNEL_ID,
            "Ongoing",
            NotificationManager.IMPORTANCE_DEFAULT)
        channel.description = "Ongoing notifications"
        channel.setSound(null, null)
        val notificationManager = context.getSystemService(NotificationManager::class.java)
        notificationManager.createNotificationChannel(channel)
    }

    fun init(context: Context) {
        createNotificationChannel(context)
    }

    fun getOngoingNotification(
        context: Context,
        contentTitle: String,
        contentText: String,
    ): Notification? {
        val notificationIntent = Intent(context, MainActivity::class.java)
        val contentIndent = PendingIntent.getActivity(
            context,
            0,
            notificationIntent,
            PendingIntent.FLAG_CANCEL_CURRENT or PendingIntent.FLAG_IMMUTABLE)
        val notification = NotificationCompat.Builder(context, CHANNEL_ID)
            .setContentTitle(contentTitle)
            .setContentText(contentText)
            .setSmallIcon(R.mipmap.ic_launcher)
            .setContentIntent(contentIndent)
            .setOngoing(true)
            .build()

        return notification
    }

    fun runOngoingNotification(
        context: Context,
        contentTitle: String,
        contentText: String,
    ) {
        val notification = getOngoingNotification(context, contentTitle, contentText) ?: return
        if (ActivityCompat.checkSelfPermission(context, Manifest.permission.POST_NOTIFICATIONS)
            != PackageManager.PERMISSION_GRANTED) {
            // TODO: Consider calling
            //    ActivityCompat#requestPermissions
            // here to request the missing permissions, and then overriding
            //   public void onRequestPermissionsResult(int requestCode, String[] permissions,
            //                                          int[] grantResults)
            // to handle the case where the user grants the permission. See the documentation
            // for ActivityCompat#requestPermissions for more details.
            return
        }
        NotificationManagerCompat
            .from(context)
            .notify(SERVICE_NOTIFICATION_ID, notification)
    }

    fun releaseOngoingNotification(context: Context) {
        NotificationManagerCompat
            .from(context)
            .cancel(SERVICE_NOTIFICATION_ID)
    }
}