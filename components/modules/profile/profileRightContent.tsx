import { ProPremium } from "@/components/modules/profile/proPremium";
import { ProMorePeople } from "@/components/modules/profile/proMorePeople";

export const ProfileRightContent = () => {
  return (
    <div className="w-1/4">
      <ProPremium />
      <ProMorePeople />
    </div>
  );
};
