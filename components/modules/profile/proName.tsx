import Image from "next/image";

export const ProName = () => {
  const verifyIcon = "/verify.png";

  return (
    <h1 className="text-2xl font-bold flex items-center mb-1">
      Dipankar Halder{" "}
      <Image
        src={verifyIcon}
        alt="verify"
        width={24}
        height={24}
        className="ml-2"
      />
    </h1>
  );
};
