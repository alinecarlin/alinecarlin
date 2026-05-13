import React from 'react'

export interface InstagramIconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Props do retângulo externo do ícone.
   * Nome sugerido para interface de props: frame
   */
  frameProps?: React.ComponentPropsWithoutRef<'rect'>
  /**
   * Props do desenho interno da câmera.
   * Nome sugerido para interface de props: cameraMark
   */
  cameraMarkProps?: React.ComponentPropsWithoutRef<'path'>
}

export const InstagramIcon = React.forwardRef<SVGSVGElement, InstagramIconProps>(
  ({ children, frameProps = {}, cameraMarkProps = {}, ...props }, ref) => {
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

    const { d: cameraMarkD = 'M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01', ...restCameraMarkProps } =
      cameraMarkProps

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
        <path d={cameraMarkD} {...restCameraMarkProps} />
        {children}
      </svg>
    )
  }
)

InstagramIcon.displayName = 'InstagramIcon'
