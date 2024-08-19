varying float vDistance;

void main() {
  vec3 color = vec3(0.34, 0.53, 0.96);
  float strength = distance(gl_PointCoord, vec2(0.5));
  strength = 1.0 - strength;
  strength = pow(strength, 3.0);

  color = mix(color, vec3(0.54, 0.83, 0.56), vDistance * 0.5);
  color = mix(vec3(0.0), color, strength * 0.35);
  gl_FragColor = vec4(color, strength);
}
