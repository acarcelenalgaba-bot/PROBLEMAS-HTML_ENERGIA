const baseDatosProblemas = {
    "conceptos": [
        {
            titulo: "Problema 1: Dinámica y trabajo en superficie horizontal",
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
            titulo: "Problema 2: Trabajo mecánico en el desplazamiento de un cuerpo",
            enunciado: "Se tiene que trasladar un cuerpo que pesa 50 N a una distancia de 20 m. ¿Qué trabajo se realiza en los siguientes casos? <br> a) Empujando el cuerpo con una fuerza de 3 N sin conseguir moverlo. <br> b) Empujando el cuerpo con una fuerza de 5 N en la misma dirección del desplazamiento, consiguiéndolo.",
            solucion: `
                <div class='paso'>
                    <strong>a) Trabajo cuando no hay movimiento:</strong><br>
                    El trabajo mecánico (\\(W\\)) se define como el producto de la fuerza por el desplazamiento y el coseno del ángulo entre ambos. Si no hay desplazamiento (\\(x = 0\\)), el trabajo es nulo:<br>
                    \\[W = F \\cdot x \\cdot \\cos \\\ (\\alpha) = 3 \\cdot 0 \\cdot \\cos \\\ (0^\\circ) = 0 \\text{ J}\\]
                    <span class='resultado'>Resultado: &nbsp W = 0 J</span>
                </div>
                <div class='paso'>
                    <strong>b) Trabajo con desplazamiento en la misma dirección:</strong><br>
                    En este caso, la fuerza de 5 N logra desplazar el cuerpo 20 m. Al ser en la misma dirección, el ángulo \\(\\alpha = 0^\\circ\\) (y por lo tanto \\(\\cos \\\ (0^\\circ) = 1\\)):<br>
                    \\[W = F \\cdot x \\cdot \\cos \\\ (0^\\circ) = 5 \\cdot 20 \\cdot 1 = 100 \\text{ J}\\]
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
        },
        {
            titulo: "Problema 4: Tiempo de elevación de un montacargas",
            enunciado: "Un montacargas tiene que subir un objeto de 1000 kg de masa a una altura de 20 metros. Si el motor tiene una potencia de 25 CV, calcular el tiempo que tardará en hacerlo.",
            solucion: `
                <div class='paso'>
                    <strong>1. Conversión de Potencia a Vatios (W):</strong><br>
                    Primero, convertimos la potencia de Caballos de Vapor (CV) al Sistema Internacional (W), sabiendo que \\(1 \\text{ CV} \\approx 735 \\text{ W}\\):<br>
                    \\[P = 25 \\cdot 735 = 18375 \\text{ W}\\]
                </div>
                <div class='paso'>
                    <strong>2. Cálculo del Trabajo Necesario (W):</strong><br>
                    El trabajo realizado para elevar el objeto es igual a su energía potencial (usando \\(g = 9,8 \\text{ m/s}^2\\)):<br>
                    \\[W = m \\cdot g \\cdot h = 1000 \\cdot 9,8 \\cdot 20 = 196000 \\text{ J}\\]
                </div>
                <div class='paso'>
                    <strong>3. Cálculo del Tiempo (t):</strong><br>
                    A partir de la fórmula de la potencia \\(P = \\frac{W}{t}\\), despejamos el tiempo:<br>
                    \\[t = \\frac{W}{P} = \\frac{196000}{18375} \\approx 10,67 \\text{ s}\\]
                    <span class='resultado'>Resultado: &nbsp t = 10,67 s</span>
                </div>
            `
        },
        {
            titulo: "Problema 5: Trabajo en la subida de un puerto de montaña",
            enunciado: "Un coche de 1200 kg de masa sube un puerto de montaña de pendiente 15 % a una velocidad constante de 72 km/h. Calcula la altura que sube y el trabajo realizado por el motor durante una hora.",
            solucion: `
                <div class='paso'>
                    <strong>1. Conversión de unidades y análisis de la pendiente:</strong><br>
                    Primero, pasamos la velocidad al S.I. y el tiempo a segundos:<br>
                    \\(v = 72 \\text{ km/h} = \\frac{72}{3,6} = 20 \\text{ m/s}\\)<br>
                    \\(t = 1 \\text{ h} = 3600 \\text{ s}\\)<br>
                    Una pendiente del 15% significa que por cada 100 m de avance horizontal, se suben 15 m en vertical. Esto equivale a: \\( \\\ tan(\\alpha) = \\frac { sen \\\ (\\alpha)}{cos \\\ (\\alpha)} = \\frac {15}{100} = 0,15 \\).<br>
                    Calculamos el ángulo: \\(\\alpha = \\arctan(0,15) \\approx 8,53^\\circ\\).
                </div>
                <div class='paso'>
                    <strong>2. Cálculo de la distancia recorrida y la altura (h):</strong><br>
                    La distancia total recorrida sobre la pendiente (la hipotenusa) es:<br>
                    \\[x = v \\cdot t = 20 \\cdot 3600 = 72000 \\text{ m}\\]
                    La altura vertical alcanzada es:<br>
                    \\[h = x \\cdot sen \\\ (\\alpha) = 72000 \\cdot sen \\\ (8,53^\\circ) \\approx 10680 \\text{ m}\\]
                </div>
                <div class='paso'>
                    <strong>3. Cálculo del Trabajo (W):</strong><br>
                    Como la velocidad es constante, el motor solo tiene que vencer el peso (en ausencia de rozamiento). El trabajo equivale al aumento de energía potencial:<br>
                    \\[W = m \\cdot g \\cdot h = 1200 \\cdot 9,8 \\cdot 10680 = 125596800 \\text{ J}\\]
                    En notación científica: \\(1,26 \\cdot 10^8 \\text{ J}\\).<br>
                    <span class='resultado'>Resultado: &nbsp h \\(\\approx\\) 10680 m; &nbsp W \\(\\approx 1,26 \\cdot 10^8 \\) J</span>
                </div>
            `
        },
        {
            titulo: "Problema 6: Energía cinética, trabajo y conversión energética",
            enunciado: "a) Calcula la energía cinética de un camión de 20 toneladas lanzado a 150 km/h. <br> b) Calcula el trabajo necesario para elevar un contenedor de 1,5 toneladas hasta una altura de 20 m. <br> c) Si toda la energía del camión se pudiera transformar en trabajo, ¿cuánto podríamos elevar el contenedor?",
            solucion: `
                <div class='paso'>
                    <strong>a) Energía cinética del camión:</strong><br>
                    Primero, convertimos las unidades al Sistema Internacional:<br>
                    \\(m = 20 \\text{ t} = 20000 \\text{ kg}\\)<br>
                    \\(v = 150 \\text{ km/h} = \\frac{150}{3,6} \\approx 41,67 \\text{ m/s}\\)<br>
                    Aplicamos la fórmula de la energía cinética:<br>
                    \\[E_c = \\frac{1}{2} \\cdot m \\cdot v^2 = \\frac{1}{2} \\cdot 20000 \\cdot (41,67)^2 \\approx 17363889 \\text{ J}\\]
                    <span class='resultado'>Resultado: &nbsp \\(E_c \\approx 1,74 \\cdot 10^7 \\text{ J}\\)</span>
                </div>
                <div class='paso'>
                    <strong>b) Trabajo para elevar el contenedor:</strong><br>
                    Convertimos la masa: \\(m_c = 1,5 \\text{ t} = 1500 \\text{ kg}\\).<br>
                    El trabajo necesario equivale a la energía potencial ganada (con \\(g = 9,8 \\text{ m/s}^2\\)):<br>
                    \\[W = m \\cdot g \\cdot h = 1500 \\cdot 9,8 \\cdot 20 = 294000 \\text{ J}\\]
                    <span class='resultado'>Resultado: &nbsp \\(W = 2,94 \\cdot 10^5 \\text{ J}\\)</span>
                </div>
                <div class='paso'>
                    <strong>c) Altura máxima utilizando la energía del camión:</strong><br>
                    Igualamos la energía cinética del camión al trabajo de elevación (\\(E_c = W\\)) y despejamos la altura (\\(h\\)) para el contenedor de 1.500 kg:<br>
                    \\[h = \\frac{E_c}{m \\cdot g} = \\frac{17363889}{1500 \\cdot 9,8} \\approx 1181,22 \\text{ m}\\]
                    <span class='resultado'>Resultado: &nbsp \\(h \\approx 1181,22 \\text{ m}\\)</span>
                </div>
            `
        }
    ],
    "fuerzas_vivas": [
        {
            titulo: "Problema 1: Frenado y peso del coche",
            enunciado: "Un coche marcha a una velocidad de 25 m/s. Se accionan los frenos y reduce su velocidad a 15 m/s en un tiempo de 4 segundos. Si la fuerza empleada por los frenos es de 500 N, calcular el peso del coche.",
            solucion: `
                <div class='paso'>
                    <strong>1. Cálculo de la aceleración (frenado):</strong><br>
                    Utilizamos la fórmula de la cinemática: \\(a = \\frac{v_f - v_0}{t}\\)<br>
                    \\[a = \\frac{15 - 25}{4} = -2,5 \\text{ m/s}^2\\]
                    El signo negativo indica que es una deceleración. Para el cálculo de la masa usaremos el módulo: \\(2,5 \\text{ m/s}^2\\).
                </div>
                <div class='paso'>
                    <strong>2. Cálculo de la masa (Segunda Ley de Newton):</strong><br>
                    \\[m = \\frac{F}{a} = \\frac{500}{2,5} = 200 \\text{ kg}\\]
                </div>
                <div class='paso'>
                    <strong>3. Cálculo del peso:</strong><br>
                    Usando \\(g = 9,8 \\text{ m/s}^2\\):<br>
                    \\[P = m \\cdot g = 200 \\cdot 9,8 = 1960 \\text{ N}\\]
                    <span class='resultado'>Resultado: &nbsp P = 1960 N</span>
                </div>
            `
        },
        {
            titulo: "Problema 2: Frenado por rozamiento",
            enunciado: "Un objeto de 4 kg de masa entra en una superficie horizontal con una velocidad inicial de 9 m/s. Si la fuerza de rozamiento entre las superficies es 10 N, calcular el espacio que recorre antes de pararse.",
            solucion: `
                <div class='paso'>
                    <strong>1. Cálculo de la aceleración de frenado:</strong><br>
                    La única fuerza horizontal es el rozamiento (en sentido contrario):<br>
                    \\[a = \\frac{-F_r}{m} = \\frac{-10}{4} = -2,5 \\text{ m/s}^2\\]
                </div>
                <div class='paso'>
                    <strong>2. Cálculo de la distancia (espacio):</strong><br>
                    Usamos la ecuación de la velocidad independiente del tiempo: \\(\\\ v_f^2 = v_0^2 + 2 \\cdot a \\cdot x\\). Como se para, \\(v_f = 0\\):<br>
                    \\[0 = 9^2 + 2 \\cdot (-2,5) \\cdot x\\]
                    \\[0 = 81 - 5 \\cdot x \\implies x = \\frac{81}{5} = 16,2 \\text{ m}\\]
                    <span class='resultado'>Resultado: &nbsp x = 16,2 m</span>
                </div>
            `
        },
        {
            titulo: "Problema 3: Trabajo y energía con rozamiento",
            enunciado: "Al lanzar un objeto de 0,5 kg de masa en un plano horizontal con rozamiento de 3,25 N, éste recorre una distancia de 4 metros antes de pararse. Calcular:<br> a) el trabajo realizado por la fuerza de rozamiento; <br> b) la energía cinética inicial del objeto. <br> c) la velocidad inicial del objeto.",
            solucion: `
                <div class='paso'>
                    <strong>a) Trabajo de rozamiento:</strong><br>
                    El rozamiento se opone al movimiento (\\(180^\\circ\\)):<br>
                    \\[W_r = F_r \\cdot x \\cdot \\cos \\\ (180^\\circ) = 3,25 \\cdot 4 \\cdot (-1) = -13 \\text{ J}\\]
                    <span class='resultado'>Resultados: &nbsp - 13 J</span>
                </div>
                <div class='paso'>
                    <strong>b) Energía cinética inicial:</strong><br>
                    Por el teorema del trabajo y la energía: \\(W_{ext} = \\Delta E_c = E_{cf} - E_{c0}\\). Como se para, \\(E_{cf} = 0\\):<br>
                    \\[-13 = 0 - E_{c0} \\implies E_{c0} = 13 \\text{ J}\\]
                    <span class='resultado'>Resultados: &nbsp 13 J </span>
                </div>
                <div class='paso'>
                    <strong>c) Velocidad inicial:</strong><br>
                    \\[E_{c0} = \\frac{1}{2} m v_0^2 \\implies 13 = \\frac{1}{2} \\cdot 0,5 \\cdot v_0^2\\]
                    \\[v_0 = \\sqrt{\\frac{13}{0,25}} = \\sqrt{52} \\approx 7,21 \\text{ m/s}\\]
                    <span class='resultado'>Resultados: &nbsp 7,21 m/s</span>
                </div>
            `
        },
        {
            titulo: "Problema 4: Energía y aceleración",
            enunciado: "Un bloque de masa 1,2 toneladas es acelerado por una fuerza exterior de 10 a 20 m/s. ¿Cuánta energía ha recibido?. ¿De quién?.",
            solucion: `
                <div class='paso'>
                    <strong>1. Cálculo de la energía recibida (\\(\\Delta E_c\\)):</strong><br>
                    Masa: \\(m = 1200 \\text{ kg}\\).<br>
                    \\[\\Delta E_c = \\frac{1}{2} \\cdot m \\cdot (v_f^2 - v_0^2) = \\frac{1}{2} \\cdot 1200 \\cdot (20^2 - 10^2)\\]
                    \\[\\Delta E_c = 600 \\cdot (400 - 100) = 600 \\cdot 300 = 180000 \\text{ J}\\]
                </div>
                <div class='paso'>
                    <strong>2. Origen de la energía:</strong><br>
                    La energía ha sido recibida de la <strong>fuerza exterior</strong> que realiza el trabajo sobre el bloque. <br>
                    <span class='resultado'>Resultado: &nbsp 180000 J (180 kJ)</span>
                </div>
            `
        },
        {
            titulo: "Problema 5: Disipación de energía",
            enunciado: "Un coche posee una energía cinética de \\(7,2 \\cdot 10^4 \\text{ J}\\), el viento lo frena y su energía disminuye hasta \\(3,2 \\cdot 10^4 \\text{ J}\\) tras recorrer 40 m. Calcula: <br> a) ¿En qué se ha invertido la energía? <br> b) El trabajo realizado por el viento. <br> c) La fuerza ejercida por el viento.",solucion: `
                <div class='paso'>
                    <strong>a) Transformación de la energía:</strong><br>
                    La energía cinética que el coche ha perdido se ha invertido en realizar un <strong>trabajo mecánico contra la resistencia del aire</strong>. Esta energía se disipa finalmente en forma de <strong>calor</strong> (energía térmica) debido al rozamiento de las moléculas de aire contra la carrocería del vehículo.
                </div>
                <div class='paso'>
                    <strong>b) Cálculo del trabajo realizado por el viento (W):</strong><br>
                    Según el teorema de las fuerzas vivas, el trabajo neto es igual a la variación de la energía cinética:<br>
                    \\[W = \\Delta E_c = E_{cf} - E_{c0}\\]
                    \\[W = 3,2 \\cdot 10^4 - 7,2 \\cdot 10^4 = - 4,0 \\cdot 10^4 \\text{ J}\\]
                    El signo negativo indica que el trabajo es resistente (se opone al movimiento). <br>
                    <span class='resultado'>Resultados: &nbsp W = - 40000 J</span>
                </div>
                <div class='paso'>
                    <strong>c) Cálculo de la fuerza del viento (F):</strong><br>
                    Sabiendo que el trabajo es \\(W = F \\cdot x \\cdot \\cos \\\ (\\alpha)\\) y que el viento actúa en sentido contrario al movimiento (\\(\\alpha = 180^\\circ\\)):<br>
                    \\[-40000 = F \\cdot 40 \\cdot (-1)\\]
                    \\[F = \\frac{- 40000}{-40} = 1000 \\text{ N}\\]
                    <span class='resultado'>Resultados: &nbsp F = 1000 N</span>
                </div>
            `
        },
        {
            titulo: "Problema 6: Coeficiente de rozamiento en plano inclinado",
            enunciado: "Un cuerpo comienza a deslizar por un plano inclinado con rozamiento. La energía inicial es 20 kJ y cuando llega al final su energía es 15 kJ. Si el plano tiene una inclinación de 30°, ¿cuál es el coeficiente de rozamiento?",
            solucion: `
                <div class='paso'>
                    <strong>1. Trabajo de rozamiento (\\(W_r\\)):</strong><br>
                    La pérdida de energía es el trabajo realizado por el rozamiento:<br>
                    \\[W_r = E_f - E_i = 15000 - 20000 = - 5000 \\text{ J}\\]
                </div>
                <div class='paso'>
                    <strong>2. Relación con la altura y distancia:</strong><br>
                    La energía inicial es potencial: \\(E_i = m \\cdot g \\cdot h = 20000 \\text{ J}\\).<br>
                    En un plano de \\(30^\\circ\\), la altura \\(h\\) y la distancia recorrida \\(d\\) se relacionan: \\(h = d \\cdot sen \\\ (30^\\circ) = 0,5 \\cdot d\\).<br>
                    Sustituyendo: \\(m \\cdot g \\cdot (0,5 \\cdot d) = 20000 \\implies m \\cdot g \\cdot d = 40000\\).
                </div>
                <div class='paso'>
                    <strong>3. Cálculo del coeficiente (\\(\\mu\\)):</strong><br>
                    El trabajo de rozamiento es \\(W_r = -F_r \\cdot d = -(\\mu \\cdot m \\cdot g \\cdot \\cos \\\ (30^\\circ)) \\cdot d\\).<br>
                    \\[-5000 = -\\mu \\cdot (m \\cdot g \\cdot d) \\cdot \\cos \\\ (30^\\circ)\\]
                    \\[5000 = \\mu \\cdot 40000 \\cdot 0,866\\]
                    \\[\\mu = \\frac{5000}{34640} \\approx 0,144\\]
                    <span class='resultado'>Resultado: &nbsp \\( \\mu \\approx 0,14 \\)</span>
                </div>
            `
        }
    ],
    "elastica": [
        {
            titulo: "Problema 1: Muelle vertical",
            enunciado: "Al colgar un cuerpo de 10 kg de un muelle vertical se produce un alargamiento de 7,2 cm. Calcula: <br> </>a) La constante elástica del muelle. <br> b) La energía potencial elástica almacenada.",
            solucion: `
            `
        },
        {
            titulo: "Problema 2: Energía elástica y rozamiento",
            enunciado: "Un resorte de constante K = 4000 N/m se comprime una distancia de 0,4 m. Se apoya en él un objeto de 6 kg de masa. Se suelta el muelle y el objeto es lanzado en una superficie horizontal en la que la fuerza de rozamiento vale 27 N. Calcular: <br> a) la velocidad con que sale lanzado el objeto. <br> b) la distancia que recorre el objeto antes de pararse.",
            solucion: `
                <div class='paso'>
                    <strong>a) Cálculo de la velocidad de lanzamiento:</strong><br>
                    La energía potencial elástica almacenada en el muelle se transforma íntegramente en energía cinética (suponiendo que el muelle se suelta en el punto de equilibrio):<br>
                    \\[E_{pe} = \\frac{1}{2} \\cdot K \\cdot x^2 = \\frac{1}{2} \\cdot 4000 \\cdot (0,4)^2 = 320 \\text{ J}\\]
                    Igualamos a la energía cinética (\\(E_c = \\frac{1}{2} \\cdot m \\cdot v^2\\)) para despejar la velocidad:<br>
                    \\[320 = \\frac{1}{2} \\cdot 6 \\cdot v^2 \\implies v^2 = \\frac{320}{3} \\implies v = \\sqrt{106,67} \\approx 10,33 \\text{ m/s}\\]
                    <span class='resultado'>Resultado: &nbsp \\(v \\approx 10,3 \\text{ m/s}\\)</span>
                </div>
                <div class='paso'>
                    <strong>b) Distancia hasta detenerse:</strong><br>
                    El trabajo de la fuerza de rozamiento debe consumir toda la energía cinética del objeto hasta pararlo (\\(W_r = \\Delta E_c\\)):<br>
                    \\[W_r = F_r \\cdot x \\implies 320 = 27 \\cdot x\\]
                    \\[x = \\frac{320}{27} \\approx 11,85 \\text{ m}\\]
                    <span class='resultado'>Resultado: &nbsp \\(x = 11,85 \\text{ m}\\)</span>
                </div>
            `
        },
        {
            titulo: "Problema 3: Conservación de la energía y choques",
            enunciado: "En el sistema de la figura se tiene que \\(m_1 = 1 \\text{ kg}, h = 1 \\text{ m}, m_2 = 0,5 \\text{ kg}, K = 200 \\text{ N/m}\\), y el rozamiento es nulo. Al dejar suelta \\(m_1\\), cae y comprime el muelle. Calculad: <br> a) La velocidad de \\(m_1\\) al chocar con la otra masa y la máxima deformación del muelle. <br> b) Tras el choque, \\(m_1\\) y \\(m_2\\) salen despedidas juntas. Calculad con qué velocidad empezarán a subir, y hasta qué altura lo harán. <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/felas_2.png' style='width: 50rem; max-width: 100%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> ",
            solucion: `
                <div class='paso'>
                    <strong>a) Velocidad de choque y deformación:</strong><br>
                    La velocidad de \\(m_1\\) antes del choque se obtiene por conservación de energía mecánica:<br>
                    \\[m_1 \\cdot g \\cdot h = \\frac{1}{2} \\cdot m_1 \\cdot v^2 \\implies v = \\sqrt{2 \\cdot g \\cdot h} = \\sqrt{2 \\cdot 9,8 \\cdot 1} \\approx 4,43 \\text{ m/s}\\]
                    Para la deformación máxima, asumimos que tras el choque (que suele considerarse inelástico para que compriman juntos) la energía cinética del sistema se convierte en elástica. <br>
                    Primero hallamos la velocidad del conjunto (\\(v'\\)) por conservación del momento lineal:<br>
                    \\[m_1 \\cdot v = (m_1 + m_2) \\cdot v' \\implies 1 \\cdot 4,43 = 1,5 \\cdot v' \\implies v' \\approx 2,95 \\text{ m/s}\\]
                    Energía cinética del conjunto = Energía elástica máxima:<br>
                    \\[\\frac{1}{2} \\cdot (m_1 + m_2) \\cdot (v')^2 = \\frac{1}{2} \\cdot K \\cdot x^2\\]
                    \\[\\frac{1}{2} \\cdot (1,5) \\cdot (2,95)^2 = \\frac{1}{2} \\cdot 200 \\cdot x^2 \\implies 6,52 = 100 x^2 \\implies x \\approx 0,255 \\text{ m}\\]
                    <span class='resultado'>Resultados: &nbsp \\( v = 4,43 \\text{ m/s}\\); &nbsp \\(x = 0,255 \\text{ m}\\)</span>
                </div>
                <div class='paso'>
                    <strong>b) Velocidad de ascenso y altura máxima:</strong><br>
                    Como el enunciado indica que tras la compresión salen despedidas juntas y el rozamiento es nulo, la velocidad inicial de subida es la misma que calculamos tras el choque: \\(v' = 2,95 \\text{ m/s}\\).<br>
                    Para la altura final (\\(h'\\)), aplicamos de nuevo conservación de energía:<br>
                    \\[\\frac{1}{2} \\cdot M \\cdot (v')^2 = M \\cdot g \\cdot h' \\implies h' = \\frac{(v')^2}{2 \\cdot g}\\]
                    \\[h' = \\frac{2,95^2}{2 \\cdot 9,8} = \\frac{8,70}{19,6} \\approx 0,44 \\text{ m}\\]
                    <span class='resultado'>Resultados: &nbsp \\(v' = 2,95 \\text{ m/s}\\); &nbsp \\(h' = 0,44 \\text{ m}\\)</span>
                </div>
            `
        }

    ],
    "conservacion": [
        {
            titulo: "Problema 1: Altura en un plano inclinado",
            enunciado: "Un cuerpo se mueve a una velocidad de 72 km/h cuando se encuentra con un plano inclinado a 45º. Si la masa del cuerpo es de 10 kg y se supone que no existe rozamiento entre el cuerpo y el plano, halla la altura que alcanza el cuerpo sobre el plano hasta que se detiene. <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/conservacion_1.png' style='width: 50rem; max-width: 100%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> ",
            solucion:`<div class='paso'>
                    <strong>1. Conversión de unidades:</strong><br>
                    Convertimos la velocidad a m/s: &nbsp \\(v = 72 \\text{ km/h} = \\frac{72}{3,6} = 20 \\text{ m/s}\\).
                </div>
                <div class='paso'>
                    <strong>2. Cálculo de la energía cinética inicial:</strong><br>
                    \\[E_c = \\frac{1}{2} \\cdot m \\cdot v^2 = \\frac{1}{2} \\cdot 10 \\cdot 20^2 = 2000 \\text{ J}\\]
                </div>
                <div class='paso'>
                    <strong>3. Cálculo de la altura máxima (h):</strong><br>
                    La energía cinética se convierte completamente en energía potencial gravitatoria al alcanzar la altura máxima:<br>
                    \\[E_c = E_p \\implies \\frac{1}{2} \\cdot m \\cdot v^2 = m \\cdot g \\cdot h \\implies h = \\frac{v^2}{2 g} = \\frac{20^2}{2 \\cdot 9,8} = \\frac{400}{19,6} \\approx 20,41 \\text{ m}\\]
                    <span class='resultado'>Resultado: &nbsp h = 20,41 m</span>
                </div>
            `
        },
        {
            titulo: "Problema 2: Vagoneta en la montaña rusa",
            enunciado: "La vagoneta de la montaña rusa tiene una masa de 200 kg y se encuentra parado a la altura de 18 m. Cuando alcanza su punto más bajo (B) se encuentra a 3 metros de altura e inicia un looping con un diámetro de 6 m. Halla: <br> a) Energía mecánica de la vagoneta en los puntos A, B y C. <br> b) Velocidad de la vagoneta en los puntos B y C. <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/conservacion_2.png' style='width: 50rem; max-width: 100%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> ",
            solucion: `
                <div class='paso'>
                    <strong>a) Cálculo de la energía mecánica (\\(E_m\\)):</strong><br>
                    En el punto A, la vagoneta está parada, por lo que su energía cinética es cero y su energía potencial es máxima:<br>
                    \\[E_{mA} = m \\cdot g \\cdot h_A = 200 \\cdot 9,8 \\cdot 18 = 35280 \\text{ J}\\]
                    Como en nuestro sistema no existen rozamientos ni ningún aporte de energía externo se cumple el principio de conservación de la energía que enuncia que la energía se mantiene constante en todo momento. Por tanto, la energía mecánica en el punto A del cuerpo será la misma que la energía mecánica en los puntos B y C: <br>
                    \\[E_{mA} = E_{mB} = E_{mC} = 35280 \\text{ J}\\]
                    <span class='resultado'>Resultado: &nbsp E<sub>m</sub> = 35280 J</span>
                </div>
                <div class='paso'>                    
                    <strong>b) Cálculo de las velocidades en los puntos B y C:</strong><br>
                     La energía mecánica se conserva a lo largo del recorrido (sin rozamiento), por lo que:
                    \\[E_{mA} = E_{mB} = E_{mC}\\]
                    <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/conservacion_2_1.png' style='width: 50rem; max-width: 100%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br>
                    Para el punto B:<br>
                    \\[E_{mA} = E_{mB} \\hspace{0.25cm} \\rightarrow \\hspace{0.25cm} E_{mA} = \\frac{1}{2} \\cdot m \\cdot v_B^2 + m \\cdot g \\cdot h_B\\]
                    \\[35280 = \\frac{1}{2} \\cdot 200 \\cdot v_B^2 + 200 \\cdot 9,8 \\cdot 3\\]
                    \\[v_B^2 = \\frac{35280 - 200 \\cdot 9,8 \\cdot 3}{100} = 294\\]
                    \\[v_B = \\sqrt{294} \\approx 17,146 \\text{ m/s}\\]
                    Para el punto C (en la parte superior del looping):<br>
                    La altura en el punto C es la suma de la altura del punto B y el diámetro del looping: \\(h_C = 3 + 6 = 9 \\text{ m}\\).<br>
                    \\[35280 = \\frac{1}{2} \\cdot 200 \\cdot v_C^2 + 200 \\cdot 9,8 \\cdot 9\\]
                    \\[v_C^2 = \\frac{35280 - 200 \\cdot 9,8 \\cdot 9}{100} = 176,4\\]
                    \\[v_C = \\sqrt{176,4} \\approx 13,281 \\text{ m/s}\\]
                    <span class='resultado'>Resultados: &nbsp v<sub>B</sub> = 17,15 m/s; &nbsp; v<sub>C</sub> = 13,28 m/s</span>
            `
        },
        {
            titulo: "Problema 3. Tobogán acuático",
            enunciado: " Un deportista insensato se deja caer por un tobogán acuático. El tobogán tiene una longitud de 20 metros y presenta una inclinación de 45º. El deportista insensato tiene una masa de 75 kg. Dada la presencia de agua, el rozamiento se puede considerar despreciable. Determina: <br> a) La velocidad con la que llega al punto inferior del tobogán. <br> b) El trabajo desarrollado por la fuerza gravitatoria",
            solucion: `
                <div class='paso'>
                    <strong>a) Cálculo de la velocidad en el punto inferior:</strong><br>
                    La energía potencial inicial se convierte completamente en energía cinética al llegar al punto inferior (sin rozamiento):<br>
                    \\[E_p = E_c \\implies m \\cdot g \\cdot h = \\frac{1}{2} \\cdot m \\cdot v^2\\]
                    La altura (h) se calcula a partir de la longitud del tobogán y su inclinación: &nbsp  \\(h = L \\cdot sen \\\ (45^\\circ) = 20 \\cdot 0,7071 \\approx 14,14 \\text{ m}\\).<br>
                    Sustituyendo: \\[75 \\cdot 9,8 \\cdot 14,14 = \\frac{1}{2} \\cdot 75 \\cdot v^2\\]
                    \\[v^2 = \\frac{2 \\cdot 75 \\cdot 9,8 \\cdot 14,14}{75} = 2 \\cdot 9,8 \\cdot 14,14\\]
                    \\[v = \\sqrt{277,144} \\approx 16,647 \\text{ m/s}\\]
                    <span class='resultado'>Resultado: &nbsp v = 16,65 m/s</span>
                </div>
                <div class='paso'>
                    <strong>b) Cálculo del trabajo de la fuerza gravitatoria:</strong><br>
                    El trabajo realizado por la fuerza gravitatoria es igual a la variación de la energía potencial (que es negativa porque el deportista baja):<br>
                    \\[W = E_{pf} - E_{pi} = 0 - (m \\cdot g \\cdot h) = - (75 \\cdot 9,8 \\cdot 14,14) = - 10392,9 \\text{ J}\\]
                    <span class='resultado'>Resultado: &nbsp W = - 10393 J</span>
                </div>
            `
        },    
        {
            titulo: "Problema 4. Caida libre",
            enunciado: "Calcula la energía mecánica de un cuerpo de masa 200 g que cae libremente con una velocidad de 72 km/h y que se encuentra a una altura de 10 m. ¿Cuál será su energía cuando llegue al suelo? ¿Con qué velocidad lo hará? <br> Nota: Se considerarán en todo momento despreciables los rozamientos.",
            solucion: ` 
                <div class='paso'>
                    <strong>Cálculo de la energía mecánica inicial:</strong><br>
                    La energía mecánica inicial es la suma de la energía cinética y la energía potencial:<br>
                    \\[E_m = E_c + E_p = \\frac{1}{2} \\cdot m \\cdot v^2 + m \\cdot g \\cdot h\\]
                    Sustituyendo los valores: \\[E_m = \\frac{1}{2} \\cdot 0,2 \\cdot (20)^2 + 0,2 \\cdot 9,8 \\cdot 10\\]
                    \\[E_m = 40 + 19,6 = 59,6 \\text{ J}\\]
                    <span class='resultado'>Resultado: &nbsp E<sub>m</sub> = 59,6 J</span>
                </div>
                <div class='paso'>
                    <strong>Cálculo de la energía mecánica final:</strong><br>
                    Al llegar al suelo, la altura es cero, por lo que la energía potencial es cero. La energía mecánica final es igual a la energía cinética:<br>
                    \\[E_{mf} = E_{cf} = \\frac{1}{2} \\cdot m \\cdot v_f^2\\]
                    Como no hay rozamiento, la energía mecánica se conserva: \\[E_{mf} = E_{mi} = 59,6 \\text{ J}\\]
                    <span class='resultado'>Resultado: &nbsp E<sub>mf</sub> = 59,6 J</span>
                </div>
                <div class='paso'>
                    <strong>Cálculo de la velocidad final:</strong><br>
                    Despejando la velocidad de la ecuación de la energía cinética:<br>
                    \\[v_f = \\sqrt{\\frac{2 \\cdot E_{mf}}{m}}\\]
                    Sustituyendo: \\[v_f = \\sqrt{\\frac{2 \\cdot 59,6}{0,2}} = \\sqrt{596} \\approx 24,413\\text{ m/s}\\]
                    <span class='resultado'>Resultado: &nbsp v<sub>f</sub> = 24,41 m/s</span>
                </div>

            `
        }, 
        {
            titulo: "Problema 5. Lanzamiento vertical",
            enunciado: "¿Qué altura máxima puede alcanzar una pelota de masa m lanzada verticalmente hacia arriba desde el suelo con una velocidad de 12 m/s?",  
            solucion: ` 
                <div class='paso'>
                    Para resolver este problema, aplicamos el principio de conservación de la energía. La energía cinética inicial de la pelota se convierte completamente en energía potencial gravitatoria en el punto más alto de su trayectoria. Planteamos la ecuación de conservación de energía:
                    \\[E_{c0} = E_{pf}\\]
                    La energía cinética inicial es: \\(E_{c0} = \\frac{1}{2} \\cdot m \\cdot v^2 = \\frac{1}{2} \\cdot m \\cdot (12)^2 = 72 \\cdot m \\\ \\text{ J}\\).<br>
                    La energía potencial gravitatoria en la altura máxima es: \\(E_{pf} = m \\cdot g \\cdot h\\), donde \\(h\\) es la altura máxima que queremos encontrar.<br>
                    Igualando las energías:<br>
                    \\[72 \\cdot m = m \\cdot g \\cdot h\\]
                    Simplificando por la masa (que no es cero):<br>
                    \\[72 = g \\cdot h\\]
                    Despejando la altura máxima:<br>
                    \\[h = \\frac{72}{g} = \\frac{72}{9,8} \\approx 7,346 \\text{ m}\\]
                    <span class='resultado'>Resultado: &nbsp h = 7,35 m</span>
                </div>
            `

        }
        
    ],
    "no-conservativas": [
        {
            titulo: "Problema 1: Choque sobre un muelle horizontal",
            enunciado: "Un bloque de 5,0 kg choca con una velocidad de 10 \\( \\ce{m \\cdot s^{-1}} \\) contra un muelle de constante elástica \\( \\ce{ k = 25 \\\ N \\cdot m^{-1} } \\). El coeficiente de rozamiento entre el bloque y la superficie horizontal es 0,20. Calcula la longitud que se comprime el muelle. <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/no_cons_1.png' style='width: 50rem; max-width: 100%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> ",
            solucion: `<div class='paso'>
                    Para resolver este problema, aplicamos el principio de conservación de la energía teniendo en cuenta el trabajo realizado por la fuerza de rozamiento. La energía cinética inicial del bloque se convierte en energía potencial elástica almacenada en el muelle y el trabajo realizado por la fuerza de rozamiento. Planteamos la ecuación de conservación de energía:
                    \\[E_{c0} = E_{pe} + W_r\\]
                    La energía cinética inicial es: \\(\\\ E_{c0} = \\frac{1}{2} \\cdot m \\cdot v^2 = \\frac{1}{2} \\cdot 5 \\cdot 10^2 = 250 \\text{ J}\\).<br>
                    La energía potencial elástica almacenada en el muelle es: \\(\\\ E_{pe} = \\frac{1}{2} \\cdot k \\cdot x^2\\), donde \\(x\\) es la compresión del muelle que queremos encontrar.<br>
                    El trabajo realizado por la fuerza de rozamiento es: \\(\\\ W_r = F_r \\cdot d = \\mu \\cdot m \\cdot g \\cdot x\\), donde \\(d\\) es la distancia recorrida por el bloque, que en este caso es igual a la compresión del muelle (\\(x\\)).<br>
                    Sustituyendo en la ecuación de conservación de energía:<br>
                    \\[250 = \\frac{1}{2} \\cdot 25 \\cdot x^2 + 0,20 \\cdot 5 \\cdot 9,8 \\cdot x\\]
                    Simplificando:<br>
                    \\[250 = 12,5 \\cdot x^2 + 9,8 \\cdot x\\]
                    Reorganizando la ecuación para resolverla como una cuadrática:<br>
                    \\[12,5 \\cdot x^2 + 9,8 \\cdot x - 250 = 0\\]
                    Aplicando la fórmula cuadrática para encontrar las raíces de esta ecuación:<br>
                    \\[x = \\frac{-9,8 \\pm \\sqrt{(9,8)^2 - 4 \\cdot 12,5 \\cdot (-250)}}{2 \\cdot 12,5}\\]
                    Encontramos como soluciones:<br>
                    \\[x_1 = \\frac{-9,8 + 112,28}{25} \\approx 4,09 \\text{ m}\\]
                    \\[x_2 = \\frac{-9,8 - 112,28}{25} < 0\\] (despreciamos esta solución porque la compresión no puede ser negativa)<br>
                    <span class='resultado'>Resultado: &nbsp x = 4,09 m</span>
                </div>
            `
        },
                {
            titulo: "Problema 2: Pelota de pinball",
            enunciado: "Una pelota en un pinball es lanzada inicialmente por un muelle comprimido 2 cm. La constante del muelle es k = 3200 N/m. La pelota tiene una masa de 80 g. Sabiendo que el pinball tiene una inclinación de 15◦ y que el coeficiente de rozamiento entre la pelota y la superficie del pinball es 0,05, determina: <br> a) La velocidad con la que sale la pelota del muelle. <br> b) La altura que alcanza la pelota. <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/conservacion_5.png' style='width: 50rem; max-width: 100%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> ",
            solucion: `<div class='paso'>
                    <strong>a) Cálculo de la velocidad de lanzamiento:</strong><br>
                    La energía potencial elástica almacenada en el muelle se convierte en energía cinética al soltarlo (sin rozamiento):<br>
                    \\[E_{pe} = \\frac{1}{2} \\cdot k \\cdot x^2 = \\frac{1}{2} \\cdot 3200 \\cdot (0,02)^2 = 0,64 \\text{ J}\\]
                    Igualamos a la energía cinética para despejar la velocidad:<br>
                    \\[0,64 = \\frac{1}{2} \\cdot 0,08 \\cdot v^2\\]
                    \\[v^2 = \\frac{0,64}{0,04} = 16\\]
                    \\[v = 4 \\text{ m/s}\\]
                    <span class='resultado'>Resultado: &nbsp v = 4 m/s</span>
                </div>
                <div class='paso'>
                    <strong>b) Cálculo de la altura alcanzada:</strong><br>
                    La energía cinética inicial se convierte en energía potencial y trabajo de rozamiento al subir por el pinball. La altura máxima se alcanza cuando la velocidad es cero:<br>
                    \\[E_c = E_p + W_r\\]
                    La energía cinética inicial es: \\(E_c = 0,64 \\text{ J}\\).<br>
                    El trabajo de rozamiento se calcula como: \\(W_r = F_r \\cdot d\\), donde \\(F_r = \\mu \\cdot m \\cdot g \\cdot \\cos \\\ (15^\\circ)\\) y la distancia (d) se relaciona con la altura (h) por la inclinación: \\(\\\ d = \\frac{h}{sen \\\ (15^\\circ)}\\).<br>
                    Sustituyendo: \\[0,64 = m \\cdot g \\cdot h + \\mu \\cdot m \\cdot g \\cdot \\cos \\\ (15^\\circ) \\cdot \\frac{h}{ sen \\\ (15^\\circ)}\\]
                    \\[0,64 = 0,08 \\cdot 9,8 \\cdot h + 0,05 \\cdot 0,08 \\cdot 9,8 \\cdot h\\]
                    \\[0,64 = 0,08 \\cdot 9,8 \\cdot h (1 + 0,05)\\]
                    \\[h = \\frac{0,64}{0,08 \\cdot 9,8 \\cdot 1,05} \\approx 0,777 \\text{ m}\\]
                    <span class='resultado'>Resultado: &nbsp h = 0,78 m</span>
            `
        },
                {
            titulo: "Problema 3: Diseño de la montaña rusa",
            enunciado: "Un grupo de ingenieros está diseñando una montaña rusa para un parque de atracciones. Para ahorrar energía, los ingenieros quieren que los vagones suban el último tramo sin consumo eléctrico. El último tramo tiene una longitud de 10 metros y una inclinación de 60◦ sobre la horizontal. El rozamiento entre los raíles y los vagones es de μ = 0,1. Determina la velocidad con la que deben entrar los vagones en el plano inclinado para que estos lleguen a la parte superior con velocidad nula.", 
            solucion: `<div class='paso'>
                    Para que los vagones lleguen a la parte superior con velocidad nula, toda la energía cinética inicial debe ser consumida por el trabajo de la fuerza de rozamiento y la energía potencial ganada al subir el plano inclinado. Planteamos la ecuación de conservación de energía considerando ambos factores:
                    \\[E_{c0} = E_p + W_r\\]
                    La energía cinética inicial es: \\(E_{c0} = \\frac{1}{2} \\cdot m \\cdot v_0^2\\).<br>
                    La energía potencial ganada al subir el plano es: \\(E_p = m \\cdot g \\cdot h\\), donde la altura (h) se calcula a partir de la longitud del plano y su inclinación: \\(h = L \\cdot sen \\\ (60^\\circ) = 10 \\cdot 0,866 = 8,66 \\text{ m}\\).<br>
                    El trabajo de rozamiento es: \\(W_r = F_r \\cdot d \\cdot \\cos(180^\\circ) = - \\mu \\cdot m \\cdot g \\cdot \\cos \\\ (60^\\circ) \\cdot L\\).<br>
                    Sustituyendo en la ecuación de conservación de energía:<br>
                    \\[\\frac{1}{2} \\cdot m \\cdot v_0^2 = m \\cdot g \\cdot 8,66 + 0,1 \\cdot m \\cdot g \\cdot 0,5 \\cdot 10\\]
                    Simplificando la masa (m) y calculando los términos numéricos:<br>
                    \\[\\frac{1}{2} \\cdot v_0^2 = 9,8 \\cdot 8,66 + 0,1 \\cdot 9,8 \\cdot 0,5 \\cdot 10\\]
                    \\[\\frac{1}{2} \\cdot v_0^2 = 84,868 + 4,9\\]
                    \\[\\frac{1}{2} \\cdot v_0^2 = 89,768\\]
                    \\[v_0^2 = 179,536\\]
                    \\[v_0 = \\sqrt{179,536} \\approx 13,39 \\text{ m/s}\\]
                    <span class='resultado'>Resultado: &nbsp v<sub>0</sub> = 13,39 m/s</span>
                </div>
            `
        },
        {

            titulo: "Problema 4: Chica en el trineo",
            enunciado: "Una chica se deja caer con su trineo por una ladera nevada inclinada 30◦ sobre la horizontal. Cuando recorre 30 metros entra en un lago helado y desliza por su superficie hasta que choca con un muelle que amortigua su impacto. La masa de la chica es de 70 kg y la del trineo 10 kg. El coeficiente de rozamiento con la nieve es μ = 0,2 y prácticamente nulo con la superficie del lado helado. Determina: <br> a) La energía perdida por rozamiento. <br> b) La velocidad con la que llega a la superficie del lago. <br> c) La compresión del muelle, sabiendo que su constante elástica es k = 10 kN/m. <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/conservacion_7.png' style='width: 50rem; max-width: 100%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> ",
            solucion: `<div class='paso'>
                    <strong>a) Cálculo de la energía perdida por rozamiento:</strong><br>
                    El trabajo realizado por la fuerza de rozamiento es: \\(W_r = F_r \\cdot d \\cdot \\cos  \\\ (180^\\circ) =  - \\mu \\cdot N \\cdot d = - \\mu \\cdot m \\cdot g \\cdot \\cos \\\ (30^\\circ) \\cdot d \\).<br>
                    La masa total del sistema chica + trineo es: &nbsp m = 70 + 10 = 80 kg.<br>
                    Sustituyendo: \\[W_r = - 0,2 \\cdot 80 \\cdot 9,8 \\cdot \\cos \\\ (30^\\circ) \\cdot 30 \\approx - 4073,78 \\text{ J}\\]
                    <span class='resultado'>Resultado: &nbsp W<sub>r</sub> = - 4074 J</span>
                </div>
                <div class='paso'>
                    <strong>b) Cálculo de la velocidad al llegar al lago:</strong><br>
                    La energía cinética al llegar al lago se obtiene restando la energía perdida por rozamiento a la energía potencial inicial (que se convierte en cinética):<br>
                    \\[E_c = m \\cdot g \\cdot h - W_r\\]
                    La altura (h) se calcula a partir de la longitud del recorrido y su inclinación: &nbsp; \\( h = 30 \\cdot sen \\\ (30^\\circ) = 30 \\cdot 0,5 = 15 \\text{ m}\\).<br>
                    Sustituyendo: \\[E_c = 80 \\cdot 9,8 \\cdot 15 - 4074 = 11760 - 4074 = 7686 \\text{ J}\\]
                    Igualamos a la energía cinética para despejar la velocidad:<br>
                    \\[7686 = \\frac{1}{2} \\cdot 80 \\cdot v^2\\]
                    \\[v^2 = \\frac{7686}{40} = 192,15\\]
                    \\[v = \\sqrt{192,15} \\approx 13,86 \\text{ m/s}\\]
                    <span class='resultado'>Resultado: &nbsp; v = 13,86 m/s</span>
                </div>
                <div class='paso'>
                    <strong>c) Cálculo de la compresión del muelle:</strong><br>
                    La energía cinética al llegar al muelle se convierte completamente en energía potencial elástica almacenada en el muelle (sin rozamiento):<br>
                    \\[E_c = E_{pe} \\implies \\frac{1}{2} \\cdot m \\cdot v^2 = \\frac{1}{2} \\cdot k \\cdot x^2\\]
                    Sustituyendo los valores: \\[\\frac{1}{2} \\cdot 80 \\cdot 13,86^2 = \\frac{1}{2} \\cdot 10000 \\cdot x^2\\]
                    \\[7686 = 5000 \\cdot x^2\\]
                    \\[x^2 = \\frac{7686}{5000} = 1,5372\\]
                    \\[x = \\sqrt{1,5372} \\approx 1,239 \\text{ m}\\]
                    <span class='resultado'>Resultado: &nbsp; x = 1,24 m</span>  
            `
        },
        {
            titulo: "Problema 5: Esclavo en Antiguo Egipto",
            enunciado: "Un esclavo en el Antiguo Egipto está probando la rampa que acaba de instalar. Para ello lanza su escarabeo, un amuleto símbolo de la resurrección de 30 g, sobre la rampa a una velocidad de 5 m/s. Este plano está inclinado 45º y tiene un coeficiente de rozamiento de µ = 0,1. Determina: <br> a) La altura máxima alcanzada. <br> b) La velocidad con la que vuelve a su posición inicial.",
            solucion: `<div class='paso'>
                    <strong>a) Cálculo de la altura máxima:</strong><br>
                    La energía cinética inicial se convierte en energía potencial y trabajo de rozamiento al subir por la rampa. La altura máxima se alcanza cuando la velocidad es cero:<br>
                    \\[E_c = E_p + W_r\\]
                    La energía cinética inicial es: \\(E_c = \\frac{1}{2} \\cdot m \\cdot v^2 = \\frac{1}{2} \\cdot 0,03 \\cdot 5^2 = 0,375 \\text{ J}\\).<br>
                    El trabajo de rozamiento se calcula como: \\(W_r = F_r \\cdot d\\), donde \\(F_r = \\mu \\cdot m \\cdot g \\cdot \\cos \\\ (45^\\circ)\\) y la distancia (d) se relaciona con la altura (h) por la inclinación: \\(d = \\frac{h}{sen \\\ (45^\\circ)}\\).<br>
                    Sustituyendo: \\[0,375 = m \\cdot g \\cdot h + \\mu \\cdot m \\cdot g \\cdot \\cos \\\ (45^\\circ) \\cdot \\frac{h}{sen \\\ (45^\\circ)}\\]
                    \\[0,375 = 0,03 \\cdot 9,8 \\cdot h + 0,1 \\cdot 0,03 \\cdot 9,8 \\cdot h\\]
                    \\[0,375 = 0,03 \\cdot 9,8 \\cdot h (1 + 0,1)\\]
                    \\[h = \\frac{0,375}{0,03 \\cdot 9,8 \\cdot 1,1} \\approx 1,157 \\text{ m}\\]
                    <span class='resultado'>Resultado: &nbsp h = 1,16 m</span>
                </div>
                <div class='paso'>
                    <strong>b) Ahora analizamos el viaje completo (ida y vuelta). </strong><br>
                    El escarabeo sale con una energía y regresa con menos porque el rozamiento ha actuado durante toda la distancia (2⋅d).
                    <br> Distancia recorrida sobre la rampa (d): \\( \\\ d = \\frac{h}{sen \\\ (45^\\circ)} = \\frac{1,16}{0,707} \\approx 1,64 \\text{ m} \\)
                    <br> Distancia total recorrida (dtotal​): &nbsp 2⋅1,64 = 3,28 m
                    <br> Planteamos la energía desde el inicio hasta el regreso al suelo:
                    \\[E_{C_{inicial}} + W_{R_{total}} = E_{C_{final}}\\]
                    \\[\\frac{1}{2} \\cdot m \\cdot v_0^2 - (\\mu \\cdot m \\cdot g \\cdot \\cos \\\ (45^\\circ)) \\cdot (2d) = \\frac{1}{2} \\cdot m \\cdot v_f^2\\]
                    <br> Simplificamos la masa (m) y multiplicamos todo por 2 para despejar \\(v_f\\):
                    \\[v_0^2 - 2 \\cdot \\mu \\cdot g \\cdot \\cos \\\ (45^\\circ) \\cdot (2d) = v_f^2\\] 
                    \\[5^2 - 2 \\cdot 0,1 \\cdot 9,8 \\cdot \\cos \\\ (45^\\circ) \\cdot 3,28 = v_f^2\\]
                    \\[25 - 4,54 = v_f^2\\]
                    \\[v_f = \\sqrt{20,46} \\approx 4,52 \\text{ m/s}\\]
                    <span class='resultado'>Resultado: &nbsp v = 4,52 m/s</span>   
            `
        }
    ]
};
