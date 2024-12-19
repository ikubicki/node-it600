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
      ModelIdentifier: data.sGateway.ModelIdentifier,
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
      GWThingName: data.sAWSIoT.GWThingName,
      CloudStatus: data.sAWSIoT.CloudStatus,
    });
  }

  get name() {
    return this.GWThingName;
  }

  get model() {
    return this.ModelIdentifier;
  }

  get isOnline() {
    return this.CloudStatus === 1;
  }

  get isRunning() {
    return this.LANConnected === 1 || this.WiFiConnected === 1;
  }
}

module.exports = Gateway;
