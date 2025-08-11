interface ProjectProps {
  title: string;
}

export default function Project({ title }: ProjectProps) {
  return (
    <div className="relative w-full py-8 cursor-pointer flex items-center justify-between">
      <div className="relative z-10 px-8 flex-grow">
        <h2 className="text-white text-3xl sm:text-5xl font-sans font-light">{title}</h2>
      </div>
    </div>
  );
}
