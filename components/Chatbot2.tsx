"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Chatbot2 = () => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center justify-center bg-dark"
         style={{
           width: '1440px',
           height: '1024px'
         }}>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Image src="/images/Vector.svg" alt="Main Grid" className="vector main-grid" width={960} height={214} style={{ bottom: '0', left: '0' }} />
        <Image src="/images/Group 23.svg" alt="Group 23" className="vector group-23" width={250} height={200} />
        <Image src="/images/Group 4.svg" alt="Group 4" className="vector group-4" width={200} height={50} />
      </div>
      
      <div className="absolute left-0 top-0 h-full bg-dark-sidebar flex flex-col items-center justify-center"
           style={{ width: '140px', height: '1024px', top: '-1px', gap: '0px', opacity: '0px' }}>
        <div className="mb-4">
          <Image src="/images/Group 26.svg" alt="Trending topics" width={140} height={1024} />
        </div>
      </div>
      
      <div className="absolute cursor-pointer"
           style={{ width: '1158px', height: '821px', top: '102px', left: '201px', gap: '0px', opacity: '0px' }}>
        <Image src="/images/Group 19.svg" alt="Start a new conversation" layout="fill" onClick={() => router.push('/chatbot3')} />
        <div className="absolute" style={{ width: '70px', height: '70px', top: '100px', left: '950px', gap: '0px', opacity: '0px' }}>
          <Image src="/images/Group 22.png" alt="Dexter Chatbot Logo" width={70} height={70} />
        </div>
        <div className="absolute" style={{ width: '524px', height: '90px', top: '75px', left: '450px', gap: '0px', opacity: '0px' }}>
          <Image src="/images/Group 20.svg" alt="Dexter Chatbot Logo" width={524} height={90} />
        </div>
        <div className="absolute" style={{ width: '70px', height: '70px', top: '288px', left: '153px', gap: '0px', opacity: '0px' }}>
          <Image src="/images/Group 21.png" alt="Dexter Chatbot Logo" width={70} height={70} />
        </div>

        <div className="absolute" style={{ width: '535px', height: '133px', top: '288px', left: '260px', gap: '0px', opacity: '0px' }}>
          <Image src="/images/Frame 15.svg" alt="Dexter Chatbot Logo" width={535} height={133} />
        </div>
      </div>
    </div>
  );
};

export default Chatbot2;
