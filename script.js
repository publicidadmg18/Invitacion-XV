document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');

    // ¡IMPORTANTE! Fecha y hora exacta de tu evento (recepción a las 19:30).
    // El contador llegará a cero en esta fecha y hora.
    const eventDate = new Date('September 20, 2025 19:30:00').getTime(); // <--- Contador hasta la Recepción

    function updateCountdown() {
        const now = new Date().getTime(); // Obtener el tiempo en milisegundos para comparación
        const distance = eventDate - now;

        // Función para formatear números con un cero inicial si son menores a 10
        const formatNumber = (num) => String(num).padStart(2, '0');

        // Si el contador ha terminado
        if (distance < 0) {
            countdownElement.innerHTML = "<div class='countdown-finished'>¡Es hoy! ¡A celebrar!</div>";
            clearInterval(countdownInterval); // Detener el intervalo cuando termina
            return;
        }

        // Calcular días, horas, minutos, segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Construir el HTML para el contador con números y etiquetas en la misma línea
        // y con los dos puntos entre cada unidad.
        countdownElement.innerHTML = `
            <span class="countdown-item">
                <span class="countdown-number">${formatNumber(days)}</span>
                <span class="countdown-label">DÍAS</span>
            </span>
            <span class="countdown-separator">:</span>
            <span class="countdown-item">
                <span class="countdown-number">${formatNumber(hours)}</span>
                <span class="countdown-label">HRS</span>
            </span>
            <span class="countdown-separator">:</span>
            <span class="countdown-item">
                <span class="countdown-number">${formatNumber(minutes)}</span>
                <span class="countdown-label">MIN</span>
            </span>
            <span class="countdown-separator">:</span>
            <span class="countdown-item">
                <span class="countdown-number">${formatNumber(seconds)}</span>
                <span class="countdown-label">SEG</span>
            </span>
        `;
    }

    // Actualiza el contador cada segundo (1000 milisegundos)
    const countdownInterval = setInterval(updateCountdown, 1000);
    // Ejecuta la función una vez al cargar la página para evitar un retraso inicial
    updateCountdown();
});
