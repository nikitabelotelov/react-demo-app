export type Person = {
  userId: string;
  name: string;
  sex: number;
  age: number;
  birthDate: string;
  photoUrl: string;
  avatarId: string;
  level: number;
  rating: number;
  hasVideo: boolean;
  defaultSubjectName: string;
  subjectsCount: number;
  isFavorite: boolean;
  onlineStatus: number;
  lastActivityTime: string;
};

export type Topic = {
  id: number;
  name: string;
  sequence: number;
};

/**
 * Represents a search query for psychologists.
 * @typedef {Object} SearchQuery
 * @property {number} [level] - The level of the psychologist (0 for basic, 1 for premium).
 * @property {number} [sex] - The sex of the psychologist (0 for male, 1 for female).
 * @property {number} [subjectId] - The ID of the consultation subject.
 * @property {number} [profSpeciality] - The professional specialty of the psychologist (1 for consultant, 2 for sexologist, 3 for coach).
 * @property {boolean} [isCertified] - Whether the psychologist has a diploma or not.
 * @property {number} [ratingFrom] - The minimum rating of the psychologist.
 * @property {number} [ratingTo] - The maximum rating of the psychologist.
 * @property {number} [ageFrom] - The minimum age of the psychologist's clients.
 * @property {number} [ageTo] - The maximum age of the psychologist's clients.
 * @property {number} [filterType] - The type of filter to apply (0 for all, 1 for online, 2 for favorites).
 * @property {number} limit - The number of items to load.
 * @property {number} offset - The offset to start loading from.
 */
export type SearchQuery = {
  level?: number;
  sex?: number;
  subjectId?: number;
  profSpeciality?: number;
  isCertified?: boolean;
  ratingFrom?: number;
  ratingTo?: number;
  ageFrom?: number;
  ageTo?: number;
  filterType?: number;
  limit: number;
  offset: number;
};

export type SelectOption = {
  value: string;
  label: string;
};
