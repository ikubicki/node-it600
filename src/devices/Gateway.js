const Device = require("../device.js");

class Gateway extends Device {
  NetworkWiFiMAC;
  NetworkLANIP;
  NetworkLANMAC;
  WiFiConnected;
  LANConnected;
  NetworkLANRouterAddr;
  NetworkLANSubnet;
  NetworkPriDNS;
  NetworkSecDNS;
  DisableLocalMode;
  NetworkLANMode;
  OutboundIP;
  Sunset;
  Sunrise;

  static from({ client, data }) {
    return super.from({ client, data }).import({
      NetworkWiFiMAC: data.sGateway.NetworkWiFiMAC,
      NetworkLANIP: data.sGateway.NetworkLANIP,
      NetworkLANMAC: data.sGateway.NetworkLANMAC,
      WiFiConnected: data.sGateway.WiFiConnected_d,
      LANConnected: data.sGateway.LANConnected_d,
      NetworkLANRouterAddr: data.sGateway.NetworkLANRouterAddr,
      NetworkLANSubnet: data.sGateway.NetworkLANSubnet,
      NetworkPriDNS: data.sGateway.NetworkPriDNS,
      NetworkSecDNS: data.sGateway.NetworkSecDNS,
      DisableLocalMode: data.sGateway.DisableLocalMode,
      NetworkLANMode: data.sGateway.NetworkLANMode,
      OutboundIP: data.sGateway.OutboundIP,
      Sunset: data.sGateway.Sunset,
      Sunrise: data.sGateway.Sunrise,
    });
  }
}

module.exports = Gateway;
