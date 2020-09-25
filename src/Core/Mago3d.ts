import ServerPolicy from "./ServerPolicy";

export default class Mago3d {
    containerId: string;
    serverPolicy: ServerPolicy;
    constructor(containerId: string, serverPolicy: ServerPolicy) {
        this.containerId = containerId;
        this.serverPolicy = new ServerPolicy(serverPolicy);
    }
}