import { getPetState } from "@/utils/pet";
import Image from 'next/image'

export default function Pet({ score }) {
    const petState = getPetState(score);

    return (
        <div>
            <Image src={`/pet-states/${petState.imgUrl}`} alt={petState.name} width={196} height={196} loading="eager" />
        </div>
    )
}