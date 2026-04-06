interface SectionDividerProps {
  color?: string;
  flip?: boolean;
}

const SectionDivider = ({ color = "hsl(var(--background))", flip = false }: SectionDividerProps) => (
  <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className="block h-12 w-full md:h-16 lg:h-20"
    >
      <path
        d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
        fill={color}
      />
    </svg>
  </div>
);

export default SectionDivider;
