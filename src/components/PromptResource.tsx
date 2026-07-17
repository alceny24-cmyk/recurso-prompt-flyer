import { CopyPromptButton } from "@/components/CopyPromptButton";

type PromptResourceProps = {
  eyebrow: string;
  title: string;
  subtitleLines: string[];
  readingTime: string;
  whatItDoes: { text: string; muted?: boolean }[];
  steps: string[];
  outcomes: string[];
  promptText: string;
  tip: { label: string; text: string };
  example?: { src: string; caption: string };
};

export function PromptResource({
  eyebrow,
  title,
  subtitleLines,
  readingTime,
  whatItDoes,
  steps,
  outcomes,
  promptText,
  tip,
  example,
}: PromptResourceProps) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[600px] flex-col px-6 pt-[4.375rem] pb-14 sm:pt-[6.25rem] sm:pb-20">
      <header className="flex items-center gap-2">
        <span className="text-[15px] font-semibold tracking-tight text-ink">
          Alceny Marketing
        </span>
      </header>

      <section className="mt-16 sm:mt-24">
        <p className="text-[13px] font-normal uppercase tracking-[0.02em] text-muted/70">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-balance text-[clamp(1.75rem,5vw+1rem,2.75rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
          {title}
        </h1>
        {subtitleLines.map((line) => (
          <p
            key={line}
            className="mt-3 max-w-[50ch] text-[17px] leading-[1.6] text-muted first:mt-5"
          >
            {line}
          </p>
        ))}
        <p className="mt-8 text-[12px] text-muted/60">{readingTime}</p>
      </section>

      <section className="mt-20 sm:mt-28">
        <h2 className="text-[20px] font-semibold text-ink">
          ¿Qué hace este prompt?
        </h2>
        <div className="mt-4 space-y-4 text-[16px] leading-[1.7] text-ink">
          {whatItDoes.map((paragraph) => (
            <p
              key={paragraph.text}
              className={paragraph.muted ? "text-muted" : undefined}
            >
              {paragraph.text}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-20 sm:mt-24">
        <h2 className="text-[20px] font-semibold text-ink">
          Cómo utilizarlo
        </h2>
        <ol className="mt-4 space-y-3">
          {steps.map((step, index) => (
            <li key={step} className="flex items-baseline gap-3">
              <span className="w-5 shrink-0 text-[15px] font-medium text-muted tabular-nums">
                {index + 1}
              </span>
              <span className="text-[16px] leading-[1.6] text-ink">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20 sm:mt-24">
        <h2 className="text-[20px] font-semibold text-ink">
          Lo que conseguirás
        </h2>
        <ul className="mt-4 space-y-2.5">
          {outcomes.map((outcome) => (
            <li
              key={outcome}
              className="flex items-baseline gap-2.5 text-[16px] leading-[1.6] text-ink"
            >
              <span className="text-muted">✓</span>
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </section>

      {example && (
        <section className="mt-20 sm:mt-24">
          <h2 className="text-[20px] font-semibold text-ink">
            Ejemplo del resultado
          </h2>
          <div className="mt-4 overflow-hidden rounded-[10px] border border-border">
            <iframe
              src={example.src}
              title={example.caption}
              loading="lazy"
              className="h-[420px] w-full"
            />
          </div>
          <div className="mt-3 flex items-baseline justify-between gap-3">
            <p className="text-[13px] text-muted">{example.caption}</p>
            <a
              href={example.src}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-[13px] font-medium text-muted underline decoration-border underline-offset-2 transition-colors hover:text-primary"
            >
              Abrir en pantalla completa
            </a>
          </div>
        </section>
      )}

      <section className="mt-12 sm:mt-14">
        <div className="rounded-[10px] border border-border">
          <div className="flex items-center justify-between border-b border-border px-5 py-3 sm:px-6">
            <span className="text-[13px] font-medium text-muted">Prompt</span>
            <CopyPromptButton text={promptText} />
          </div>
          <pre className="max-h-[420px] overflow-y-auto whitespace-pre-wrap break-words px-5 py-6 font-mono text-[14px] leading-[1.65] text-ink sm:px-6 sm:py-8">
            {promptText}
          </pre>
        </div>
      </section>

      <section className="mt-20 sm:mt-24">
        <div className="border-l border-border pl-5">
          <p className="text-[13px] font-medium text-muted">{tip.label}</p>
          <p className="mt-2 text-[15px] leading-[1.6] text-ink">
            {tip.text}
          </p>
        </div>
      </section>

      <footer className="mt-20 pb-6 sm:mt-28">
        <p className="text-[13px] text-muted/60">Alceny Marketing</p>
      </footer>
    </main>
  );
}
