

// add fragment varying if feature enabled

export default /* glsl */ `

#ifdef USE_COLOR

	varying vec3 vColor;

#endif

#if defined( INSTANCE_COLOR )
		
	varying vec3 vInstanceColor;
	varying float vInstanceOpacity;
		
#endif
`;
