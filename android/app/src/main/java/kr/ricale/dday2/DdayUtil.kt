package kr.ricale.dday2

import android.content.Context
import org.json.JSONObject
import java.time.LocalDate
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

    private fun getRemainingDays(date: LocalDate): Long {
        return ChronoUnit.DAYS.between(date, LocalDate.now())
    }

    fun getOngoingMessageContent(): Pair<String, String>? {
        val obj = Storage.get(STORAGE_KEY) ?: return null

        val year = obj.getInt(VALUE_KEY_YEAR)
        val month = obj.getInt(VALUE_KEY_MONTH)
        val day = obj.getInt(VALUE_KEY_DAY)

        var diffToday = getRemainingDays(LocalDate.of(year, month, day))
        if(diffToday >= 0) {
            diffToday += 1
        }

        return Pair(
            obj.getString(VALUE_KEY_NAME),
            if(diffToday < 0) {
                "D-%d".format(diffToday * -1)
            } else {
                "D+%d".format(diffToday)
            }
        )
    }
}