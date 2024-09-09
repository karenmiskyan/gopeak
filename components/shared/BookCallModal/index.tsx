import robotGif from 'shared/gif/gopeak__robot.gif';
import Image from 'next/image';
import { FC } from 'react';
import { useRouter } from 'next/router';
import Cookies from "js-cookie";

const BookCallModal:FC<{handleCloseModal: () => void}> = ({handleCloseModal}) => {
  const router = useRouter();

  const handleNavigateToBookCall = () => {
    router.push('https://www.gopeak.io/booking');
    Cookies.set('book_modal', 'modal showed');
  };

  return (
    <div className="modal__wrapper">
        <div className="inner__modal__wrapper">
            <div className='gif__wrapper'>
              <Image src={robotGif} alt="Robot GIF" className="modal__gif" />
            </div>
            <div className="modal__top__wrapper">
              <div className='icon__wrapper' onClick={handleCloseModal}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 0C6.2 0 0 6.2 0 14C0 21.8 6.2 28 14 28C21.8 28 28 21.8 28 14C28 6.2 21.8 0 14 0ZM14 26C7.4 26 2 20.6 2 14C2 7.4 7.4 2 14 2C20.6 2 26 7.4 26 14C26 20.6 20.6 26 14 26Z" fill="#FCFCFC"/>
                  <path d="M19.4 21L14 15.6L8.6 21L7 19.4L12.4 14L7 8.6L8.6 7L14 12.4L19.4 7L21 8.6L15.6 14L21 19.4L19.4 21Z" fill="#FCFCFC"/>
                </svg>
              </div>
              <div className="title__wrapper">
                <h2>Need higher position in SERP?</h2>
              </div>
            </div>
            <div className="modal__bottom__wrapper">
                <p>
                    Get Ahead of Your Competitors with Our Link Building Services. Book Now and Enjoy a <b
                    style={{color: 'black'}}>20% Discount</b> on Each Link for the First Month!
                </p>
                <button onClick={handleNavigateToBookCall}>Book a Call</button>
                <button className='clancel_btn' onClick={handleCloseModal}>Cancel</button>
            </div>
        </div>
    </div>
  )
};

export default BookCallModal;