const relogio = () => {
    let i = setInterval( () => {
        const hora = document.getElementById('horas')
        const minutos = document.getElementById('minutos')
        const segundos = document.getElementById('segundos')

            const date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();

           if (h < 10) {
            h = '0' + h
           }

           if (m < 10) {
            m = '0' + m
           }

           if (s < 10) {
            s = '0' + s
           }



                hora.innerHTML = h
                minutos.innerHTML = m
                segundos.innerHTML = s
    }, 0)
}


relogio();
