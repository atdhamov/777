function order(nomi , narxi) {
    let neshta = prompt(`${nomi} dan nechta zakas qilasiz narxi: ${narxi}`)
    let isorder = confirm(`${neshta} ta ${nomi} narxi ${neshta * narxi} so'm
        rostan zakas qilasizmi ?`)

    if (isorder) {
        prompt(`manzil kriting tez orada boradi buyurtmangiz`)
    }

    else{
        alert(`yaxshi korushguncha sog'bo'ling`)
    }

}

