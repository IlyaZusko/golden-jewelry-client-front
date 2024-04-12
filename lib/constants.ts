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
