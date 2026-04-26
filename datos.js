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

    ]
};
