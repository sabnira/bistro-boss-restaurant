

const MenuItem = ({item}) => {

    const {name, image, price, recipe} = item;

    return (
        <div className="flex space-x-4">
            <img className="w-20 rounded-b-full rounded-tr-full" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name} ----------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;