import AsyncStorage from '@react-native-async-storage/async-storage';

async function get(key: string) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error(error);
  }
  return null;
}

async function set(key: string, value: string) {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(error);
  }
}

async function getObject(key: string): Promise<object | null> {
  try {
    const string = await AsyncStorage.getItem(key);
    return string === null ? string : JSON.parse(string);
  } catch (error) {
    console.error(error);
  }
  return null;
}

async function setObject(key: string, value: object) {
  try {
    const stringified = JSON.stringify(value);
    return await AsyncStorage.setItem(key, stringified);
  } catch (error) {
    console.error(error);
  }
}

const storage = { get, getObject, set, setObject };

export default storage;
