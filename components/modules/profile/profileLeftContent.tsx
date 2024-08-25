import { ProfileBanner } from "@/components/modules/profile/banner";
import { ProImage } from "@/components/modules/profile/proImage";
import { ProName } from "@/components/modules/profile/proName";
import { ProDetails } from "@/components/modules/profile/proDetails";
import { ProContact } from "@/components/modules/profile/proContact";
import { ProButton } from "@/components/modules/profile/proButton";

export const ProfileLeftContent = ({ profileName }: any) => {
  return (
    <div className="w-3/4">
      <div className="bg-white rounded-md shadow overflow-hidden flex flex-col">
        <div className="w-full h-[200px] bg-slate-200 relative">
          <ProfileBanner />
          <ProImage />
        </div>
        <div className="w-full flex flex-col pt-12 pl-6 pb-4">
          <ProName />
          <ProDetails />
          <div className="flex gap-5">
            <ProContact profileName={profileName} />
            <ProButton />
          </div>
        </div>
      </div>
    </div>
  );
};
