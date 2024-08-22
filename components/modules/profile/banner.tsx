import Image from "next/image";

export const ProfileBanner = () => {
  const profileBanner = "/banner.jpg";

  return (
    <span className="flex w-full h-[200px] overflow-hidden">
      <Image
        src={profileBanner}
        alt="Springworks"
        width={987}
        height={200}
        className="w-full h-auto"
        priority
      />
    </span>
  );
};
