type Props = {
  icon: React.ElementType;
  title: string;
  description: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

export default function ServiceCard({ icon: Icon, title, description, position = "top-left" }: Props) {
  return (
    <div className="group relative bg-[#1b1b1b] px-7 py-14 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1">

      {/* Gradient borders based on card position */}
      {position === "top-left" && (
        <>
          <div className="absolute bottom-0 right-0 h-[80%] w-[1px] bg-gradient-to-t from-[#A76108] to-transparent "></div>
          <div className="absolute bottom-0 left-[20%] w-[80%] h-[1px] bg-gradient-to-l from-[#A76108] to-transparent"></div>
        </>
      )}
      {position === "top-right" && (
        <>
          <div className="absolute bottom-0 left-0 w-[80%] h-[1px] bg-gradient-to-r from-[#A76108] to-transparent"></div>
          <div className="absolute bottom-0 left-0 h-[80%] w-[1px] bg-gradient-to-t from-[#A76108] to-transparent"></div>
        </>
      )}
      {position === "bottom-left" && (
        <>
          <div className="absolute top-0 right-0 w-[80%] h-[1px] bg-gradient-to-l from-[#A76108] to-transparent"></div>
          <div className="absolute top-0 right-0 h-[80%] w-[1px] bg-gradient-to-b from-[#A76108] to-transparent"></div>
        </>
      )}
      {position === "bottom-right" && (
        <>
          <div className="absolute top-0 left-0 w-[80%] h-[1px] bg-gradient-to-r from-[#A76108] to-transparent"></div>
          <div className="absolute top-0 left-0 h-[80%] w-[1px] bg-gradient-to-b from-[#A76108] to-transparent"></div>
        </>
      )}

      {/* Card content */}
      <div className="flex items-start gap-4">
        <div className="text-[#d4a373] text-xl mt-1 group-hover:scale-110 transition">
          <Icon />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}