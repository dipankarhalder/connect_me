import { notFound } from "next/navigation";
import { IProfileProps } from "@/interface";

export default async function ProfileDetails({ params }: IProfileProps) {
  if (!params.id) {
    return notFound();
  }

  return <div className="flex w-full mt-5 gap-5">{params.id}</div>;
}
