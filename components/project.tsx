import { useRouter } from "next/navigation";

interface ProjectProps {
  title: string;
  href?: string;
}

export default function Project({ title, href }: ProjectProps) {

  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <div className="relative w-full py-8 cursor-pointer flex items-center justify-between" onClick={handleClick}>
      <div className="relative z-10 px-8 flex-grow">
        <h2 className="text-white text-3xl sm:text-5xl font-sans font-light">
          {title}
        </h2>
      </div>
    </div>
  );
}
