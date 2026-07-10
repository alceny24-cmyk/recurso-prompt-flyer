import { CopyPromptButton } from "@/components/CopyPromptButton";
import { FLYER_PROMPT } from "@/lib/prompt";

const steps = [
  "Abre ChatGPT.",
  "Sube tu flyer.",
  "Copia este prompt.",
  "Pégalo en ChatGPT.",
  "Espera la nueva versión.",
];

const outcomes = [
  "Reducir el ruido visual",
  "Mejorar la jerarquía",
  "Simplificar la composición",
  "Eliminar elementos innecesarios",
  "Obtener un diseño con apariencia profesional",
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[600px] flex-col px-6 pt-[4.375rem] pb-14 sm:pt-[6.25rem] sm:pb-20">
      <header className="flex items-center gap-2">
        <span className="text-[15px] font-semibold tracking-tight text-ink">
          Expreso
        </span>
      </header>

      <section className="mt-16 sm:mt-24">
        <p className="text-[13px] font-normal uppercase tracking-[0.02em] text-muted/70">
          Prompt #001
        </p>
        <h1 className="mt-3 text-balance text-[clamp(1.75rem,5vw+1rem,2.75rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
          El prompt definitivo para mejorar cualquier flyer con ChatGPT
        </h1>
        <p className="mt-5 max-w-[50ch] text-[17px] leading-[1.6] text-muted">
          Sube cualquier flyer a ChatGPT y pega este prompt.
        </p>
        <p className="mt-3 max-w-[50ch] text-[17px] leading-[1.6] text-muted">
          Obtendrás una versión más limpia, profesional y con apariencia
          humana.
        </p>
        <p className="mt-8 text-[12px] text-muted/60">2 min de lectura</p>
      </section>

      <section className="mt-20 sm:mt-28">
        <h2 className="text-[20px] font-semibold text-ink">
          ¿Qué hace este prompt?
        </h2>
        <div className="mt-4 space-y-4 text-[16px] leading-[1.7] text-ink">
          <p>
            Convierte a ChatGPT en un director creativo senior que analiza tu
            flyer y propone mejoras concretas para reducir el ruido visual,
            mejorar la jerarquía, eliminar elementos innecesarios y
            simplificar la composición.
          </p>
          <p className="text-muted">
            No promete milagros. Simplemente ayuda a obtener mejores
            resultados a partir de lo que ya tienes.
          </p>
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

      <section className="mt-12 sm:mt-14">
        <div className="rounded-[10px] border border-border">
          <div className="flex items-center justify-between border-b border-border px-5 py-3 sm:px-6">
            <span className="text-[13px] font-medium text-muted">Prompt</span>
            <CopyPromptButton text={FLYER_PROMPT} />
          </div>
          <pre className="max-h-[420px] overflow-y-auto whitespace-pre-wrap break-words px-5 py-6 font-mono text-[14px] leading-[1.65] text-ink sm:px-6 sm:py-8">
            {FLYER_PROMPT}
          </pre>
        </div>
      </section>

      <section className="mt-20 sm:mt-24">
        <div className="border-l border-border pl-5">
          <p className="text-[13px] font-medium text-muted">
            Consejo profesional
          </p>
          <p className="mt-2 text-[15px] leading-[1.6] text-ink">
            Los mejores resultados se consiguen cuando el flyer original ya
            tiene una buena fotografía y toda la información necesaria. Este
            prompt mejora el diseño, pero no sustituye una buena idea ni un
            buen contenido.
          </p>
        </div>
      </section>

      <footer className="mt-20 pb-6 sm:mt-28">
        <p className="text-[13px] text-muted/60">Expreso</p>
      </footer>
    </main>
  );
}
