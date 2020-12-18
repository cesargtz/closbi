document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("book_today").addEventListener("click",() => {
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Siguiente &rarr;',
            cancelButtonText:'Cancelar',
            showCancelButton: true,
            progressSteps: ['1', '2']
          }).queue([
            {
              title: 'Nombre completo',
              text: 'tu aventura esta por comenzar'
            },
            'Numero de telefono',
          ]).then((result) => {
            if (result.value) {
                const answers = JSON.stringify(result.value)
                var checkIn = document.getElementById("check-in").value
                var checkOut = document.getElementById("check-out").value
                var personTotal = document.getElementById("person-total").value
                Swal.fire({
                    title: 'Resarvación exitosa!',
                    html: `
                       <p>Reservaste del día ${checkIn} al ${checkOut}</p>
                       <p>para ${personTotal}</p>
                    `,
                    confirmButtonText: 'Felicidades!'
              }).then((result) => {
                document.getElementById("check-in").value = ''
                document.getElementById("check-out").value = ''
                document.getElementById("person-total").value = ''
              })
            }
          })
        // $("#modal").iziModal({
        //     headerColor: '#77b748',
        //     fullscreen: true,
        //     width: 1000,
        //     height: 600,
        //     transitionIn: 'fadeInDown',
        //     transitionOut: 'fadeOutDown',
        //   });
    
        // var checkIn = document.getElementById("check-in").innerHTML
        // var checkOut = document.getElementById("check-out").innerHTML
        // var personTotal = document.getElementById("person-total").innerHTML
        // number = "XXXXXXXXXX"
        // message = `https://wa.me/${number}?text=Reservacion%20`
    })
});