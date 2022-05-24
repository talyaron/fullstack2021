import { Html, MeshDistortMaterial,GradientTexture } from "@react-three/drei"

interface DisplayProps {
    score: number
    level: number
}

const Display = (props: DisplayProps) => {
    const { score, level } = props

    return (
        <>
            <group>
                <mesh position={[-10, 11.5, 0]}>
                    <boxGeometry args={[5.5, 11, 0.1]} />
                    <meshStandardMaterial color='#daa955' />
                    <Html wrapperClass={'html'} center position={[0, 0, 0.1]} rotation={[0, 0, 0]} transform occlude>
                        <h2>SCORE: {score}</h2>
                        <h2>LEVEL: {level}</h2>
                        <h4>'🠔' to move left</h4>
                        <h4>'🠖' to move right</h4>
                        <h4>'🠗' to move down</h4>
                        <h4>'🠕' to spin</h4>
                        <h4>'spacebar' to free look</h4>
                    </Html>
                    <MeshDistortMaterial distort={0.3} speed={2}>
                        <GradientTexture stops={[0, 0.8, 1]} colors={['#e63946', '#daa955', '#a8dadc']} size={100} />
                    </MeshDistortMaterial>
                </mesh>
            </group>
        </>
    )
}

export default Display