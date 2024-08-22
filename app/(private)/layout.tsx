import { IChildren } from "@/interface";
import { Header } from "@/components/modules/header";

export default function PrivateLayout({ children }: Readonly<IChildren>) {
  return (
    <main className="flex flex-col w-full">
      <Header />
      <div className="flex w-full pt-16 h-[1000px]">
        <div className="container mx-auto">
          <div className="flex w-full">{children}</div>
        </div>
      </div>
    </main>
  );
}
