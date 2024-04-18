'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect } from 'react';

import CarouselSize from '@/components/Carousel';
import Footer from '@/components/Footer';
import MainAppHeader from '@/components/MainAppHeader';
import ReviewsAccordion from '@/components/ReviewsAccordion';
import Spinner from '@/components/Spinner';
import useUser from '@/firebase/useUser';
import { ContactType } from '@/lib/constants';

import AboutUs from './components/AboutUs';
import Catalog from './components/Catalog';
import ContactForm from './components/ContactForm';
import Services from './components/Services';
import WhatYouRecieve from './components/WhatYouRecieve';

const LayoutScreen: React.FC = () => {
  const user = useUser();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    const scrollTo = searchParams.get('to');
    if (scrollTo) {
      const content = document.getElementById(scrollTo);
      if (content) {
        content.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);
  return (
    <div className="w-full bg-custom-white">
      {user === false && <Spinner />}
      <div className={user === false ? 'blur-sm' : ''}>
        <MainAppHeader isAuth={user} />
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

        <div
          className="px-[30px] sm:px-[60px] lg:px-[120px] py-[60px] bg-custom-black-title flex flex-col justify-center items-start"
          id="contact-form"
        >
          <p className="font-foglihten text-xl pl-[30px] sm:pl-[100px] text-white">
            Остались вопросы?
          </p>
          <p className="text-xs font-light pl-[60px] sm:pl-[120px] lg:pl-[200px] text-white pt-3">
            Заполните форму ниже, и с вами свяжется сотрудник мастерской
          </p>
          <ContactForm contactType={ContactType.Question} />
        </div>

        <div className="px-5 pt-[60px] pb-5 bg-custom-black-title flex flex-col justify-center items-start">
          <Footer />
        </div>
      </div>
    </div>
  );
};

const MainLayoutScreen = () => {
  return (
    <Suspense>
      <LayoutScreen />
    </Suspense>
  );
};

export default MainLayoutScreen;
