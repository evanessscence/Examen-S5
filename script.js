document.getElementById('registroForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!this.checkValidity()) {
      this.classList.add('was-validated');
      return;
    }
  
    const seleccionados = document.querySelectorAll('input[name="conferencias"]:checked');
    if (seleccionados.length === 0) {
      alert("Selecciona al menos una conferencia.");
      return;
    }
  
    this.classList.remove('was-validated');
    document.getElementById('confirmacion').classList.remove('d-none');
    setTimeout(() => {
      document.getElementById('confirmacion').classList.add('d-none');
      this.reset();
    }, 4000);
  });
  