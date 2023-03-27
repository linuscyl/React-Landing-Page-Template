import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import styled from 'styled-components';

import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';

const AboutContent = styled.div`
  .about-me-image-slider{
    height: fit-content;
    padding-bottom: 1rem;
  };

  .about-me-image-slider img {
    margin-top: 10px;
    background: #fff;
    border-right: 0;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.06);
    max-width: 520px;
    @media (min-width: ${props => props.theme.breakpoints.lg}){
      max-width: 100%;
    };
  }

  .swiper-pagination{
    display: none;
    @media (min-width: ${props => props.theme.breakpoints.lg}){
      display: block;
    };
  }

  .about-text{
    p {
      text-align: justify
    }
    .summarised-by-GPT-label{
      text-align: end
    }
  }
`;

export const About = (props) => {

  const aboutMePhotoNames = ['about.jpg', 'midjourney.jpg']

  return (
    <AboutContent>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6 about-me-image-slider">
              <Swiper
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
                scrollbar={{ draggable: true }}
                // navigation={true}
                >
                  {aboutMePhotoNames.map((fileName, index) =>  
                  <SwiperSlide><img src={`img/about-me/${fileName}`} className="img-responsive" alt="" /></SwiperSlide>)}
                  
              </Swiper>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Me</h2>
                <p className="about-me-content">{props.data ? props.data.paragraph : "loading..."}</p>
                <p className="summarised-by-GPT-label">--Summarize by ChatGPT=)</p>
                <h3>What I know?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.whatIKnow.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutContent>
  );
};
