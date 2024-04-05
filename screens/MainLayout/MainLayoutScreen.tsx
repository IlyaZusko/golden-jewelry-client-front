'use client';
import React from 'react';

import CarouselSize from '@/components/Carousel';
import Footer from '@/components/Footer';
import MainAppHeader from '@/components/MainAppHeader';
import ReviewsAccordion from '@/components/ReviewsAccordion';

import AboutUs from './components/AboutUs';
import Catalog from './components/Catalog';
import ContactForm from './components/ContactForm';
import Services from './components/Services';
import WhatYouRecieve from './components/WhatYouRecieve';

const MainLayoutScreen: React.FC = () => {
  return (
    <div className="w-full bg-custom-white">
      <MainAppHeader />
      <CarouselSize />
      <WhatYouRecieve />
      <Catalog />
      <AboutUs />
      <Services />
      <div className="px-[30px] sm:px-[60px] lg:px-[120px] py-[60px] bg-custom-white flex flex-col gap-7 justify-center items-center">
        <p className="font-foglihten text-xl sm:text-3xl">
          Нас часто спрашивают...
        </p>
        <ReviewsAccordion />
      </div>

      <div className="px-[30px] sm:px-[60px] lg:px-[120px] py-[60px] bg-custom-black-title flex flex-col justify-center items-start">
        <p className="font-foglihten text-xl pl-[30px] sm:pl-[100px] text-white">
          Остались вопросы?
        </p>
        <p className="text-xs font-light pl-[60px] sm:pl-[120px] lg:pl-[200px] text-white pt-3">
          Заполните форму ниже, и с вами свяжется сотрудник мастерской
        </p>
        <ContactForm />
      </div>

      <div className="px-5 pt-[60px] pb-5 bg-custom-black-title flex flex-col justify-center items-start">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayoutScreen;
