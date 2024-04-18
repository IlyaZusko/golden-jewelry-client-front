'use client';
import Image from 'next/image';
import React from 'react';

import Footer from '@/components/Footer';
import MainAppHeader from '@/components/MainAppHeader';
import { Button } from '@/components/ui/button';
import useUser from '@/firebase/useUser';
import { ContactType } from '@/lib/constants';
import ContactForm from '@/screens/MainLayout/components/ContactForm';

const RepairScreen = () => {
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
    <div className="w-full">
      <MainAppHeader isAuth={user} />
      <div className="w-full h-[80vh] bg-black/50 relative">
        <div className="w-full h-full flex flex-col justify-center items-center text-center text-white gap-y-4">
          <p className="font-foglihten text-xl sm:text-5xl text-custom-white pt-28">
            РЕМОНТ И РЕСТАВРАЦИЯ
          </p>
          <p className="font-light text-sm sm:text-base max-w-[820px] text-gray-300 pb-5">
            Ювелирные изделия иногда портятся — особенно при постоянном ношении.
            Не спешите расстраиваться и расставаться с любимым украшением — наша
            ювелирная мастерская выполнит срочный ремонт ювелирных изделий в
            Минске. Приносите то, что сломалось — мастера увидят проблему и
            оперативно устранят поломки. Реставрация ювелирки — непростая,
            требующая высокой квалификации и исключительно индивидуальная
            работа. Ее цель — сделать «травмированную» вещь прежним или даже
            лучше, и наши ювелиры превосходно справятся с этой задачей.
          </p>
          <Button variant="outline" onClick={() => scrollToContact()}>
            Связаться с нами
          </Button>
        </div>
        <Image
          src={require('@/public/images/produce-bg.jpg')}
          alt=""
          className="object-cover -z-50"
          fill
        />
      </div>
      <div className="px-[30px] sm:px-[60px] lg:px-[120px] w-full flex flex-col gap-y-8 pb-8">
        <div className="w-full flex flex-col items-center pt-10">
          <p className="font-foglihten text-xl sm:text-3xl pb-6">
            Услуги по реставрации
          </p>
          <div className="w-full flex-wrap flex-row flex justify-around gap-y-6">
            <div className="w-[500px] px-8 py-5 bg-custom-black-title rounded-[16px] max-h-min gap-y-2 flex flex-col">
              <p className="font-foglihten text-xl text-white px-1 py-1 border border-custom-yellow rounded-[8px]">
                Пайка ювелирных изделий
              </p>
              <p className="font-light text-sm text-gray-300">
                Цепочки, особенно тонкие, часто подвержены разрывам. Но не
                только они. Кольца, браслеты, серьги и кулоны, которые мы
                постоянно носим, могут ломаться из-за механических воздействий.
                Ремонтировать их можно с помощью пайки — процесса соединения
                металлических частей при помощи расплавленного металла,
                называемого припоем.
              </p>
            </div>
            <div className="w-[500px] px-8 py-5 bg-custom-black-title rounded-[16px] max-h-min gap-y-2 flex flex-col">
              <p className="font-foglihten text-xl text-white px-1 py-1 border border-custom-yellow rounded-[8px]">
                Чистка и полировка ювелирных украшений
              </p>
              <p className="font-light text-sm text-gray-300">
                Драгоценные металлы и камни могут потемнеть и загрязниться от
                контакта с кожей и внешних факторов, также могут получать
                царапины и сколы. Чистка украшений в домашних условиях может
                навредить. Мы рекомендуем профессиональную чистку и полировку с
                использованием современного оборудования, чтобы вернуть им
                первозданный вид без ущерба.
              </p>
            </div>
            <div className="w-[500px] px-8 py-5 bg-custom-black-title rounded-[16px] max-h-min gap-y-2 flex flex-col">
              <p className="font-foglihten text-xl text-white px-1 py-1 border border-custom-yellow rounded-[8px]">
                Раскатка, укатка, выравнивание колец
              </p>
              <p className="font-light text-sm text-gray-300">
                Часто у людей, носящих или только что приобретающих кольца,
                возникают проблемы с размерами. Это может быть вызвано ошибкой
                при выборе или изменениями толщины пальцев со временем,
                например, из-за похудения или отека. Неподходящий размер может
                вызвать дискомфорт в ношении.
              </p>
            </div>
            <div className="w-[500px] px-8 py-5 bg-custom-black-title rounded-[16px] max-h-min gap-y-2 flex flex-col">
              <p className="font-foglihten text-xl text-white px-1 py-1 border border-custom-yellow rounded-[8px]">
                Пустотелые цепи
              </p>
              <p className="font-light text-sm text-gray-300">
                Пустотелые золотые или серебряные цепочки могут быть
                восстановлены пайкой, но есть технологический аспект, который
                следует учитывать. При спаивании замкнутых сегментов создаются
                мелкие отверстия, незаметные для глаза, чтобы обеспечить выход
                воздуха. Это необходимо, чтобы избежать повреждения изделия при
                нагревании и расширении воздуха, которые могут привести к
                вспучиванию или разрыву.
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
          <ContactForm isForService contactType={ContactType.ServiceRepair} />
        </div>

        <div className="px-5 pt-[60px] pb-5 bg-custom-black-title flex flex-col justify-center items-start">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default RepairScreen;
