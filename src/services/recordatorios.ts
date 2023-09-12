import { IRecordatorio } from "../components/recordatorios-form/type";

export const getRecordatorios = async (): Promise<IRecordatorio[]> => {
  const url = "http://localhost:3000/api/recordatorios";

  try {
    const response = await fetch(url);

    if (response.ok && response.status === 200) {
      return response.json();
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
