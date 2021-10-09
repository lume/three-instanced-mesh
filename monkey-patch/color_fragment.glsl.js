

// multiply the color with per instance color if enabled

export default /* glsl */ `
#ifdef USE_COLOR

	diffuseColor.rgb *= vColor;

#endif

#if defined(INSTANCE_COLOR)
		
	diffuseColor.rgb *= vInstanceColor;
	diffuseColor.a = vInstanceOpacity * opacity;
		
#endif
`;
