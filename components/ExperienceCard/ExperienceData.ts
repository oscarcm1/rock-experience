import type { Experience } from "@/types/experience";

export async function getExperiences(): Promise<Experience[]> {
  try {
    const response = await fetch(`${process.env.SITE_URL}/api/experiences`);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    return await response.json();

  } catch (error) {
    console.error("Error al obtener las experiencias:", error);

    return [];
  }
}