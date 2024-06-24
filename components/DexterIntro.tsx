"use client";
import { useRouter } from 'next/navigation';

const DexterIntro = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/helpyou');
  };

  return (
    <div className="text-center text-white p-4 rounded-lg w-full h-full flex flex-col justify-center items-center bg-dark">
      <span className="text-sm uppercase tracking-wider bg-gray-800 px-2 py-1 rounded-full">Beta</span>
      <h1 className="mt-4">Hey, I am Dexter!</h1>
      <p className="mt-4">I&apos;m your startup-savvy chatbot here at SeedToScale.com!</p>
      <p>Have questions, need inspiration, or want a chat? I&apos;m here for you! 🤖</p>
      <button onClick={handleButtonClick} className="bg-orange-400 text-white px-4 py-2 rounded mt-6">Let&apos;s get started!</button>
      <p className="text-xs mt-4">Dexter can make mistakes. Consider checking important information.</p>
    </div>
  );
};

export default DexterIntro;
