import Image from 'next/image';

const BackgroundVectors = () => (
  <>
    <div className="vector main-grid">
      <Image src="/images/Vector.svg" alt="Main Grid" layout="fill" objectFit="cover" />
    </div>
    <div className="vector group-23"style={{ position: 'absolute', top: '0%', left: '29%' }}>
      <Image src="/images/Group 23.svg" alt="Group 23" width={500} height={500} />
    </div>
    <div className="vector vector-5" style={{ position: 'absolute', top: '28%', left: '-10%' }}>
      <Image src="/images/Vector 5.svg" alt="Vector 5" width={500} height={500} />
    </div>
    <div className="vector vector-7" style={{ position: 'absolute', top: '32%', left: '60%' }}>
      <Image src="/images/Vector 7.svg" alt="Vector 7" width={500} height={500} />
    </div>
    <div className="vector group-4">
      <Image src="/images/Group 4.svg" alt="Group 4" width={500} height={500} />
    </div>
    <div className="vector vector-10" style={{ position: 'absolute', top: '28%', left: '29%' }}>
      <Image src="/images/Vector 10.svg" alt="Vector 10" width={500} height={500} />
    </div>
  </>
);

export default BackgroundVectors;
