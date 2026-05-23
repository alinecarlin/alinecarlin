import React from 'react'

export interface TikTokIconProps extends React.SVGProps<SVGSVGElement> {
  noteProps?: React.ComponentPropsWithoutRef<'path'>
  motionProps?: React.ComponentPropsWithoutRef<'path'>
}

export const TikTokIcon = React.forwardRef<SVGSVGElement, TikTokIconProps>(
  ({ children, noteProps = {}, motionProps = {}, ...props }, ref) => {
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

    const { d: noteD = 'M14 3v10.15a4.15 4.15 0 1 1-3.4-4.08', ...restNoteProps } = noteProps

    const { d: motionD = 'M14 3c.58 2.74 2.22 4.46 5 4.86', ...restMotionProps } = motionProps

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
        <path d={noteD} {...restNoteProps} />
        <path d={motionD} {...restMotionProps} />
        {children}
      </svg>
    )
  }
)

TikTokIcon.displayName = 'TikTokIcon'
