
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl mx-auto text-center mb-12 animate-fade-in ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{title}</h2>
      <div className="w-20 h-1 bg-rescue-500 mx-auto mb-6"></div>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
}
