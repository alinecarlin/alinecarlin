# AGENTS.md

## Escopo

Este arquivo define o padrão para criação e edição de ícones.

Ao criar um ícone, gere sempre um componente React com TypeScript, `forwardRef`, props nativas do SVG e props específicas para cada parte visual relevante do ícone.

O objetivo é que todo ícone seja fácil de usar, customizar e sobrescrever sem alterar sua estrutura interna.

---

## Padrão obrigatório

Todo ícone deve seguir este modelo conceitual:

```tsx
import React from 'react'

export interface IconNameProps extends React.SVGProps<SVGSVGElement> {
  partNameProps?: React.ComponentPropsWithoutRef<'path'>
}

export const IconName = React.forwardRef<SVGSVGElement, IconNameProps>(
  ({ children, partNameProps = {}, ...props }, ref) => {
    const {
      width = '24',
      height = '24',
      viewBox = '0 0 24 24',
      ...restProps
    } = props

    const {
      d: partNameD = '...',
      ...restPartNameProps
    } = partNameProps

    return (
      <svg
        ref={ref}
        width={width}
        height={height}
        viewBox={viewBox}
        {...restProps}
      >
        <path d={partNameD} {...restPartNameProps} />
        {children}
      </svg>
    )
  }
)

IconName.displayName = 'IconName'
```

---

## Regras essenciais

* A interface deve estender `React.SVGProps<SVGSVGElement>`.
* O componente deve usar `React.forwardRef`.
* O componente deve manter `children`.
* Renderize `children` no final do SVG.
* Use `displayName`.
* Não use `any`.
* Não use `React.FC`.
* Não adicione dependências externas.
* Não bloqueie props nativas do SVG.
* Não use `Omit<..., 'children'>`.

---

## Defaults

Preserve os atributos originais como defaults sobrescrevíveis.

---

## Props internas

Cada parte visual relevante do ícone deve ter sua própria prop.

Use nomes semânticos:

```tsx
frameProps
markProps
lensProps
dotProps
circleProps
lineProps
arrowProps
badgeProps
```

Evite nomes genéricos quando houver função visual clara:

```tsx
path1Props
path2Props
rect1Props
shapeProps
elementProps
```

Nomes numerados só são aceitáveis quando o SVG for abstrato e não houver uma função visual clara.

---

## Atributos internos

Atributos importantes de elementos internos devem ser defaults sobrescrevíveis.

Correto:

```tsx
const {
  d: markD = '...',
  ...restMarkProps
} = markProps

<path d={markD} {...restMarkProps} />
```

Correto:

```tsx
const {
  width: frameWidth = '20',
  height: frameHeight = '20',
  x: frameX = '2',
  y: frameY = '2',
  rx: frameRx = '5',
  ry: frameRy = '5',
  ...restFrameProps
} = frameProps

<rect
  width={frameWidth}
  height={frameHeight}
  x={frameX}
  y={frameY}
  rx={frameRx}
  ry={frameRy}
  {...restFrameProps}
/>
```

Errado:

```tsx
<path d="..." />
```

quando o elemento tem uma prop interna dedicada.

---

## Ordem de sobrescrita

Props do usuário sempre devem ganhar prioridade.

Correto:

```tsx
<path d={markD} {...restMarkProps} />
```

Errado:

```tsx
<path {...restMarkProps} d={markD} />
```

A mesma regra vale para o `<svg>`.

---

## Children

Sempre mantenha:

```tsx
{children}
```

no final do SVG.

Isso permite inserir `defs`, gradients, masks, filters, overlays, animações e elementos extras.

Não use `children` para substituir implicitamente o ícone principal.

Evite:

```tsx
{children || <path d={markD} />}
```

---

## Exemplo ideal

```tsx
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
```