const baseDatosProblemas = {
    "ficha1": [
        {
            titulo: "Problema 1: Definiciones básicas de cinemática",
            enunciado: "Con la ayuda del documento de teoría, explica con tus propias palabras los siguientes terminos: <br> a) &nbsp Sistema de referencia. <br> b) &nbsp Trayectoria de un móvil. <br> c) &nbsp Velocidad. <br> d) &nbsp Movimiento rectilíneo uniforme. <br> e) &nbsp Movimiento rectilíneo uniformente acelerado.",
            solucion: `<div class='paso'>
                <strong>a) Sistema de referencia:</strong><br>
                Un sistema de referencia es un conjunto de objetos o puntos que se utilizan para describir la posición y el movimiento de otros objetos. Es como un marco de coordenadas que nos permite medir y comparar las posiciones y movimientos de los objetos en el espacio. Por ejemplo, si estamos en un coche en movimiento, el sistema de referencia podría ser el propio coche, y podríamos describir el movimiento de otros objetos (como árboles o edificios) en relación a ese sistema.
            </div>
            <div class='paso'>
                <strong>b) Trayectoria de un móvil:</strong><br>
                La trayectoria de un móvil es el camino que sigue un objeto en movimiento a lo largo del tiempo. Es la línea imaginaria que conecta todas las posiciones sucesivas del objeto mientras se mueve. Por ejemplo, si lanzamos una pelota al aire, su trayectoria sería la curva que describe desde el punto de lanzamiento hasta el punto donde cae al suelo.
            </div>
            <div class='paso'>
                <strong>c) Velocidad:</strong><br>
                La velocidad es una magnitud física que describe la rapidez con la que un objeto se mueve en una dirección específica. Se define como el cambio de posición de un objeto por unidad de tiempo. La velocidad se expresa comúnmente en metros por segundo (m/s) o kilómetros por hora (km/h). Por ejemplo, si un coche recorre 100 kilómetros en 2 horas, su velocidad sería de 50 km/h.
            </div>
            <div class='paso'>
                <strong>d) Movimiento rectilíneo uniforme:</strong><br>
                El movimiento rectilíneo uniforme es un tipo de movimiento en el que un objeto se desplaza a lo largo de una línea recta con una velocidad constante. Esto significa que el objeto recorre distancias iguales en intervalos de tiempo iguales. Por ejemplo, si un tren se mueve a una velocidad constante de 80 km/h, está realizando un movimiento rectilíneo uniforme.
            </div>
            <div class='paso'>
                <strong>e) Movimiento rectilíneo uniformemente acelerado:</strong><br>
                El movimiento rectilíneo uniformemente acelerado es un tipo de movimiento en el que un objeto se desplaza a lo largo de una línea recta con una aceleración constante. Esto significa que la velocidad del objeto cambia de manera uniforme con el tiempo. Por ejemplo, si un coche acelera desde el reposo hasta alcanzar una velocidad de 60 km/h en 5 segundos, está realizando un movimiento rectilíneo uniformemente acelerado.
            </div>
             `
        }, 
        {
            titulo: "Problema 2: Conversión de unidades de velocidad",
            enunciado: "Pasar de unidades las siguientes velocidades usando factores de conversión: <br> a) de 36 km/h a m/s. <br> b) de 10 m/s a km/h. <br> c) de 50 m/min a km/h.",
            solucion: `<div class='paso'>
                <strong>a) Conversión de 36 km/h a m/s:</strong><br>
                Para convertir de kilómetros por hora a metros por segundo, utilizamos el factor de conversión: 1 km/h = 0.27778 m/s.<br>
                \\[36 \\text{ km/h} \\times 0.27778 \\text{ m/s por km/h} = 10 \\text{ m/s}\\]
                <span class='resultado'>Resultado: &nbsp 36 km/h = 10 m/s</span>
            </div>
            <div class='paso'>
                <strong>b) Conversión de 10 m/s a km/h:</strong><br>
                Para convertir de metros por segundo a kilómetros por hora, utilizamos el factor de conversión: 1 m/s = 3.6 km/h.<br>
                \\[10 \\text{ m/s} \\times 3.6 \\text{ km/h por m/s} = 36 \\text{ km/h}\\]
                <span class='resultado'>Resultado: &nbsp 10 m/s = 36 km/h</span>
            </div>
            <div class='paso'>
                <strong>c) Conversión de 50 m/min a km/h:</strong><br>
                Para convertir de metros por minuto a kilómetros por hora, primero convertimos metros por minuto a metros por segundo, y luego a kilómetros por hora.<br>
                \\[50 \\text{ m/min} \\times \\frac{1 \\text{ min}}{60 \\text{ s}} = 0.8333 \\text{ m/s}\\]
                Luego, convertimos metros por segundo a kilómetros por hora:<br>
                \\[0.8333 \\text{ m/s} \\times 3.6 \\text{ km/h por m/s} = 3 \\text{ km/h}\\]
                <span class='resultado'>Resultado: &nbsp 50 m/min = 3 km/h</span>
            </div> 
            `
        },
        {
            titulo: "Problema 3: Análisis de un gráfico de posición-tiempo",
            enunciado: "El gráfico muestra la posición de cuatro automóviles en función del tiempo. Observa y responde: <br> a) ¿Cuál comienza su movimiento en el origen del sistema de referencia? <br> b) ¿Cuál se mueve con una velocidad menor? ¿Y mayor? <br> c) ¿Qué móvil avanza hacia el origen? <br> d) ¿Qué móviles se desplazan con velocidad parecida? <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/ficha1_3.png' style='width: 30rem; max-width: 100%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> ",
            solucion: `<div class='paso'>
                <strong>a) Móvil que comienza en el origen:</strong><br>
                El móvil que comienza su movimiento en el origen del sistema de referencia es el móvil A, ya que su posición inicial es 0 metros en el tiempo 0 segundos.
            </div>
            <div class='paso'>
                <strong>b) Velocidad menor y mayor:</strong><br>
                El móvil con la velocidad menor es el móvil D, ya que su pendiente es la más baja en el gráfico. El móvil con la velocidad mayor es el móvil B, ya que su pendiente es la más alta.
            </div>
            <div class='paso'>
                <strong>c) Móvil que avanza hacia el origen:</strong><br>
                El móvil C avanza hacia el origen, ya que su posición disminuye con el tiempo, lo que indica que se está moviendo en dirección opuesta al origen.
            </div>
            <div class='paso'>
                <strong>d) Móviles con velocidad parecida:</strong><br>
                Los móviles A y D se desplazan con velocidades parecidas, ya que sus pendientes son similares en el gráfico, lo que indica que recorren distancias similares en intervalos de tiempo similares.
            </div>
               
            `
        },
        {
            titulo: "Problema 4: Análisis de gráficos de posición-tiempo y velocidad-tiempo",
            enunciado: "De las gráficas de la figura, ¿cuáles corresponden a un MRU? ¿Cuáles a un MRUA? ¿Por qué? ¿Hay alguna gráfica que no corresponda a ninguno de los movimientos? ¿Por qué? <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/ficha1_4.png' style='width: 50rem; max-width: 100%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> ",
            solucion: `<div class='paso'>
                <strong>Gráficas de MRU:</strong><br>
                Las gráficas que corresponden a un Movimiento Rectilíneo Uniforme (MRU) son la gráfica 1 (posición-tiempo) y la gráfica 4 (velocidad-tiempo). En la gráfica 1, la posición aumenta de manera lineal con el tiempo, lo que indica una velocidad constante. En la gráfica 4, la velocidad es constante a lo largo del tiempo, lo que también es característico de un MRU.
            </div>
            <div class='paso'>
                <strong>Gráficas de MRUA:</strong><br>
                Las gráficas que corresponden a un Movimiento Rectilíneo Uniformemente Acelerado (MRUA) son la gráfica 2 (posición-tiempo) y la gráfica 3 (velocidad-tiempo). En la gráfica 2, la posición aumenta de manera no lineal con el tiempo, lo que indica una aceleración constante. En la gráfica 3, la velocidad aumenta de manera lineal con el tiempo, lo que también es característico de un MRUA.
            </div>
            <div class='paso'>
                <strong>Gráfica que no corresponde a ningún movimiento:</strong><br>
                La gráfica 5 (posición-tiempo) no corresponde a ningún movimiento físico real, ya que muestra una posición que cambia de manera abrupta y no continua, lo que no es posible en un movimiento real. Esto podría representar un error en la medición o un fenómeno no físico.
            </div>  
            `
        }
    ],
    "ficha2": [
        {
            titulo: "Problema 1: Cálculo de distancia y tiempo con velocidad constante",
            enunciado: "Un coche sale de Madrid a una velocidad de 12 m/s. Si tarda 100 min en llegar a su destino, ¿a qué distancia está éste? Si el pueblo al que se dirige estuviera a 12 km, ¿cuánto tardaría?",
            solucion: ` <div class='paso'>
                <strong>1. Cálculo de la distancia:</strong><br>
                Para calcular la distancia recorrida por el coche, utilizamos la fórmula de la velocidad: \\(v = \\frac{d}{t}\\), donde \\(v\\) es la velocidad, \\(d\\) es la distancia y \\(t\\) es el tiempo. Primero, convertimos el tiempo de minutos a segundos: \\(100 \\text{ min} = 6000 \\text{ s}\\). Luego, despejamos la distancia: \\[d = v \\cdot t = 12 \\text{ m/s} \\cdot 6000 \\text{ s} = 72000 \\text{ m} = 72 \\text{ km}\\].
            </div>
            <div class='paso'>
                <strong>2. Cálculo del tiempo para recorrer 12 km:</strong><br>
                Para calcular el tiempo que tardaría en recorrer 12 km, utilizamos nuevamente la fórmula de la velocidad: \\(v = \\frac{d}{t}\\). Despejamos el tiempo: \\[t = \\frac{d}{v} = \\frac{12000 \\text{ m}}{12 \\text{ m/s}} = 1000 \\text{ s} = 16,67 \\text{ min}\\].
            </div>
            `
        },
        {
            titulo: "Problema 2: Cálculo de distancia del Sol a la Tierra",
            enunciado: "La velocidad de la luz en el vacío es 300 000 km/s. La luz del Sol tarda en llegar a la Tierra 8 minutos 20 segundos. ¿Cuál es la distancia del Sol a la Tierra?",
            solucion: ` <div class='paso'>
                <strong>1. Cálculo de la distancia:</strong><br>
                Para calcular la distancia del Sol a la Tierra, utilizamos la fórmula de la velocidad: \\(v = \\frac{d}{t}\\), donde \\(v\\) es la velocidad, \\(d\\) es la distancia y \\(t\\) es el tiempo. Primero, convertimos el tiempo de minutos y segundos a segundos: \\(8 \\text{ min} 20 \\text{ s} = 500 \\text{ s}\\). Luego, despejamos la distancia: \\[d = v \\cdot t = 300000 \\text{ km/s} \\cdot 500 \\text{ s} = 150000000 \\text{ km}\\].
            </div>

            `
        },
        {
            titulo: "Problema 3: Cálculo de distancia y tiempo con velocidad constante",
            enunciado: "Un automóvil lleva una velocidad constante de 126 km/h en una autopista. ¿Qué distancia recorre en 1 segundo? ¿Qué tiempo emplea en recorrer 100 m?",
            solucion: `<div class='paso'>
                <strong>1. Cálculo de la distancia recorrida en 1 segundo:</strong><br>
                Para calcular la distancia recorrida en 1 segundo, primero convertimos la velocidad de km/h a m/s: \\(126 \\text{ km/h} = 35 \\text{ m/s}\\). Luego, utilizamos la fórmula de la velocidad: \\(v = \\frac{d}{t}\\). Despejamos la distancia para un tiempo de 1 segundo: \\[d = v \\cdot t = 35 \\text{ m/s} \\cdot 1 \\text{ s} = 35 \\text{ m}\\].
            </div>
            <div class='paso'>
                <strong>2. Cálculo del tiempo para recorrer 100 m:</strong><br>
                Para calcular el tiempo que tarda en recorrer 100 m, utilizamos nuevamente la fórmula de la velocidad: \\(v = \\frac{d}{t}\\). Despejamos el tiempo: \\[t = \\frac{d}{v} = \\frac{100 \\text{ m}}{35 \\text{ m/s}} \\approx 2,86 \\text{ s}\\].
            </div>
            `
        },
        {
            titulo: "Problema 4: Análisis de un gráfico de posición-tiempo",
            enunciado: "En el movimiento de un cuerpo se ha obtenido la siguiente gráfica: <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/ficha2_4.png' style='width: 50rem; max-width: 100%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br> a) Explica qué clase de movimiento ha tenido. <br> b) Calcula la distancia total recorrida. <br> c) Dibuja el grá co v-t. <br> d) Calcula la velocidad media en el recorrido total. ",
            solucion: `<div class='paso'>
                <strong>a) Tipo de movimiento:</strong><br>
                El gráfico muestra una posición que aumenta de manera no lineal con el tiempo, lo que indica que el cuerpo está experimentando una aceleración constante. Por lo tanto, el movimiento es un Movimiento Rectilíneo Uniformemente Acelerado (MRUA).
            </div>
            <div class='paso'>
                <strong>b) Cálculo de la distancia total recorrida:</strong><br>
                Para calcular la distancia total recorrida, podemos utilizar la fórmula del MRUA: \\[d = v_0 \\cdot t + \\frac{1}{2} \\cdot a \\cdot t^2\\]. Sin embargo, como no se proporcionan valores específicos para la velocidad inicial (\\(v_0\\)) y la aceleración (\\(a\\)), no podemos calcular la distancia exacta sin más información.
            </div>
            <div class='paso'>
                <strong>c) Dibujo del gráfico v-t:</strong><br>
                Para dibujar el gráfico de velocidad-tiempo (v-t), necesitamos conocer la velocidad inicial y la aceleración. Sin esta información, no podemos dibujar el gráfico con precisión. Sin embargo, en un MRUA, el gráfico v-t sería una línea recta que comienza en la velocidad inicial y aumenta de manera lineal con el tiempo debido a la aceleración constante.
            </div>
            <div class='paso'>
                <strong>d) Cálculo de la velocidad media:</strong><br>
                La velocidad media (\\(v_{media}\\)) se calcula como la distancia total recorrida dividida por el tiempo total: \\[v_{media} = \\frac{d}{t}\\]. Sin conocer la distancia total recorrida, no podemos calcular la velocidad media con precisión. Sin embargo, si tuviéramos la distancia total, podríamos usar el tiempo total para obtener la velocidad media.  
            
            `
        },
        {
            titulo: "Problema 5: Cálculo de velocidad media",
            enunciado: "Determina la velocidad media de un tren que ha recorrido 257 km en 1 h 28 min.",
            solucion: `
                <div class='paso'>
                    <strong>1. Conversión de tiempo a horas:</strong><br>
                    Primero, convertimos el tiempo de horas y minutos a horas decimales: \\(1 \\text{ h} 28 \\text{ min} = 1 + \\frac{28}{60} = 1,467 \\text{ h}\\).
                </div>
                <div class='paso'>
                    <strong>2. Cálculo de la velocidad media:</strong><br>
                    La velocidad media se calcula como la distancia total dividida por el tiempo total: \\[v_{media} = \\frac{d}{t} = \\frac{257 \\text{ km}}{1,467 \\text{ h}} \\approx 175,2 \\text{ km/h}\\].
                    <span class='resultado'>Resultado: &nbsp \\(v_{media} \\approx 175,2 \\text{ km/h}\\)</span>
                </div>  
            `
        },
        {
            titulo: "Problema 6: Comparación de velocidades a partir de gráficos",
            enunciado: "Las gráficas de la figura representan el comportamiento de dos móviles. Razona cuál de ellos se mueve a mayor velocidad. <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/ficha2_6.png' style='width: 50rem; max-width: 100%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> ",
            solucion: `
                <div class='paso'>
                    <strong>Comparación de velocidades:</strong><br>
                    Para comparar las velocidades de los dos móviles, debemos observar la pendiente de las gráficas de posición-tiempo. El móvil con la pendiente más pronunciada se mueve a mayor velocidad. En este caso, el móvil A tiene una pendiente más pronunciada que el móvil B, lo que indica que el móvil A se mueve a mayor velocidad que el móvil B.
                </div> 
            `
        }
    ],
    "ficha3": [
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
            titulo: "Problema 3: Diseño de la montaña rusa por ingenieros",
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
