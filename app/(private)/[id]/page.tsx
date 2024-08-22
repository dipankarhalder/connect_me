import { notFound } from "next/navigation";
import { IProfileProps } from "@/interface";
import { ProfileLeftContent } from "@/components/modules/profile/profileLeftContent";

export default async function ProfileDetails({ params }: IProfileProps) {
  if (!params.id) {
    return notFound();
  }

  return (
    <div className="flex w-full mt-5 gap-5">
      <ProfileLeftContent profileName={params.id} />
      <div className="p-4 bg-white rounded-md shadow w-1/4">sdkjfnjs</div>
    </div>
  );
}
