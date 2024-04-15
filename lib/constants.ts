export const advantagesComponent = [
  {
    title: 'Качество',
    subTitle: 'Изготавливаем ювелирные изделия всегда на высшем уровне',
    icon: require('@/public/icons/crystal.svg'),
  },
  {
    title: 'Проверенность',
    subTitle:
      'Профессионализм и компетентность подтверждены наградами на конкурсах',
    icon: require('@/public/icons/gem-1.svg'),
  },
  {
    title: 'Пунктуальность',
    subTitle:
      'Мы беремся за срочное выполнение заказов и соблюдаем сроки выполнения',
    icon: require('@/public/icons/diamond.svg'),
  },
  {
    title: 'Выгода',
    subTitle:
      'Вы получите выгодные и справедливые цены на эксклюзивные изделия высокого качества',
    icon: require('@/public/icons/gem-2.svg'),
  },
];

export enum OrderStatuses {
  InProcessing = 'В Обработке',
  Accepted = 'Принят',
  Sent = 'Отправлен',
  Delivered = 'Доставлен',
  Cancelled = 'Отменён',
}

export const navItemStyles =
  // eslint-disable-next-line quotes
  "relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-custom-yellow after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center";
