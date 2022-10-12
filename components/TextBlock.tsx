import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  bg_color?: string
  text_color?: string
  text_justify: "center" | "left"
}

// TODO: Why is a text block h3?
const TextBlock = ({ children, bg_color, text_color, text_justify }: Props) => {
  return (
    <h3 className={`p-4 lg:p-20 bg-${bg_color} text-${text_color} text-${text_justify}`}>
      {children}
    </h3>
    
  )
}

export default TextBlock