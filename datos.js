const baseDatosProblemas = {
    "conceptos": [
        {
            titulo: "Problema 1: Dinámica y Trabajo en superficie horizontal",
            enunciado: "Un cuerpo se encuentra en reposo sobre una superficie horizontal. En un determinado instante, actúa sobre él una fuerza de 60 N durante un tiempo de 5 s, que le comunica una aceleración de 2 \\(\\ce{m/s^2}\\). Calcular: <br> a) La masa y el peso del cuerpo. <br> b) Velocidad, espacio recorrido, y energía cinética al cabo de los 5 s. <br> c) Trabajo realizado y potencia desarrollada por la fuerza.",
            solucion: `
                <div class='paso'>
                    <strong>a) Cálculo de la masa y el peso:</strong><br>
                    Utilizamos la segunda ley de Newton para hallar la masa:<br>
                    \\[m = \\frac{F}{a} = \\frac{60}{2} = 30 \\text{ kg}\\]
                    Para el peso (usando \\(g = 9,8 \\text{ m/s}^2\\)):<br>
                    \\[P = m \\cdot g = 30 \\cdot 9,8 = 294 \\text{ N}\\]
                    <span class='resultado'>Resultado:  &nbsp m = 30 kg; &nbsp P = 294 N </span>
                </div>
                <div class='paso'>
                    <strong>b) Cinemática y Energía Cinética:</strong><br>
                    Como parte del reposo (\\(v_0 = 0\\)):<br>
                    - Velocidad: \\[v = a \\cdot t = 2 \\cdot 5 = 10 \\text{ m/s}\\] 
                    - Espacio recorrido: \\[x = \\frac{1}{2} \\cdot a \\cdot t^2 = 0,5 \\cdot 2 \\cdot 5^2 = 25 \\text{ m}\\] 
                    - Energía cinética: \\[E_c = \\frac{1}{2} \\cdot m \\cdot v^2 = 0,5 \\cdot 30 \\cdot 10^2 = 1500 \\text{ J}\\]
                    <span class='resultado'>Resultado:  &nbsp v = 10 m/s; &nbsp x = 25 m; &nbsp E<sub>c</sub> = 1500 J </span>
                </div>
                <div class='paso'>
                    <strong>c) Trabajo y Potencia:</strong><br>
                    - Trabajo realizado: \\[W = F \\cdot s = 60 \\cdot 25 = 1500 \\text{ J}\\] 
                    - Potencia desarrollada: \\[P = \\frac{W}{t} = \\frac{1500}{5} = 300 \\text{ W}\\]
                    <span class='resultado'>Resultado:  &nbsp W = 1500 J; &nbsp P = 300 W </span>
                </div>
             `
        }, 
        {
            titulo: "Problema 2: Trabajo Mecánico en el Desplazamiento de un Cuerpo",
            enunciado: "Se tiene que trasladar un cuerpo que pesa 50 N a una distancia de 20 m. ¿Qué trabajo se realiza en los siguientes casos? <br> a) Empujando el cuerpo con una fuerza de 3 N sin conseguir moverlo. <br> b) Empujando el cuerpo con una fuerza de 5 N en la misma dirección del desplazamiento, consiguiéndolo.",
            solucion: `
                <div class='paso'>
                    <strong>a) Trabajo cuando no hay movimiento:</strong><br>
                    El trabajo mecánico (\\(W\\)) se define como el producto de la fuerza por el desplazamiento y el coseno del ángulo entre ambos. Si no hay desplazamiento (\\(x = 0\\)), el trabajo es nulo:<br>
                    \\[W = F \\cdot x \\cdot \\cos(\\alpha) = 3 \\cdot 0 \\cdot \\cos(0^\\circ) = 0 \\text{ J}\\]
                    <span class='resultado'>Resultado: &nbsp W = 0 J</span>
                </div>
                <div class='paso'>
                    <strong>b) Trabajo con desplazamiento en la misma dirección:</strong><br>
                    En este caso, la fuerza de 5 N logra desplazar el cuerpo 20 m. Al ser en la misma dirección, el ángulo \\(\\alpha = 0^\\circ\\) (y por lo tanto \\(\\cos(0^\\circ) = 1\\)):<br>
                    \\[W = F \\cdot x \\cdot \\cos(0^\\circ) = 5 \\cdot 20 \\cdot 1 = 100 \\text{ J}\\]
                    <span class='resultado'>Resultado: &nbsp W = 100 J</span>
                </div>
            `
        },
        {
            titulo: "Problema 3: Potencia de una Grúa en CV",
            enunciado: "Una grúa pretende subir una carga de 500 kg a una altura de 30 metros en un tiempo de 24 segundos. Calcula la potencia, en CV, que debe tener la grúa. <br> Datos: 1 CV = 735 W.",
            solucion: `
                <div class='paso'>
                    <strong>1. Cálculo del Trabajo (W):</strong><br>
                    Para elevar la carga, la grúa debe realizar un trabajo equivalente a la variación de la energía potencial gravitatoria. Usamos \\(g = 9,8 \\text{ m/s}^2\\):<br>
                    \\[W = m \\cdot g \\cdot h = 500 \\cdot 9,8 \\cdot 30 = 147000 \\text{ J}\\]
                </div>
                <div class='paso'>
                    <strong>2. Cálculo de la Potencia en Vatios (W):</strong><br>
                    La potencia es el trabajo realizado por unidad de tiempo:<br>
                    \\[P = \\frac{W}{t} = \\frac{147000}{24} = 6125 \\text{ W}\\]
                </div>
                <div class='paso'>
                    <strong>3. Conversión a Caballos de Vapor (CV):</strong><br>
                    Sabiendo que \\(1 \\text{ CV} \\approx 735 \\text{ W}\\):<br>
                    \\[P_{\\text{CV}} = \\frac{6125}{735} \\approx 8,33 \\text{ CV}\\]
                    <span class='resultado'>Resultado: &nbsp P = 8,33 CV</span>
                </div>
            `
        }
        /* {
            titulo: "Problema 1: El coche descapotable",
            enunciado: "Un coche descapotable de masa 500 kg acelera de 0 a 100 km/h en un tiempo de 20 segundos. Determina: <br> a) El trabajo realizado por el motor suponiendo un rozamiento nulo (compruébalo por energía y por cinemática). <br> b) La potencia desarrollada por el motor.",
            solucion: `
                <div class='paso'>
                    <strong>a) El coche:</strong><br>
                </div>
            `
        },
        {
            titulo: "Problema 2: Ejercicio físico",
            enunciado: "Un ejercicio físico para trabajar el abdomen consiste en lanzar un balón pesado hacia arriba. El profesional, que está muy fuerte, es capaz de lanzar el balón, de masa 10 kg, 2 metros hacia arriba. Determina: <br> a) La velocidad inicial con la que lanza el balón nuestro profesional. <br> b) El trabajo realizado por el profesional.",
            solucion: `
                <div class='paso'>
                    <strong>Paso previo: ¡Cuidado con las unidades!</strong><br>
                    Antes de sustituir a lo loco, debemos asegurarnos de que todo está en el Sistema Internacional. Las masas ya están en kilogramos, pero la distancia nos la dan en kilómetros. ¡Trampa clásica!<br>
                    \\( d = 384.000 \\text{ km} = 384.000.000 \\text{ m} = 3,84 \\cdot 10^8 \\text{ m} \\)
                </div>
            `
        } */
    ],
    "fuerzas_vivas": [
        {
            titulo: "Problema 1: Tobogan acuático",
            enunciado: "Un deportista insensato se deja caer por un tobogán acuático. El tobogán tiene una longitud de 20 metros y presenta una inclinación de 45º. El deportista insensato tiene una masa de 75 kg. Dada la presencia de agua, el rozamiento se puede considerar despreciable. Determina: <br> a) La velocidad con la que llega al punto inferior del tobogán. <br> b) El trabajo desarrollado por la fuerza gravitatoria.",
            solucion: `
                <div class='paso'>
                    <strong>a) Tensión de la cuerda:</strong><br>
                    En un movimiento circular en el plano horizontal, el cable es el único elemento que tira del martillo hacia el centro. Por tanto, la tensión (\\(T\\)) actúa íntegramente como fuerza centrípeta (\\(T = F_c\\)):
                    \\[ T = m \\cdot \\frac{v^2}{r} = 7,26 \\cdot \\frac{30^2}{1,22} = 7,26 \\cdot \\frac{900}{1,22} \\]
                    <span class='resultado'>Resultado:  &nbsp \\( T = 5355,74 \\) N</span>
                </div>
            `
        },
        {
            titulo: "Problema 2: Antiguo Egipto",
            enunciado: "Un esclavo en el Antiguo Egipto está probando la rampa que acaba de instalar. Para ello lanza su escarabeo, un amuleto de 30 g símbolo de la resurrección, sobre la rampa a una velocidad de 5 m/s. Este plano está inclinado 45º y tiene un coeficiente de rozamiento de µ=0,1. Determina: <br> a) La altura máxima alcanzada. <br> b) La velocidad con la que vuelve a su posición inicial.",
            solucion: `
                <div class='paso'>
                    <strong>Paso previo: Unidades y fuerzas base:</strong><br>
                    Primero pasamos todos los datos al S.I.: masa \\( m = 0,3 \\) kg, radio o brazo \\( R = 0,7 \\) m. <br>
                    Convertimos la velocidad angular a radianes por segundo: \\( \\omega = 120 \\text{ rpm} \\cdot \\frac{2\\pi \\text{ rad}}{1 \\text{ rev}} \\cdot \\frac{1 \\text{ min}}{60 \\text{ s}} = 4\\pi \\approx 12,57 \\text{ rad/s} \\).<br>
                    Calculamos la velocidad tangencial: \\( v = \\omega \\cdot R = 12,57 \\cdot 0,7 \\approx 8,80 \\) m/s.<br>
                    Con esto, precalculamos las dos fuerzas clave del sistema:<br>
                    - El Peso: \\( P = m \\cdot g = 0,3 \\cdot 9,8 = 2,94 \\) N.<br>
                    - La Fuerza centrípeta necesaria: \\( F_c = m \\cdot \\frac{v^2}{R} = 0,3 \\cdot \\frac{8,80^2}{0,7} \\approx 33,19 \\) N.
                </div>
            `
        },
        {
            titulo: "Problema 3: Pelota de pinball",
            enunciado: "Una pelota en un pinball es lanzada inicialmente por un muelle comprimido 2 cm. La constante del muelle es k = 3200 N/m. La pelota tiene una masa de 80 g. Sabiendo que el pinball tiene una inclinación de 15◦ y que el coeficiente de rozamiento entre la pelota y la superficie del pinball es 0,05, determina: <br> </>a) La velocidad con la que sale la pelota del muelle. <br> b) La altura que alcanza la pelota. <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/cons_3.png' style='max-width: 30%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br>",
            solucion: `
                <div class='paso'>
                    <strong>Paso previo: Sistema Internacional:</strong><br>
                    Convertimos la velocidad a metros por segundo para poder trabajar correctamente con las fuerzas:<br>
                    \\[ v = 90 \\text{ km/h} \\cdot \\frac{1000 \\text{ m}}{1 \\text{ km}} \\cdot \\frac{1 \\text{ h}}{3600 \\text{ s}} = 25 \\text{ m/s} \\]
                </div>
            `
        },        
        {
            titulo: "Problema 4: Montaña rusa",
            enunciado: "Un grupo de ingenieros está diseñando una montaña rusa para un parque de atracciones. Para ahorrar energía, los ingenieros quieren que los vagones suban el último tramo sin consumo eléctrico. El último tramo tiene una longitud de 10 metros y una inclinación de 60◦ sobre la horizontal. El rozamiento entre los raíles y los vagones es de μ = 0,1. Determina la velocidad con la que deben entrar los vagones en el plano inclinado para que estos lleguen a la parte superior con velocidad nula.",
            solucion: `
                <div class='paso'>
                    <strong>Análisis de fuerzas en un peralte sin rozamiento:</strong><br>
                    La componente vertical de la Fuerza Normal (\\( N_y \\)) contrarresta el peso (\\( P \\)), mientras que la componente horizontal (\\( N_x \\)) actúa como fuerza centrípeta (\\( F_c \\)).<br>
                    - Eje vertical: \\( N \\cdot \\cos(\\alpha) = m \\cdot g \\)<br>
                    - Eje horizontal: \\( N \\cdot \\sin(\\alpha) = m \\cdot \\frac{v^2}{R} \\)
                </div>
                
            `
        },
        {
            titulo: "Problema 5: Chica en el trineo",
            enunciado: "Una chica se deja caer con su trineo por una ladera nevada inclinada 30◦ sobre la horizontal. Cuando recorre 30 metros entra en un lago helado y desliza por su superficie hasta que choca con un muelle que amortigua su impacto. La masa de la chica es de 70 kg y la del trineo 10 kg. El coeficiente de rozamiento con la nieve es μ = 0,2 y prácticamente nulo con la superficie del lado helado. Determina: <br> a) La energía perdida por rozamiento. <br> b) La velocidad con la que llega a la superficie del lago. <br> c) La compresión del muelle, sabiendo que su constante elástica es k = 10 kN/m. <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/cons_5.png' style='max-width: 40%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br>",
            solucion: `
                <div class='paso'>
                    <strong>a) Análisis de fuerzas y ecuaciones:</strong><br>
                    Las fuerzas que actúan sobre el coche son el peso \\(P = m \\cdot g\\), la fuerza normal \\(N\\) perpendicular al peralte, y la fuerza de rozamiento \\(f_r\\).<br>
                    Para calcular la velocidad máxima, asumimos que el vehículo está al límite de deslizar hacia el exterior de la curva, por lo que la fuerza de rozamiento apunta hacia el interior (hacia abajo del plano inclinado).<br>
                    Descomponemos las fuerzas en los ejes Y (vertical) y X (horizontal, apuntando hacia el centro de la curva):<br>
                    - <strong>Eje Y (Equilibrio vertical):</strong> \\(N\\cos\\theta - f_r\\sin\\theta - m \\cdot g = 0\\). Como el rozamiento es máximo, \\(f_r = \\mu \\cdot N\\), quedando \\(N(\\cos\\theta - \\mu\\sin\\theta) = m \\cdot g\\).<br>
                    - <strong>Eje X (Fuerza centrípeta):</strong> \\(N\\sin\\theta + f_r\\cos\\theta = m \\cdot \\frac{v^2}{R}\\). Sustituyendo el rozamiento, queda \\(N(\\sin\\theta + \\mu\\cos\\theta) = m \\cdot \\frac{v^2}{R}\\).
                </div>
            `
        }
    ],
    "elastica": [
        {
            titulo: "Problema 1: Persecución de Toad",
            enunciado: "El pobre Toad está siendo perseguido por un caparazón azul. Para evitarlo pisa el acelerador y pasa de una velocidad de 30 m/s a 60 m/s. En este proceso de aceleración recorre una distancia de 2000 m. El coeficiente de rozamiento del neumático con el suelo es de μ = 0,3. Sabiendo que Toad tiene una masa de 15 kg y su vehículo una masa de 135 kg, determina: <br> </>a) El trabajo realizado por la fuerza de rozamiento. <br> b) El trabajo realizado por el motor.",
            solucion: `
                <div class='paso'>
                    <strong>Paso previo: Unidades al Sistema Internacional y análisis:</strong><br>
                    El núcleo del deuterio tiene un protón y un neutrón. Como el neutrón no tiene carga, la interacción eléctrica se produce exclusivamente entre el protón y el electrón.<br>
                    Antes de operar, debemos pasar la distancia (dada en Angstroms, Å) a metros:<br>
                    \\[ r = 0,5 \\text{ Å } \\cdot \\frac{10^{-10} \\text{ m}}{1 \\text{ Å }} = 0,5 \\cdot 10^{-10} \\text{ m} = 5 \\cdot 10^{-11} \\text{ m} \\]
                </div>
            `
        },
        {
            titulo: "Problema 2: Accidente con choque",
            enunciado: "Un criminólogo está investigando la secuencia de un accidente donde chocaron 2 vehículos. Tras la colisión, ambos vehículos quedaron unidos y recorrieron 3 metros sobre el asfalto horizontal hasta salir de la carretera, y otros 2 metros por un terraplén de tierra inclinado 15◦ . La masa de ambos vehículos en conjunto es de 1500 kg. El coeficiente de rozamiento con el asfalto es de μ = 0,5, mientras que con la tierra existe un coeficiente de rozamiento de μ = 0,4. Determina: <br> a) Un esquema del recorrido de los vehículos tras la colisión. <br> b) La velocidad inicial de ambos vehículos tras el choque.",
            solucion: `
                <div class='paso'>
                    <strong>Paso previo: Unidades al Sistema Internacional:</strong><br>
                    Antes de empezar, pasamos todos los datos al S.I. para evitar errores con la constante de Coulomb (\\(k\\)):<br>
                    - Cargas: \\( q = 5 \\text{ nC} = 5 \\cdot 10^{-9} \\text{ C} \\)<br>
                    - Distancia: \\( L = 60 \\text{ cm} = 0,6 \\text{ m} \\)<br>
                    - Masa: \\( m = 5 \\text{ g} = 5 \\cdot 10^{-3} \\text{ kg} \\)
                </div>
            `
        },
        {
            titulo: "Problema 3: Disco de hockey",
            enunciado: "Se lanza un disco de hockey con una masa de 160 gramos propulsado por un muelle comprimido 5 cm. El disco recorre 100 metros en un lago helado horizontal y sube una colina de nieve de inclinación 15◦ , quedándose a una altura de 2 metros. El coeficiente de rozamiento con el hielo es 0,05 y sobre la nieve 0,2. Determina: <br> a) La constante del muelle. <br> b) El trabajo realizado por la fuerza de rozamiento. <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/te_tra_3.png' style='max-width: 50%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br>",
            solucion: `
                <div class='paso'>
                    <strong>Paso 1: Análisis geométrico previo:</strong><br>
                    Observando el esquema, tenemos un sistema simétrico. La carga positiva \\(q_1\\) es atraída por las cargas negativas \\(q_2\\) y \\(q_3\\).<br>
                    Conocemos la distancia entre las cargas (la hipotenusa del triángulo formado, \\( r = 3,5 \\text{ m} \\)) y la altura vertical respecto al eje X (\\( y = 1,5 \\text{ m} \\)).<br>
                    Calculamos la distancia en el eje X (cateto contiguo) usando el Teorema de Pitágoras:<br>
                    \\[ x = \\sqrt{r^2 - y^2} = \\sqrt{3,5^2 - 1,5^2} = \\sqrt{12,25 - 2,25} = \\sqrt{10} \\approx 3,16 \\text{ m} \\]
                    Con esto, extraemos el coseno del ángulo \\(\\alpha\\) (ángulo entre la fuerza y el eje X), que usaremos para proyectar los vectores:<br>
                    \\[ \\cos(\\alpha) = \\frac{\\text{cateto contiguo}}{\\text{hipotenusa}} = \\frac{\\sqrt{10}}{3,5} \\approx 0,9035 \\]
                </div>
            `
        }
    ],
    "conservacion": [
        {
            titulo: "Problema 1: Persecución de Toad",
            enunciado: "El pobre Toad está siendo perseguido por un caparazón azul. Para evitarlo pisa el acelerador y pasa de una velocidad de 30 m/s a 60 m/s. En este proceso de aceleración recorre una distancia de 2000 m. El coeficiente de rozamiento del neumático con el suelo es de μ = 0,3. Sabiendo que Toad tiene una masa de 15 kg y su vehículo una masa de 135 kg, determina: <br> </>a) El trabajo realizado por la fuerza de rozamiento. <br> b) El trabajo realizado por el motor.",
            solucion: `
                <div class='paso'>
                    <strong>Paso previo: Unidades al Sistema Internacional y análisis:</strong><br>
                    El núcleo del deuterio tiene un protón y un neutrón. Como el neutrón no tiene carga, la interacción eléctrica se produce exclusivamente entre el protón y el electrón.<br>
                    Antes de operar, debemos pasar la distancia (dada en Angstroms, Å) a metros:<br>
                    \\[ r = 0,5 \\text{ Å } \\cdot \\frac{10^{-10} \\text{ m}}{1 \\text{ Å }} = 0,5 \\cdot 10^{-10} \\text{ m} = 5 \\cdot 10^{-11} \\text{ m} \\]
                </div>
            `
        },
        {
            titulo: "Problema 2: Accidente con choque",
            enunciado: "Un criminólogo está investigando la secuencia de un accidente donde chocaron 2 vehículos. Tras la colisión, ambos vehículos quedaron unidos y recorrieron 3 metros sobre el asfalto horizontal hasta salir de la carretera, y otros 2 metros por un terraplén de tierra inclinado 15◦ . La masa de ambos vehículos en conjunto es de 1500 kg. El coeficiente de rozamiento con el asfalto es de μ = 0,5, mientras que con la tierra existe un coeficiente de rozamiento de μ = 0,4. Determina: <br> a) Un esquema del recorrido de los vehículos tras la colisión. <br> b) La velocidad inicial de ambos vehículos tras el choque.",
            solucion: `
                <div class='paso'>
                    <strong>Paso previo: Unidades al Sistema Internacional:</strong><br>
                    Antes de empezar, pasamos todos los datos al S.I. para evitar errores con la constante de Coulomb (\\(k\\)):<br>
                    - Cargas: \\( q = 5 \\text{ nC} = 5 \\cdot 10^{-9} \\text{ C} \\)<br>
                    - Distancia: \\( L = 60 \\text{ cm} = 0,6 \\text{ m} \\)<br>
                    - Masa: \\( m = 5 \\text{ g} = 5 \\cdot 10^{-3} \\text{ kg} \\)
                </div>
            `
        },
        {
            titulo: "Problema 3: Disco de hockey",
            enunciado: "Se lanza un disco de hockey con una masa de 160 gramos propulsado por un muelle comprimido 5 cm. El disco recorre 100 metros en un lago helado horizontal y sube una colina de nieve de inclinación 15◦ , quedándose a una altura de 2 metros. El coeficiente de rozamiento con el hielo es 0,05 y sobre la nieve 0,2. Determina: <br> a) La constante del muelle. <br> b) El trabajo realizado por la fuerza de rozamiento. <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/te_tra_3.png' style='max-width: 50%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br>",
            solucion: `
                <div class='paso'>
                    <strong>Paso 1: Análisis geométrico previo:</strong><br>
                    Observando el esquema, tenemos un sistema simétrico. La carga positiva \\(q_1\\) es atraída por las cargas negativas \\(q_2\\) y \\(q_3\\).<br>
                    Conocemos la distancia entre las cargas (la hipotenusa del triángulo formado, \\( r = 3,5 \\text{ m} \\)) y la altura vertical respecto al eje X (\\( y = 1,5 \\text{ m} \\)).<br>
                    Calculamos la distancia en el eje X (cateto contiguo) usando el Teorema de Pitágoras:<br>
                    \\[ x = \\sqrt{r^2 - y^2} = \\sqrt{3,5^2 - 1,5^2} = \\sqrt{12,25 - 2,25} = \\sqrt{10} \\approx 3,16 \\text{ m} \\]
                    Con esto, extraemos el coseno del ángulo \\(\\alpha\\) (ángulo entre la fuerza y el eje X), que usaremos para proyectar los vectores:<br>
                    \\[ \\cos(\\alpha) = \\frac{\\text{cateto contiguo}}{\\text{hipotenusa}} = \\frac{\\sqrt{10}}{3,5} \\approx 0,9035 \\]
                </div>
            `
        }
    ],
    "sistemas": [
        {
            titulo: "Problema 1: Persecución de Toad",
            enunciado: "El pobre Toad está siendo perseguido por un caparazón azul. Para evitarlo pisa el acelerador y pasa de una velocidad de 30 m/s a 60 m/s. En este proceso de aceleración recorre una distancia de 2000 m. El coeficiente de rozamiento del neumático con el suelo es de μ = 0,3. Sabiendo que Toad tiene una masa de 15 kg y su vehículo una masa de 135 kg, determina: <br> </>a) El trabajo realizado por la fuerza de rozamiento. <br> b) El trabajo realizado por el motor.",
            solucion: `
                <div class='paso'>
                    <strong>Paso previo: Unidades al Sistema Internacional y análisis:</strong><br>
                    El núcleo del deuterio tiene un protón y un neutrón. Como el neutrón no tiene carga, la interacción eléctrica se produce exclusivamente entre el protón y el electrón.<br>
                    Antes de operar, debemos pasar la distancia (dada en Angstroms, Å) a metros:<br>
                    \\[ r = 0,5 \\text{ Å } \\cdot \\frac{10^{-10} \\text{ m}}{1 \\text{ Å }} = 0,5 \\cdot 10^{-10} \\text{ m} = 5 \\cdot 10^{-11} \\text{ m} \\]
                </div>
            `
        },
        {
            titulo: "Problema 2: Accidente con choque",
            enunciado: "Un criminólogo está investigando la secuencia de un accidente donde chocaron 2 vehículos. Tras la colisión, ambos vehículos quedaron unidos y recorrieron 3 metros sobre el asfalto horizontal hasta salir de la carretera, y otros 2 metros por un terraplén de tierra inclinado 15◦ . La masa de ambos vehículos en conjunto es de 1500 kg. El coeficiente de rozamiento con el asfalto es de μ = 0,5, mientras que con la tierra existe un coeficiente de rozamiento de μ = 0,4. Determina: <br> a) Un esquema del recorrido de los vehículos tras la colisión. <br> b) La velocidad inicial de ambos vehículos tras el choque.",
            solucion: `
                <div class='paso'>
                    <strong>Paso previo: Unidades al Sistema Internacional:</strong><br>
                    Antes de empezar, pasamos todos los datos al S.I. para evitar errores con la constante de Coulomb (\\(k\\)):<br>
                    - Cargas: \\( q = 5 \\text{ nC} = 5 \\cdot 10^{-9} \\text{ C} \\)<br>
                    - Distancia: \\( L = 60 \\text{ cm} = 0,6 \\text{ m} \\)<br>
                    - Masa: \\( m = 5 \\text{ g} = 5 \\cdot 10^{-3} \\text{ kg} \\)
                </div>
            `
        },
        {
            titulo: "Problema 3: Disco de hockey",
            enunciado: "Se lanza un disco de hockey con una masa de 160 gramos propulsado por un muelle comprimido 5 cm. El disco recorre 100 metros en un lago helado horizontal y sube una colina de nieve de inclinación 15◦ , quedándose a una altura de 2 metros. El coeficiente de rozamiento con el hielo es 0,05 y sobre la nieve 0,2. Determina: <br> a) La constante del muelle. <br> b) El trabajo realizado por la fuerza de rozamiento. <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/te_tra_3.png' style='max-width: 50%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br>",
            solucion: `
                <div class='paso'>
                    <strong>Paso 1: Análisis geométrico previo:</strong><br>
                    Observando el esquema, tenemos un sistema simétrico. La carga positiva \\(q_1\\) es atraída por las cargas negativas \\(q_2\\) y \\(q_3\\).<br>
                    Conocemos la distancia entre las cargas (la hipotenusa del triángulo formado, \\( r = 3,5 \\text{ m} \\)) y la altura vertical respecto al eje X (\\( y = 1,5 \\text{ m} \\)).<br>
                    Calculamos la distancia en el eje X (cateto contiguo) usando el Teorema de Pitágoras:<br>
                    \\[ x = \\sqrt{r^2 - y^2} = \\sqrt{3,5^2 - 1,5^2} = \\sqrt{12,25 - 2,25} = \\sqrt{10} \\approx 3,16 \\text{ m} \\]
                    Con esto, extraemos el coseno del ángulo \\(\\alpha\\) (ángulo entre la fuerza y el eje X), que usaremos para proyectar los vectores:<br>
                    \\[ \\cos(\\alpha) = \\frac{\\text{cateto contiguo}}{\\text{hipotenusa}} = \\frac{\\sqrt{10}}{3,5} \\approx 0,9035 \\]
                </div>
            `
        }
    ]
};
