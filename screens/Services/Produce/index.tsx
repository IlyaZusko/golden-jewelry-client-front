'use client';
import Image from 'next/image';
import React from 'react';

import Footer from '@/components/Footer';
import MainAppHeader from '@/components/MainAppHeader';
import { Button } from '@/components/ui/button';
import useUser from '@/firebase/useUser';
import { ContactType } from '@/lib/constants';
import ContactForm from '@/screens/MainLayout/components/ContactForm';

const ProduceScreen = () => {
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
            ИЗГОТОВЛЕНИЕ ЮВЕЛИРНЫХ ИЗДЕЛИЙ
          </p>
          <p className="font-light text-sm sm:text-base max-w-[820px] text-gray-300 pb-5">
            Создание индивидуальных ювелирных изделий под заказ — это в первую
            очередь процесс нахождения уникального решения, которое полностью
            соответствует вашим пожеланиям и представлениям. Это воплощение
            ваших фантазий в драгоценных металлах с учетом всех ваших запросов и
            отзывов. Вместо стандартных изделий, которые массово производятся на
            заводах, вы получаете уникальное украшение, изготовленное специально
            для вас!
          </p>
          <Button variant="outline" onClick={() => scrollToContact()}>
            Связаться с нами
          </Button>
        </div>
        <Image
          src={require('@/public/images/repair-bg.jpg')}
          alt=""
          className="object-cover -z-50"
          fill
        />
      </div>
      <div className="px-[30px] sm:px-[60px] lg:px-[120px] w-full flex flex-col gap-y-8 pb-8">
        <div className="w-full flex flex-col items-center pt-10">
          <p className="font-foglihten text-xl sm:text-3xl pb-6">
            Основные этапы работы с заказчиком
          </p>
          <div className="w-full flex-wrap flex-row flex justify-around gap-y-6">
            <div className="w-[500px] px-8 py-5 bg-custom-black-title rounded-[16px] max-h-min gap-y-2 flex flex-col">
              <p className="font-foglihten text-xl text-white px-1 py-1 border border-custom-yellow rounded-[8px]">
                1 - Предварительная консультация
              </p>
              <p className="font-light text-sm text-gray-300">
                Перед тем как посетить мастерскую для заказа изделия,
                рекомендуется ознакомиться с каталогами на нашем сайте или
                выбрать понравившуюся модель в интернете. При посещении
                консультации важно иметь при себе материал для будущего
                украшения (например, золото или серебро) и несколько вариантов
                дизайна желаемого украшения. Мы также проводим проверку ваших
                материалов на пригодность к использованию в работе.
              </p>
            </div>
            <div className="w-[500px] px-8 py-5 bg-custom-black-title rounded-[16px] max-h-min gap-y-2 flex flex-col">
              <p className="font-foglihten text-xl text-white px-1 py-1 border border-custom-yellow rounded-[8px]">
                2 - Согласование дизайна
              </p>
              <p className="font-light text-sm text-gray-300">
                Клиент может предоставить образец в виде фотографии украшения,
                изображения из интернета или даже эскиза на бумаге. Если нужно,
                мы поможем вам подобрать подходящий дизайн, учитывая ваши
                предпочтения, или разработаем индивидуальный вариант. После
                этого обсуждается черновой вариант украшения, учитывающий все
                детали и нюансы, согласованные с заказчиком. Наши ювелиры задают
                множество вопросов о внешнем виде, деталях, размерах и других
                характеристиках будущего изделия, чтобы максимально точно
                воплотить ваши пожелания.
              </p>
            </div>
            <div className="w-[500px] px-8 py-5 bg-custom-black-title rounded-[16px] max-h-min gap-y-2 flex flex-col">
              <p className="font-foglihten text-xl text-white px-1 py-1 border border-custom-yellow rounded-[8px]">
                3 - Оформление заказа
              </p>
              <p className="font-light text-sm text-gray-300">
                После того как внешний вид нового украшения утвержден, мы
                приступаем к расчету стоимости изготовления и определению сроков
                выполнения заказа. Обычно это занимает около месяца, но мы также
                предоставляем услугу срочного изготовления в течение 10 дней,
                если это необходимо. После согласования условий заказа с
                клиентом оформляются все необходимые документы и составляется
                договор. На этом этапе клиент получает копию договора и
                отправляется домой в ожидании завершения работы.
              </p>
            </div>
            <div className="w-[500px] px-8 py-5 bg-custom-black-title rounded-[16px] max-h-min gap-y-2 flex flex-col">
              <p className="font-foglihten text-xl text-white px-1 py-1 border border-custom-yellow rounded-[8px]">
                4 - Разработка 3D версии
              </p>
              <p className="font-light text-sm text-gray-300">
                Будущее изделие проектируется в электронном формате с учетом
                всех размеров и характеристик. Трехмерная модель очень
                реалистично отображает внешний вид нового украшения, позволяя
                клиенту оценить его внешний вид и цветовые сочетания с
                различными самоцветами. При необходимости вносятся изменения в
                проект, и после утверждения с клиентом мы приступаем к
                изготовлению ювелирных изделий из выбранного сплава.
              </p>
            </div>
            <div className="w-[500px] px-8 py-5 bg-custom-black-title rounded-[16px] max-h-min gap-y-2 flex flex-col">
              <p className="font-foglihten text-xl text-white px-1 py-1 border border-custom-yellow rounded-[8px]">
                5 - Запуск в работу
              </p>
              <p className="font-light text-sm text-gray-300">
                Мы используем передовые технологии и методы производства,
                включая ЧПУ станки и 3D принтеры, но также придаем значение
                ручной работе. Изделие проходит проверку в пробирной инспекции,
                где убеждаются в его качестве и наносят клеймо. После этого
                следуют финальные шаги: полировка, закрепка камней и, при
                необходимости, нанесение покрытий. Установка камней происходит в
                присутствии клиента.
              </p>
            </div>
            <div className="w-[500px] px-8 py-5 bg-custom-black-title rounded-[16px] max-h-min gap-y-2 flex flex-col">
              <p className="font-foglihten text-xl text-white px-1 py-1 border border-custom-yellow rounded-[8px]">
                6 - Передача готового украшения
              </p>
              <p className="font-light text-sm text-gray-300">
                В указанный срок клиент приносит квитанцию заказа, оплачивает
                оставшуюся сумму и проверяет готовое изделие. Затем оформляются
                необходимые документы, изделие взвешивается для подсчета веса и
                сопоставления с использованными материалами. Все наши изделия
                имеют гарантию полгода. После завершения процедур клиент
                получает украшение.
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
          <ContactForm isForService contactType={ContactType.ServiceProduce} />
        </div>

        <div className="px-5 pt-[60px] pb-5 bg-custom-black-title flex flex-col justify-center items-start">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProduceScreen;
