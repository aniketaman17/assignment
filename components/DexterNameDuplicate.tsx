"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const DexterNameDuplicate = () => {
    const router = useRouter();
  
    const handleContinueClick = () => {
      router.push('/topicchoose');
    };
  
    return (
      <div className="relative flex flex-col items-center justify-center bg-dark"
           style={{
             width: '1440px',
             height: '1024px'
           }}>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <Image src="/images/Frame 5.svg" alt="Frame 5" className="absolute"
                 style={{ width: '979px', height: '66px', top: '225px', left: '118px', gap: '24px', opacity: '0px' }} 
                 width={979} height={66} />
          <div className="absolute"
               style={{ width: '1126px', height: '131px', top: '350px', left: '-10px', gap: '0px', opacity: '0px' }}>
            <Image src="/images/Group 0.svg" alt="Group 0" layout="fill" />
          </div>
          <div 
            onClick={handleContinueClick}
            className="absolute cursor-pointer"
            style={{
              width: '199px',
              height: '56px',
              top: '600px',
              left: '200px',
              gap: '0px',
              opacity: '0px',
            }}
          >
            <Image src="/images/Group 5.svg" alt="Group 5" width={199} height={56} />
          </div>
          <Image src="/images/vector.svg" alt="Vector Grid" className="absolute bottom-0 left-0 w-full" width={960} height={214} />
        </div>
      </div>
    );
  };
  
  export default DexterNameDuplicate;