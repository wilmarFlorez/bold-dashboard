export const COLORS = {
  BLUE: 'blue',
  RED: 'red',
  DARK_GRAY: 'dark-gray',
  LIGHT_GRAY: 'light-gray',
  BACKGROUND: 'background',
} as const

export type ColorsTypes = (typeof COLORS)[keyof typeof COLORS]

export const colorsTheme: Record<ColorsTypes, string> = {
  [COLORS.BLUE]: '#121E6C',
  [COLORS.RED]: '#EE424E',
  [COLORS.DARK_GRAY]: '#606060',
  [COLORS.LIGHT_GRAY]: '#F3F3F3',
  [COLORS.BACKGROUND]: '#F6F4F9',
}

export const colorsVariants = Object.values(COLORS)
