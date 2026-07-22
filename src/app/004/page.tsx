import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "Qué países y temáticas tienen mayor potencial de monetización en Facebook e Instagram",
  description:
    "Referencia rápida de países y temáticas con mayor valor publicitario para decidir dónde enfocar tu contenido. Estimaciones ilustrativas, no cifras verificadas.",
};

function Table({
  columns,
  rows,
}: {
  columns: string[];
  rows: string[][];
}) {
  return (
    <div className="mt-4 overflow-x-auto rounded-[10px] border border-border">
      <table className="w-full min-w-[480px] border-collapse text-[14px]">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className="border-b border-border bg-surface px-4 py-2.5 text-left text-[12px] font-semibold uppercase tracking-[0.03em] text-muted"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 text-ink ${
                    i === rows.length - 1 ? "" : "border-b border-border"
                  }`}
                >
                  {j === 0 ? <span className="font-medium">{cell}</span> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Combo({
  n,
  pair,
  note,
}: {
  n: number;
  pair: string;
  note: string;
}) {
  return (
    <li className="flex gap-3">
      <span className="w-5 shrink-0 text-[15px] font-medium text-muted tabular-nums">
        {n}
      </span>
      <div>
        <p className="text-[16px] font-medium text-ink">{pair}</p>
        <p className="mt-1 text-[15px] leading-[1.6] text-muted">{note}</p>
      </div>
    </li>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-baseline gap-2.5 text-[16px] leading-[1.6] text-ink"
        >
          <span className="text-muted">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-20 sm:mt-24">
      <h2 className="text-[20px] font-semibold text-ink">{title}</h2>
      {children}
    </section>
  );
}

export default function MonetizationRanking() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[680px] flex-col px-6 pt-[4.375rem] pb-14 sm:pt-[6.25rem] sm:pb-20">
      <header className="flex items-center gap-2">
        <span className="text-[15px] font-semibold tracking-tight text-ink">
          Alceny Marketing
        </span>
      </header>

      <section className="mt-16 sm:mt-24">
        <p className="text-[13px] font-normal uppercase tracking-[0.02em] text-muted/70">
          Ranking #004
        </p>
        <h1 className="mt-3 max-w-[22ch] text-balance text-[clamp(1.75rem,5vw+1rem,2.75rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
          Qué países y temáticas tienen mayor potencial de monetización en
          Facebook e Instagram
        </h1>
        <p className="mt-5 max-w-[55ch] text-[17px] leading-[1.6] text-muted">
          Una referencia rápida para decidir en qué país y qué nicho enfocar
          tu contenido.
        </p>
        <p className="mt-3 max-w-[55ch] text-[17px] leading-[1.6] text-muted">
          Basada en valor publicitario, competencia y demanda de anunciantes.
        </p>
        <p className="mt-8 text-[12px] text-muted/60">3 min de lectura</p>
      </section>

      <section className="mt-12 sm:mt-14">
        <div className="border-l border-border pl-5">
          <p className="text-[13px] font-medium text-muted">
            Nota sobre los datos
          </p>
          <p className="mt-2 text-[15px] leading-[1.6] text-ink">
            Las clasificaciones de esta página son estimaciones ilustrativas
            para orientar una decisión, no cifras verificadas por Meta ni una
            garantía de ingresos. El RPM real depende de tu audiencia, tu
            formato de contenido y la política de monetización vigente en
            cada momento.
          </p>
        </div>
      </section>

      <Section title="Países con mayor potencial publicitario">
        <Table
          columns={["País", "Potencial", "Idiomas", "Nichos fuertes"]}
          rows={[
            [
              "Estados Unidos",
              "Excelente",
              "Inglés / Español",
              "Finanzas, seguros, IA, software",
            ],
            [
              "Canadá",
              "Muy alto",
              "Inglés / Francés",
              "Finanzas, tecnología",
            ],
            ["Australia", "Muy alto", "Inglés", "Seguros, negocios, IA"],
            ["Reino Unido", "Muy alto", "Inglés", "Finanzas, marketing"],
          ]}
        />
      </Section>

      <Section title="Temáticas más rentables">
        <Table
          columns={["Temática", "Valor comercial", "Competencia", "Viralidad"]}
          rows={[
            ["Finanzas", "Muy alto", "Alta", "Media"],
            ["Seguros", "Muy alto", "Muy alta", "Baja"],
            ["Inteligencia artificial", "Muy alto", "Alta", "Muy alta"],
            ["Bienes raíces", "Muy alto", "Alta", "Media"],
            ["Abogados", "Muy alto", "Muy alta", "Baja"],
            ["Software / SaaS", "Muy alto", "Alta", "Alta"],
          ]}
        />
      </Section>

      <Section title="Mejor combinación de país y temática">
        <ul className="mt-4 space-y-4">
          <Combo
            n={1}
            pair="Estados Unidos + Finanzas"
            note="Mayor valor publicitario y cantidad de anunciantes; fuerte para contenido de educación financiera."
          />
          <Combo
            n={2}
            pair="Estados Unidos + Seguros"
            note="Uno de los nichos con más competencia y presupuestos publicitarios más altos."
          />
          <Combo
            n={3}
            pair="Estados Unidos + Inteligencia artificial"
            note="Alto crecimiento e interés constante de anunciantes tecnológicos."
          />
        </ul>
      </Section>

      <Section title="Próximamente en este recurso">
        <Checklist
          items={[
            "Comparador de países",
            "Comparador de temáticas",
            "Calculadora de ingresos estimados",
            "Ranking de Instagram",
            "Ranking de YouTube",
            "Mapa mundial interactivo",
          ]}
        />
      </Section>

      <footer className="mt-20 pb-6 sm:mt-28">
        <p className="text-[13px] text-muted/60">Alceny Marketing</p>
      </footer>
    </main>
  );
}
