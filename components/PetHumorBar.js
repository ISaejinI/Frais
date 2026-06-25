import { getPetState } from "@/utils/pet";

export default function PetHumorBar({ score }) {
    const petState = getPetState(score);

    return (
        <div className="flex flex-col gap-1">
            <p className="text-base/normal">Ton compagnon est</p>
            <p className="transition-all duration-1000 ease-in-out text-4xl/tight font-semibold" style={{ color: petState.color }}>{petState.name}</p>
            <div className="flex gap-2 items-center py-3">
                <div className="relative h-3.5 rounded-full w-full bg-[#E97C49]">
                    <div className="absolute left-1/2 top-1/2 -translate-1/2 z-10 w-6 h-6 bg-white rounded-full border-4 border-[#E97C49] transition-all duration-1000 ease-in-out" style={{ opacity: petState.humor === 'angry' ? 1 : 0 }}></div>
                </div>
                <div className="relative h-3.5 rounded-full w-full bg-[#F6AF3C]">
                    <div className="absolute left-1/2 top-1/2 -translate-1/2 z-10 w-6 h-6 bg-white rounded-full border-4 border-[#F6AF3C] transition-all duration-1000 ease-in-out" style={{ opacity: petState.humor === 'sad' ? 1 : 0 }}></div>
                </div>
                <div className="relative h-3.5 rounded-full w-full bg-[#78B8AD]">
                    <div className="absolute left-1/2 top-1/2 -translate-1/2 z-10 w-6 h-6 bg-white rounded-full border-4 border-[#78B8AD] transition-all duration-1000 ease-in-out" style={{ opacity: petState.humor === 'confused' ? 1 : 0 }}></div>
                </div>
                <div className="relative h-3.5 rounded-full w-full bg-[#00B9A8]">
                    <div className="absolute left-1/2 top-1/2 -translate-1/2 z-10 w-6 h-6 bg-white rounded-full border-4 border-[#00B9A8] transition-all duration-1000 ease-in-out" style={{ opacity: petState.humor === 'excited' ? 1 : 0 }}></div>
                </div>
                <div className="relative h-3.5 rounded-full w-full bg-[#00B8C4]">
                    <div className="absolute left-1/2 top-1/2 -translate-1/2 z-10 w-6 h-6 bg-white rounded-full border-4 border-[#00B8C4] transition-all duration-1000 ease-in-out" style={{ opacity: petState.humor === 'happy' ? 1 : 0 }}></div>
                </div>
            </div>
        </div>
    )
}