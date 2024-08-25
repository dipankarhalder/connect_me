import Image from "next/image";
import Link from "next/link";

export const ProDetails = () => {
  const officeLogo =
    "https://media.licdn.com/dms/image/v2/D4D0BAQFHQWpJzXr2ng/company-logo_100_100/company-logo_100_100/0/1719809529205/ltimindtree_logo?e=1732147200&v=beta&t=gu4VPdvr_Li1fU6EBFYp6PkA7csXVbcz1dtfazzW288";

  return (
    <div className="flex gap-5 mb-5">
      <h5 className="text-md font-semibold text-slate-600 w-2/4 leading-6">
        Sr. Software Engineer (LTIMindtree, @Ex-BORN Group, @Ex-Springrole,
        @Ex-Digital Aptech)
      </h5>
      <div className="flex flex-col w-2/4 pr-6">
        <div className="flex justify-end">
          <Image
            src={officeLogo}
            alt="LTIMindtree"
            width={38}
            height={38}
            priority
            className="rounded-md"
          />
          <div className="flex flex-col ml-3">
            <h5 className="font-semibold text-sm text-indigo-700 mb-1">
              <Link href="/" className="hover:underline">
                LTIMindtree Limited.
              </Link>
            </h5>
            <p className="font-semibold text-xs text-slate-500">
              Kolkata, West Bengal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
