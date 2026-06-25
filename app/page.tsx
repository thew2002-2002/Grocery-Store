import HomeSlider from "@/components/HomeSlider";
import CatSlider from "@/components/CatSlider";
import { LiaCatSolid } from "react-icons/lia";
import PopularProducts from "@/components/PopularProducts";
export default function Home() {
  return (
    <>
      <div className="sliderWrapper bg-[#f1f1f1] py-5">
        <HomeSlider />
        <CatSlider />
        <PopularProducts />
      </div>
    </>
    
  );
}
