const mercadoPagoLink = `${process.env.REACT_APP_MERCADOPAGO_LINK}`

export function redirectMP(){
    return(
        window.location.href=`${mercadoPagoLink}`
    )
}