type SpecialistProps = {
  specialist: {
    name: string;
    title: string;
    description: string;
    services: string[];
  };
};

export default function SpecialistCard({ specialist }: SpecialistProps) {
  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-3 md:p-8 border border-rose-100 shadow-sm hover:border-rose-300 transition-all text-center">
      <div className="w-14 h-14 md:w-24 md:h-24 mx-auto bg-gradient-to-tr from-rose-200 to-pink-100 rounded-full mb-3 md:mb-4 border-4 border-white shadow-md flex items-center justify-center text-lg md:text-2xl">
        👩‍⚕️
      </div>
      <h3 className="text-sm leading-5 md:text-xl md:leading-7 font-bold text-slate-800">{specialist.name}</h3>
      <p className="text-rose-500 font-medium text-xs md:text-sm mb-2 md:mb-4">{specialist.title}</p>
      <p className="text-slate-500 text-xs leading-5 md:text-sm md:leading-6 mb-3 md:mb-4 line-clamp-3">{specialist.description}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {specialist.services.map((s: string, i: number) => (
          <span key={i} className="text-[10px] md:text-xs bg-rose-50 text-rose-600 px-2 md:px-3 py-1 rounded-full">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
