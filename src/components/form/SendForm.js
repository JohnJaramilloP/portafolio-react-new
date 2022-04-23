const SendForm = ( e ) => {
    e.preventDefault();
  
    fetch("https://formsubmit.co/ajax/johnal19@utp.edu.co", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? alert("Mensaje enviado") : Promise.reject(res)))
      .catch((err) => {
        let message =
          err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
          alert(`Error: ${message}`)
      });
}

export default SendForm;