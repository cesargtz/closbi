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
                const namePerson = JSON.stringify(result.value[0])
                const phonePerson = JSON.stringify(result.value[1])
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
                var indt = document.getElementById("check-in").value
                var outdt = document.getElementById("check-out").value
                var persons = document.getElementById("person-total").value
                var messageMail = `Reservación del día ${indt} al ${outdt}. Total de personas: ${persons}`
                var templateParams = {
                  name: namePerson,
                  email: phonePerson,
                  message: messageMail,
                };
                // EmailJS
                emailjs.init("user_VCV2fJ7SExXz708nP91Hr");
                emailjs.send('service_e3ct3zc', 'template_y8ce877', templateParams)
                  .then(function(response){
                    // clean inputs
                      document.getElementById("check-in").value = ''
                      document.getElementById("check-out").value = ''
                      document.getElementById("person-total").value = ''
                    }, 
                    function(error) {
                      Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salio mal!',
                        footer: '<a href>Favor de volver a intentarlo</a>'
                    })
                    }
                );                
              })
            }
          })
    })

    document.getElementById("reserva-wp").addEventListener("click", () => {
      Swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2',]
      }).queue([
        'Nombre Completo',
        'Total de personas',
      ]).then((result) => {
        if (result.value) {
          const name = result.value[0]
          const persons = result.value[1]
          const answers = JSON.stringify(result.value)
          Swal.fire({
            title: 'para reservar dar siguiente.',
            html: `
              Tus datos:
              <pre><code>${answers}</code></pre>
            `,
            confirmButtonText: 'Siguiente'
          }).then((result) => {
            // Send Whatsapp
            numberWP = '526251510856'
            var msgWP = `https://api.whatsapp.com/send?phone=${numberWP}&text=Reservacion%20al%20nombre%20de%20${name}%20para%20${persons}%20personas.%20Desde%20closbi.com.`
            window.open(msgWP, '_blank');
          })
        }
      })
    })
});