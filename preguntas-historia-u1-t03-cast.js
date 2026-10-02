const NIVELES_T03 = [
  {
    "nivel": 1,
    "nombre": "Conceptos básicos",
    "descripcion": "Reconocer términos, datos y protagonistas.",
    "preguntas": [
      [
        "¿Qué regulaba muchas actividades artesanales?",
        [
          "Los gremios de artesanos",
          "Las compañías ferroviarias",
          "Los bancos centrales",
          "Los convertidores de acero"
        ],
        0,
        "Los gremios regulaban oficios y actividades de producción artesanal."
      ],
      [
        "¿Dónde trabajaba habitualmente el artesano?",
        [
          "En una estación de tren",
          "En un gran alto horno",
          "En una bolsa de valores",
          "En su taller artesanal"
        ],
        3,
        "El taller caracteriza el modelo artesanal, aunque existían situaciones diversas."
      ],
      [
        "¿Cuándo se extendió el sistema doméstico del temario?",
        [
          "Solo desde el siglo XX",
          "Solo después de 1900",
          "Desde el siglo XVII",
          "Desde el siglo XIII"
        ],
        2,
        "El libro sitúa esa expansión desde el XVII, antes de las fábricas industriales."
      ],
      [
        "¿Quién entregaba materias en el sistema doméstico?",
        [
          "Un médico de la fábrica",
          "Un comerciante que coordinaba la venta",
          "Un maquinista ferroviario",
          "Un operario del convertidor"
        ],
        1,
        "El comerciante suministraba materias y recogía productos para venderlos."
      ],
      [
        "¿Dónde se trabajaba en el domestic system?",
        [
          "En casas dispersas del medio rural",
          "En una fábrica central",
          "En una estación portuaria",
          "En un banco comercial"
        ],
        0,
        "La producción estaba dispersa entre hogares rurales."
      ],
      [
        "¿Qué recibían los productores domésticos?",
        [
          "Siempre la propiedad de la empresa",
          "Todos los beneficios del comercio",
          "Solo productos para autoconsumo",
          "Una remuneración por su trabajo"
        ],
        3,
        "Trabajaban a cambio de una remuneración; no controlaban todo el negocio."
      ],
      [
        "¿Cuál era el destino comercial del producto doméstico?",
        [
          "Para transformarlas en mineral",
          "Para abandonar toda producción",
          "Para venderlas",
          "Para prohibir su venta"
        ],
        2,
        "Trabajar en casa no significa producir solo para el propio consumo."
      ],
      [
        "¿Qué concentra el sistema fabril?",
        [
          "Exclusivamente actividades agrícolas",
          "Trabajadores y medios de producción",
          "Solo materias repartidas entre hogares",
          "Solo tiendas sin producción propia"
        ],
        1,
        "La fábrica reúne maquinaria, energía y mano de obra."
      ],
      [
        "¿Cuándo se extendieron las primeras fábricas industriales?",
        [
          "La Primera Revolución Industrial",
          "La expansión medieval de los gremios",
          "La invención de Internet",
          "La revolución digital del siglo XXI"
        ],
        0,
        "El sistema fabril caracteriza el proceso de industrialización."
      ],
      [
        "¿Qué es la mecanización?",
        [
          "Reparto de beneficios entre socios",
          "Trabajo exclusivamente en casa",
          "Venta de productos sin fabricarlos",
          "Uso de máquinas en operaciones productivas"
        ],
        3,
        "Mecanizar incorpora máquinas; no equivale por sí solo a dividir tareas."
      ],
      [
        "¿Qué es la división del trabajo?",
        [
          "Eliminación de cualquier horario",
          "Sustitución de máquinas por gremios",
          "Reparto especializado de fases productivas",
          "Reparto igual de todas las ganancias"
        ],
        2,
        "Especializarse en una fase es distinto de repartir beneficios."
      ],
      [
        "¿Qué fuente energética se extendió en la fábrica?",
        [
          "La gasolina de automóviles",
          "El vapor",
          "La electricidad solar moderna",
          "El combustible nuclear"
        ],
        1,
        "El agua y, progresivamente, el vapor movieron maquinaria."
      ],
      [
        "¿Cómo se controlaba el trabajo fabril?",
        [
          "Disciplina laboral",
          "Autonomía total del artesano",
          "Ausencia de supervisión empresarial",
          "Trabajo doméstico sin edificio común"
        ],
        0,
        "La concentración permitía vigilar horarios y ritmos."
      ],
      [
        "¿Qué es producir en serie?",
        [
          "Fabricación de una única obra irrepetible",
          "Cultivo alterno de cuatro especies",
          "Extracción artesanal de un solo mineral",
          "Repetir muchas unidades del mismo producto"
        ],
        3,
        "El sistema fabril favoreció grandes cantidades de productos repetidos."
      ],
      [
        "¿Qué coste pudo reducir la fábrica?",
        [
          "Necesariamente todos los salarios",
          "Automáticamente cualquier impuesto",
          "El coste por unidad",
          "Siempre todo gasto total"
        ],
        2,
        "Mayor eficiencia puede abaratar cada unidad sin eliminar todos los gastos."
      ],
      [
        "¿Qué perdió parte de la mano de obra?",
        [
          "Solo el número de compradores urbanos",
          "Autonomía laboral",
          "Necesariamente todo conocimiento técnico",
          "La existencia de cualquier remuneración"
        ],
        1,
        "El control empresarial limitaba decisiones sobre tiempo y proceso."
      ],
      [
        "¿Qué exige coordinar varias fases?",
        [
          "Organización del proceso",
          "Ausencia total de planificación",
          "Eliminar todas las materias primas",
          "Volver obligatoriamente al autoconsumo"
        ],
        0,
        "Las fases deben abastecerse entre sí para evitar interrupciones."
      ],
      [
        "¿Qué representa Masson Mill en el temario?",
        [
          "Una casa gremial medieval española",
          "Una estación ferroviaria francesa",
          "Una plantación americana de algodón",
          "Una antigua fábrica textil en Inglaterra"
        ],
        3,
        "La fotografía muestra un edificio industrial de Inglaterra."
      ],
      [
        "¿Qué requería adquirir maquinaria?",
        [
          "Solo permiso del telar",
          "Únicamente algodón terminado",
          "Capital",
          "Solo fuerza muscular"
        ],
        2,
        "Las máquinas y su mantenimiento necesitaban inversión."
      ],
      [
        "¿Qué modelos podían convivir?",
        [
          "Únicamente talleres sin comerciantes",
          "Artesanal, doméstico y fabril",
          "Solo el fabril desde el primer día",
          "Solo el doméstico tras la mecanización"
        ],
        1,
        "La transición no sustituyó instantáneamente todas las formas anteriores."
      ]
    ]
  },
  {
    "nivel": 2,
    "nombre": "Comprensión",
    "descripcion": "Identificar conceptos en situaciones concretas.",
    "preguntas": [
      [
        "¿Qué organización establecía normas del oficio y aprendizaje?",
        [
          "Los gremios de artesanos",
          "Las compañías ferroviarias",
          "Los bancos centrales",
          "Los convertidores de acero"
        ],
        0,
        "Los gremios regulaban oficios y actividades de producción artesanal."
      ],
      [
        "Un productor trabaja manualmente en un pequeño local. ¿Qué lugar es típico?",
        [
          "En una estación de tren",
          "En un gran alto horno",
          "En una bolsa de valores",
          "En su taller artesanal"
        ],
        3,
        "El taller caracteriza el modelo artesanal, aunque existían situaciones diversas."
      ],
      [
        "¿Qué siglo marca el comienzo de la entrega de materias a familias rurales?",
        [
          "Solo desde el siglo XX",
          "Solo después de 1900",
          "Desde el siglo XVII",
          "Desde el siglo XIII"
        ],
        2,
        "El libro sitúa esa expansión desde el XVII, antes de las fábricas industriales."
      ],
      [
        "Varias familias reciben lana de un intermediario. ¿Quién coordina?",
        [
          "Un médico de la fábrica",
          "Un comerciante que coordinaba la venta",
          "Un maquinista ferroviario",
          "Un operario del convertidor"
        ],
        1,
        "El comerciante suministraba materias y recogía productos para venderlos."
      ],
      [
        "Una familia transforma lana sin acudir a un edificio común. ¿Dónde trabaja?",
        [
          "En casas dispersas del medio rural",
          "En una fábrica central",
          "En una estación portuaria",
          "En un banco comercial"
        ],
        0,
        "La producción estaba dispersa entre hogares rurales."
      ],
      [
        "Tras transformar materias para un comerciante, ¿qué obtenían por su trabajo?",
        [
          "Siempre la propiedad de la empresa",
          "Todos los beneficios del comercio",
          "Solo productos para autoconsumo",
          "Una remuneración por su trabajo"
        ],
        3,
        "Trabajaban a cambio de una remuneración; no controlaban todo el negocio."
      ],
      [
        "El comerciante recoge manufacturas de muchas casas. ¿Para qué?",
        [
          "Para transformarlas en mineral",
          "Para abandonar toda producción",
          "Para venderlas",
          "Para prohibir su venta"
        ],
        2,
        "Trabajar en casa no significa producir solo para el propio consumo."
      ],
      [
        "¿Qué reúne una fábrica en el mismo edificio?",
        [
          "Exclusivamente actividades agrícolas",
          "Trabajadores y medios de producción",
          "Solo materias repartidas entre hogares",
          "Solo tiendas sin producción propia"
        ],
        1,
        "La fábrica reúne maquinaria, energía y mano de obra."
      ],
      [
        "¿Qué proceso histórico impulsó el sistema fabril estudiado?",
        [
          "La Primera Revolución Industrial",
          "La expansión medieval de los gremios",
          "La invención de Internet",
          "La revolución digital del siglo XXI"
        ],
        0,
        "El sistema fabril caracteriza el proceso de industrialización."
      ],
      [
        "Una operación manual se acelera utilizando una máquina. ¿Qué cambio es?",
        [
          "Reparto de beneficios entre socios",
          "Trabajo exclusivamente en casa",
          "Venta de productos sin fabricarlos",
          "Uso de máquinas en operaciones productivas"
        ],
        3,
        "Mecanizar incorpora máquinas; no equivale por sí solo a dividir tareas."
      ],
      [
        "Cada empleado hace una fase, no el producto entero. ¿Qué organización es?",
        [
          "Eliminación de cualquier horario",
          "Sustitución de máquinas por gremios",
          "Reparto especializado de fases productivas",
          "Reparto igual de todas las ganancias"
        ],
        2,
        "Especializarse en una fase es distinto de repartir beneficios."
      ],
      [
        "¿Qué energía ayudó a mover maquinaria industrial junto al agua?",
        [
          "La gasolina de automóviles",
          "El vapor",
          "La electricidad solar moderna",
          "El combustible nuclear"
        ],
        1,
        "El agua y, progresivamente, el vapor movieron maquinaria."
      ],
      [
        "La empresa impone hora de entrada y normas. ¿Qué expresa?",
        [
          "Disciplina laboral",
          "Autonomía total del artesano",
          "Ausencia de supervisión empresarial",
          "Trabajo doméstico sin edificio común"
        ],
        0,
        "La concentración permitía vigilar horarios y ritmos."
      ],
      [
        "Se fabrican repetidamente muchas unidades de un producto. ¿Cómo se llama?",
        [
          "Fabricación de una única obra irrepetible",
          "Cultivo alterno de cuatro especies",
          "Extracción artesanal de un solo mineral",
          "Repetir muchas unidades del mismo producto"
        ],
        3,
        "El sistema fabril favoreció grandes cantidades de productos repetidos."
      ],
      [
        "Al producir muchas piezas con mejor coordinación, ¿qué puede disminuir?",
        [
          "Necesariamente todos los salarios",
          "Automáticamente cualquier impuesto",
          "El coste por unidad",
          "Siempre todo gasto total"
        ],
        2,
        "Mayor eficiencia puede abaratar cada unidad sin eliminar todos los gastos."
      ],
      [
        "Un obrero debe seguir un horario y una tarea fija. ¿Qué se reduce?",
        [
          "Solo el número de compradores urbanos",
          "Autonomía laboral",
          "Necesariamente todo conocimiento técnico",
          "La existencia de cualquier remuneración"
        ],
        1,
        "El control empresarial limitaba decisiones sobre tiempo y proceso."
      ],
      [
        "Si una tarea entrega materiales a otra, ¿qué necesita la fábrica?",
        [
          "Organización del proceso",
          "Ausencia total de planificación",
          "Eliminar todas las materias primas",
          "Volver obligatoriamente al autoconsumo"
        ],
        0,
        "Las fases deben abastecerse entre sí para evitar interrupciones."
      ],
      [
        "¿Qué edificio ilustra la concentración de producción textil?",
        [
          "Una casa gremial medieval española",
          "Una estación ferroviaria francesa",
          "Una plantación americana de algodón",
          "Una antigua fábrica textil en Inglaterra"
        ],
        3,
        "La fotografía muestra un edificio industrial de Inglaterra."
      ],
      [
        "¿Qué recurso debía aportar quien instalaba máquinas costosas?",
        [
          "Solo permiso del telar",
          "Únicamente algodón terminado",
          "Capital",
          "Solo fuerza muscular"
        ],
        2,
        "Las máquinas y su mantenimiento necesitaban inversión."
      ],
      [
        "Mientras crecían fábricas, seguían existiendo talleres y casas productoras. ¿Qué indica?",
        [
          "Únicamente talleres sin comerciantes",
          "Artesanal, doméstico y fabril",
          "Solo el fabril desde el primer día",
          "Solo el doméstico tras la mecanización"
        ],
        1,
        "La transición no sustituyó instantáneamente todas las formas anteriores."
      ]
    ]
  },
  {
    "nivel": 3,
    "nombre": "Relaciones y procesos",
    "descripcion": "Conectar causas, fases y consecuencias.",
    "preguntas": [
      [
        "¿Qué secuencia resume la evolución?",
        [
          "Taller → casas rurales → fábrica",
          "Fábrica → taller → primer sistema doméstico",
          "Banco → plantación → gremio",
          "Tren → Internet → taller medieval"
        ],
        0,
        "Es una evolución general; no excluye la coexistencia de modelos."
      ],
      [
        "¿Qué pareja corresponde al modelo doméstico?",
        [
          "Director y edificio industrial central",
          "Gremio y control artesanal del oficio",
          "Maquinista y pasajeros ferroviarios",
          "Comerciante y hogares rurales"
        ],
        3,
        "El comerciante coordinaba producción dispersa para el mercado."
      ],
      [
        "¿Qué pareja corresponde al sistema fabril?",
        [
          "Autoconsumo y ausencia de mercado",
          "Gremios y prohibición de toda máquina",
          "Concentración y supervisión directa",
          "Dispersión y materiales en cada casa"
        ],
        2,
        "Reunir trabajadores facilitó coordinar y controlar la actividad."
      ],
      [
        "¿Qué diferencia entre lugar y destino importa?",
        [
          "Los comerciantes nunca vendían manufacturas",
          "En casa también se producía para vender",
          "Todo lo hecho en casa era autoconsumo",
          "Solo se vendían productos de fábricas"
        ],
        1,
        "La ubicación doméstica no determina que falte mercado."
      ],
      [
        "¿Qué distingue mecanizar y dividir tareas?",
        [
          "Máquinas frente a especialización del trabajo",
          "Ambos significan repartir ganancias",
          "Ambos eliminan cualquier trabajador",
          "Solo son dos nombres del mismo gremio"
        ],
        0,
        "Una cambia medios técnicos; la otra organiza tareas."
      ],
      [
        "¿Qué cadena explica el coste unitario menor?",
        [
          "Más desorden → menos unidades y coste cero",
          "Más máquinas → ninguna inversión",
          "Más producción → salario siempre doble",
          "Mejor coordinación → más unidades con recursos similares"
        ],
        3,
        "La eficiencia permite repartir costes entre más unidades."
      ],
      [
        "¿Qué relación une concentración y energía?",
        [
          "La fábrica funciona sin ninguna energía",
          "Toda energía sustituye las materias primas",
          "Una instalación puede mover varias máquinas",
          "Cada obrero debe disponer de un río propio"
        ],
        2,
        "Concentrar medios facilita compartir instalaciones energéticas."
      ],
      [
        "¿Qué relación une especialización y dependencia?",
        [
          "Especializar elimina el control empresarial",
          "Cada fase necesita el resultado de otra",
          "Cada tarea fabrica todo el producto completo",
          "Las fases no intercambian materiales"
        ],
        1,
        "La división exige un flujo coordinado entre tareas."
      ],
      [
        "¿Qué cambia del artesano al obrero fabril?",
        [
          "Menor control sobre el conjunto del proceso",
          "Propiedad automática de toda la maquinaria",
          "Ausencia completa de tareas especializadas",
          "Libertad garantizada para elegir horarios"
        ],
        0,
        "La tarea y el ritmo dependían más de la dirección de la fábrica."
      ],
      [
        "¿Qué vincula inversión y producción?",
        [
          "Comprar máquinas evita todo mantenimiento",
          "Invertir implica beneficio inmediato seguro",
          "La maquinaria aparece sin coste alguno",
          "Capital permite adquirir medios productivos"
        ],
        3,
        "La inversión habilita producción, pero no garantiza ganancias."
      ],
      [
        "¿Qué característica comparten doméstico y fabril?",
        [
          "Utilizan únicamente robots eléctricos",
          "No existe ningún organizador comercial",
          "Pueden producir para un mercado",
          "Concentran siempre empleados en un edificio"
        ],
        2,
        "Difieren en organización y lugar, no en la posibilidad de vender."
      ],
      [
        "¿Qué organiza el comerciante doméstico?",
        [
          "Únicamente el aprendizaje de cada gremio",
          "Entrega, recogida y comercialización",
          "Solo la construcción de locomotoras",
          "Solo el reparto de tareas en un alto horno"
        ],
        1,
        "Coordina un circuito productivo sin reunir todas las casas."
      ],
      [
        "¿Qué no equivale a producción en serie temprana?",
        [
          "Una cadena moderna robotizada",
          "Repetir muchas unidades de un producto",
          "Coordinar tareas especializadas",
          "Utilizar maquinaria en una fábrica"
        ],
        0,
        "No deben proyectarse las técnicas del XX o XXI sobre el inicio fabril."
      ],
      [
        "¿Qué vincula normas y disciplina?",
        [
          "Fin del poder del empresario",
          "Libertad total respecto a cualquier tarea",
          "Imposibilidad de supervisar la fábrica",
          "Control de tiempos y conductas laborales"
        ],
        3,
        "La dirección imponía un marco de funcionamiento común."
      ],
      [
        "¿Qué relación hay entre flujo y cuello de botella?",
        [
          "Las materias circulan sin necesitar tiempo",
          "Más revisión elimina toda necesidad de preparación",
          "Una fase lenta frena las siguientes",
          "Una fase lenta acelera todo automáticamente"
        ],
        2,
        "La coordinación debe equilibrar capacidades entre tareas."
      ],
      [
        "¿Qué distingue producción de productividad?",
        [
          "La productividad es siempre el número de empleados",
          "Cantidad total frente a rendimiento por recurso",
          "Ambas miden únicamente el salario",
          "Una mide horarios y otra colores"
        ],
        1,
        "La productividad relaciona lo producido con el trabajo u otros recursos."
      ],
      [
        "¿Qué vínculo une fábrica y cambio social?",
        [
          "Nuevas relaciones de control del trabajo",
          "Solo cambia el material de las ventanas",
          "Desaparece toda relación entre personas",
          "Cada obrero controla libremente la empresa"
        ],
        0,
        "Cambian técnica, organización y autonomía laboral."
      ],
      [
        "¿Qué medio ayuda a supervisar directamente?",
        [
          "Repartirlos por casas sin comunicación",
          "Suprimir todas las reglas de trabajo",
          "Alejar completamente al empresario",
          "Reunir trabajadores en el mismo local"
        ],
        3,
        "La concentración hace más visible y controlable la actividad."
      ],
      [
        "¿Qué explica la transición sin sustitución total?",
        [
          "Prohibición de cualquier trabajo manual",
          "Invención del sistema doméstico tras Internet",
          "Convivencia de talleres, hogares y fábricas",
          "Desaparición de todos los talleres en un día"
        ],
        2,
        "La difusión de un modelo no elimina inmediatamente los anteriores."
      ],
      [
        "¿Qué síntesis compara bien los modelos?",
        [
          "Únicamente fechas sin explicar organización",
          "Lugar, coordinador y reparto de tareas",
          "Solo altura de edificios y color de telas",
          "Solo nacionalidad de todos los propietarios"
        ],
        1,
        "Comparar requiere criterios que expliquen la organización productiva."
      ]
    ]
  },
  {
    "nivel": 4,
    "nombre": "Análisis histórico",
    "descripcion": "Interpretar fuentes, datos y afirmaciones.",
    "preguntas": [
      [
        "«Trabajan en casa, por tanto no venden». ¿Qué error hay?",
        [
          "Confundir ubicación y destino",
          "Confundir ferrocarril y navegación",
          "Situar correctamente el sistema doméstico",
          "Reconocer la función del comerciante"
        ],
        0,
        "Los hogares del sistema doméstico producían para la venta."
      ],
      [
        "Una foto exterior de Masson Mill permite conocer…",
        [
          "El salario exacto de cada empleado",
          "La jornada exacta de todos los años",
          "El beneficio de cada propietario",
          "El aspecto del edificio industrial"
        ],
        3,
        "La fuente visual no contiene todos los datos de la vida laboral."
      ],
      [
        "¿Qué registro estudia mejor los horarios?",
        [
          "El plano geológico de una región",
          "Una lista de rutas de barcos",
          "Reglamento y registros de jornada",
          "Una foto solo de la fachada"
        ],
        2,
        "Para estudiar tiempo laboral hacen falta documentos sobre el trabajo."
      ],
      [
        "«Más piezas significa mejor vida para todos». ¿Qué falta?",
        [
          "La fecha de todas las visitas a la fábrica",
          "Salarios, jornadas y distribución de beneficios",
          "Solo el número de puertas del edificio",
          "Únicamente el nombre del río cercano"
        ],
        1,
        "La producción no mide por sí sola condiciones de vida."
      ],
      [
        "Una fábrica dobla producción y horas. ¿Qué concluyes?",
        [
          "Rendimiento por hora sin cambio",
          "Productividad horaria necesariamente doble",
          "Productividad horaria necesariamente nula",
          "Desaparición de todos los costes"
        ],
        0,
        "El cociente producción/horas puede mantenerse aunque crezca el total."
      ],
      [
        "«División del trabajo = dividir beneficios». ¿Qué corregir?",
        [
          "Se reparte la propiedad de cada telar",
          "Se entregan todas las ganancias a obreros",
          "Se anula la especialización de fases",
          "Se reparten tareas del proceso"
        ],
        3,
        "La expresión describe organización del trabajo, no propiedad ni beneficios."
      ],
      [
        "Un taller divide tareas sin máquinas. ¿Es posible?",
        [
          "No: dividir tareas significa usar vapor",
          "Sí: eso elimina todos los costes",
          "Sí: organización y tecnología son distintas",
          "No: toda especialización exige electricidad"
        ],
        2,
        "Puede haber división del trabajo sin mecanización de todas las operaciones."
      ],
      [
        "Una fábrica tiene máquinas y horarios. ¿Basta para saber su justicia?",
        [
          "No: una fábrica nunca produce más",
          "No: faltan condiciones y relaciones laborales",
          "Sí: toda fábrica garantiza bienestar completo",
          "Sí: las máquinas impiden toda explotación"
        ],
        1,
        "Las características técnicas no permiten valorar por sí solas la vida laboral."
      ],
      [
        "¿Qué afirmación evita exagerar autonomía artesanal?",
        [
          "Había mayor control, pero también normas gremiales",
          "Todos eran libres de cualquier regla",
          "Ningún artesano necesitaba habilidades",
          "Cada artesano poseía una fábrica moderna"
        ],
        0,
        "Comparar autonomía relativa no significa afirmar libertad absoluta."
      ],
      [
        "¿Qué prueba identifica producción doméstica comercial?",
        [
          "Familia que fabrica solo para sí misma",
          "Obreros reunidos en una fábrica de vapor",
          "Máquinas robotizadas de un siglo posterior",
          "Entrega de materias y recogida para vender"
        ],
        3,
        "El circuito con el comerciante distingue el modelo de simple autoconsumo."
      ],
      [
        "«Todos los talleres desaparecieron al surgir fábricas». ¿Qué falla?",
        [
          "Explica correctamente las tareas especializadas",
          "Distingue correctamente el XVII del XVIII",
          "Presenta la transición como instantánea",
          "Reconoce la coexistencia de sistemas"
        ],
        2,
        "Modelos diferentes convivieron durante la industrialización."
      ],
      [
        "¿Qué dato no ofrece el exterior de una fábrica?",
        [
          "Apariencia de su fachada",
          "Producción exacta por hora",
          "Existencia del edificio fotografiado",
          "Forma visible de sus ventanas"
        ],
        1,
        "El rendimiento necesita registros de producción y trabajo."
      ],
      [
        "¿Qué error sería atribuir robots a las primeras fábricas?",
        [
          "Anacronismo",
          "Rotación agrícola",
          "Pudelado del hierro",
          "Cercamiento de comunales"
        ],
        0,
        "Se trasladaría una tecnología posterior a un periodo anterior."
      ],
      [
        "Los costes bajan un 10 %. ¿Bajan igual todos los precios?",
        [
          "Sí, sin otra condición",
          "Sí, y todos los salarios suben el 10 %",
          "No, porque el coste nunca influye",
          "No necesariamente"
        ],
        3,
        "El precio también depende del mercado y otros componentes."
      ],
      [
        "¿Qué registro revela concentración de mano de obra?",
        [
          "Solo distancias entre puertos",
          "Número de cultivos de una rotación",
          "Empleados y lugar de trabajo",
          "Solo fecha de una patente minera"
        ],
        2,
        "Hay que comprobar dónde se reúne la producción y quién trabaja allí."
      ],
      [
        "«La fábrica es solo una casa grande». ¿Qué omite?",
        [
          "La existencia de un espacio interior",
          "Organización, máquinas y control laboral",
          "El aspecto visible de la construcción",
          "La posibilidad de tener paredes"
        ],
        1,
        "El cambio fabril es productivo y social, no solo arquitectónico."
      ],
      [
        "Un empresario compara solo piezas totales. ¿Qué falta?",
        [
          "Recursos y tiempo utilizados",
          "Solo la marca de cada ventana",
          "Solo la altura de los obreros",
          "Solo nombres de comerciantes rivales"
        ],
        0,
        "Sin esos datos no distingue producción y productividad."
      ],
      [
        "¿Qué permite inferir un reglamento de entrada?",
        [
          "Salario exacto de cada trabajador",
          "Aplicación idéntica en todas las fábricas",
          "Ausencia de cualquier incumplimiento",
          "Intención de controlar horarios"
        ],
        3,
        "La norma informa del control previsto, no de todo lo que ocurrió."
      ],
      [
        "¿Qué contraste estudia mejor el cambio laboral?",
        [
          "Solo longitud de dos calles",
          "Solo biografías sin datos de trabajo",
          "Tareas, horarios y autonomía antes/después",
          "Solo colores de dos edificios"
        ],
        2,
        "La comparación debe centrarse en organización y relaciones laborales."
      ],
      [
        "¿Qué valoración del sistema fabril es equilibrada?",
        [
          "Ninguna transformación de técnica u organización",
          "Mayor eficiencia y menor autonomía de parte del trabajo",
          "Solo perjuicios sin aumento productivo",
          "Solo bienestar inmediato para todos"
        ],
        1,
        "Debe reconocer ventajas productivas y consecuencias sociales."
      ]
    ]
  },
  {
    "nivel": 5,
    "nombre": "Competencial avanzado",
    "descripcion": "Aplicar, evaluar y construir explicaciones.",
    "preguntas": [
      [
        "La preparación de material frena todas las máquinas. ¿Qué mejorar?",
        [
          "La fase de preparación",
          "Solo duplicar máquinas que esperan",
          "Reducir aún más el suministro",
          "Eliminar toda revisión del proceso"
        ],
        0,
        "Mejorar la limitación permite abastecer las demás fases."
      ],
      [
        "¿Cómo comprobar el efecto de dividir tareas?",
        [
          "Contar solo el número de tareas con nombre",
          "Suponer que siempre mejora sin medir",
          "Medir solo el beneficio del comerciante",
          "Comparar unidades por hora con iguales recursos"
        ],
        3,
        "Hay que controlar tiempo y recursos para evaluar el rendimiento."
      ],
      [
        "Sin máquinas, ¿puede cambiar la organización laboral?",
        [
          "No, sin robots no hay especialización",
          "Sí, pero desaparece cualquier trabajo",
          "Sí, repartiendo y coordinando tareas",
          "No, toda organización necesita vapor"
        ],
        2,
        "Organización y mecanización son dimensiones distintas."
      ],
      [
        "¿Qué dato añadirías para valorar bienestar obrero?",
        [
          "Únicamente la ubicación del comerciante",
          "Salario, jornada y seguridad",
          "Solo el peso de cada puerta",
          "Solo el número de patentes del país"
        ],
        1,
        "El bienestar necesita indicadores sociales, no solo producción."
      ],
      [
        "Un museo llama teletrabajo al domestic system. ¿Qué matizarías?",
        [
          "Trabajo disperso sin tecnología digital",
          "Existencia de Internet en el siglo XVII",
          "Uso obligatorio de robots en hogares",
          "Ausencia de comerciantes y venta"
        ],
        0,
        "Puede hacerse una comparación, pero no identificar periodos y tecnologías."
      ],
      [
        "¿Cómo refutar «la fábrica solo cambió herramientas»?",
        [
          "Enumerar únicamente materiales de ventanas",
          "Negar la existencia de cualquier máquina",
          "Hablar solo del precio del algodón",
          "Mostrar tareas, horarios y supervisión"
        ],
        3,
        "La transformación incluyó organización y relaciones laborales."
      ],
      [
        "Dos fábricas producen igual con distintas horas. ¿Cuál es más productiva?",
        [
          "La que utiliza más horas para lo mismo",
          "La que posee más ventanas, sin más datos",
          "La que utiliza menos horas",
          "La que tiene fachada más grande"
        ],
        2,
        "A igual resultado, menos recurso utilizado implica más rendimiento."
      ],
      [
        "Una tarea repetida aumenta rapidez y fatiga. ¿Cómo evaluarla?",
        [
          "Suponer beneficios idénticos para todos",
          "Medir ventajas productivas y carga laboral",
          "Considerar solo rapidez y omitir salud",
          "Negar toda posible mejora de producción"
        ],
        1,
        "Las consecuencias deben valorarse en más de una dimensión."
      ],
      [
        "El comerciante suministra materia pero no reúne trabajadores. ¿Qué modelo?",
        [
          "Sistema doméstico",
          "Sistema fabril centralizado",
          "Cadena moderna de montaje",
          "Producción sin ningún mercado"
        ],
        0,
        "La coordinación comercial puede existir sin concentración en fábrica."
      ],
      [
        "Se reúnen obreros, energía y telares bajo normas. ¿Qué modelo?",
        [
          "Autoconsumo rural exclusivo",
          "Domestic system disperso",
          "Gremio sin maquinaria ni concentración",
          "Sistema fabril"
        ],
        3,
        "La concentración y supervisión caracterizan la fábrica."
      ],
      [
        "¿Qué pregunta investiga la pérdida de autonomía?",
        [
          "¿Qué color prefiere el propietario?",
          "¿Cuánto pesa una puerta del taller?",
          "¿Quién decide tareas y horarios?",
          "¿Cuántas ventanas tiene el edificio?"
        ],
        2,
        "La autonomía se refiere al control sobre la propia actividad."
      ],
      [
        "¿Cómo diseñarías una comparación histórica de modelos?",
        [
          "Suponer que no existieron diferencias",
          "Usar los mismos criterios para los tres",
          "Describir cada uno con criterios sin relación",
          "Comparar solo un precio aislado de cada siglo"
        ],
        1,
        "Lugar, coordinación, medios y tareas permiten comparar con rigor."
      ],
      [
        "¿Qué dirías ante «cada obrero hacía todo el producto»?",
        [
          "La fábrica intensificó tareas parciales",
          "La fábrica anuló toda especialización",
          "Solo los comerciantes hacían el producto",
          "Las máquinas impedían cualquier división"
        ],
        0,
        "Cada trabajador solía realizar una parte del proceso, no el conjunto."
      ],
      [
        "¿Qué límite tiene usar solo documentos empresariales?",
        [
          "Impide conocer cualquier cifra productiva",
          "Garantiza todas las experiencias individuales",
          "Describe siempre cada hogar rural",
          "Puede faltar la perspectiva de los obreros"
        ],
        3,
        "Conviene contrastar con testimonios y documentos de otros grupos."
      ],
      [
        "Un empresario promete más producción sin inversión ni organización. ¿Qué evaluar?",
        [
          "Únicamente el tamaño de su retrato",
          "Aceptar la promesa por ser empresario",
          "Medios y mecanismos de esa promesa",
          "Solo la seguridad con que lo afirma"
        ],
        2,
        "Las mejoras requieren explicar recursos y coordinación."
      ],
      [
        "¿Qué harías si un telar rápido genera acumulación antes de revisar?",
        [
          "Eliminar cualquier coordinación de fases",
          "Equilibrar la capacidad de revisión",
          "Añadir telares sin cambiar revisión",
          "Suponer que la acumulación aumenta calidad"
        ],
        1,
        "Una fase de salida lenta puede limitar todo el proceso."
      ],
      [
        "¿Qué conclusión no puede garantizar la mecanización?",
        [
          "Bienestar automático para cada trabajador",
          "Uso de medios técnicos en producción",
          "Posibilidad de acelerar operaciones",
          "Cambios en la organización productiva"
        ],
        0,
        "El bienestar depende de salarios, condiciones y distribución."
      ],
      [
        "¿Qué evidencia refutaría una transición instantánea?",
        [
          "Una sola patente de una máquina nueva",
          "Una foto sin fecha de una pared",
          "La biografía de un inventor sin otros datos",
          "Talleres y fábricas activos en el mismo periodo"
        ],
        3,
        "La coexistencia documentada muestra continuidad y cambio."
      ],
      [
        "¿Qué síntesis integra tecnología y sociedad?",
        [
          "La técnica no tuvo ninguna relación con el trabajo",
          "Todos los trabajadores pasaron a ser propietarios",
          "Máquinas y concentración cambiaron tareas y control",
          "Solo aumentó el número de edificios azules"
        ],
        2,
        "El sistema fabril alteró los medios y las relaciones laborales."
      ],
      [
        "¿Qué valoración final defenderías?",
        [
          "Un regreso exclusivo a la artesanía gremial",
          "Más capacidad productiva con nuevas tensiones laborales",
          "Una mejora idéntica e inmediata para todos",
          "Un cambio sin efecto sobre la producción"
        ],
        1,
        "La fábrica amplió la producción, pero transformó de modo desigual la vida laboral."
      ]
    ]
  }
];
