import begin_vertex from "./begin_vertex.glsl.js";
import color_fragment from "./color_fragment.glsl.js";
import color_pars_fragment from "./color_pars_fragment.glsl.js";
import color_vertex from "./color_vertex.glsl.js";
import defaultnormal_vertex from "./defaultnormal_vertex.glsl.js";
import uv_pars_vertex from "./uv_pars_vertex.glsl.js";

export function monkeyPatch(THREE) {

	// patches the Threej.s shader chunks with the new required logic
	Object.assign(THREE.ShaderChunk, {
		begin_vertex,
		color_fragment,
		color_pars_fragment,
		color_vertex,
		defaultnormal_vertex,
		uv_pars_vertex,
	});

};
