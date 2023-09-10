import type { TGetDateFormatted } from "./types.ts"

const getDateFormatted: TGetDateFormatted = (time) => {
  const date = new Date(time);
  if (!date) return '';
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();

  return [day,month,year].join(" ").replace(/[.]/g, '');
}

export default getDateFormatted