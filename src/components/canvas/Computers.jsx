import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../Loader";

const Computer = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  const [mobile, setMobile] = useState({
    xs: false,
    sm: false,
  });
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");

    const mediaQuery2 = window.matchMedia(
      "(min-width:501px) and (max-width:700px)"
    );

    setMobile({ ...mobile, xs: mediaQuery.matches });
    setMobile({ ...mobile, sm: mediaQuery2.matches });
    const hanldeMediaQueryChange = () => {
      setMobile({ ...mobile, xs: mediaQuery.matches, sm: mediaQuery2.matches });
    };
    mediaQuery.addEventListener("change", hanldeMediaQueryChange);
    mediaQuery2.addEventListener("change", hanldeMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", hanldeMediaQueryChange);
      mediaQuery2.removeEventListener("change", hanldeMediaQueryChange);
    };
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={mobile.xs ? 0.65 : mobile.sm ? 0.59 : 0.75}
        position={
          mobile.xs ? [0, -3, -2] : mobile.sm ? [0, -3, -1.3] : [0, -3.25, -1.5]
        }
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
