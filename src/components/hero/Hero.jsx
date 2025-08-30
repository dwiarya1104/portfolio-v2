import ScrollVelocity from "./ScrollText"
import img from '../../assets/title-icon.png'

export const Hero = () => {
    return (
        <div className='relative flex w-full flex-col h-screen justify-center gap-10 bg-white'>
            <div
                className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
            ></div>
            <div className="flex  flex-col items-center justify-center z-10 ">

                <h1
                    style={{ fontWeight: 1000 }}
                    className="md:text-7xl text-5xl text-black text-center"
                >
                    Dwi Arya Putra
                </h1>                <p className="text-black mt-3 text-center mx-2">Sometimes you need a break, so you don't end up in an infinite loop of stress.</p>
                <div className="border md:w-1/2 w-9/12 border-black mt-5"></div>
            </div>

            <ScrollVelocity
                texts={['Fullstack Developer ✦']}
                velocity={30}
                className="custom-scroll-text text-black md:text-6xl text-4xl"
                damping={20}
                stiffness={100}
            />
            <img src={img} className="absolute bottom-0 md:hidden block z-50 w-1/2" />
        </div>
    )
}
