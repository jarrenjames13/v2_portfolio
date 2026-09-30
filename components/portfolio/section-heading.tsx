type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2
        className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        id={id}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
