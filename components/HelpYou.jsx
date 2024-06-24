"use client";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const HelpYou = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/dextername');
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-dark"
         style={{
           width: '1440px',
           height: '1024px'
         }}>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Image src="/images/frame 13.png" alt="Frame 13" className="absolute"
               style={{ width: '547px', height: '66px', top: '115px', left: '95px', gap: '36px', opacity: '0px' }} 
               width={547} height={66} />
        <button 
          onClick={handleButtonClick}
          className="absolute rounded text-white"
          style={{
            width: '199px',
            height: '56px',
            top: '222px',
            left: '202px',
            gap: '0px',
            opacity: '0px',
            background: 'linear-gradient(90deg, #FFDDBD 0%, #E59E5F 100%)',
            border: '2px solid',
            borderImageSource: 'radial-gradient(50.66% 53.55% at 50.66% 53.55%, rgba(42, 125, 130, 0) 0%, #2A7D82 100%)'
          }}
        >
          Continue →
        </button>
        <Image src="/images/group 7.png" alt="Group 7" className="absolute"
               style={{ width: '298.65px', height: '325px', top: '401px', left: '247.68px', gap: '0px', opacity: '0px' }} 
               width={298.65} height={325} />
        <Image src="/images/group 8.png" alt="Group 8" className="absolute"
               style={{ width: '245.98px', height: '267.69px', top: '715px', left: '608px', gap: '0px', opacity: '0px' }}
               width={245.98} height={267.69} />
        <Image src="/images/group 9.png" alt="Group 9" className="absolute"
               style={{ width: '278.43px', height: '303px', top: '328px', left: '872px', gap: '0px', opacity: '0px' }}
               width={278.43} height={303} />
        <Image src="/images/group 10.png" alt="Group 10" className="absolute"
               style={{ width: '196.65px', height: '214px', top: '726px', left: '-10px', gap: '0px', opacity: '0px' }}
               width={196.65} height={214} />
        <Image src="/images/group 11.png" alt="Group 11" className="absolute"
               style={{ width: '340px', height: '370px', top: '856px', left: '1068px', gap: '0px', opacity: '0px' }}
               width={340} height={370} />
        <Image src="/images/group 12.png" alt="Group 12" className="absolute"
               style={{ width: '278.43px', height: '303px', top: '889px', left: '269px', gap: '0px', opacity: '0px' }}
               width={278.43} height={303} />
        <Image src="/images/group 13.png" alt="Group 13" className="absolute"
               style={{ width: '245.98px', height: '267.69px', top: '497px', left: '1285px', gap: '0px', opacity: '0px' }}
               width={245.98} height={267.69} />
        <Image src="/images/vector.svg" alt="Vector Grid" className="absolute bottom-0 left-0 w-full" width={960} height={214} />
      </div>
    </div>
  );
};

export default HelpYou;
