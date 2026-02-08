import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subTitle }) => {
    return (

        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="menu"
            strength={-200}
        >
            <div className="hero h-137">
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-4xl bg-black/50 p-16">
                        <h1 className="mb-5 text-4xl md:text-8xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">
                            {subTitle}
                        </p>

                    </div>
                </div>
            </div>
        </Parallax>


    );
};

export default Cover;