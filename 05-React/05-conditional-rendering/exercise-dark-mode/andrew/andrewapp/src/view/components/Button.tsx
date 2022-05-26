import { Html } from "@react-three/drei"

interface ButtonProps {
    handleStart: any
    gameState: string
}

const Button = (props: ButtonProps) => {
    const { handleStart, gameState } = props

    return (
        <>
            <group>
                <mesh position={[-10, 20, 0]} onClick={handleStart}>
                    {gameState === 'ended' ?
                        <boxGeometry args={[5.2, 4.5, 1]} /> :
                        <boxGeometry args={[5.4, 2, 1]} />
                    }
                    <meshStandardMaterial color='#BADA55' />
                    <Html wrapperClass={'html'} center position={[0, 0, 0.51]} rotation={[0, 0, 0]} transform occlude>
                        {gameState === 'playing' ?
                            <h1>Good Luck</h1> :
                            <h1 onClick={handleStart}>Start Game</h1>
                        }
                        {gameState === 'ended' && <h1>Game Over!</h1>}
                    </Html>
                </mesh>
            </group>
        </>
    )
}

export default Button