import { useTexture, RoundedBox } from "@react-three/drei"
import { tetColor } from '../../App'


interface BlocksProps {
    grid: any
}

const Blocks = (props: BlocksProps) => {
    const { grid } = props
    const gridToRender: any = [];

    const textureProps1 = useTexture({
        map: 'textures/wood/WoodFloor034_1K-PNG/WoodFloor034_1K_Color.png',
        displacementMap: 'textures/wood/WoodFloor034_1K-PNG/WoodFloor034_1K_Displacement.png',
        normalMap: 'textures/wood/WoodFloor034_1K-PNG/WoodFloor034_1K_NormalGL.png',
        roughnessMap: 'textures/wood/WoodFloor034_1K-PNG/WoodFloor034_1K_Roughness.png',
        aoMap: 'textures/wood/WoodFloor034_1K-PNG/WoodFloor034_1K_AmbientOcclusion.png',
    })
    const textureProps2 = useTexture({
        map: 'textures/wood/WoodFloor035_1K-PNG/WoodFloor035_1K_Color.png',
        displacementMap: 'textures/wood/WoodFloor035_1K-PNG/WoodFloor035_1K_Displacement.png',
        normalMap: 'textures/wood/WoodFloor035_1K-PNG/WoodFloor035_1K_NormalGL.png',
        roughnessMap: 'textures/wood/WoodFloor035_1K-PNG/WoodFloor035_1K_Roughness.png',
        aoMap: 'textures/wood/WoodFloor035_1K-PNG/WoodFloor035_1K_AmbientOcclusion.png',
    })
    const textureProps3 = useTexture({
        map: 'textures/wood/WoodFloor036_1K-PNG/WoodFloor036_1K_Color.png',
        displacementMap: 'textures/wood/WoodFloor036_1K-PNG/WoodFloor036_1K_Displacement.png',
        normalMap: 'textures/wood/WoodFloor036_1K-PNG/WoodFloor036_1K_NormalGL.png',
        roughnessMap: 'textures/wood/WoodFloor036_1K-PNG/WoodFloor036_1K_Roughness.png',
        aoMap: 'textures/wood/WoodFloor036_1K-PNG/WoodFloor036_1K_AmbientOcclusion.png',
    })
    const textureProps4 = useTexture({
        map: 'textures/wood/WoodFloor037_1K-PNG/WoodFloor037_1K_Color.png',
        displacementMap: 'textures/wood/WoodFloor037_1K-PNG/WoodFloor037_1K_Displacement.png',
        normalMap: 'textures/wood/WoodFloor037_1K-PNG/WoodFloor037_1K_NormalGL.png',
        roughnessMap: 'textures/wood/WoodFloor037_1K-PNG/WoodFloor037_1K_Roughness.png',
        aoMap: 'textures/wood/WoodFloor037_1K-PNG/WoodFloor037_1K_AmbientOcclusion.png',
    })
    const textureProps5 = useTexture({
        map: 'textures/wood/WoodFloor038_1K-PNG/WoodFloor038_1K_Color.png',
        displacementMap: 'textures/wood/WoodFloor038_1K-PNG/WoodFloor038_1K_Displacement.png',
        normalMap: 'textures/wood/WoodFloor038_1K-PNG/WoodFloor038_1K_NormalGL.png',
        roughnessMap: 'textures/wood/WoodFloor038_1K-PNG/WoodFloor038_1K_Roughness.png',
        aoMap: 'textures/wood/WoodFloor038_1K-PNG/WoodFloor038_1K_AmbientOcclusion.png',
    })
    const textureProps6 = useTexture({
        map: 'textures/wood/WoodFloor040_1K-PNG/WoodFloor040_1K_Color.png',
        displacementMap: 'textures/wood/WoodFloor040_1K-PNG/WoodFloor040_1K_Displacement.png',
        normalMap: 'textures/wood/WoodFloor040_1K-PNG/WoodFloor040_1K_NormalGL.png',
        roughnessMap: 'textures/wood/WoodFloor040_1K-PNG/WoodFloor040_1K_Roughness.png',
        aoMap: 'textures/wood/WoodFloor040_1K-PNG/WoodFloor040_1K_AmbientOcclusion.png',
    })
    const textureProps7 = useTexture({
        map: 'textures/wood/WoodFloor041_1K-PNG/WoodFloor041_1K_Color.png',
        displacementMap: 'textures/wood/WoodFloor041_1K-PNG/WoodFloor041_1K_Displacement.png',
        normalMap: 'textures/wood/WoodFloor041_1K-PNG/WoodFloor041_1K_NormalGL.png',
        roughnessMap: 'textures/wood/WoodFloor041_1K-PNG/WoodFloor041_1K_Roughness.png',
        aoMap: 'textures/wood/WoodFloor041_1K-PNG/WoodFloor041_1K_AmbientOcclusion.png',
    })
    textureProps7.map.repeat.set(0.4, 0.4)

    grid.forEach((block: any, i: number) => {
        if (!block.isVacant) {
            switch (block.color) {
                case tetColor.I:
                    gridToRender.push({ index: i, texture: textureProps1, color: block.color })
                    break;
                case tetColor.O:
                    gridToRender.push({ index: i, texture: textureProps2, color: block.color })
                    break;
                case tetColor.T:
                    gridToRender.push({ index: i, texture: textureProps3, color: block.color })
                    break;
                case tetColor.J:
                    gridToRender.push({ index: i, texture: textureProps4, color: block.color })
                    break;
                case tetColor.L:
                    gridToRender.push({ index: i, texture: textureProps5, color: block.color })
                    break;
                case tetColor.S:
                    gridToRender.push({ index: i, texture: textureProps6, color: block.color })
                    break;
                case tetColor.Z:
                    gridToRender.push({ index: i, texture: textureProps7, color: block.color })
                    break;
            }
        }
    });
    return (
        <>
            <group>
                {gridToRender.map((block: any, i: number) =>
                (<mesh castShadow receiveShadow key={i} position={[block.index % 10 - 5, -(Math.floor(block.index / 10)) + 22, 0]}>
                    <RoundedBox args={[1, 1, 1]} radius={0.1} smoothness={0.5}>
                        <meshStandardMaterial roughness={0}  {...block.texture} color={block.color} displacementScale={0.001} />
                    </RoundedBox>
                </mesh>)
                )}
            </group>
        </>
    )
}

export default Blocks