"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const TopicChoose = () => {
  const router = useRouter();

  const handleContinueClick = () => {
    router.push('/chatbot');
  };
  return (
    <div className="relative flex flex-col items-center justify-center bg-dark"
         style={{
           width: '1440px',
           height: '1024px'
         }}>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Image src="/images/Frame 14.svg" alt="Frame 14" className="absolute"
               style={{ width: '954px', height: '66px', top: '265px', left: '118px', gap: '24px', opacity: '0px' }} 
               width={954} height={66} />
        <div className="absolute"
             style={{ width: '1064px', height: '217.47px', top: '387px', left: '201px', gap: '21.57px', opacity: '0px' }}>
          <Image src="/images/Frame 8.svg" alt="Frame 8" layout="fill" />
        </div>
        <div 
          onClick={handleContinueClick}
          className="absolute cursor-pointer"
          style={{
            width: '231px',
            height: '56px',
            top: '680.74px',
            left: '201px',
            gap: '0px',
            opacity: '0px',
          }}
        >
          <Image src="/images/Group 5.svg" alt="Group 5" layout="fill" />
        </div>
        <Image src="/images/vector.svg" alt="Vector Grid" className="absolute bottom-0 left-0 w-full" width={960} height={214} />
      </div>
    </div>
  );
};

export default TopicChoose;