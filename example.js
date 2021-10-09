import { monkeyPatch } from "./index.js";

globalThis.InstancedMesh = monkeyPatch(THREE);
