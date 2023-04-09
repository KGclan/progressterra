export const dateFormatter = (data: string) => {
  const date = new Date(data);
  
  return `${String(date.getDate()).padStart(2, "0")}.${String(date.getMonth() + 1).padStart(2, "0")}`;
};