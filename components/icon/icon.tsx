import React from 'react'
import { allIconsPaths } from '../../constants/icon-paths'
import { type AllIconsNames } from '../../constants/icon-names'
import { type ColorsTypes, colorsTheme } from '../../constants/colors'

interface IconProps {
  name: AllIconsNames
  color?: ColorsTypes
  width?: number
  height?: number
}

const Icon: React.FC<IconProps> = ({
  name,
  color = 'currentColor',
  width = 24,
  height = 24,
}) => {
  const SvgIcon = allIconsPaths[name]

  const iconColor = colorsTheme[color]

  return <SvgIcon width={width} height={height} fill={iconColor} />
}

export default Icon
