import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div
            className="bg-cover bg-center bg-no-repeat bg-fixed text-white"
            style={{ backgroundImage: `url(${featuredImg})` }}
        >
            <div className="bg-black/60 pt-6 pb-12">
                <SectionTitle
                    subHeading={"Check It Out"}
                    heading={"Featured Item"}
                ></SectionTitle>

                <div className="md:flex justify-center items-center py-8 px-16">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="md:ml-10 space-y-2">
                        <p>Aug 20, 2030</p>
                        <p className="uppercase">Where can i get some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eos atque velit. Sunt hic nostrum ducimus reprehenderit! Aliquam dolores necessitatibus vel, distinctio eaque repellendus iste excepturi ipsum odio deleniti magnam! Eaque, sed! Culpa, possimus. Aliquid blanditiis nemo animi cum id culpa, dolor accusamus.</p>
                        <button className="btn btn-outline border-0 border-b-2 mt-4">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;