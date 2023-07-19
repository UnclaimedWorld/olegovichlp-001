import tw from "tailwind-styled-components";
import {ReactNode} from "react";

const themesBG = {
    default: 'bg-primary',
    gray: 'bg-border'
}
const themesColor = {
    default: 'text-white',
    gray: 'text-primary'
}

interface ButtonProps {
    outline?: boolean
    theme?: 'gray' | 'default'
    children?: ReactNode
    className?: string
}

const Button = tw.button<ButtonProps>`
    border
    ${p => themesBG[p.theme || 'default']}
    ${p => (p.outline ? 'bg-transparent' : themesBG[p.theme || 'default'])}
    font-extrabold
    h-[54px]
    ${p => (p.outline ? 'text-primary' : themesColor[p.theme || 'default'])}
    text-[15px]
`;

export default function AppButton(props: ButtonProps) {
    return (
        <Button className={props.className} theme={props.theme} outline={props.outline}>
            {props.children}
        </Button>
    )
}
