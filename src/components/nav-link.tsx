import { ComponentProps } from "react"

/*
Interface do typescript serve para tipar as props do react, e o extends ComponentProps<''>
eu indico qual é a tag HTML que eu vou utlizar props e ele deixa eu utilizar de forma
automática, todas as propriedades que aquela tag pode receber: href, title, placeholder...

ComponentProps é uma tipagem no Typescript que recebe um genreric(<>) que serve para passar
uma informação pra tipagem saber qual comportamento ela deve ter.
*/ 
interface NavLinkProps extends ComponentProps<'a'>{
    children: string
}

/*
Spread Operator {...props} serve para eu dizer para meu código que eu quero utilizar todas as propriedades que aquela tag me oferece.
*/
export function NavLink(props: NavLinkProps) {
    return(
        <a {...props} className='font-medium text-sm'>{props.children}</a>
    )
}