import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "Cómo llenar el formulario fiscal de Google AdSense si tu organización es una ONG en Estados Unidos (501(c)(3))",
  description:
    "Guía paso a paso para organizaciones sin fines de lucro registradas en Estados Unidos que reciben pagos de Google AdSense.",
};

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="whitespace-pre-wrap break-words rounded-[10px] border border-border bg-surface px-5 py-4 font-mono text-[14px] leading-[1.65] text-ink">
      {children}
    </pre>
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

function Warnings({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-baseline gap-2.5 text-[15px] leading-[1.6] text-muted"
        >
          <span>✕</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Step({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-10 first:mt-0">
      <div className="flex items-baseline gap-3">
        <span className="w-6 shrink-0 text-[15px] font-medium text-muted tabular-nums">
          {n}
        </span>
        <h3 className="text-[17px] font-semibold text-ink">{title}</h3>
      </div>
      <div className="mt-3 space-y-3 pl-9 text-[16px] leading-[1.65] text-ink">
        {children}
      </div>
    </div>
  );
}

export default function NonprofitAdsenseGuide() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[600px] flex-col px-6 pt-[4.375rem] pb-14 sm:pt-[6.25rem] sm:pb-20">
      <header className="flex items-center gap-2">
        <span className="text-[15px] font-semibold tracking-tight text-ink">
          Alceny Marketing
        </span>
      </header>

      <section className="mt-16 sm:mt-24">
        <p className="text-[13px] font-normal uppercase tracking-[0.02em] text-muted/70">
          Guía #003
        </p>
        <h1 className="mt-3 text-balance text-[clamp(1.75rem,5vw+1rem,2.75rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
          Cómo llenar el formulario fiscal de Google AdSense si tu
          organización es una ONG registrada en Estados Unidos (501(c)(3))
        </h1>
        <p className="mt-5 max-w-[50ch] text-[17px] leading-[1.6] text-muted">
          Esta guía aplica únicamente para organizaciones sin fines de lucro
          registradas en Estados Unidos que reciben pagos de Google AdSense.
        </p>
        <p className="mt-3 max-w-[50ch] text-[17px] leading-[1.6] text-muted">
          No aplica para organizaciones fuera de Estados Unidos.
        </p>
        <p className="mt-8 text-[12px] text-muted/60">6 min de lectura</p>
      </section>

      <section className="mt-20 sm:mt-28">
        <h2 className="text-[20px] font-semibold text-ink">
          Para quién es esta guía
        </h2>
        <Checklist
          items={[
            "Iglesias",
            "Ministerios cristianos",
            "Fundaciones",
            "Organizaciones benéficas",
            "Escuelas sin fines de lucro",
            "Asociaciones 501(c)(3)",
          ]}
        />
      </section>

      <section className="mt-20 sm:mt-24">
        <h2 className="text-[20px] font-semibold text-ink">
          Antes de comenzar
        </h2>
        <p className="mt-4 text-[16px] leading-[1.7] text-ink">
          Necesitarás:
        </p>
        <Checklist
          items={[
            "Nombre legal exactamente como aparece en el IRS.",
            "EIN (Employer Identification Number).",
            "Dirección registrada.",
            "Carta de Determinación del IRS (Determination Letter), si necesitas verificar la información de la organización.",
          ]}
        />
      </section>

      <section className="mt-20 sm:mt-24">
        <h2 className="text-[20px] font-semibold text-ink">Pasos</h2>

        <Step n={1} title="Ingresa al formulario fiscal">
          <p>En Google AdSense ve a:</p>
          <CodeBlock>
            {`Payments
↓
Payments Info
↓
Manage Settings
↓
United States Tax Info
↓
Manage Tax Info`}
          </CodeBlock>
        </Step>

        <Step n={2} title="¿Quién recibe los pagos?">
          <p>Google preguntará:</p>
          <CodeBlock>{`Who will receive payments?`}</CodeBlock>
          <p>
            Selecciona: <span className="font-medium">✓ Organization</span>
          </p>
          <p className="text-muted">
            No selecciones Individual, ya que los ingresos pertenecen a la
            organización.
          </p>
        </Step>

        <Step n={3} title="¿La organización es estadounidense?">
          <p>Pregunta:</p>
          <CodeBlock>{`Are you a U.S. person?`}</CodeBlock>
          <p>
            Selecciona: <span className="font-medium">✓ Yes</span>
          </p>
          <p className="text-muted">
            Esto indica que la entidad está constituida legalmente en Estados
            Unidos.
          </p>
        </Step>

        <Step n={4} title="Google elegirá automáticamente el formulario">
          <p>Al responder las preguntas anteriores, Google asignará:</p>
          <CodeBlock>{`IRS Form W-9`}</CodeBlock>
          <p>No debes utilizar:</p>
          <Warnings
            items={["W-8BEN", "W-8BEN-E", "W-8EXP"]}
          />
          <p className="text-muted">
            Estos formularios son para entidades extranjeras.
          </p>
        </Step>

        <Step n={5} title="Escribe el nombre legal">
          <p>Ejemplo:</p>
          <CodeBlock>{`Helping Hands Ministries, Inc.`}</CodeBlock>
          <p className="text-muted">
            Debe coincidir exactamente con el registro del IRS. No agregues
            abreviaciones. No omitas &quot;Inc.&quot;. No cambies signos de
            puntuación.
          </p>
        </Step>

        <Step n={6} title="Federal Tax Classification">
          <p>
            Google mostrará varias opciones. Selecciona la clasificación que
            corresponda a tu organización. En la mayoría de las ONG 501(c)(3)
            aparecerá como:
          </p>
          <CodeBlock>{`Other`}</CodeBlock>
          <p>
            Y podrás indicar que la organización es una entidad exenta
            conforme a la sección 501(c)(3), si el formulario lo solicita.
          </p>
          <p className="text-muted">
            <span className="font-medium text-ink">Importante:</span> algunas
            organizaciones sin fines de lucro pueden estar constituidas
            legalmente como Corporation, Trust o incluso LLC. Debes
            seleccionar la clasificación legal que figure en los registros
            fiscales de la entidad, no simplemente &quot;ONG&quot;. Si tienes
            dudas, consulta la carta del IRS o el asesor fiscal de la
            organización.
          </p>
        </Step>

        <Step n={7} title="Exempt Payee">
          <p>Si aparece esta pregunta:</p>
          <CodeBlock>{`Is this organization exempt from backup withholding?`}</CodeBlock>
          <p>
            Selecciona: <span className="font-medium">✓ Yes</span>
          </p>
          <p className="text-muted">
            Luego Google puede solicitar el Exempt Payee Code. Muchas
            organizaciones 501(c)(3) utilizan el Código 1, pero debes
            confirmar que ese código corresponde a la clasificación fiscal
            específica de tu entidad según las instrucciones del IRS.
          </p>
        </Step>

        <Step n={8} title="Employer Identification Number">
          <p>Introduce el EIN. Ejemplo:</p>
          <CodeBlock>{`12-3456789`}</CodeBlock>
          <p className="text-muted">
            Nunca coloques el SSN del pastor, del director o del tesorero. El
            beneficiario es la organización.
          </p>
        </Step>

        <Step n={9} title="Dirección">
          <p>Escribe exactamente la dirección registrada. Ejemplo:</p>
          <CodeBlock>{`123 Main Street
Dallas, TX 75201
United States`}</CodeBlock>
        </Step>

        <Step n={10} title="Firma electrónica">
          <p>
            Lee la certificación. Escribe el nombre del representante
            autorizado. Ejemplo:
          </p>
          <CodeBlock>{`Michael Johnson
Executive Director`}</CodeBlock>
          <p className="text-muted">
            Marca la casilla de certificación y envía el formulario.
          </p>
        </Step>
      </section>

      <section className="mt-20 sm:mt-24">
        <div className="border-l border-border pl-5">
          <p className="text-[13px] font-medium text-muted">
            Una precisión importante
          </p>
          <p className="mt-2 text-[15px] leading-[1.6] text-ink">
            No todas las ONG estadounidenses deben marcar exactamente las
            mismas opciones de clasificación fiscal. Aunque muchas
            organizaciones 501(c)(3) siguen un flujo muy similar, la
            clasificación en el W-9 (Corporation, Trust, LLC u Other) depende
            de cómo esté constituida legalmente la entidad y de la
            información registrada ante el IRS. Si esta guía aplica a una
            organización concreta, adapta los ejemplos a ese caso específico:
            otras estructuras legales pueden ver opciones distintas en el
            formulario.
          </p>
        </div>
      </section>

      <section className="mt-20 sm:mt-24">
        <h2 className="text-[20px] font-semibold text-ink">
          Después del envío
        </h2>
        <p className="mt-4 text-[16px] leading-[1.7] text-ink">
          Podrás ver uno de estos estados:
        </p>
        <CodeBlock>{`Submitted
↓
In Review
↓
Approved`}</CodeBlock>
        <p className="mt-4 text-[15px] leading-[1.6] text-muted">
          Si Google encuentra diferencias entre el nombre legal, el EIN o la
          información fiscal registrada, el formulario puede ser rechazado y
          deberás corregir los datos.
        </p>
      </section>

      <section className="mt-20 sm:mt-24">
        <h2 className="text-[20px] font-semibold text-ink">
          Errores frecuentes
        </h2>
        <Warnings
          items={[
            "Escribir el nombre comercial en lugar del nombre legal.",
            "Utilizar el SSN del pastor o del presidente.",
            'Elegir "Individual" cuando el beneficiario es la organización.',
            "Introducir un EIN incorrecto.",
            "Seleccionar un formulario W-8 cuando la organización está registrada en Estados Unidos.",
          ]}
        />
      </section>

      <footer className="mt-20 pb-6 sm:mt-28">
        <p className="text-[13px] text-muted/60">Alceny Marketing</p>
      </footer>
    </main>
  );
}
