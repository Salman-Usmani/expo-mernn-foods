import { createMMKV } from "react-native-mmkv";
const storage = createMMKV();

const getAccessToken = () => {
  const token = storage.getString("accessToken");
  return token || null;
};
const getUser = () => {
  const user = storage.getString("user");
  if (!user) return null;

  const userObject = JSON.parse(user);
  return userObject;
};
const getUserLocation = () => {
  const userLocation = storage.getString("userLocation");
  if (!userLocation) return null;

  const locationObject = JSON.parse(userLocation);
  return locationObject;
};
const getUserOnboard = () => {
  const isOnBoarded = storage.getBoolean("isOnBoarded");

  return isOnBoarded || null;
};

const setAccessToken = (token: string | null) => {
  if (token) {
    storage.set("accessToken", token);
  } else {
    storage.remove("accessToken");
  }
};
const setUser = (user: string | null) => {
  if (user) {
    storage.set("user", user);
  } else {
    storage.remove("user");
  }
};
const setUserLocation = (userLocation: string | null) => {
  if (userLocation) {
    storage.set("userLocation", userLocation);
  } else {
    storage.remove("userLocation");
  }
};
const setUserOnboard = (isBoarded: string) => {
  storage.set("isOnBoarded", isBoarded);
};

export {
  getAccessToken,
  getUser,
  getUserLocation,
  getUserOnboard,
  setAccessToken,
  setUser,
  setUserLocation,
  setUserOnboard,
};
