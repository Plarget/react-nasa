import type { TGetFullDateFormatted } from "./types.ts"

const getFullDateFormatted: TGetFullDateFormatted = (time) => {
  const date = new Date(time);
  if (!date) return '';
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  const hours = date.getHours();
  const minuts = date.getMinutes();

  const formattedMinuts = minuts < 10 ? `0${minuts}` : minuts;
  return `${day} ${month} ${year} года в ${hours}:${formattedMinuts}`.replace(
    /[.]/g,
    ''
  );
}

export default getFullDateFormatted