import React, { useEffect, useMemo, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

const Developer = ({ animationName = "idle", ...props }) => {
    const group = useRef();

    // CHANGE THIS to your new character file if needed
    const { scene } = useGLTF("/models/animations/playermodel.glb");

    // Clone so multiple instances don't share a skeleton
    const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

    // Load FBX animations
    const idle = useFBX("/models/animations/idle.fbx");
    const salute = useFBX("/models/animations/salute.fbx");
    const clapping = useFBX("/models/animations/clapping.fbx");
    const victory = useFBX("/models/animations/victory.fbx");

    const clips = useMemo(() => {
        const a = [];
        if (idle.animations?.[0]) {
            idle.animations[0].name = "idle";
            a.push(idle.animations[0]);
        }
        if (salute.animations?.[0]) {
            salute.animations[0].name = "salute";
            a.push(salute.animations[0]);
        }
        if (clapping.animations?.[0]) {
            clapping.animations[0].name = "clapping";
            a.push(clapping.animations[0]);
        }
        if (victory.animations?.[0]) {
            victory.animations[0].name = "victory";
            a.push(victory.animations[0]);
        }
        return a;
    }, [idle, salute, clapping, victory]);

    const { actions } = useAnimations(clips, group);

    useEffect(() => {
        if (!actions) return;

        // stop everything, then play requested animation
        Object.values(actions).forEach((a) => a?.stop());

        const action = actions[animationName] || actions.idle;
        if (!action) return;

        action.reset().fadeIn(0.3).play();

        return () => {
            action.fadeOut(0.3);
        };
    }, [animationName, actions]);

    return (
        <group ref={group} {...props} dispose={null}>
            <primitive object={clone} />
        </group>
    );
};

useGLTF.preload("/models/animations/playermodel.glb");

export default Developer;
