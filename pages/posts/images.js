import Image from 'next/image';

const YourComponent = () => (
  <Image
    src="C:\Source\nextjs-blog\images" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Chad Chandrapaul"
  />
);
