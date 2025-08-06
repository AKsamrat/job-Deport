import Slider from 'react-slick';
import img1 from '../../assets/bann1.png';
import img2 from '../../assets/bann2.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="max-w-7xl mx-auto mt-3">
      <div className="relative rounded-xl overflow-hidden">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div>
            <div className="relative w-full lg:h-[550px]">
              <img src={img2} className="w-full h-full object-cover rounded-xl" />
              <div className="absolute rounded-xl flex  items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] from-10% via-[#151515] via-10%  to-[rgba(21, 21, 21, 0)]  overflow-hidden">
                <div className="text-white space-y-10 ml-6 lg:ml-20">
                  <h2 className="text-2xl lg:text-5xl font-bold">
                    If you are searching a <br />
                    <span className="text-[#00C2CB]">job</span> For Make your <br />
                    Career smarter
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div>
            <div className="relative w-full lg:h-[550px]">
              <img src={img1} className="w-full h-full object-cover rounded-xl" />
              <div className="absolute rounded-xl flex  items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] from-10% via-[#151515] via-10%  to-[rgba(21, 21, 21, 0)]  overflow-hidden">
                <div className="text-white space-y-10 ml-6 lg:ml-20">
                  <h2 className="text-2xl lg:text-5xl font-bold">
                    Searching for a job? <br />
                    Find the <span className="text-[#00C2CB]">Top Rated</span> <br />
                    Jobs For Your Application
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
