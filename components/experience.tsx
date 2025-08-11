interface ExperienceProps {
  children?: React.ReactNode;
}

export default function Experience({ children }: ExperienceProps) {
  return (
    <li className="flex items-start">
      <div className="h-0.5 w-4 bg-white mt-2 mr-2 flex-shrink-0"></div>
      {children}
    </li>
  );
}
