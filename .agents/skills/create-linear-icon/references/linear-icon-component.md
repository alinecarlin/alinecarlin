# Linear Icon Component

## Visual Style

Create icons with a linear, minimal, technical language:

- Use outline geometry rather than filled silhouettes.
- Use `fill="none"` and `stroke="currentColor"` by default.
- Use a thin, uniform stroke. Prefer `strokeWidth="1.5"` for a technical look unless the local set clearly uses another value.
- Use `strokeLinecap="round"` and `strokeLinejoin="round"` for lightly rounded endings and corners.
- Build on a simple 24x24 viewBox by default unless the local set or source SVG requires another viewBox.
- Keep shapes sparse and readable at 16px, 20px, and 24px.
- Avoid decorative detail, gradients, shadows, filters, and textures.
- Avoid filled brand-style marks unless the user explicitly asks for a logo or the surrounding set is filled.
- Use geometric primitives when they improve clarity: `path`, `rect`, `circle`, `line`, `polyline`, `polygon`, and `g`.

## Component Contract

Use React with TypeScript and `forwardRef`.

Required behavior:

- Import React.
- Export an interface extending `React.SVGProps<SVGSVGElement>`.
- Include a prop for each meaningful visual part, typed as `React.ComponentPropsWithoutRef<'path'>`, `'rect'`, `'circle'`, `'line'`, `'polyline'`, `'polygon'`, or `'g'` as appropriate.
- Destructure `children`, part props with `{}` defaults, and `...props`.
- Destructure SVG defaults from `props`, including `xmlns`, dimensions, `viewBox`, `fill`, `stroke`, `strokeWidth`, `strokeLinecap`, and `strokeLinejoin`.
- Destructure important internal element attributes from each part prop, with default values.
- Spread rest props after defaults so user values win.
- Render `{children}` last inside the SVG.
- Assign `displayName`.

Never use:

- `React.FC`
- `any`
- `Omit<..., 'children'>`
- Hard-coded internal attributes that cannot be overridden when that part has a dedicated prop.
- External icon libraries or runtime dependencies.

## Template

```tsx
import React from 'react'

export interface ExampleIconProps extends React.SVGProps<SVGSVGElement> {
  frameProps?: React.ComponentPropsWithoutRef<'rect'>
  markProps?: React.ComponentPropsWithoutRef<'path'>
  dotProps?: React.ComponentPropsWithoutRef<'circle'>
}

export const ExampleIcon = React.forwardRef<SVGSVGElement, ExampleIconProps>(
  ({ children, frameProps = {}, markProps = {}, dotProps = {}, ...props }, ref) => {
    const {
      xmlns = 'http://www.w3.org/2000/svg',
      width = '24',
      height = '24',
      viewBox = '0 0 24 24',
      fill = 'none',
      stroke = 'currentColor',
      strokeWidth = '1.5',
      strokeLinecap = 'round',
      strokeLinejoin = 'round',
      ...restProps
    } = props

    const {
      x: frameX = '4',
      y: frameY = '4',
      width: frameWidth = '16',
      height: frameHeight = '16',
      rx: frameRx = '3',
      ...restFrameProps
    } = frameProps

    const { d: markD = 'M8 12h8M12 8v8', ...restMarkProps } = markProps

    const { cx: dotCx = '17', cy: dotCy = '7', r: dotR = '1', ...restDotProps } = dotProps

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
          x={frameX}
          y={frameY}
          width={frameWidth}
          height={frameHeight}
          rx={frameRx}
          {...restFrameProps}
        />
        <path d={markD} {...restMarkProps} />
        <circle cx={dotCx} cy={dotCy} r={dotR} {...restDotProps} />
        {children}
      </svg>
    )
  }
)

ExampleIcon.displayName = 'ExampleIcon'
```

## SVG Drawing Guidance

- Prefer one path per conceptual mark when it stays readable.
- Split shapes into separate elements when callers may need to style or override them independently.
- Keep path commands simple and stable. Avoid excessive decimal precision.
- Align coordinates to whole or half pixels for crisp strokes.
- Use rounded rectangles for frames, cards, devices, panels, windows, and containers.
- Use circles or short lines for nodes, ports, sensors, handles, and status points.
- Use arrows sparingly and keep arrowheads simple.
- Keep visual weight consistent across every part.

## Review Checklist

- Does it read clearly at 16px?
- Are all strokes the same default width?
- Are all important internal attributes overridable through part props?
- Do user props override defaults on the SVG and internal parts?
- Is `children` preserved at the end?
- Is `displayName` set?
- Is the component free of dependencies, `any`, and `React.FC`?
