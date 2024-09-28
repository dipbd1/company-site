"use client"
import {Canvas} from '@react-three/fiber';
import {Suspense, useEffect} from 'react';
import {useGLTF, OrbitControls, Html, useAnimations, useTexture} from '@react-three/drei';
import {Hero3DModel} from "@/components/3D/hero_3d.model";

// 3D Model component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Model = ({url, textureUrl}) => {
    const {scene, animations} = useGLTF(url); // Load the GLTF model
    const {actions} = useAnimations(animations, scene); // Manage animations
    const texture = useTexture(textureUrl); // Load the texture

    useEffect(() => {
        if (actions) {
            actions[Object.keys(actions)[0]].play(); // Play the first animation
        }
    }, [actions]);

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.material.map = texture; // Apply the texture to the model
                child.material.needsUpdate = true;
            }
            if (child.isLight) {
                scene.add(child); // Add lights to the scene
            }
        });
    }, [scene, texture]);

    return <primitive object={scene}/>;
};

// Fallback component (e.g., spinner)
const Loader = () =>
    <Html>
        <div>Loading 3D model...</div>
    </Html>;

// Main component rendering the model lazily
const Hero3DComponent = () => (
    <div className="h-96 w-96">
        <Canvas>
            <Suspense fallback={<Loader/>}>
                <ambientLight/>
                <directionalLight position={[10, 10, 5]} intensity={1}/>
                <Hero3DModel/>
                <OrbitControls
                    autoRotate
                    autoRotateSpeed={6.0}
                    minDistance={2.8}
                    maxDistance={2.8}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 3}
                />
            </Suspense>
        </Canvas>
    </div>

);

export default Hero3DComponent;