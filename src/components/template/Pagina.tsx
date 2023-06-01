interface PaginaProps {
    externa?:boolean
    className?: string
    children: any
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className={`
                        flex flex-col min-h-screen
                        bg-gradient-to-r from-zinc-900 via-black to-zinc-500
                        ${props.className ?? ''}
         `}>
            {props.children}
        </div>
    )
}