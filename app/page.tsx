import HomeSlider from "@/components/HomeSlider";
import CatSlider from "@/components/CatSlider";
import { LiaCatSolid } from "react-icons/lia";
import PopularProducts from "@/components/PopularProducts";
import Banners from "@/components/Banners";
import ProductRow from "@/components/ProductRow";



export default function Home() {
  return (
    <>
      <div className="sliderWrapper bg-[#f1f1f1] py-5 pb-0">
        <HomeSlider />
        <CatSlider />
        <PopularProducts />
        <Banners />

        <ProductRow title={"Latest Products"} />
        <ProductRow title={"Featured Products"} />
        <ProductRow title={"Breaksfast & Dairy"} />

       
      </div>

    </>
    
  );
}
