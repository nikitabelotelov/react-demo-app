import { Sex } from "../../pages/search/formOptions";

export function getTimeAgoString(
  earlierDate: Date,
  laterDate: Date,
  gender: string
): string {
  if (isNaN(earlierDate.getTime()) || isNaN(laterDate.getTime())) {
    return "";
  }
  const diffMs = laterDate.getTime() - earlierDate.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const wasString = gender === Sex["Женщина"] ? "Была" : "Был";
  if (diffHours === 0) {
    return `${wasString} меньше часа назад`;
  } else if (diffHours === 1) {
    return `${wasString} час назад`;
  } else if (diffHours <= 4) {
    return `${wasString} ${diffHours} часа назад`;
  } else if (diffHours <= 20) {
    return `${wasString} ${diffHours} часов назад`;
  } else if (diffHours === 21) {
    return `${wasString} ${diffHours} час назад`;
  } else if (diffHours <= 23) {
    return `${wasString} ${diffHours} часа назад`;
  } else {
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays === 1) {
      return `${wasString} вчера`;
    } else if (diffDays <= 7) {
      return `${wasString} ${diffDays} дней назад`;
    } else {
      return `${wasString} более недели назад`;
    }
  }
}
