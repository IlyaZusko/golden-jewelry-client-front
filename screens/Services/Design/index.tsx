'use client';
import Image from 'next/image';
import React from 'react';

import Footer from '@/components/Footer';
import MainAppHeader from '@/components/MainAppHeader';
import { Button } from '@/components/ui/button';
import useUser from '@/firebase/useUser';
import { ContactType } from '@/lib/constants';
import ContactForm from '@/screens/MainLayout/components/ContactForm';

const DesignScreen = () => {
  const user = useUser();

  const scrollToContact = () => {
    const content = document.getElementById('contact-form-service');
    if (content) {
      content.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };

  return (
    <div className="w-full max-w-[100vw]">
      <MainAppHeader isAuth={user} />
      <div className="w-full h-[80vh] bg-black/50 relative">
        <div className="w-full h-full flex flex-col justify-center items-center text-center text-white gap-y-4">
          <p className="font-foglihten text-xl sm:text-5xl text-custom-white pt-28">
            3D МОДЕЛИРОВАНИЕ ЮВЕЛИРНЫХ УКРАШЕНИЙ
          </p>
          <p className="font-light text-sm sm:text-base max-w-[820px] text-gray-300 pb-5">
            Сегодня относительно новая компьютерная технология — 3D
            моделирование — все чаще применяется в различных областях
            человеческой деятельности: в индустрии развлечений, рекламе,
            промышленности, медицине, архитектуре, строительстве, науке —
            построение 3D объекта, безукоризненно повторяющего настоящий, дает
            множество перспектив.
          </p>
          <Button variant="outline" onClick={() => scrollToContact()}>
            Связаться с нами
          </Button>
        </div>
        <Image
          src={require('@/public/images/design-bg.jpg')}
          alt=""
          className="object-cover -z-50"
          fill
        />
      </div>
      <div className="px-[30px] sm:px-[60px] lg:px-[120px] w-full flex flex-col gap-y-8 pb-8">
        <div className="w-full flex flex-col items-center pt-10">
          <p className="font-foglihten text-xl sm:text-3xl pb-6">
            Плюсы для ювелиров и заказчиков
          </p>
          <div className="w-full flex flex-col gap-y-5">
            <div className="w-full flex flex-row gap-x-4 items-center">
              <div className="bg-custom-yellow min-w-10 min-h-10 w-10 h-10 rounded-[1000px] flex justify-center items-center">
                <p className="font-foglihten text-base">1.</p>
              </div>
              <p className="text-sm font-light ">
                Легко оценивается реальный потенциал будущего творения без
                временных затрат и финансовых вложений на воплощение его в
                металле;
              </p>
            </div>
            <div className="w-full flex flex-row gap-x-4 items-center">
              <div className="bg-custom-yellow min-w-10 min-h-10 w-10 h-10 rounded-[1000px] flex justify-center items-center">
                <p className="font-foglihten text-base">2.</p>
              </div>
              <p className="text-sm font-light ">
                Коррекция размеров, пропорций, особенностей дизайна, техники
                обработки металла, состава сплава, используемых камней может
                производиться столько раз, сколько это необходимо для появления
                лучшего, наиболее гармоничного варианта;
              </p>
            </div>
            <div className="w-full flex flex-row gap-x-4 items-center">
              <div className="bg-custom-yellow min-w-10 min-h-10 w-10 h-10 rounded-[1000px] flex justify-center items-center">
                <p className="font-foglihten text-base">3.</p>
              </div>
              <p className="text-sm font-light ">
                Модель не только возникает перед глазами в объеме — компьютер
                дает возможность осуществлять ее построение, учитывая специфику
                рабочих технологий (с учетом плотности сплава и камушков,
                огранки, посадки);
              </p>
            </div>
            <div className="w-full flex flex-row gap-x-4 items-center">
              <div className="bg-custom-yellow min-w-10 min-h-10 w-10 h-10 rounded-[1000px] flex justify-center items-center">
                <p className="font-foglihten text-base">4.</p>
              </div>
              <p className="text-sm font-light ">
                Имея изначальный образец, несложно разработать серию такого
                стиля или гарнитур, включающий несколько предметов, варьируя
                отдельные детали;
              </p>
            </div>
            <div className="w-full flex flex-row gap-x-4 items-center">
              <div className="bg-custom-yellow min-w-10 min-h-10 w-10 h-10 rounded-[1000px] flex justify-center items-center">
                <p className="font-foglihten text-base">5.</p>
              </div>
              <p className="text-sm font-light ">
                Упрощается расчет точной сметы продукции на основании ее
                заданных параметров — будут вычислены себестоимость сырья и
                работ;
              </p>
            </div>
            <div className="w-full flex flex-row gap-x-4 items-center">
              <div className="bg-custom-yellow min-w-10 min-h-10 w-10 h-10 rounded-[1000px] flex justify-center items-center">
                <p className="font-foglihten text-base">6.</p>
              </div>
              <p className="text-sm font-light ">
                Появляется основа для составления выразительных презентаций и
                рекламы мастерской: любой потенциальный заказчик скорее
                предпочтет увидеть объемный образ, чем плоский на стандартной
                фотографии. И, разумеется, такое высокотехнологичное
                представление даст фору любым текстовым описаниям;
              </p>
            </div>
            <div className="w-full flex flex-row gap-x-4 items-center">
              <div className="bg-custom-yellow min-w-10 min-h-10 w-10 h-10 rounded-[1000px] flex justify-center items-center">
                <p className="font-foglihten text-base">7.</p>
              </div>
              <p className="text-sm font-light ">
                Мастера могут создать каталог еще не воплощенных произведений
                своего искусства — для демонстрации клиентам, продавцам
                продукции или поставщикам;
              </p>
            </div>
            <div className="w-full flex flex-row gap-x-4 items-center">
              <div className="bg-custom-yellow min-w-10 min-h-10 w-10 h-10 rounded-[1000px] flex justify-center items-center">
                <p className="font-foglihten text-base">8.</p>
              </div>
              <p className="text-sm font-light ">
                Изготовить аналогичную пару к утерянной серёжке;
              </p>
            </div>
            <div className="w-full flex flex-row gap-x-4 items-center">
              <div className="bg-custom-yellow min-w-10 min-h-10 w-10 h-10 rounded-[1000px] flex justify-center items-center">
                <p className="font-foglihten text-base">9.</p>
              </div>
              <p className="text-sm font-light ">
                Пайка стальных браслетов с медицинской стали
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-custom-black-title">
        <div
          className="px-[30px] sm:px-[60px] lg:px-[120px] py-[60px] bg-custom-black-title flex flex-col justify-center items-start"
          id="contact-form-service"
        >
          <p className="font-foglihten text-xl pl-[30px] sm:pl-[100px] text-white">
            Остались вопросы?
          </p>
          <p className="text-xs font-light pl-[60px] sm:pl-[120px] lg:pl-[200px] text-white pt-3">
            Заполните форму ниже, и с вами свяжется сотрудник мастерской
          </p>
          <ContactForm isForService contactType={ContactType.ServiceDesign} />
        </div>

        <div className="px-5 pt-[60px] pb-5 bg-custom-black-title flex flex-col justify-center items-start">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DesignScreen;
