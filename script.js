document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
});

function startCountdown() {
    // Establece la fecha y hora objetivo para el 20 de septiembre de 2025 a las 00:00:00 (medianoche)
    // Ajusta la hora si el evento empieza en un momento específico del día 20 de septiembre.
    // Ejemplo para las 8 PM del 20 de septiembre: new Date("September 20, 2025 20:00:00").getTime();
    const targetDate = new Date("September 20, 2025 00:00:00").getTime();

    // Actualiza la cuenta regresiva cada segundo
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime(); // Obtiene la fecha y hora actual
        const distance = targetDate - now; // Calcula la distancia entre el objetivo y ahora

        // Cálculos de tiempo para días, horas, minutos y segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Muestra el resultado en el elemento con id "countdown"
        if (document.getElementById("countdown")) {
            if (distance > 0) {
                document.getElementById("countdown").innerHTML = 
                    days + " días " + 
                    hours + " horas " +
                    minutes + " minutos " + 
                    seconds + " segundos ";
            } else {
                clearInterval(countdownInterval); // Detiene la cuenta regresiva
                document.getElementById("countdown").innerHTML = "¡La fiesta ha comenzado! 🎉";
            }
        } else {
            // Si el elemento no existe, detén el intervalo para evitar errores.
            clearInterval(countdownInterval);
        }
    }, 1000); // Actualiza cada 1000 milisegundos (1 segundo)
}