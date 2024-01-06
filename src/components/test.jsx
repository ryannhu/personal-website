/* eslint-disable */
import React, { useRef } from "react";
import brainData from "./data";
const brain = brainData.economics[0].paths;
import "../styles/test.css";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

const RandomRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

let curves = [];
for (let i = 0; i < 100; ++i) {
  let points = [];
  let length = RandomRange(0.1, 1);
  for (let j = 0; j < 100; ++j) {
    points.push(
      new THREE.Vector3().setFromSphericalCoords(
        1,
        Math.PI - (j / 100) * Math.PI * length,
        (i / 100) * Math.PI * 2,
      ),
    );
  }
  let tempcurve = new THREE.CatmullRomCurve3(points);
  curves.push(tempcurve);
}

let brainCurves = [];

brain.forEach((path) => {
  let points = [];
  console.log(path);
  for (let i = 0; i < path.length; i += 3) {
    points.push(new THREE.Vector3(path[i], path[i + 1], path[i + 2]));
  }
  let tempcurve = new THREE.CatmullRomCurve3(points);
  brainCurves.push(tempcurve);
});

const Tube = ({ inCurve }) => {
  const BrainMat = useRef();

  useFrame(({ clock }) => {
    BrainMat.current.uniforms.time.value = clock.getElapsedTime();
  });

  const BrainMaterial = shaderMaterial(
    { time: 0, color: new THREE.Color(0.1, 0.3, 0.6) },
    // vertex shader
    /*glsl*/ `
      varying vec2 vUv;
      uniform float time;
      varying float vProgress;
      void main() {
        vUv = uv;
        vProgress = smoothstep(-1., 1., sin(vUv.x * 11. + 2. * time));
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    // fragment shader
    /*glsl*/ `
      uniform float time;
      uniform vec3 color;
      varying vec2 vUv;
      varying float vProgress;
      void main() {
        vec3 color1 = vec3(0.5, 0.3, 1);
        vec3 color2 = vec3(1, 0.3, 0.5);
        float hideCorners = smoothstep(1.,0.9, vUv.x);
        float hideCorners1 = smoothstep(0.,0.1, vUv.x);  
        vec3 finalColor = mix(color, color * 0.3, vProgress);
        // vec3 finalColor = mix(color1, color2, vProgress);
        gl_FragColor.rgba = vec4(finalColor, hideCorners * hideCorners1);
        // gl_FragColor.rgba = vec4(vec3(vProgress), 1);
      }
    `,
  );

  extend({ BrainMaterial });

  return (
    <mesh>
      <tubeGeometry args={[inCurve, 64, 0.001, 2, false]} />
      <brainMaterial 
      ref={BrainMat} 
      side={THREE.DoubleSide}
      transparent={true}
      depthTest={false}
      depthWrite={false}
      blending={THREE.AdditiveBlending}
      // wireframe={true}
       />
    </mesh>
  );
};

const Tubes = () => {
  return (
    <group>
      {brainCurves.map((curve, index) => (
        <Tube inCurve={curve} key={index} />
      ))}
    </group>
  );
};

const Brain = () => {
  return (
    <div className="test-container">
      <Canvas camera={[0, 0, 0.3]}>
        {/* <color attach="background" args={["black"]} /> */}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          {/* <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" /> */}
        </mesh>
        {/* <Tube curve={2}/> */}
        <Tubes />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Brain;
