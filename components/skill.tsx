interface SkillProps {
  children?: React.ReactNode;
}

export default function Skill({ children }: SkillProps) {
  return (
    <span className="bg-black p-2 rounded-sm border-2 border-white text-center">
      {children}
    </span>
  );
}
