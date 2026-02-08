import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/cover/cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';



const Menu = () => {

    const [menu] = useMenu();
     const dessert = menu.filter(item => item.category === 'dessert')
     const salad = menu.filter(item => item.category === 'salad')
     const soup = menu.filter(item => item.category === 'soup')
     const pizza = menu.filter(item => item.category === 'pizza')
     const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <Cover img={menuImg} title="Our Menu" subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consectetur minus suscipit nulla voluptas in nisi facilis iste, quidem impedit ipsum, assumenda nam! Magni delectus cupiditate ducimus tempore quidem sint excepturi!"></Cover>

            
            <SectionTitle
            subHeading={"Don't Miss"}
            heading={"Today's Offer"}
            ></SectionTitle>



        </div>
    );
};

export default Menu;