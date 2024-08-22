import Image from "next/image";

export const ProImage = () => {
  const profileImage =
    "https://media.licdn.com/dms/image/v2/D5603AQHCM9H9t3_6uw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708373241440?e=1729123200&v=beta&t=2Fop2czN8IX_OfT0qA91bq0sKxpZAtiV0Rqt1_gjtmM";

  return (
    <div className="w-[138px] h-[138px] bg-slate-400 absolute left-6 bottom-[-30px] shadow-sm overflow-hidden rounded-xl border-4">
      <Image
        src={profileImage}
        alt="Springworks"
        width={130}
        height={24}
        layout="responsive"
      />
    </div>
  );
};
