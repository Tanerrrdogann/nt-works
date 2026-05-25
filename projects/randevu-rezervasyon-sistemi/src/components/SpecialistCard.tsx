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
    <div className="bg-white rounded-3xl p-8 border border-rose-100 shadow-sm hover:border-rose-300 transition-all text-center">
      <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-rose-200 to-pink-100 rounded-full mb-4 border-4 border-white shadow-md flex items-center justify-center text-2xl">
        👩‍⚕️
      </div>
      <h3 className="text-xl font-bold text-slate-800">{specialist.name}</h3>
      <p className="text-rose-500 font-medium text-sm mb-4">{specialist.title}</p>
      <p className="text-slate-500 text-sm mb-4">{specialist.description}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {specialist.services.map((s: string, i: number) => (
          <span key={i} className="text-xs bg-rose-50 text-rose-600 px-3 py-1 rounded-full">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
