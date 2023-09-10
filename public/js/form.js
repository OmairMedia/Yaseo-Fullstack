


const contactForm = () => {

  $('#submit-button').on('click', function() {
        console.log('button clicked!');

        let name = $('#name').val();
        let nameField = $('#name');
        let email = $('#email').val();
        let emailField = $('#email');
        let phone = $('#phone').val();
        let phoneField = $('#phone');
        let subject = $('#subject').val();
        let subjectField = $('#subject')
        let message = $('#message').val();
        let messageField = $('#message');
        let submitButton = $('#submit-button');

        const nameValidation = new RegExp('/^([A-Z][a-zA-Z]{0,19})?$/');
        const emailValidation = new RegExp('^([a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$', 'gm')

        function checkPhone (string) {
          return [...string].every(c => '0123456789'.includes(c));
        }
        
        const urlValidation = new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?([^ ])+");
        
        let data = {
          name,
          email,
          phone,
          subject,
          message
        }

        if(name && email && phone && subject && message) {

          if (String(name).match(urlValidation)) {
            console.log('URL Validation...')

            //  if username contains url
            Swal.fire({
              title: 'Name Error!',
              text: 'Username must not contain urls!',
              icon: 'error',
              iconColor: "#ff3838",
                  confirmButtonColor: "#000"
            })
          }
  
          else if (String(subject).match(urlValidation)) {
            console.log('Subject...')

            //  if message contains url
  
            Swal.fire({
              title: 'Subject Error!',
              text: 'Subject must not contain urls!',
              icon: 'error',
              iconColor: "#ff3838",
                  confirmButtonColor: "#000"
            })
          }
  
          else if (String(message).match(urlValidation)) {
            console.log('Message...')

            //  if message contains url
            Swal.fire({
              title: 'Message Error!',
              text: 'Message must not contain urls!',
              icon: 'error',
              iconColor: "#ff3838",
                  confirmButtonColor: "#000"
            })
          }

          else if (String(name).length > 20) {
            console.log('Name...')

            Swal.fire({
              title: 'Name Error!',
              text: 'Username should be less then 20 letters!',
              icon: 'error',
              iconColor: "#ff3838",
                  confirmButtonColor: "#000"
            })
          }
  
          else if (!emailValidation.test(email)) {
            console.log('Email...')
            Swal.fire({
              title: 'Email Error!',
              text: 'Email is invalid!',
              icon: 'error',
              iconColor: "#ff3838",
                  confirmButtonColor: "#000"
            })
          }
          
          // else if(phone) {
          //   console.log('Phone...')
          //   if (!checkPhone(phone)) {
          //     Swal.fire({
          //       title: 'Phone Error!',
          //       text: 'Phone number is invalid!',
          //       icon: 'error',
          //     })
          //   } else {
              
          //   }
          // }

          else {
            console.log('Sending...')
            submitButton.prop("disabled",true);
            submitButton.html("Sending...");
            $.ajax({
              type: "POST",
              url: "send-email.php",
              data: {
                name: name,
                email: email,
                phone: phone,
                subject: subject,
                message: message,
              },
              success: function (response) {
                console.log({response})
                nameField.val("");
                phoneField.val("");
                emailField.val("");
                subjectField.val("");
                messageField.val("");
                Swal.fire({
                  title: 'Message Sent!',
                  text: "Your message has been delivered to us and a team member will reply shortly, thanks!",
                  icon: 'success',
                  iconColor: "#ff3838",
                  confirmButtonColor: "#000"
                }).then(()=>{
                  location.reload()
                })
                
                
              },
              error: function (response) {
                console.log({response})
                nameField.val("");
                phoneField.val("");
                emailField.val("");
                subjectField.val("");
                messageField.val("");
                Swal.fire({
                  title: 'Message Sent!',
                  text: "Your message has been delivered to us and a team member will reply shortly, thanks!",
                  icon: 'success',
                  iconColor: "#ff3838",
                  confirmButtonColor: "#000"
                }).then(()=>{
                  location.reload()
                })
              },
            });
          }

        } else {
          Swal.fire({
            title: 'Complete All Fields',
            text: 'One or more fields are empty!',
            icon: 'error',
            iconColor: "#ff3838",
            confirmButtonColor: "#000"
          })
        }
  })
}

contactForm()

// $('#submit-button').on('click', function() {
//   contactForm();
// })