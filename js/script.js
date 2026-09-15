document.addEventListener("DOMContentLoaded", () => {
    
    // --- Lógica para el color VERDE ---
    const sliderVerde = document.getElementById("slider-verde");
    const cuadroVerde = document.getElementById("cuadro-verde");
    const valorVerdeTexto = document.getElementById("valor-verde");

    function actualizarVerde() {
        // El slider va de 0 a 255. 
        // Para mantener el tono, necesitamos una escala que no supere 255 en ningún canal.
        // El color base es #008000 (R=0, G=128, B=0).
        // Si el slider está en 128, el multiplicador es 1 (color base).
        // Si el slider está en 0, el multiplicador es 0 (negro).
        // Si el slider está en 255, el multiplicador es ~2 (verde brillante).
        
        let valor = parseInt(sliderVerde.value);
        let multiplicador = valor / 128; 

        // Calculamos cada canal manteniendo la proporción
        let r = Math.round(0 * multiplicador);
        let g = Math.round(128 * multiplicador);
        let b = Math.round(0 * multiplicador);

        // Nos aseguramos de que ningún canal pase de 255
        r = Math.min(255, r);
        g = Math.min(255, g);
        b = Math.min(255, b);

        // Convertimos a Hexadecimal
        let hexR = r.toString(16).padStart(2, '0');
        let hexG = g.toString(16).padStart(2, '0');
        let hexB = b.toString(16).padStart(2, '0');
        
        let colorHex = `#${hexR}${hexG}${hexB}`;
        
        cuadroVerde.style.backgroundColor = colorHex;
        valorVerdeTexto.textContent = colorHex.toUpperCase();
    }

    sliderVerde.addEventListener("input", actualizarVerde);
    actualizarVerde();


    // --- Lógica para el color ROJO ---
    const sliderRojo = document.getElementById("slider-rojo");
    const cuadroRojo = document.getElementById("cuadro-rojo");
    const valorRojoTexto = document.getElementById("valor-rojo");

    function actualizarRojo() {
        // El color base es #800000 (R=128, G=0, B=0).
        let valor = parseInt(sliderRojo.value);
        let multiplicador = valor / 128; 

        let r = Math.round(128 * multiplicador);
        let g = Math.round(0 * multiplicador);
        let b = Math.round(0 * multiplicador);

        r = Math.min(255, r);
        g = Math.min(255, g);
        b = Math.min(255, b);

        let hexR = r.toString(16).padStart(2, '0');
        let hexG = g.toString(16).padStart(2, '0');
        let hexB = b.toString(16).padStart(2, '0');
        
        let colorHex = `#${hexR}${hexG}${hexB}`;
        
        cuadroRojo.style.backgroundColor = colorHex;
        valorRojoTexto.textContent = colorHex.toUpperCase();
    }

    sliderRojo.addEventListener("input", actualizarRojo);
    actualizarRojo();

});