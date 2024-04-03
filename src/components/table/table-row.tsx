import { ComponentProps } from "react";

interface TableRowProps extends ComponentProps<'tr'> {
    hover?: boolean
}

export function TableRow({hover, ...props}: TableRowProps) {
    return(
        <tr {...props} className="border-b border-white/10 hover:bg-white/5" />
    )
}