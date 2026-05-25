import React from 'react'

export interface YoutubeIconProps extends React.SVGProps<SVGSVGElement> {
  contentProps?: React.ComponentPropsWithoutRef<'g'>
  frameProps?: React.ComponentPropsWithoutRef<'path'>
  playProps?: React.ComponentPropsWithoutRef<'path'>
}

export const YoutubeIcon = React.forwardRef<SVGSVGElement, YoutubeIconProps>(
  ({ children, contentProps = {}, frameProps = {}, playProps = {}, ...props }, ref) => {
    const {
      xmlns = 'http://www.w3.org/2000/svg',
      width = '24',
      height = '24',
      viewBox = '0 0 24 24',
      fill = 'none',
      stroke = '#000000',
      strokeWidth = '1.5',
      strokeLinecap = 'round',
      strokeLinejoin = 'round',
      style = { opacity: 1 },
      ...restProps
    } = props

    const { transform: contentTransform = 'translate(12 12) scale(1.16) translate(-12 -12)', ...restContentProps } =
      contentProps

    const {
      d: frameD = 'M2 12.708v-1.416c0-2.895 0-4.343.905-5.274.906-.932 2.332-.972 5.183-1.053C9.438 4.927 10.818 4.9 12 4.9s2.561.027 3.912.065c2.851.081 4.277.121 5.182 1.053S22 8.398 22 11.292v1.415c0 2.896 0 4.343-.905 5.275-.906.931-2.331.972-5.183 1.052-1.35.039-2.73.066-3.912.066s-2.561-.027-3.912-.066c-2.851-.08-4.277-.12-5.183-1.052S2 15.602 2 12.708Z',
      ...restFrameProps
    } = frameProps

    const { d: playD = 'm14 12-3.5 2v-4z', ...restPlayProps } = playProps

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
        style={style}
        {...restProps}
      >
        <g transform={contentTransform} {...restContentProps}>
          <path d={playD} {...restPlayProps} />
          <path d={frameD} {...restFrameProps} />
        </g>
        {children}
      </svg>
    )
  }
)

YoutubeIcon.displayName = 'YoutubeIcon'
