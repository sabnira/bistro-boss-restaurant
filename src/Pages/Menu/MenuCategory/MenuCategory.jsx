import Cover from "../../Shared/cover/cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items, title, img}) => {
    return (
        <div className="">
            {
                title && <Cover img={img} title={title}></Cover>
            }
            <div className="my-24">
            <div className="grid md:grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            </div>
        </div>
    );
};

export default MenuCategory;