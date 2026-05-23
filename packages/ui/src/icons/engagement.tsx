import React from 'react'

export interface EngagementIconProps extends React.SVGProps<SVGSVGElement> {
  heartProps?: React.ComponentPropsWithoutRef<'path'>
  sparkProps?: React.ComponentPropsWithoutRef<'path'>
}

export const EngagementIcon = React.forwardRef<SVGSVGElement, EngagementIconProps>(
  ({ children, heartProps = {}, sparkProps = {}, ...props }, ref) => {
    const {
      xmlns = 'http://www.w3.org/2000/svg',
      width = '24',
      height = '24',
      viewBox = '0 0 24 24',
      fill = 'none',
      stroke = 'currentColor',
      strokeWidth = '2',
      strokeLinecap = 'round',
      strokeLinejoin = 'round',
      ...restProps
    } = props

    const {
      d: heartD = 'M19.5 8.9c0 4.12-5.16 7.16-7.02 8.12a1 1 0 0 1-.96 0C9.66 16.06 4.5 13.02 4.5 8.9A3.9 3.9 0 0 1 8.4 5c1.47 0 2.75.78 3.6 1.94C12.85 5.78 14.13 5 15.6 5a3.9 3.9 0 0 1 3.9 3.9Z',
      ...restHeartProps
    } = heartProps

    const { d: sparkD = 'M18.5 3.5v2.2M17.4 4.6h2.2M5.5 18.3v2.2M4.4 19.4h2.2', ...restSparkProps } = sparkProps

    return (
      <svg
        ref={ref}
        xmlns={xmlns}
        width={width}
        height={height}
        viewBox={viewBox}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        {...restProps}
      >
        <path d={heartD} {...restHeartProps} />
        <path d={sparkD} {...restSparkProps} />
        {children}
      </svg>
    )
  }
)

EngagementIcon.displayName = 'EngagementIcon'
