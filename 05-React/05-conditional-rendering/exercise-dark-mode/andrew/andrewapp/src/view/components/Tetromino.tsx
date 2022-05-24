interface TetrominoProps {
    type: any
    color: string
}


const tetrominoes: any = {
    I: [[10, 11, 12, 13], [2, 12, 22, 32], [30, 31, 32, 33], [1, 11, 21, 31]],
    O: [[1, 2, 11, 12], [1, 2, 11, 12], [1, 2, 11, 12], [1, 2, 11, 12]],
    T: [[1, 10, 11, 12], [1, 11, 12, 21], [10, 11, 12, 21], [1, 10, 11, 21]],
    J: [[0, 10, 11, 12], [1, 2, 11, 21], [10, 11, 12, 22], [1, 11, 20, 21]],
    L: [[2, 10, 11, 12], [1, 11, 21, 22], [10, 11, 12, 20], [0, 1, 11, 21]],
    S: [[1, 2, 10, 11], [1, 11, 12, 22], [11, 12, 20, 21], [0, 10, 11, 21]],
    Z: [[0, 1, 11, 12], [2, 11, 12, 21], [10, 11, 21, 22], [1, 10, 11, 20]],
}

const Tetromino = (props: TetrominoProps) => {
    const { type, color } = props
    return (
        <>
            <group>
                {tetrominoes[type][0].map((block: any, i: number) =>
                    <mesh key={i} position={[block % 10 - 5, -(Math.floor(block / 10)) + 22, 0]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={color} />
                    </mesh>
                )}
            </group>
        </>
    )
}

export default Tetromino