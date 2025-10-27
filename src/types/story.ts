/**
 * Story panel type definitions
 * Used for the comic-style story section in About page
 */

/**
 * Panel category type for visual theming
 */
export type PanelCategory = 'inception' | 'growth' | 'milestone' | 'future';

/**
 * Story panel interface
 * Represents a single panel in the comic-style story grid
 */
export interface StoryPanel {
  /** Unique identifier for the panel */
  id: number;

  /** Panel title displayed on the comic grid */
  title: string;

  /** Detailed description shown in the detail panel when clicked */
  description: string;

  /** Emoji icon representing the panel (displayed in detail panel) */
  image: string;

  /** Optional background image URL for the panel */
  backgroundImage?: string;

  /** CSS Grid area position (format: 'row-start / col-start / row-end / col-end') */
  gridArea: string;

  /** Panel category for color theming and grouping */
  category: PanelCategory;
}
