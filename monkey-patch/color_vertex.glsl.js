

// read per instance color from attribute, pass to varying

export default /* glsl */ `
#ifdef USE_COLOR

	vColor.xyz = color.xyz;

#endif

#if defined( INSTANCE_COLOR ) && defined( INSTANCE_TRANSFORM )
		
	vInstanceColor = instanceColor;
	vInstanceOpacity = instanceOpacity;
		
#endif
`;
