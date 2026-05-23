import React from 'react'

export interface LinkedinIconProps extends React.SVGProps<SVGSVGElement> {
  frameProps?: React.ComponentPropsWithoutRef<'rect'>
  dotProps?: React.ComponentPropsWithoutRef<'circle'>
  markProps?: React.ComponentPropsWithoutRef<'path'>
}

export const LinkedinIcon = React.forwardRef<SVGSVGElement, LinkedinIconProps>(
  ({ children, frameProps = {}, dotProps = {}, markProps = {}, ...props }, ref) => {
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
      width: frameWidth = '20',
      height: frameHeight = '20',
      x: frameX = '2',
      y: frameY = '2',
      rx: frameRx = '5',
      ry: frameRy = '5',
      ...restFrameProps
    } = frameProps

    const { cx: dotCx = '8', cy: dotCy = '8', r: dotR = '0.35', ...restDotProps } = dotProps

    const {
      d: markD = 'M7.75 11v5.25M12 16.25V11m0 2.4c.46-1.56 1.42-2.55 2.72-2.55 1.68 0 2.78 1.2 2.78 3.26v2.14',
      ...restMarkProps
    } = markProps

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
        <rect
          width={frameWidth}
          height={frameHeight}
          x={frameX}
          y={frameY}
          rx={frameRx}
          ry={frameRy}
          {...restFrameProps}
        />
        <circle cx={dotCx} cy={dotCy} r={dotR} fill="currentColor" stroke="none" {...restDotProps} />
        <path d={markD} {...restMarkProps} />
        {children}
      </svg>
    )
  }
)

LinkedinIcon.displayName = 'LinkedinIcon'
