import React from 'react'

export interface ReachIconProps extends React.SVGProps<SVGSVGElement> {
  orbitProps?: React.ComponentPropsWithoutRef<'circle'>
  pathProps?: React.ComponentPropsWithoutRef<'path'>
  arrowProps?: React.ComponentPropsWithoutRef<'path'>
}

export const ReachIcon = React.forwardRef<SVGSVGElement, ReachIconProps>(
  ({ children, orbitProps = {}, pathProps = {}, arrowProps = {}, ...props }, ref) => {
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

    const { cx: orbitCx = '12', cy: orbitCy = '12', r: orbitR = '8.5', ...restOrbitProps } = orbitProps

    const { d: pathD = 'M5.5 15.5c2.6-4 6.45-6.36 11.3-6.72', ...restPathProps } = pathProps

    const { d: arrowD = 'm14.5 5.75 4 2.95-3.16 3.82', ...restArrowProps } = arrowProps

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
        <circle cx={orbitCx} cy={orbitCy} r={orbitR} {...restOrbitProps} />
        <path d={pathD} {...restPathProps} />
        <path d={arrowD} {...restArrowProps} />
        {children}
      </svg>
    )
  }
)

ReachIcon.displayName = 'ReachIcon'
