import { notFound } from "next/navigation";
import { IProfileProps } from "@/interface";
import { ProfileLeftContent } from "@/components/modules/profile/profileLeftContent";
import { ProfileRightContent } from "@/components/modules/profile/profileRightContent";

export default async function ProfileDetails({ params }: IProfileProps) {
  if (!params.id) {
    return notFound();
  }

  return (
    <div className="flex w-full mt-5 gap-5">
      <ProfileLeftContent profileName={params.id} />
      <ProfileRightContent />
    </div>
  );
}
