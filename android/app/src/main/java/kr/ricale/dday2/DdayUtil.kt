package kr.ricale.dday2

import android.content.Context
import org.json.JSONObject
import java.time.LocalDate
import java.time.LocalDateTime
import java.time.temporal.ChronoUnit

object DdayUtil {
    private const val STORAGE_KEY = "ongoing"
    private const val VALUE_KEY_NAME = "name"
    private const val VALUE_KEY_YEAR = "year"
    private const val VALUE_KEY_MONTH = "month"
    private const val VALUE_KEY_DAY = "day"

    fun init(context: Context) {
        Storage.init(context)
    }

    fun setOngoing(name: String, year: Int, month: Int, day: Int) {
        val obj = JSONObject()
        obj.put(VALUE_KEY_NAME, name)
        obj.put(VALUE_KEY_YEAR, year)
        obj.put(VALUE_KEY_MONTH, month)
        obj.put(VALUE_KEY_DAY, day)
        Storage.set(STORAGE_KEY, obj)
    }

    fun removeOngoing() {
        Storage.remove(STORAGE_KEY)
    }

    fun hasOngoing(): Boolean {
        return Storage.get(STORAGE_KEY) != null
    }

    fun getOngoingMessageContent(
        name: String,
        year: Int,
        month: Int,
        day: Int,
    ): Pair<String, String> {
        var diffToday = ChronoUnit.DAYS.between(LocalDate.of(year, month, day), LocalDate.now())
        if(diffToday >= 0) {
            diffToday += 1
        }

        val testString = "%d:%d".format(LocalDateTime.now().minute, LocalDateTime.now().second)

        return Pair(
            name,
            if(diffToday < 0) {
                "D-%d".format(diffToday * -1)
            } else {
                "D+%d %s".format(diffToday, testString)
            }
        )
    }

    fun getOngoingMessageContent(): Pair<String, String>? {
        val obj = Storage.get(STORAGE_KEY) ?: return null

        val name = obj.getString(VALUE_KEY_NAME)
        val year = obj.getInt(VALUE_KEY_YEAR)
        val month = obj.getInt(VALUE_KEY_MONTH)
        val day = obj.getInt(VALUE_KEY_DAY)

        return getOngoingMessageContent(name, year, month, day)
    }
}