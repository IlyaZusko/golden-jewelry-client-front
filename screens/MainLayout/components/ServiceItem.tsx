import { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IServiceItem {
  title: string;
  subTitle: string;
  image: StaticImageData;
  width: number;
  height: number;
}

const ServiceItem = ({
  title,
  subTitle,
  image,
  width,
  height,
}: IServiceItem) => {
  return (
    <div
      className=" flex flex-col justify-between rounded-xl p-8"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: width,
        height: height,
      }}
    >
      <div>
        <p className="font-foglihten text-2xl text-white">{title}</p>
        <p className="text-xs font-light text-white mt-2">{subTitle}</p>
      </div>

      <Link href={'#'}>
        <p className="text-sm font-light text-white underline hover:text-custom-yellow">
          Подробнее
        </p>
      </Link>
    </div>
  );
};

export default ServiceItem;
