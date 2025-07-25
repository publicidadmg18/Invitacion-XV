document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');

    // ¡IMPORTANTE! Reemplaza esta fecha con la fecha y hora exacta de tu evento.
    // Formato: 'Mes Día, Año HH:MM:SS'
    // Ejemplo: 'September 20, 2025 18:00:00' (20 de septiembre de 2025 a las 6 PM)
    const eventDate = new Date('September 20, 2025 18:00:00'); // <--- FECHA CORREGIDA AQUÍ

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
        // Si quisieras segundos, puedes descomentar la línea de abajo y agregarlos al HTML
        // const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        // Función para formatear números con un cero inicial si son menores a 10
        const formatNumber = (num) => num < 10 ? '0' + num : num;

        // Construimos el nuevo HTML con recuadros individuales para cada unidad de tiempo
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
        `;
        // Si decides incluir segundos, puedes añadir este bloque:
        /*
        <div class="countdown-unit">
            <span class="countdown-number">${formatNumber(seconds)}</span>
            <span class="countdown-label">Segundos</span>
        </div>
        */

        countdownElement.innerHTML = countdownHtml;
    }

    // Actualiza el contador cada segundo (1000 milisegundos)
    setInterval(updateCountdown, 1000);
    // Ejecuta la función una vez al cargar la página para evitar un retraso inicial
    updateCountdown(); 
});
