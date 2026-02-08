import FoodCart from "../../../components/FoodCart/FoodCart";


const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10 my-16 text-left">
            {
                items.map(item => <FoodCart key={item._id} item={item}></FoodCart>)
            }
        </div>
    );
};

export default OrderTab;