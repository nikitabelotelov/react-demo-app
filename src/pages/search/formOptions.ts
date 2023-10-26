import { SelectOption } from "../../store/types";

function enumToSelectOptions(
  enumObj: Record<string, any>
): { value: string; label: string }[] {
  return Object.entries(enumObj).map(([key, value]) => ({
    value,
    label: key.charAt(0).toUpperCase() + key.slice(1),
  }));
}

export enum Sex {
  "Мужчина" = '0',
  "Женщина" = '1',
  "Любого пола" = '2',
}

export const SexSelectOptions: SelectOption[] = enumToSelectOptions(Sex);

export enum Qualification {
  "Все варианты" = "0",
  "Консультант" = '1',
  "Сексолог" = '2',
  "Коуч" = '3',
}

export const QualificationSelectOptions: SelectOption[] = enumToSelectOptions(Qualification);

const ratings = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
export const FormDefaultRating = '0';
export const RatingSelectOptions: SelectOption[] = [
  { value: FormDefaultRating, label: "Не важен" },
  ...ratings.map((rating) => ({ value: `${rating}`, label: `${rating}` })),
];

const ages: number[] = []
for (let i = 18; i < 100; i++) {
  ages.push(i)
}
export const AgeSelectOptions: SelectOption[] = [
  ...ages.map((age) => ({ value: `${age}`, label: `${age}` })),
];

