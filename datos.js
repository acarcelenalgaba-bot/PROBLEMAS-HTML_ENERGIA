const baseDatosProblemas = {
    "trabajo": [
        {
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
            enunciado: "Los antiguos griegos consideraban la Luna como una Diosa. Selene es la conductora del carro de la la Luna: después de que Helios, el dios del Sol, termine su viaje a través del cielo, Selene comienza el suyo cuando la noche cae sobre la Tierra. La Luna orbita alrededor de la Tierra en órbitas prácticamente circulares. La distancia entre la Tierra y la Luna es de 384000 km. Conociendo las masas de la Tierra (\\( \\ce{M_T = 5,97 \\cdot 10^{24}}\\) kg) y de la Luna (\\( \\ce{M_L = 7,35 \\cdot 10^{22} } \\) kg), determina: <br> a) La fuerza gravitatoria entre la Tierra y la Luna. <br> b) La velocidad orbital de la Luna. <br> c) El punto de la línea que las une donde sería nula la fuerza neta sobre cualquier masa (despreciando las fuerzas gravitatorias provenientes de los demás cuerpos celestes).",
            solucion: `
                <div class='paso'>
                    <strong>Paso previo: ¡Cuidado con las unidades!</strong><br>
                    Antes de sustituir a lo loco, debemos asegurarnos de que todo está en el Sistema Internacional. Las masas ya están en kilogramos, pero la distancia nos la dan en kilómetros. ¡Trampa clásica!<br>
                    \\( d = 384.000 \\text{ km} = 384.000.000 \\text{ m} = 3,84 \\cdot 10^8 \\text{ m} \\)
                </div>
                <div class='paso'>
                    <strong>a) Fuerza gravitatoria entre la Tierra y la Luna:</strong><br>
                    Aplicamos la Ley de Gravitación Universal de Newton. Recuerda que esta fuerza es mutua: la Tierra tira de la Luna con exactamente la misma fuerza con la que la Luna tira de la Tierra (3ª Ley de Newton).<br>
                    \\[ F = G \\cdot \\frac{M_T \\cdot M_L}{d^2} \\]
                    Sustituimos nuestros inmensos números (¡cuidado al usar la notación científica en la calculadora!):<br>
                    \\[ F = 6,67 \\cdot 10^{-11} \\cdot \\frac{5,97 \\cdot 10^{24} \\cdot 7,35 \\cdot 10^{22}}{(3,84 \\cdot 10^8)^2} = 6,67 \\cdot 10^{-11} \\cdot \\frac{4,38 \\cdot 10^{47}}{1,47 \\cdot 10^{17}} \\]
                    <span class='resultado'>Resultado:  &nbsp \\( F \\approx 1,98 \\cdot 10^{20} \\text{ N} \\)</span>
                </div>
                <div class='paso'>
                    <strong>b) Velocidad orbital de la Luna:</strong><br>
                    ¿Por qué la Luna no se cae contra la Tierra si hay tanta fuerza atrayéndola? Porque está girando. Para mantener una órbita circular se necesita una fuerza centrípeta que actúe de "cuerda invisible", y en el espacio, la gravedad hace ese trabajo. Por tanto, igualamos la fuerza gravitatoria a la fuerza centrípeta (\\(F_g = F_c\\)):
                    \\[ G \\cdot \\frac{M_T \\cdot M_L}{d^2} = M_L \\cdot \\frac{v^2}{d} \\]
                    Fíjate que la masa de la Luna (\\(M_L\\)) y una de las distancias (\\(d\\)) se cancelan a ambos lados. Despejamos la velocidad:
                    \\[ v = \\sqrt{G \\cdot \\frac{M_T}{d}} = \\sqrt{ 6,67 \\cdot 10^{-11} \\cdot \\frac{5,97 \\cdot 10^{24}}{3,84 \\cdot 10^8} } = \\sqrt{1036960} \\]
                    <span class='resultado'>Resultado:  &nbsp \\( v \\approx 1018,3 \\text{ m/s} \\) (¡Más de 1 km por segundo!)</span>
                </div>
                <div class='paso'>
                    <strong>c) Punto de fuerza neta nula (El "tirón" equilibrado):</strong><br>
                    Buscamos un punto intermedio donde, si colocamos una nave espacial de masa \\(m\\), el tirón de la Tierra hacia un lado sea exactamente igual al tirón de la Luna hacia el otro. Si ese punto está a una distancia \\(x\\) de la Tierra, estará a una distancia \\(d - x\\) de la Luna.
                    \\[ F_{Tierra} = F_{Luna} \\implies G \\cdot \\frac{M_T \\cdot m}{x^2} = G \\cdot \\frac{M_L \\cdot m}{(d-x)^2} \\]
                    Las \\(G\\) y la masa de la nave (\\(m\\)) se cancelan. Nos queda:
                    \\[ \\frac{M_T}{x^2} = \\frac{M_L}{(d-x)^2} \\]
                    <em>Truco:</em> ¡No desarrolles el cuadrado del denominador o te quedará una ecuación de segundo grado horrible! Como todo está al cuadrado, hacemos la raíz cuadrada en ambos lados de la igualdad:
                    \\[ \\frac{\\sqrt{M_T}}{x} = \\frac{\\sqrt{M_L}}{d-x} \\]
                    Sustituimos las masas y despejamos \\(x\\):
                    \\[ \\frac{2,44 \\cdot 10^{12}}{x} = \\frac{2,71 \\cdot 10^{11}}{3,84 \\cdot 10^8 - x} \\implies 9,38 \\cdot 10^{20} - 2,44 \\cdot 10^{12} \\cdot  x = 2,71 \\cdot 10^{11} \\cdot  x \\]
                    \\[ 9,38 \\cdot 10^{20} = 2,44 \\cdot 10^{12} \\cdot  x + 2,71 \\cdot 10^{11} \\cdot x \\implies  9,38 \\cdot 10^{20} = 2,711 \\cdot 10^{12} \\cdot  x \\]
                    \\[ x = \\frac{9,38 \\cdot 10^{20}}{2,711 \\cdot 10^{12}} \\]
                    <span class='resultado'>Resultado:  &nbsp \\( x \\approx 3,46 \\cdot 10^{8} \\text{ m} \\) (medido desde el centro de la Tierra)</span>
                </div>
            `
        }
    ],
    "conservacion": [
        {
            titulo: "Problema 1: Lanzamiento de martillo",
            enunciado: "En los Juegos Olímpicos de Los Ángeles 1932, durante las competiciones de lanzamiento de martillo, al atleta irlandés Pat O’Callaghen se le escapó el martillo ligeramente antes de completar el giro, aterrizando en las gradas de espectadores. Afortunadamente, nadie resultó herido. La pelota de acero tiene una masa de 7,26 kg y da vueltas en un plano horizontal a una velocidad constante de 30 m/s. Sabiendo que la distancia del cable es de 1,22 metros, determina: <br> a) La tensión de la cuerda en cualquier punto de la circunferencia. <br>  b) La fuerza centrípeta que actúa a través de la cuerda.",
            solucion: `
                <div class='paso'>
                    <strong>a) Tensión de la cuerda:</strong><br>
                    En un movimiento circular en el plano horizontal, el cable es el único elemento que tira del martillo hacia el centro. Por tanto, la tensión (\\(T\\)) actúa íntegramente como fuerza centrípeta (\\(T = F_c\\)):
                    \\[ T = m \\cdot \\frac{v^2}{r} = 7,26 \\cdot \\frac{30^2}{1,22} = 7,26 \\cdot \\frac{900}{1,22} \\]
                    <span class='resultado'>Resultado:  &nbsp \\( T = 5355,74 \\) N</span>
                </div>
                <div class='paso'>
                    <strong>b) Fuerza centrípeta que actúa a través de la cuerda:</strong><br>
                    Como hemos justificado en el apartado anterior, la fuerza centrípeta no es una fuerza independiente, sino el papel dinámico que asume la tensión de la cuerda en este instante.<br>
                    \\[ F_c = T \\]
                    <span class='resultado'>Resultado:  &nbsp \\( F_c = 5355,74 \\) N</span>
                </div>
            `
        },
        {
            titulo: "Problema 2: Cubo de agua",
            enunciado: "Un experimento clásico para entender la fuerza centrípeta consiste en mover un cubo lleno de agua haciendo círculos en un plano vertical. El cubo de agua tiene una masa de 300 g, la longitud del brazo es de 70 cm y da 120 vueltas por minuto. Determina: <br> a) La tensión que soporta el asa del cubo cuando el cubo está en el punto más alto de la trayectoria. <br> b) La tensión que soporta el asa del cubo cuando el cubo está en el punto más bajo de la trayectoria. <br> c) Halla la velocidad mínima del agua para que no caiga en el punto más alto.",
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
                <div class='paso'>
                    <strong>a) Tensión en el punto más alto:</strong><br>
                    En el punto más alto, tanto el peso (\\(P\\)) como la tensión de tu brazo (\\(T\\)) tiran del cubo hacia abajo (hacia el centro de rotación). Ambas suman para aportar la fuerza centrípeta: \\( T + P = F_c \\)<br>
                    \\[ T_{alta} = F_c - P = 33,19 - 2,94 \\]
                    <span class='resultado'>Resultado:  &nbsp \\( T_{alta} = 30,25 \\) N</span>
                </div>
                <div class='paso'>
                    <strong>b) Tensión en el punto más bajo:</strong><br>
                    En el punto más bajo, la tensión tira hacia arriba (hacia el centro) pero el peso tira hacia abajo (hacia afuera). Aquí la tensión tiene que contrarrestar el peso y además proporcionar la fuerza centrípeta: \\( T - P = F_c \\)<br>
                    \\[ T_{baja} = F_c + P = 33,19 + 2,94 \\]
                    <span class='resultado'>Resultado:  &nbsp \\( T_{baja} = 36,13 \\) N</span>
                </div>
                <div class='paso'>
                    <strong>c) Velocidad mínima para que el agua no caiga:</strong><br>
                    Para que el agua no se derrame en el punto más alto, su caída libre (el peso) debe ser exactamente igual a la fuerza centrípeta requerida para tomar la curva. En ese instante límite, la tensión es cero (\\( T = 0 \\)):<br>
                    \\[ P = F_c \\implies m \\cdot g = m \\cdot \\frac{v_{min}^2}{R} \\]
                    Las masas se cancelan, y despejando la velocidad obtenemos:<br>
                    \\[ v_{min} = \\sqrt{g \\cdot R} = \\sqrt{9,8 \\cdot 0,7} \\]
                    <span class='resultado'>Resultado:  &nbsp \\( v_{min} = 2,62 \\) m/s</span>
                </div>
            `
        },
        {
            titulo: "Problema 3: Coche Xiaomi",
            enunciado: "Un Xiaomi SU7 de 1900 kg de masa circula a 90 km/h y toma una curva que presenta un radio de curvatura de 100 m. Determina: <br> a) La dirección y el sentido de la fuerza de rozamiento que el asfalto ejerce sobre al automóvil durante el recorrido por la curva. <br> b) El valor de la fuerza de rozamiento. <br>  c) Analiza los factores que condicionan la velocidad máxima de un vehículo en una curva. <br> d) Sabiendo que el coeficiente máximo de rozamiento entre el neumático y el asfalto es μ = 0,8, halla la velocidad máxima con la que puede tomar la curva sin derrapar (Recuerda que el coeficiente de rozamiento puede oscilar entre 0 y el valor máximo. En el caso de un automóvil, si la velocidad no es muy elevada no se produce la fricción máxima, sino el rozamiento necesario para no derrapar).",
            solucion: `
                <div class='paso'>
                    <strong>Paso previo: Sistema Internacional:</strong><br>
                    Convertimos la velocidad a metros por segundo para poder trabajar correctamente con las fuerzas:<br>
                    \\[ v = 90 \\text{ km/h} \\cdot \\frac{1000 \\text{ m}}{1 \\text{ km}} \\cdot \\frac{1 \\text{ h}}{3600 \\text{ s}} = 25 \\text{ m/s} \\]
                </div>
                <div class='paso'>
                    <strong>a) Dirección y sentido de la fuerza de rozamiento:</strong><br>
                    Para que un vehículo no siga en línea recta por inercia y pueda trazar una curva, necesita una fuerza centrípeta. En una carretera horizontal, esta fuerza es proporcionada exclusivamente por el rozamiento estático de los neumáticos contra el asfalto.<br>
                    <span class='resultado'>Resultado:  &nbsp La dirección es radial (perpendicular a la velocidad del coche) y su sentido es hacia el centro de la curva.</span>
                </div>
                <div class='paso'>
                    <strong>b) Valor de la fuerza de rozamiento:</strong><br>
                    Como el rozamiento actúa como fuerza centrípeta (\\(F_r = F_c\\)), aplicamos la fórmula directamente:<br>
                    \\[ F_r = m \\cdot \\frac{v^2}{R} = 1900 \\cdot \\frac{25^2}{100} = 1900 \\cdot \\frac{625}{100} \\]
                    <span class='resultado'>Resultado:  &nbsp \\( F_r = 11875 \\) N</span>
                </div>
                <div class='paso'>
                    <strong>c) Factores que condicionan la velocidad máxima:</strong><br>
                    Si igualamos la fuerza de rozamiento máxima (\\( F_{r,max} = \\mu \\cdot N = \\mu \\cdot m \\cdot g \\)) a la fuerza centrípeta, vemos qué ocurre:<br>
                    \\[ \\mu \\cdot m \\cdot g = m \\cdot \\frac{v_{max}^2}{R} \\implies v_{max} = \\sqrt{\\mu \\cdot g \\cdot R} \\]
                    <span class='resultado'>Resultado:  &nbsp Al cancelarse la masa (m), la velocidad máxima depende SOLO del radio de la curva (\\(R\\)), de la gravedad (\\(g\\)) y del estado del asfalto/neumáticos (coeficiente \\(\\mu\\)). ¡Un camión y una moto tienen la misma velocidad límite para derrapar!</span>
                </div>
                <div class='paso'>
                    <strong>d) Velocidad máxima antes de derrapar (\\(\\mu = 0,8\\)):</strong><br>
                    Aplicamos la fórmula que acabamos de deducir en el apartado anterior para hallar el límite físico de la curva:<br>
                    \\[ v_{max} = \\sqrt{\\mu \\cdot g \\cdot R} = \\sqrt{0,8 \\cdot 9,8 \\cdot 100} = \\sqrt{784} \\]
                    \\[ v_{max} = 28 \\text{ m/s} \\]
                    <span class='resultado'>Resultado:  &nbsp \\( v_{max} = 28 \\text{ m/s} \\) (que equivalen a 100,8 km/h). Si entra a más de esa velocidad, se saldrá de la curva.</span>
                </div>
            `
        },        
        {
            titulo: "Problema 4: Ciclista en velódromo",
            enunciado: "Un ciclista toma la curva de un velódromo de 20 m de radio con una velocidad de 40 km/h. Suponiendo que el rozamiento entre las cuerdas y el suelo es despreciable, calcula el ángulo de peralte mínimo para que el ciclista no se salga de la pista.",
            solucion: `
                <div class='paso'>
                    <strong>Análisis de fuerzas en un peralte sin rozamiento:</strong><br>
                    La componente vertical de la Fuerza Normal (\\( N_y \\)) contrarresta el peso (\\( P \\)), mientras que la componente horizontal (\\( N_x \\)) actúa como fuerza centrípeta (\\( F_c \\)).<br>
                    - Eje vertical: \\( N \\cdot \\cos(\\alpha) = m \\cdot g \\)<br>
                    - Eje horizontal: \\( N \\cdot \\sin(\\alpha) = m \\cdot \\frac{v^2}{R} \\)
                </div>
                <div class='paso'>
                    <strong>Cálculo del ángulo de peralte (\\( \\alpha \\)):</strong><br>
                    \\[ \\tan(\\alpha) = \\frac{v^2}{R \\cdot g} = \\frac{11,11^2}{20 \\cdot 9,8} \\approx 0,63 \\implies \\alpha = 32,2^{\\circ} \\]
                    <span class='resultado'>Resultado:  &nbsp El ángulo de peralte mínimo es de aproximadamente 32,2º.</span>
                </div>
                
            `
        },
        {
            titulo: "Problema 5: Coche en curva peraltada",
            enunciado: "Un coche circula sobre una curva peraltada de 60 m de radio que presenta una inclinación de 5º. El coeficiente de rozamiento entre el neumático y el suelo es de 0,55. Determina: <br>  a) La velocidad máxima que puede llevar el vehículo en la curva. <br>  b) Discute la importancia del desgaste del estriado en el neumático.",
            solucion: `
                <div class='paso'>
                    <strong>a) Análisis de fuerzas y ecuaciones:</strong><br>
                    Las fuerzas que actúan sobre el coche son el peso \\(P = m \\cdot g\\), la fuerza normal \\(N\\) perpendicular al peralte, y la fuerza de rozamiento \\(f_r\\).<br>
                    Para calcular la velocidad máxima, asumimos que el vehículo está al límite de deslizar hacia el exterior de la curva, por lo que la fuerza de rozamiento apunta hacia el interior (hacia abajo del plano inclinado).<br>
                    Descomponemos las fuerzas en los ejes Y (vertical) y X (horizontal, apuntando hacia el centro de la curva):<br>
                    - <strong>Eje Y (Equilibrio vertical):</strong> \\(N\\cos\\theta - f_r\\sin\\theta - m \\cdot g = 0\\). Como el rozamiento es máximo, \\(f_r = \\mu \\cdot N\\), quedando \\(N(\\cos\\theta - \\mu\\sin\\theta) = m \\cdot g\\).<br>
                    - <strong>Eje X (Fuerza centrípeta):</strong> \\(N\\sin\\theta + f_r\\cos\\theta = m \\cdot \\frac{v^2}{R}\\). Sustituyendo el rozamiento, queda \\(N(\\sin\\theta + \\mu\\cos\\theta) = m \\cdot \\frac{v^2}{R}\\).
                </div>
                <div class='paso'>
                    <strong>Cálculo de la velocidad máxima:</strong><br>
                    Dividimos la ecuación del eje X entre la del eje Y. Fíjate que la masa (\\(m\\)) y la normal (\\(N\\)) se cancelan, demostrando que la velocidad máxima es independiente del peso del coche:<br>
                    \\[\\frac{\\sin\\theta + \\mu\\cos\\theta}{\\cos\\theta - \\mu\\sin\\theta} = \\frac{v^2}{R \\cdot g}\\]
                    Dividiendo todo el lado izquierdo entre \\(\\cos\\theta\\) para simplificar (recordando que \\(\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}\\)), obtenemos la fórmula general:<br>
                    \\[v_{max} = \\sqrt{R \\cdot g \\cdot \\frac{\\tan\\theta + \\mu}{1 - \\mu\\tan\\theta}}\\]
                    Sustituimos los datos del problema: \\(R = 60\\) m, \\(g = 9,8 \\text{ m/s}^2\\), \\(\\theta = 5^\\circ\\), \\(\\mu = 0,55\\):<br>
                    \\[v_{max} = \\sqrt{60 \\cdot 9,8 \\cdot \\frac{\\tan(5^\\circ) + 0,55}{1 - 0,55 \\cdot \\tan(5^\\circ)}} = \\sqrt{588 \\cdot \\frac{0,0875 + 0,55}{1 - 0,0481}} = \\sqrt{588 \\cdot 0,6697}\\]
                    <span class='resultado'>Resultado:  &nbsp \\(v_{max} = 19,84 \\text{ m/s}\\) (aprox. 71,4 km/h)</span>
                </div>
                <div class='paso'>
                    <strong>b) Importancia del desgaste del estriado:</strong><br>
                    El estriado (los surcos o el dibujo) del neumático tiene la función vital de evacuar el agua, la tierra y otras impurezas de la calzada. Si el neumático está liso debido al desgaste, pierde por completo esta capacidad.<br>
                    En condiciones de lluvia o asfalto sucio, se forma una película entre la rueda y el suelo (fenómeno conocido como <em>aquaplaning</em>), lo que reduce drásticamente el coeficiente de rozamiento (\\(\\mu\\)).<br>
                    Si observamos la fórmula matemática que acabamos de deducir, al disminuir \\(\\mu\\) hacia cero, el numerador de la fracción cae drásticamente. Esto significa que la velocidad máxima segura para tomar la curva bajará de los 71 km/h a apenas unos 25 km/h. Por tanto, un estriado en buen estado es fundamental para mantener el coeficiente de rozamiento alto y evitar que el vehículo salga proyectado por la tangente de la curva.
                </div>
`
        },
        {
            titulo: "Problema 6: Moto de Cross",
            enunciado: "Una moto de Cross toma una curva peraltada con un ángulo de 37º a 54 km/h. El coeficiente entre la tierra y el neumático es de μ = 0,3. Determina: <br> a) El radio mínimo de la curva para que la moto no sufra un accidente. <br> b) Si el radio de la curva es R=10, ¿qué sucederá?",
            solucion: `
                <div class='paso'>
                    <strong>Paso previo: Cambio de unidades:</strong><br>
                    Lo primero, como siempre, es pasar los datos al Sistema Internacional para no tener problemas con la gravedad. Convertimos la velocidad de la moto:<br>
                    \\[ v = 54 \\text{ km/h} \\cdot \\frac{1000 \\text{ m}}{1 \\text{ km}} \\cdot \\frac{1 \\text{ h}}{3600 \\text{ s}} = 15 \\text{ m/s} \\]
                </div>
                <div class='paso'>
                    <strong>a) Radio mínimo de la curva:</strong><br>
                    Utilizamos el mismo análisis de fuerzas que en un coche sobre un peralte. Para que el motorista no derrape hacia el exterior, la fuerza de rozamiento (\\(f_r\\)) debe tirar de él hacia abajo del plano inclinado. La ecuación general que relaciona la velocidad, el radio, el ángulo del peralte y el rozamiento es:<br>
                    \\[ \\frac{v^2}{R \\cdot g} = \\frac{\\sin\\theta + \\mu\\cos\\theta}{\\cos\\theta - \\mu\\sin\\theta} = \\frac{\\tan\\theta + \\mu}{1 - \\mu\\tan\\theta} \\]
                    En este caso, nuestra incógnita es el radio (\\(R\\)). Le damos la vuelta a la fracción y despejamos \\(R\\):<br>
                    \\[ R_{min} = \\frac{v^2}{g} \\cdot \\frac{1 - \\mu\\tan\\theta}{\\tan\\theta + \\mu} \\]
                    Sustituimos los datos (\\(v = 15 \\text{ m/s}\\), \\(g = 9,8 \\text{ m/s}^2\\), \\(\\theta = 37^\\circ\\), \\(\\mu = 0,3\\)).<br>
                    \\[ R_{min} = \\frac{15^2}{9,8} \\cdot \\frac{1 - 0,3 \\cdot 0,75}{0,75 + 0,3} = \\frac{225}{9,8} \\cdot \\frac{1 - 0,225}{1,05} \\]
                    \\[ R_{min} = 22,96 \\cdot \\frac{0,775}{1,05} = 22,96 \\cdot 0,738 \\]
                    <span class='resultado'>Resultado:  &nbsp \\(R_{min} = 16,94 \\text{ m}\\)</span>
                </div>
                <div class='paso'>
                    <strong>b) ¿Qué sucederá si R = 10 m?</strong><br>
                    Acabamos de calcular que, para que las ruedas aguanten a 54 km/h en ese peralte, el motorista necesita trazar una curva de al menos 16,94 metros de radio (una curva relativamente abierta).<br>
                    Si la curva real del circuito tiene un radio de <strong>10 m</strong>, significa que es una curva demasiado cerrada para esa velocidad. La fuerza centrífuga (o inercia) superará la fuerza máxima de agarre que pueden proporcionar juntos el peralte y el rozamiento.<br>
                    <span class='resultado'>Resultado:  &nbsp La moto no podrá mantenerse en la trayectoria y derrapará hacia el exterior de la curva, sufriendo una caída.</span>
                </div>
            `
        },
        {
            titulo: "Problema 7: Rayo McQueen",
            enunciado: "Rayo McQueen está en la final de la Copa Pistón. Para ganar la carrera, debe optimizar la velocidad con la que toma la curva más peligrosa el circuito. Esta curva tiene un radio de 150 m y está peraltada 15◦ . Gracias a los neumáticos estriados de Luigi, el rozamiento entre el neumático y el asfalto es de 0,7. Determina la velocidad máxima en km/h con la que Rayo McQueen puede tomar la curva.",
            solucion: `
                <div class='paso'>
                    <strong>Paso 1: Análisis de la situación en la Copa Pistón:</strong><br>
                    Para que el Rayo McQueen tome la curva a la máxima velocidad posible sin derrapar hacia el muro exterior, la fuerza de rozamiento estático de sus neumáticos (gracias a Luigi) debe actuar hacia el interior del peralte.<br>
                    Partimos de la fórmula general que ya hemos deducido para peraltes con rozamiento:<br>
                    \\[ v_{max} = \\sqrt{R \\cdot g \\cdot \\frac{\\tan\\theta + \\mu}{1 - \\mu\\tan\\theta}} \\]
                </div>
                <div class='paso'>
                    <strong>Paso 2: Sustitución de datos y cálculo matemático:</strong><br>
                    Recopilamos los datos del circuito: radio \\(R = 150 \\text{ m}\\), gravedad \\(g = 9,8 \\text{ m/s}^2\\), ángulo \\(\\theta = 15^\\circ\\) y rozamiento \\(\\mu = 0,7\\).<br>
                    Primero calculamos el valor de la tangente para simplificar: \\(\\tan(15^\\circ) \\approx 0,268\\).<br>
                    Sustituimos en la ecuación:<br>
                    \\[ v_{max} = \\sqrt{150 \\cdot 9,8 \\cdot \\frac{0,268 + 0,7}{1 - 0,7 \\cdot 0,268}} = \\sqrt{1470 \\cdot \\frac{0,968}{1 - 0,1876}} \\]
                    \\[ v_{max} = \\sqrt{1470 \\cdot \\frac{0,968}{0,8124}} = \\sqrt{1470 \\cdot 1,1915} = \\sqrt{1751,5} \\]
                    \\[ v_{max} \\approx 41,85 \\text{ m/s} \\]
                </div>
                <div class='paso'>
                    <strong>Paso 3: Conversión a la unidad solicitada:</strong><br>
                    El problema nos pide específicamente la velocidad en km/h, así que aplicamos el factor de conversión (multiplicar por 3,6):<br>
                    \\[ v_{max \\text{ (km/h)}} = 41,85 \\text{ m/s} \\cdot 3,6 \\text{ km/h por m/s} = 150,66 \\text{ km/h} \\]
                    <span class='resultado'>Resultado: &nbsp El Rayo McQueen puede tomar la curva peligrosa a una velocidad máxima de 150,66 km/h. ¡Si supera esa velocidad, acabará contra el muro!</span>
                </div>
            `
        }
    ],
    "teorema": [
        {
            titulo: "Problema 1: Fuerza en el deuterio",
            enunciado: "El deuterio es el isótopo del hidrógeno que contiene un neutrón. El agua pesada \\( \\ce{D2O} \\) se emplea en los reactores nucleares para ralentizar los neutrones y controlar su crecimiento. Sabiendo que la distancia entre el protón y el electrón es de 0,5 Å, determina: </br> a) La fuerza eléctrica existente entre el protón y el electrón. <br> b) La aceleración inicial del electrón. <br> c) La distancia a la que debe situarse el electrón para reducir la fuerza de atracción a la cuarta parte. <br> Datos. \\( \\ce{K = 9 \\cdot 10^9 N \\cdot m^2 \\cdot C^{−2} ; q_e = 1,602 \\cdot 10^{−19} C; q_p = 1,602 \\cdot 10^{−19} C; m_e = 9,1 \\cdot 10^{−31}  kg; 1 \\\ \\text{Å} = 1 \\cdot 10^{-10}  m} \\) ",
            solucion: `
                <div class='paso'>
                    <strong>Paso previo: Unidades al Sistema Internacional y análisis:</strong><br>
                    El núcleo del deuterio tiene un protón y un neutrón. Como el neutrón no tiene carga, la interacción eléctrica se produce exclusivamente entre el protón y el electrón.<br>
                    Antes de operar, debemos pasar la distancia (dada en Angstroms, Å) a metros:<br>
                    \\[ r = 0,5 \\text{ Å } \\cdot \\frac{10^{-10} \\text{ m}}{1 \\text{ Å }} = 0,5 \\cdot 10^{-10} \\text{ m} = 5 \\cdot 10^{-11} \\text{ m} \\]
                </div>
                <div class='paso'>
                    <strong>a) Fuerza eléctrica entre el protón y el electrón:</strong><br>
                    Aplicamos la Ley de Coulomb. Dado que queremos el módulo de la fuerza (la intensidad de la atracción), usamos los valores absolutos de las cargas:<br>
                    \\[ F = k \\cdot \\frac{|q_p \\cdot q_e|}{r^2} \\]
                    Sustituimos los datos suministrados en el problema:<br>
                    \\[ F = 9 \\cdot 10^9 \\cdot \\frac{(1,602 \\cdot 10^{-19}) \\cdot (1,602 \\cdot 10^{-19})}{(0,5 \\cdot 10^{-10})^2} \\]
                    \\[ F = 9 \\cdot 10^9 \\cdot \\frac{2,566 \\cdot 10^{-38}}{0,25 \\cdot 10^{-20}} = 9 \\cdot 10^9 \\cdot 10,264 \\cdot 10^{-18} \\]
                    <span class='resultado'>Resultado:  &nbsp \\( F \\approx 9,24 \\cdot 10^{-8} \\text{ N} \\)</span>
                </div>
                <div class='paso'>
                    <strong>b) Aceleración inicial del electrón:</strong><br>
                    Para relacionar la fuerza eléctrica con el movimiento de la partícula, recurrimos a la Segunda Ley de Newton (\\( F = m \\cdot a \\)). Despejamos la aceleración usando la masa del electrón:<br>
                    \\[ a = \\frac{F}{m_e} = \\frac{9,24 \\cdot 10^{-8} \\text{ N}}{9,1 \\cdot 10^{-31} \\text{ kg}} \\]
                    \\[ a \\approx 1,015 \\cdot 10^{23} \\text{ m/s}^2 \\]
                    <em>*Nota: Esta aceleración es brutalmente inmensa, lo cual es típico en física de partículas debido a que su masa es increíblemente pequeña.</em><br>
                    <span class='resultado'>Resultado:  &nbsp \\( a \\approx 1,015 \\cdot 10^{23} \\text{ m/s}^2 \\)</span>
                </div>
                <div class='paso'>
                    <strong>c) Distancia para reducir la fuerza a la cuarta parte:</strong><br>
                    Este es un apartado de razonamiento matemático (ley de la inversa del cuadrado). La fuerza depende inversamente del cuadrado de la distancia (\\( F \\propto \\frac{1}{r^2} \\)).<br>
                    Si queremos que la nueva fuerza sea \\( \\frac{F}{4} \\), el denominador de la fracción debe multiplicarse por 4.<br>
                    Para que \\( r^2 \\) se multiplique por 4, la propia distancia \\( r \\) debe multiplicarse por 2 (ya que \\( 2^2 = 4 \\)).<br>
                    Por tanto, la nueva distancia debe ser el doble de la original:<br>
                    \\[ r' = 2 \\cdot r = 2 \\cdot 0,5 \\text{ Å} \\]
                    <span class='resultado'>Resultado:  &nbsp \\( r' = 1,0 \\text{ Å} \\) (o \\( 10^{-10} \\text{ m} \\))</span>
                </div>
            `
        },
        {
            titulo: "Problema 2: Cargas en triángulo",
            enunciado: "Tres cargas eléctricas de 5 nC, dos positivas fijas y una negativa libre, se sitúan en los vértices de un triángulo equilátero de 60 cm de lado. Sabiendo que la masa de la carga negativa es de 5 g, determina: <br> a) En que dirección comienza a moverse. <br> b) ¿Qué movimiento realiza la carga libre a lo largo del tiempo? <br> c) Calcula la fuerza que experimenta la carga libre en el vértice del triángulo. <br> d) Obtén la aceleración en dicho vértice. <div style='text-align: center; margin-bottom: 20px;'> <img src='img/din_6.png' style='max-width: 80%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br> \\( \\ce{Datos: K = 9 \\cdot 10^9 N \\cdot m^2 \\cdot C^{−2}; 1 \\\ nC = 10^{-9} \\\ C } \\)",
            solucion: `
                <div class='paso'>
                    <strong>Paso previo: Unidades al Sistema Internacional:</strong><br>
                    Antes de empezar, pasamos todos los datos al S.I. para evitar errores con la constante de Coulomb (\\(k\\)):<br>
                    - Cargas: \\( q = 5 \\text{ nC} = 5 \\cdot 10^{-9} \\text{ C} \\)<br>
                    - Distancia: \\( L = 60 \\text{ cm} = 0,6 \\text{ m} \\)<br>
                    - Masa: \\( m = 5 \\text{ g} = 5 \\cdot 10^{-3} \\text{ kg} \\)
                </div>
                <div class='paso'>
                    <strong>a) Dirección en la que comienza a moverse:</strong><br>
                    La carga superior es negativa y las de la base son positivas, por lo que sufre una fuerza de atracción hacia cada una de ellas.<br>
                    Al ser un triángulo equilátero y tener las cargas de la base el mismo valor, el sistema es simétrico. Las componentes horizontales de estas dos fuerzas de atracción son iguales y de sentido contrario, por lo que se anulan entre sí.<br>
                    <span class='resultado'>Resultado: &nbsp Las componentes verticales se suman, apuntando hacia abajo. La carga libre comenzará a moverse en línea recta hacia abajo, siguiendo la mediatriz del lado que une las cargas fijas.</span>
                </div>
                <div class='paso'>
                    <strong>b) Movimiento a lo largo del tiempo:</strong><br>
                    Al moverse hacia abajo, pasará por la línea que une las cargas fijas. En ese punto, la fuerza neta se hace cero por un instante, pero la partícula lleva inercia (velocidad), así que lo cruzará.<br>
                    Una vez por debajo de las cargas positivas, estas la atraerán hacia arriba, frenándola hasta detenerla y volviendo a tirar de ella hacia el centro.<br>
                    <span class='resultado'>Resultado: &nbsp Realizará un movimiento oscilatorio continuo de arriba a abajo a lo largo del eje de simetría vertical (suponiendo que no hay rozamiento ni otras pérdidas de energía).</span>
                </div>
                <div class='paso'>
                    <strong>c) Fuerza que experimenta en el vértice:</strong><br>
                    Calculamos la fuerza de atracción (en módulo) que ejerce UNA de las cargas positivas sobre la negativa mediante la Ley de Coulomb:<br>
                    \\[ F_1 = k \\cdot \\frac{|q_1 \\cdot q_2|}{L^2} = 9 \\cdot 10^9 \\cdot \\frac{(5 \\cdot 10^{-9}) \\cdot (5 \\cdot 10^{-9})}{(0,6)^2} \\]
                    \\[ F_1 = 9 \\cdot 10^9 \\cdot \\frac{25 \\cdot 10^{-18}}{0,36} = \\frac{225 \\cdot 10^{-9}}{0,36} = 6,25 \\cdot 10^{-7} \\text{ N} \\]
                    Dado que el triángulo es equilátero, el ángulo que forma cada fuerza con el eje vertical (la bisectriz) es de \\(30^\\circ\\). La fuerza total neta será el doble de la componente vertical de \\(F_1\\):<br>
                    <div style='text-align: center; margin-bottom: 20px;'> <img src='img/fe_3c.png' style='max-width: 80%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div>
                    \\[ F_{total} = 2 \\cdot F_y = 2 \\cdot F_1 \\cdot \\cos(30^\\circ) = 2 \\cdot 6,25 \\cdot 10^{-7} \\cdot \\frac{\\sqrt{3}}{2} \\]
                    <span class='resultado'>Resultado: &nbsp \\( F_{total} = 6,25 \\cdot \\sqrt{3} \\cdot 10^{-7} \\approx 1,08 \\cdot 10^{-6} \\text{ N} \\) (hacia abajo)</span>
                </div>
                <div class='paso'>
                    <strong>d) Aceleración en dicho vértice:</strong><br>
                    Para hallar la aceleración, simplemente aplicamos la Segunda Ley de Newton (\\( F = m \\cdot a \\)):<br>
                    \\[ a = \\frac{F_{total}}{m} = \\frac{1,0825 \\cdot 10^{-6} \\text{ N}}{5 \\cdot 10^{-3} \\text{ kg}} \\]
                    <span class='resultado'>Resultado: &nbsp \\( a \\approx 2,165 \\cdot 10^{-4} \\text{ m/s}^2 \\) (hacia abajo)</span>
                </div>
            `
        },
        {
            titulo: "Problema 3: Radiación cósmica",
            enunciado: "La radiación cósmica tiene una influencia directa en nuestro planeta. La teoría más asentada sobre la formación de tormentas apunta a la radiación cósmica como origen de las mismas. En un laboratorio de nanotecnología, se investiga el comportamiento de partículas cargadas en dispositivos de detección de polvo cósmico. En un experimento, tres pequeñas esferas con carga están suspendidas en un campo eléctrico controlado según el siguiente esquema. Determina: <br> a) La fuerza que experimenta la carga 1. <br> b) La aceleración que experimenta la carga 1, cuya masa es de 10 g. <br> c) Indica qué bosones se intercambian en la interacción descrita. <div style='text-align: center; margin-bottom: 20px;'> <img src='img/din_7.png' style='max-width: 25%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div>  <br> \\( \\ce{Datos: K = 9 \\cdot 10^9 N \\cdot m^2 \\cdot C^{−2}; 1 \\\ \\mu \\text{C} = 10^{-6} \\\ \\text{C} }\\)",
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
                <div class='paso'>
                    <strong>a) Fuerza que experimenta la carga 1:</strong><br>
                    Primero, calculamos el módulo de la fuerza de atracción entre \\(q_1\\) y \\(q_2\\) (Ley de Coulomb). Al tener \\(q_3\\) la misma carga y estar a la misma distancia, la fuerza \\(F_{31}\\) será idéntica en módulo.<br>
                    Pasamos las cargas a Culombios: \\( 3  \\mu \\text{ C} = 3 \\cdot 10^{-6} \\text{ C} \\).<br>
                    \\[ F_{21} = k \\cdot \\frac{|q_1 \\cdot q_2|}{r^2} = 9 \\cdot 10^9 \\cdot \\frac{(3 \\cdot 10^{-6}) \\cdot (3 \\cdot 10^{-6})}{(3,5)^2} \\]
                    \\[ F_{21} = 9 \\cdot 10^9 \\cdot \\frac{9 \\cdot 10^{-12}}{12,25} = \\frac{0,081}{12,25} \\approx 6,612 \\cdot 10^{-3} \\text{ N} \\]
                    Por simetría, las componentes en el eje Y se anulan (una tira hacia arriba y otra hacia abajo con la misma intensidad). Las componentes en el eje X se suman:<br>
                    \\[ F_{total} = 2 \\cdot F_{21x} = 2 \\cdot F_{21} \\cdot \\cos(\\alpha) = 2 \\cdot (6,612 \\cdot 10^{-3}) \\cdot 0,9035 \\]
                    <span class='resultado'>Resultado: &nbsp \\( F_{total} \\approx 1,195 \\cdot 10^{-2} \\text{ N} \\) (dirigida hacia la derecha, en el eje X positivo)</span>
                </div>
                <div class='paso'>
                    <strong>b) Aceleración que experimenta la carga 1:</strong><br>
                    Aplicamos la Segunda Ley de Newton. Pasamos la masa al Sistema Internacional: \\( m = 10 \\text{ g} = 0,01 \\text{ kg} \\).<br>
                    \\[ a = \\frac{F_{total}}{m} = \\frac{1,195 \\cdot 10^{-2} \\text{ N}}{0,01 \\text{ kg}} \\]
                    <span class='resultado'>Resultado: &nbsp \\( a = 1,195 \\text{ m/s}^2 \\) (hacia la derecha)</span>
                </div>
                <div class='paso'>
                    <strong>c) Bosones que se intercambian:</strong><br>
                    Esta es una pregunta teórica pura del Modelo Estándar de la física de partículas. Las fuerzas eléctricas y magnéticas son manifestaciones de la interacción electromagnética.<br>
                    <span class='resultado'>Resultado: &nbsp La partícula mediadora (bosón de gauge) responsable de la interacción electromagnética es el <strong>fotón</strong>.</span>
                </div>
            `
        },
        {
            titulo: "Problema 4: 1-bromopropano",
            enunciado: "El 1-bromopropano es un disolvente empleado para limpiar las superficies de las pantallas OLEDs. Para formar el 1-bromopropano se lleva a cabo una reacción orgánica donde el ion bromuro \\( \\ce{Br^–} \\) ataca la carga positiva del carbocatión (propano). El ion bromuro se encuentra rodeado de 3 cargas positivas (carbocationes). En los siguientes esquemas se muestran tanto la reacción orgánica (1) como un diagrama de cargas (2). Determina: <br> a) La fuerza que experimenta la carga 1. <br> b) La fuerza que experimenta la carga 4. <br> c) La aceleración que experimenta la carga 1 (ion bromuro), cuya masa es de 1,33 · 10 – 22 g. <br> d) Teniendo en cuenta el diagrama de fuerzas, ¿a qué carbocatión crees que se unirá el bromuro? <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/din_8.png' style='max-width: 70%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div>  <br> \\( \\ce{Datos: K = 9 \\cdot 10^9 N \\cdot m^2 \\cdot C^{−2}; 1 \\text{ nm} = 1 \\cdot 10^{-9} \\text{ m}} \\)",
            solucion: `
                <div class='paso'>
                    <strong>Paso 1: Análisis geométrico y paso a unidades del S.I.:</strong><br>
                    Primero, pasamos todas las unidades al Sistema Internacional:<br>
                    - Cargas: \\( q_1 = -1 \\cdot 10^{-19} \\text{ C} \\), \\( q_2 = q_3 = q_4 = 0,8 \\cdot 10^{-19} \\text{ C} \\)<br>
                    - Distancias: \\( d_{12} = d_{13} = 2 \\text{ nm} = 2 \\cdot 10^{-9} \\text{ m} \\). La distancia vertical entre \\(q_2\\) y \\(q_4\\) es \\( 1 \\text{ nm} = 1 \\cdot 10^{-9} \\text{ m} \\).<br>
                    - Masa de \\(q_1\\): \\( m = 1,33 \\cdot 10^{-22} \\text{ g} = 1,33 \\cdot 10^{-25} \\text{ kg} \\).<br>
                    Necesitamos la distancia horizontal desde \\(q_1\\) hasta \\(q_4\\) (llamémosla \\(x\\)). Usamos el Teorema de Pitágoras en el triángulo formado por \\(q_1\\), \\(q_4\\) y \\(q_2\\):<br>
                    \\[ x^2 + (1 \\cdot 10^{-9})^2 = (2 \\cdot 10^{-9})^2 \\implies x^2 + 1 \\cdot 10^{-18} = 4 \\cdot 10^{-18} \\]
                    \\[ x = \\sqrt{3 \\cdot 10^{-18}} = \\sqrt{3} \\cdot 10^{-9} \\text{ m} \\approx 1,732 \\cdot 10^{-9} \\text{ m} \\]
                    Esta es la distancia \\(r_{14}\\). Además, el coseno del ángulo \\(\\alpha\\) que forma la fuerza de \\(q_2\\) con la horizontal es: \\( \\cos(\\alpha) = \\frac{cateto\\ contiguo}{hipotenusa} = \\frac{\\sqrt{3}}{2} \\).
                </div>
                <div class='paso'>
                    <strong>a) Fuerza que experimenta la carga 1 (ion bromuro):</strong><br>
                    Calculamos la fuerza atractiva que ejerce \\(q_2\\) sobre \\(q_1\\):<br>
                    \\[ F_{21} = k \\cdot \\frac{|q_1 \\cdot q_2|}{r_{12}^2} = 9 \\cdot 10^9 \\cdot \\frac{1 \\cdot 10^{-19} \\cdot 0,8 \\cdot 10^{-19}}{(2 \\cdot 10^{-9})^2} = 9 \\cdot 10^9 \\cdot \\frac{0,8 \\cdot 10^{-38}}{4 \\cdot 10^{-18}} = 1,8 \\cdot 10^{-11} \\text{ N} \\]
                    Por simetría, la fuerza que ejerce \\(q_3\\) es igual: \\( F_{31} = 1,8 \\cdot 10^{-11} \\text{ N} \\).<br>
                    Las componentes Y se anulan. Las componentes X se suman: \\( F_{21x} + F_{31x} = 2 \\cdot F_{21} \\cdot \\cos(\\alpha) = 2 \\cdot 1,8 \\cdot 10^{-11} \\cdot \\frac{\\sqrt{3}}{2} \\approx 3,118 \\cdot 10^{-11} \\text{ N} \\).<br>
                    Calculamos la fuerza directa que ejerce el carbocatión central \\(q_4\\) (es puramente horizontal):<br>
                    \\[ F_{41} = k \\cdot \\frac{|q_1 \\cdot q_4|}{r_{14}^2} = 9 \\cdot 10^9 \\cdot \\frac{1 \\cdot 10^{-19} \\cdot 0,8 \\cdot 10^{-19}}{(\\sqrt{3} \\cdot 10^{-9})^2} = 9 \\cdot 10^9 \\cdot \\frac{0,8 \\cdot 10^{-38}}{3 \\cdot 10^{-18}} = 2,4 \\cdot 10^{-11} \\text{ N} \\]
                    Sumamos todo el empuje horizontal:<br>
                    \\[ F_{total\_1} = 3,118 \\cdot 10^{-11} + 2,4 \\cdot 10^{-11} = 5,518 \\cdot 10^{-11} \\text{ N} \\]
                    <span class='resultado'>Resultado: &nbsp \\( F_1 \\approx 5,52 \\cdot 10^{-11} \\text{ N} \\) (hacia la derecha)</span>
                </div>
                <div class='paso'>
                    <strong>b) Fuerza que experimenta la carga 4:</strong><br>
                    Sobre la carga \\(q_4\\) actúan tres fuerzas: la repulsión de \\(q_2\\) (hacia abajo), la repulsión de \\(q_3\\) (hacia arriba) y la atracción de \\(q_1\\) (hacia la izquierda).<br>
                    Por simetría pura, como \\(q_2 = q_3\\) y están a la misma distancia de \\(q_4\\) (1 nm), sus fuerzas de repulsión se cancelan perfectamente.<br>
                    La única fuerza neta que sobrevive es la atracción hacia el bromuro \\(q_1\\). Por la 3ª Ley de Newton (acción-reacción), si \\(q_4\\) atrae a \\(q_1\\) con \\(2,4 \\cdot 10^{-11} \\text{ N}\\), \\(q_1\\) atrae a \\(q_4\\) con exactamente la misma fuerza pero sentido opuesto.<br>
                    <span class='resultado'>Resultado: &nbsp \\( F_4 = 2,4 \\cdot 10^{-11} \\text{ N} \\) (hacia la izquierda)</span>
                </div>
                <div class='paso'>
                    <strong>c) Aceleración del ion bromuro (carga 1):</strong><br>
                    Aplicamos la Segunda Ley de Newton:\\( F = m \\cdot a \\):<br>
                    \\[ a = \\frac{F_{total\_1}}{m_1} = \\frac{5,518 \\cdot 10^{-11} \\text{ N}}{1,33 \\cdot 10^{-25} \\text{ kg}} \\]
                    <span class='resultado'>Resultado: &nbsp \\( a \\approx 4,15 \\cdot 10^{14} \\text{ m/s}^2 \\) (hacia la derecha)</span>
                </div>
                <div class='paso'>
                    <strong>d) ¿A qué carbocatión se unirá?</strong><br>
                    Observando el diagrama de fuerzas del apartado "a", la fuerza resultante sobre el ion bromuro apunta de forma perfecta y exclusivamente en la horizontal hacia la derecha, ya que los tirones verticales hacia arriba y hacia abajo se han anulado.<br>
                    <span class='resultado'>Resultado: &nbsp El bromuro se unirá al carbocatión central (\\(q_4\\)), ya que la fuerza neta lo acelera en línea recta directa hacia él.</span>
                </div>
            `
        }
    ]
};
