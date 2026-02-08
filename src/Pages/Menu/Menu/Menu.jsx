import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/cover/cover';
import menuImg from '../../../assets/menu/banner3.jpg'



const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <Cover img={menuImg} title="Our Menu" subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consectetur minus suscipit nulla voluptas in nisi facilis iste, quidem impedit ipsum, assumenda nam! Magni delectus cupiditate ducimus tempore quidem sint excepturi!"></Cover>

            




        </div>
    );
};

export default Menu;