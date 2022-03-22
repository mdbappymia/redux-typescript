import BangladeshTourHome from "../BangladeshTourHome/BangladeshTourHome";
import BikeBazarHome from "../BikeBazarHome/BikeBazarHome";
import ElectronicsShopHome from "../ElectronicsShopHome/ElectronicsShopHome";
import Header from "../Header/Header";
import KachaBazarHome from "../KachaBazarHome/KachaBazarHome";
import Services from "../Services/Services";
import WorldTourHome from "../WorldTourHome/WorldTourHome";

const HomeRoot = () => {
  return (
    <div>
      <Header />
      <Services />
      <WorldTourHome />
      <BangladeshTourHome />
      <KachaBazarHome />
      <BikeBazarHome />
      <ElectronicsShopHome />
    </div>
  );
};

export default HomeRoot;
