import { b64encode } from "./Base64.js";

class DomoticzApiProvider {
  constructor(hostname, { username, password, useSSL, port }) {
    this.hostname = hostname;
    this.username = username;
    this.password = password;
    this.useSSL = useSSL;
    this.port = port;
    this.endpoint = this.url("json.htm");
  }

  url(uri) {
    const proto = `http${this.useSSL ? "s" : ""}://`;
    const host = this.hostname;
    const port = this?.port ? this.port : this?.useSSL ? 443 : 80;

    const credentials =
      this?.username && this?.password
        ? `?username=${b64encode(this.username)}&password=${b64encode(
            this.password
          )}`
        : "?username=&password=";

    return `${proto}${host}:${port}/${uri}${credentials}`;
  }

  // DOMOTICZ NATIVE CALLS
  cameras(data) {
    return this.domoticz({ type: "cameras", ...data });
  }
  command(data) {
    return this.domoticz({ type: "command", ...data });
  }
  devices(data) {
    return this.domoticz({ type: "devices", ...data });
  }
  events(data) {
    return this.domoticz({ type: "events", ...data });
  }
  notifications(data) {
    return this.domoticz({ type: "notifications", ...data });
  }
  scenes(data) {
    return this.domoticz({ type: "scenes", ...data });
  }
  setUsed(data) {
    return this.domoticz({ type: "setUsed", ...data });
  }
  checkCredentials() {
    return this.__generic("GET", `${this.url("json.htm")}&api-call`);
  }

  // TOOLING
  get(uri) {
    return this.__generic("GET", this.url(`${uri}`));
  }
  domoticz(data) {
    return this.__generic("GET", this.endpoint, data);
  }

  // Want to write an new HTTP manager (other than fetch) just create a new
  // DomoticzApiProvider[foobar].js and implement only this method.
  // eslint-disable-next-line no-unused-vars
  __generic(method, endpoint, data, content) {}
}

export { DomoticzApiProvider };
