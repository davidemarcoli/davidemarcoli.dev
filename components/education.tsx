interface EducationProps {
  institution: string;
  location: string;
  dates: string;
}

export default function Education({
  institution,
  location,
  dates,
}: EducationProps) {
  return (
    <div>
      <p className="text-base font-bold text-gray-100 mb-1">{institution}</p>
      <p className="text-sm text-gray-300 mb-1">{location}</p>
      <p className="text-xs text-gray-500 mb-2">{dates}</p>
    </div>
  );
}
