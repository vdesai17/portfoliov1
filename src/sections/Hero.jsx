import React from 'react'
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import HackerRoom from '../components/HackerRoom.jsx';
import CanvasLoader from "../components/CanvasLoader.jsx";
import {calculateSizes} from "../constants/index.js";
import HeroCamera from "../components/HeroCamera.jsx";


const Hero = () => {

    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
    const isSmall = useMediaQuery({maxWidth: 440});
    const sizes = calculateSizes(isTablet, isMobile, isSmall);


    return (
        <section id="home" className="min-h-screen w-full flex flex-col
        relative scroll-mt-[90px]">
            <div className="w-full mx-auto flex flex-col
            sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl
                font-medium text-white text-center font-generalsans">Hi, I am Vivan</p>
                <p className="hero_tag text-gray_gradient">Building Passion Projects</p>
            </div>

            <div className="w-full h-full absolute  inset-0">
                {/*<Leva />*/}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>


                    <PerspectiveCamera makeDefault position={[0,0,20]}/>
                        <HeroCamera>
                        <HackerRoom
                            // scale={0.06}
                            position={sizes.deskPosition}
                            rotation={[0, -Math.PI, 0]}
                            scale={sizes.deskScale}/>
                        </HeroCamera>

                        <ambientLight position={[0,0,0]} rotation={[0,-Math.PI/2, 0]} intensity={1}/>
                        <directionalLight position={[10,10,10]} intensity={2}/>
                    </Suspense>
                </Canvas>

            </div>

        </section>
    )
}
export default Hero
