/**
 * Rating type definition
 * Only allows 1-5 stars
 */
export type Rating = 1 | 2 | 3 | 4 | 5;

/**
 * Check if a number is a valid rating
 */
export function isValidRating(value: number): value is Rating {
  return Number.isInteger(value) && value >= 1 && value <= 5;
}

/**
 * Convert a number to a valid rating (1-5)
 */
export function toRating(value: number): Rating {
  if (value < 1) return 1;
  if (value > 5) return 5;
  return Math.round(value) as Rating;
}
