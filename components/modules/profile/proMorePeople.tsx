import { UserRoundPlus } from "lucide-react";

export const ProMorePeople = () => {
  const userBrowse = [
    { id: 1, name: "Priya Biswas", designation: "Technical Lead" },
    { id: 2, name: "Avinash Roy", designation: "Sr. Software Engineer" },
    {
      id: 3,
      name: "Sagar Rout",
      designation: "QA Engineer",
    },
    {
      id: 4,
      name: "Mukesh Kumar Shah",
      designation: "DevOps Engineer",
    },
    {
      id: 5,
      name: "Anitha A",
      designation: "Software Engineer",
    },
    {
      id: 6,
      name: "Sukrit Sarkar",
      designation: "Project Manager",
    },
  ];

  return (
    <div className="mt-3 border shadow rounded-sm bg-white">
      <h3 className="font-semibold text-md px-3 py-2 mb-2">
        More profiles to browse
      </h3>
      <div className="flex flex-col px-3">
        {userBrowse.map((item) => (
          <div
            className="flex items-center justify-between mb-2 pb-2 border-b border-b-slate-50"
            key={item.id}
          >
            <div className="flex items-center w-[85%]">
              <span className="w-[50px] h-[50px] rounded-full bg-slate-300"></span>
              <div
                className="flex flex-col ml-3"
                style={{ width: "calc(100% - 52px)" }}
              >
                <h5 className="font-bold text-sm truncate text-slate-700 mb-1">
                  {item.name}
                </h5>
                <p className="font-medium text-xs truncate text-slate-500">
                  {item.designation}
                </p>
              </div>
            </div>
            <div className="w-[15%] flex justify-center items-center">
              <span className="w-[34px] h-[34px] flex justify-center items-center rounded-full border cursor-pointer hover:border-indigo-500 hover:bg-indigo-500 hover:text-white">
                <UserRoundPlus size={15} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
