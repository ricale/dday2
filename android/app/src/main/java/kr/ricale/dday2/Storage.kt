package kr.ricale.dday2

import android.content.Context
import android.content.SharedPreferences
import org.json.JSONObject

object Storage {
    private lateinit var sharedPref: SharedPreferences
    fun init(context: Context) {
        if(!this::sharedPref.isInitialized) {
            sharedPref = context.getSharedPreferences("dday2", Context.MODE_PRIVATE)
        }
    }

    fun set(key: String, value: Int) {
        val editor = sharedPref.edit()
        editor.putInt(key, value)
        editor.apply()
    }

    fun set(key: String, value: String) {
        val editor = sharedPref.edit()
        editor.putString(key, value)
        editor.apply()
    }

    fun set(key: String, value: JSONObject) {
        set(key, value.toString())
    }

    fun remove(key: String) {
        val editor = sharedPref.edit()
        editor.remove(key)
        editor.apply()
    }

    fun get(key: String, defValue: Int): Int {
        return sharedPref.getInt(key, defValue)
    }

    fun get(key: String, defValue: String): String? {
        return sharedPref.getString(key, defValue)
    }

    fun get(key: String): JSONObject? {
        val jsonString: String? = sharedPref.getString(key, null)

        return try {
            JSONObject(jsonString ?: "")
        } catch (e: Exception) {
            null
        }
    }
}