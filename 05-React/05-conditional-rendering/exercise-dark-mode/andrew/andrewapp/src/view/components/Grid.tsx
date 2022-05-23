import { extend, ReactThreeFiber } from "@react-three/fiber"
import * as THREE from "three"

extend({ Line_: THREE.Line })

declare global {
    namespace JSX {
        interface IntrinsicElements {
            line_: ReactThreeFiber.Object3DNode<THREE.Line, typeof THREE.Line>
        }
    }
}
const points = []
points.push(new THREE.Vector3(-5.5, 2.5, 0.5))
points.push(new THREE.Vector3(4.5, 2.5, 0.5))
points.push(new THREE.Vector3(4.5, 2.5, -0.5))
points.push(new THREE.Vector3(-5.5, 2.5, -0.5))
points.push(new THREE.Vector3(-5.5, 2.5, 0.5))
points.push(new THREE.Vector3(-5.5, 22.5, 0.5))
points.push(new THREE.Vector3(-5.5, 22.5, -0.5))
points.push(new THREE.Vector3(-5.5, 2.5, -0.5))
points.push(new THREE.Vector3(4.5, 2.5, -0.5))
points.push(new THREE.Vector3(4.5, 22.5, -0.5))
points.push(new THREE.Vector3(-5.5, 22.5, -0.5))
points.push(new THREE.Vector3(-5.5, 22.5, 0.5))
points.push(new THREE.Vector3(4.5, 22.5, 0.5))
points.push(new THREE.Vector3(4.5, 2.5, 0.5))
points.push(new THREE.Vector3(4.5, 22.5, 0.5))
points.push(new THREE.Vector3(4.5, 22.5, -0.5))

const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

const Grid = () => {

    return (
        <>
            <line_ geometry={lineGeometry}>
                <lineBasicMaterial attach="material" color={'#005169'} linewidth={10} linecap={'round'} linejoin={'round'} />
            </line_>
        </>
    )
}

export default Grid