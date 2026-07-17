import type { Metadata } from "next";
import { PromptResource } from "@/components/PromptResource";
import { FINANCE_DASHBOARD_PROMPT } from "@/lib/prompts/finance-dashboard";

export const metadata: Metadata = {
  title: "El prompt definitivo para crear tu panel financiero personal con ChatGPT",
  description:
    "Copia este prompt, reemplaza tus datos entre corchetes y pégalo en ChatGPT para obtener un panel financiero visual completo.",
};

export default function FinanceDashboard() {
  return (
    <PromptResource
      eyebrow="Prompt #002"
      title="El prompt definitivo para crear tu panel financiero personal con ChatGPT"
      subtitleLines={[
        "Copia este prompt, reemplaza tus datos entre corchetes y pégalo en ChatGPT.",
        "Obtendrás un panel financiero visual completo, listo para abrir en tu navegador.",
      ]}
      readingTime="2 min de lectura"
      whatItDoes={[
        {
          text: "Convierte a ChatGPT en tu asistente financiero personal: organiza tus ingresos, ahorros, deudas y gastos del mes en un panel visual completo, en formato HTML, listo para abrir en cualquier navegador.",
        },
        {
          text: "No sustituye asesoría financiera profesional. Es una forma rápida de ordenar y visualizar tus números del mes.",
          muted: true,
        },
      ]}
      steps={[
        "Abre ChatGPT.",
        "Copia este prompt.",
        "Reemplaza los datos entre corchetes con los tuyos.",
        "Pégalo en ChatGPT.",
        "Guarda el código HTML y ábrelo en tu navegador.",
      ]}
      outcomes={[
        "Ver tus ingresos, ahorros y deudas en un solo panel",
        "Visualizar el progreso hacia tu meta de ahorro",
        "Identificar pagos urgentes de un vistazo",
        "Tener un resumen financiero claro del mes",
        "Un diseño visual moderno, listo para usar",
      ]}
      promptText={FINANCE_DASHBOARD_PROMPT}
      tip={{
        label: "Consejo profesional",
        text: "Reemplaza todos los datos entre corchetes con tu información real antes de copiar el prompt. Cuanta más información agregues, más completo será tu panel.",
      }}
    />
  );
}
