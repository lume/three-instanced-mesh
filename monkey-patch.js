import { monkeyPatch as _monkeyPatch } from "./monkey-patch/index.js"

export function monkeyPatch(THREE) {
	if (/InstancedMesh/.test(THREE.REVISION)) return THREE;

	_monkeyPatch(THREE);

	THREE.REVISION += "_InstancedMesh";

	return THREE;
}
