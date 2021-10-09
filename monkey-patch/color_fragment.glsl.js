/**************************
 * Dusan Bosnjak @pailhead
 **************************/

// multiply the color with per instance color if enabled

module.exports = /* glsl */ `
#ifdef USE_COLOR

	diffuseColor.rgb *= vColor;

#endif

#if defined(INSTANCE_COLOR)
		
	diffuseColor.rgb *= vInstanceColor;
	diffuseColor.a = vInstanceOpacity * opacity;
		
#endif
`;
