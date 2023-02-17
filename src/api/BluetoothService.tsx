import apiClient from "./Client";

export function getBluetoothDevices() {
  return apiClient.get("/bluetooth");
}
