import HomeSlider from "@/components/HomeSlider";
import CatSlider from "@/components/CatSlider";
import { LiaCatSolid } from "react-icons/lia";
export default function Home() {
  return (
    <>
      <div className="sliderWrapper bg-[#FAFAFA] py-4">
        <HomeSlider />
        <CatSlider />
      </div>
    </>
    
  );
}
