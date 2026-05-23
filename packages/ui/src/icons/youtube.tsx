import React from 'react'

export interface YoutubeIconProps extends React.SVGProps<SVGSVGElement> {
  frameProps?: React.ComponentPropsWithoutRef<'rect'>
  playProps?: React.ComponentPropsWithoutRef<'path'>
}

export const YoutubeIcon = React.forwardRef<SVGSVGElement, YoutubeIconProps>(
  ({ children, frameProps = {}, playProps = {}, ...props }, ref) => {
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
      height: frameHeight = '14',
      x: frameX = '2',
      y: frameY = '5',
      rx: frameRx = '4',
      ry: frameRy = '4',
      ...restFrameProps
    } = frameProps

    const { d: playD = 'm10 9 5 3-5 3V9Z', ...restPlayProps } = playProps

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
        <path d={playD} {...restPlayProps} />
        {children}
      </svg>
    )
  }
)

YoutubeIcon.displayName = 'YoutubeIcon'
