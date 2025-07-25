document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');

    // ¡IMPORTANTE! Fecha y hora exacta de tu evento.
    // Formato: 'Mes Día, Año HH:MM:SS'
    // Evento el 20 de septiembre de 2025 a las 19:30:00 (7:30 PM)
    const eventDate = new Date('September 20, 2025 19:30:00'); // <--- FECHA Y HORA CORREGIDA AQUÍ

    function updateCountdown() {
        const now = new Date();
        const timeDiff = eventDate.getTime() - now.getTime();

        if (timeDiff <= 0) {
            countdownElement.innerHTML = "¡Es hoy! ¡A celebrar!";
            return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000); // <--- SEGUNDOS AÑADIDOS

        // Función para formatear números con un cero inicial si son menores a 10
        const formatNumber = (num) => num < 10 ? '0' + num : num;

        // Construimos el HTML con recuadros individuales para cada unidad de tiempo
        let countdownHtml = `
            <div class="countdown-unit">
                <span class="countdown-number">${formatNumber(days)}</span>
                <span class="countdown-label">Días</span>
            </div>
            <div class="countdown-unit">
                <span class="countdown-number">${formatNumber(hours)}</span>
                <span class="countdown-label">Horas</span>
            </div>
            <div class="countdown-unit">
                <span class="countdown-number">${formatNumber(minutes)}</span>
                <span class="countdown-label">Minutos</span>
            </div>
            <div class="countdown-unit">
                <span class="countdown-number">${formatNumber(seconds)}</span>
                <span class="countdown-label">Segundos</span>
            </div>
        `;

        countdownElement.innerHTML = countdownHtml;
    }

    // Actualiza el contador cada segundo (1000 milisegundos)
    setInterval(updateCountdown, 1000);
    // Ejecuta la función una vez al cargar la página para evitar un retraso inicial
    updateCountdown(); 
});
