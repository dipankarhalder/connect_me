import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronDown, BadgeCheck } from "lucide-react";
import { IProfileProps } from "@/interface";

export default async function ProfileDetails({ params }: IProfileProps) {
  const verifyIcon = "/verify.png";
  const profileBanner = "/banner.jpg";
  const profileImage =
    "https://media.licdn.com/dms/image/v2/D5603AQHCM9H9t3_6uw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708373241440?e=1729123200&v=beta&t=2Fop2czN8IX_OfT0qA91bq0sKxpZAtiV0Rqt1_gjtmM";
  const officeLogo =
    "https://media.licdn.com/dms/image/v2/D4D0BAQFHQWpJzXr2ng/company-logo_100_100/company-logo_100_100/0/1719809529205/ltimindtree_logo?e=1732147200&v=beta&t=gu4VPdvr_Li1fU6EBFYp6PkA7csXVbcz1dtfazzW288";

  const btnlink = ["Open to", "Add profile section", "Enhance profile"];

  if (!params.id) {
    return notFound();
  }

  return (
    <div className="flex w-full mt-5 gap-5">
      <div className="bg-white rounded-md shadow w-3/4 overflow-hidden">
        <div className="w-full h-[200px] bg-slate-200 relative">
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
          <div className="w-[138px] h-[138px] bg-slate-400 absolute left-6 bottom-[-30px] shadow-sm overflow-hidden rounded-xl border-4">
            <Image
              src={profileImage}
              alt="Springworks"
              width={130}
              height={24}
              layout="responsive"
            />
          </div>
        </div>
        <div className="w-full flex flex-col pt-12 pl-6 pb-4">
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
          <div className="flex gap-5 mb-5">
            <h5 className="text-md font-semibold text-slate-600 w-2/4 leading-5">
              Sr. Software Engineer (LTIMindtree, @Ex-BORN Group,
              @Ex-Springrole, @Ex-Digital Aptech)
            </h5>
            <div className="flex justify-end w-2/4 pr-6">
              <Image
                src={officeLogo}
                alt="LTIMindtree"
                width={40}
                height={40}
                priority
                className="rounded-md"
              />
              <div className="flex flex-col ml-3">
                <h5 className="font-semibold text-sm text-slate-600 mb-1">
                  LTIMindtree Limited.
                </h5>
                <p className="font-semibold text-xs text-slate-500">
                  Kolkata, West Bengal.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col w-2/4">
              <p className="flex items-center text-sm font-medium mb-1 text-sky-600">
                @{params.id}
              </p>
              <h6 className="text-md font-medium text-slate-500 mb-1">
                Karnataka, Bengaluru, India.
              </h6>
              <p className="text-sm font-semibold flex gap-3 text-indigo-700 items-center">
                <Link href="" className="hover:underline">
                  513 followers
                </Link>
                <span className="w-[3px] h-[3px] bg-indigo-700 rounded-full"></span>
                <Link href="" className="hover:underline">
                  450 connections
                </Link>
                <span className="w-[3px] h-[3px] bg-indigo-700 rounded-full"></span>
                <Link href="" className="hover:underline">
                  Contact Info
                </Link>
              </p>
            </div>
            <div className="flex flex-col justify-end w-2/4 pr-6">
              <div className="flex gap-2">
                {btnlink.map((item, idx) => (
                  <div
                    key={`${item}-${idx}`}
                    className="flex text-slate-700 pr-3 items-center pl-4 py-2 cursor-pointer transition rounded-md bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700"
                  >
                    <p className="font-semibold text-sm">{item}</p>{" "}
                    <ChevronDown size={16} className="ml-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white rounded-md shadow w-1/4">sdkjfnjs</div>
    </div>
  );
}
