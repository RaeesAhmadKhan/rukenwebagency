"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NetworkBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0); // transparent
    mountRef.current.appendChild(renderer.domElement);

    // Create particles (nodes)
    const particleCount = 150;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 200;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x0c0c0c,
      size: 2,
      transparent: true,
      opacity: 0.4,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Lines between nodes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x0c0c0c,
      transparent: true,
      opacity: 0.2,
    });

    const lineGeometry = new THREE.BufferGeometry();
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // Mouse interaction
    const mouse = { x: 0, y: 0 };
    window.addEventListener("mousemove", (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);

      // Gentle camera movement
      camera.position.x += (mouse.x * 20 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 20 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Update lines dynamically
      const posArray = particles.geometry.attributes.position.array;
      const linePositions = [];

      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3;
        for (let j = i + 1; j < particleCount; j++) {
          const jx = j * 3;
          const dx = posArray[ix] - posArray[jx];
          const dy = posArray[ix + 1] - posArray[jx + 1];
          const dz = posArray[ix + 2] - posArray[jx + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 25) {
            linePositions.push(
              posArray[ix],
              posArray[ix + 1],
              posArray[ix + 2],
              posArray[jx],
              posArray[jx + 1],
              posArray[jx + 2]
            );
          }
        }
      }

      lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3)
      );

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);

      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
}
