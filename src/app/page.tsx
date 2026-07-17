import { PromptResource } from "@/components/PromptResource";
import { FLYER_PROMPT } from "@/lib/prompt";

export default function Home() {
  return (
    <PromptResource
      eyebrow="Prompt #001"
      title="El prompt definitivo para mejorar cualquier flyer con ChatGPT"
      subtitleLines={[
        "Sube cualquier flyer a ChatGPT y pega este prompt.",
        "Obtendrás una versión más limpia, profesional y con apariencia humana.",
      ]}
      readingTime="2 min de lectura"
      whatItDoes={[
        {
          text: "Convierte a ChatGPT en un director creativo senior que analiza tu flyer y propone mejoras concretas para reducir el ruido visual, mejorar la jerarquía, eliminar elementos innecesarios y simplificar la composición.",
        },
        {
          text: "No promete milagros. Simplemente ayuda a obtener mejores resultados a partir de lo que ya tienes.",
          muted: true,
        },
      ]}
      steps={[
        "Abre ChatGPT.",
        "Sube tu flyer.",
        "Copia este prompt.",
        "Pégalo en ChatGPT.",
        "Espera la nueva versión.",
      ]}
      outcomes={[
        "Reducir el ruido visual",
        "Mejorar la jerarquía",
        "Simplificar la composición",
        "Eliminar elementos innecesarios",
        "Obtener un diseño con apariencia profesional",
      ]}
      promptText={FLYER_PROMPT}
      tip={{
        label: "Consejo profesional",
        text: "Los mejores resultados se consiguen cuando el flyer original ya tiene una buena fotografía y toda la información necesaria. Este prompt mejora el diseño, pero no sustituye una buena idea ni un buen contenido.",
      }}
    />
  );
}
