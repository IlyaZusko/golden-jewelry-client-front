import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const ReviewsAccordion = () => {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p className="text-base font-medium text-left">
              Какие виды украшений вы предлагаете?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <p className=" text-sm font-light max-w-[685px]">
              Мы специализируемся на продаже готовых украшений, изготовлении
              украшений на заказ, ремонте и реставрации старых украшений, а
              также разработке индивидуального дизайна украшений по вашему
              желанию.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <p className="text-base font-medium text-left">
              Как я могу заказать у вас украшение?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <p className=" text-sm font-light max-w-[685px]">
              Вы можете связаться с нами напрямую через наш веб-сайт, по
              телефону или лично в нашем магазине, чтобы обсудить ваши пожелания
              и требования к украшению. Мы также предлагаем консультации по
              дизайну и помощь в выборе материалов.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <p className="text-base font-medium text-left">
              Как долго занимает процесс изготовления украшения на заказ?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <p className=" text-sm font-light max-w-[685px]">
              Время изготовления украшения на заказ зависит от сложности
              дизайна, выбранных материалов и наличия необходимых компонентов.
              Мы обычно предоставляем ориентировочные сроки при первой встрече
              или консультации.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <p className="text-base font-medium text-left">
              Вы предоставляете услуги по ремонту и реставрации старых
              украшений?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <p className=" text-sm font-light max-w-[685px]">
              Да, мы предлагаем услуги по ремонту и реставрации старых
              украшений. Наши опытные мастера обращают особое внимание на каждую
              деталь, чтобы вернуть вашему украшению прежний вид.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            <p className="text-base font-medium text-left">
              Можете ли вы помочь мне в разработке уникального дизайна
              украшения?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <p className=" text-sm font-light max-w-[685px]">
              Конечно! Мы с удовольствием поможем вам в разработке
              индивидуального дизайна украшения. Наши специалисты сотрудничают с
              вами, чтобы понять ваши предпочтения и воплотить их в жизнь,
              создавая украшение, которое отражает вашу индивидуальность и
              стиль.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ReviewsAccordion;
