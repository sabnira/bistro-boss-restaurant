
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";


const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
            

    return (
        <section className="mb-28">
            <SectionTitle
            subHeading={"From Our Menu"}
            heading={"Popular Items"}
            ></SectionTitle>

            <MenuCategory items={popular}></MenuCategory>

            <button className="btn btn-outline border-0 border-b-2 mt-4">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;