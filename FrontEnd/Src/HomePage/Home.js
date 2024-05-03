import React from 'react';
import { Carousel } from 'antd';

const Home = () => {

    const contentStyle = {
        height: '55vh',
        width: '100%',
        textAlign: 'center',
        objectFit: 'cover',
    };

    return (
        <div className='Home'>
            <header>
                <div className='HomeHeader'>
                    <Carousel autoplay>
                        <div>
                            <img src={('https://fdn.gsmarena.com/imgroot/reviews/23/apple-iphone-15-pro-max/lifestyle/-1024w2/gsmarena_006.jpg')} alt='home' style={{ ...contentStyle }} />
                        </div>
                        <div>
                            <img src={('https://fdn.gsmarena.com/imgroot/reviews/23/apple-iphone-15-pro-max/lifestyle/-1024w2/gsmarena_003.jpg')} alt='home' style={{ ...contentStyle }} />
                        </div>
                        <div>
                            <img src={('https://fdn.gsmarena.com/imgroot/reviews/22/apple-iphone-14-pro-max/lifestyle/-1024w2/gsmarena_001.jpg')} alt='home' style={{ ...contentStyle }} />
                        </div>
                        <div>
                            <img src={('https://fdn.gsmarena.com/imgroot/reviews/22/apple-iphone-14-pro-max/lifestyle/-1024w2/gsmarena_003.jpg')} alt='home' style={{ ...contentStyle }} />
                        </div>
                        <div>
                            <img src={('https://fdn.gsmarena.com/imgroot/reviews/23/apple-iphone-15-pro-max/lifestyle/-1024w2/gsmarena_006.jpg')} alt='home' style={{ ...contentStyle }} />
                        </div>
                        <div>
                            <img src={('https://fdn.gsmarena.com/imgroot/reviews/23/apple-iphone-15-pro-max/lifestyle/-1024w2/gsmarena_003.jpg')} alt='home' style={{ ...contentStyle }} />
                        </div>
                    </Carousel>
                </div>
            </header>
            <div className='HomeBody'>
                <p>
                    Currently, mobile technology is typified by internet-enabled devices like smartphones, tablets, and watches. These are the latest in a progression that includes two-way pagers, notebook computers, mobile telephones (flip phones), GPS-navigation devices, and more.  The communications networks that connect these devices are loosely termed wireless technologies. They enable mobile devices to share voice, data, and applications (mobile apps).  5G is the fifth generation of cellular wireless technology. Like 4G, it uses frequencies that are part of the radio spectrum, but 5G uses very high frequencies that offer more bandwidth. This means more data delivered at higher speeds to more devices. Imagine video streaming to a smartphone—5G will make it 10x better not just for an individual, but for anyone streaming a video at the same time.  Mobile technology is pervasive and growing. The number of smartphone users has climbed beyond 3 billion¹, and the global mobile workforce is expected to reach 1.87 billion by 2022.
                </p>
            </div>
        </div>
    )
}

export default Home;
