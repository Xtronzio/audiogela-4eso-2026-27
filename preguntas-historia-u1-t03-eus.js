const NIVELES_T03_EUS = [
  {
    "nivel": 1,
    "nombre": "Oinarrizko kontzeptuak",
    "descripcion": "Terminoak, datuak eta protagonistak ezagutzea.",
    "preguntas": [
      [
        "Zerk arautzen zituen artisau-jarduera asko?",
        [
          "Artisauen gremioek",
          "Trenbide-konpainiek",
          "Banku zentralek",
          "Altzairu-bihurgailuek"
        ],
        0,
        "Gremioek lanbideak eta artisau-ekoizpeneko jarduerak arautzen zituzten."
      ],
      [
        "Non egiten zuen lan normalean artisauak?",
        [
          "Tren-geltoki batean",
          "Labe garai handi batean",
          "Burtsa batean",
          "Bere artisau-tailerrean"
        ],
        3,
        "Tailerra artisau-ereduaren ezaugarria da, nahiz eta egoera desberdinak egon."
      ],
      [
        "Noiz hedatu zen temarioko etxeko sistema?",
        [
          "XX. mendetik bakarrik",
          "1900etik aurrera bakarrik",
          "XVII. mendetik",
          "XIII. mendetik"
        ],
        2,
        "Liburuak XVII. mendetik kokatzen du hedapena, industria-fabriken aurretik."
      ],
      [
        "Nork ematen zituen materialak etxeko sisteman?",
        [
          "Fabrikako mediku batek",
          "Salmenta koordinatzen zuen merkatari batek",
          "Tren-makinista batek",
          "Bihurgailuko langile batek"
        ],
        1,
        "Merkatariak materialak ematen eta produktuak saltzeko jasotzen zituen."
      ],
      [
        "Non egiten zen lan domestic system delakoan?",
        [
          "Landa-eremuko etxe sakabanatuetan",
          "Fabrika zentral batean",
          "Portuko geltoki batean",
          "Merkataritza-banku batean"
        ],
        0,
        "Ekoizpena landa-etxeetan sakabanatuta zegoen."
      ],
      [
        "Zer jasotzen zuten etxeko ekoizleek?",
        [
          "Beti enpresaren jabetza",
          "Merkataritzaren etekin guztiak",
          "Autokontsumorako produktuak bakarrik",
          "Lanaren truke ordainsari bat"
        ],
        3,
        "Ordainsari baten truke lan egiten zuten; ez zuten negozio osoa kontrolatzen."
      ],
      [
        "Zer merkataritza-helmuga zuen etxeko produktuak?",
        [
          "Mea bihurtzeko",
          "Ekoizpen osoa uzteko",
          "Saltzeko",
          "Salmenta debekatzeko"
        ],
        2,
        "Etxean lan egiteak ez du esan nahi autokontsumorako soilik ekoiztea."
      ],
      [
        "Zer kontzentratzen du fabrika-sistemak?",
        [
          "Nekazaritza-jarduerak soilik",
          "Langileak eta ekoizpen-baliabideak",
          "Etxeetan banatutako materialak soilik",
          "Ekoizpenik gabeko dendak soilik"
        ],
        1,
        "Fabrikak makinak, energia eta eskulana biltzen ditu."
      ],
      [
        "Noiz hedatu ziren lehen industria-fabrikak?",
        [
          "Lehen Industria Iraultzak",
          "Erdi Aroko gremioen hedapenak",
          "Interneten asmakuntzak",
          "XXI. mendeko iraultza digitalak"
        ],
        0,
        "Fabrika-sistema industrializazio-prozesuaren ezaugarria da."
      ],
      [
        "Zer da mekanizazioa?",
        [
          "Bazkideen arteko etekin-banaketa",
          "Lana etxean soilik egitea",
          "Produktuak egin gabe saltzea",
          "Makinen erabilera ekoizpen-eragiketetan"
        ],
        3,
        "Mekanizatzeak makinak sartzen ditu; ez da berez zereginak banatzea."
      ],
      [
        "Zer da lanaren banaketa?",
        [
          "Ordutegi guztiak kentzea",
          "Makinak gremioekin ordezkatzea",
          "Ekoizpen-faseen banaketa espezializatua",
          "Etekin guztiak berdin banatzea"
        ],
        2,
        "Fase batean espezializatzea ez da etekinak banatzea."
      ],
      [
        "Zer energia-iturri hedatu zen fabrikan?",
        [
          "Autoetako gasolinak",
          "Lurrunak",
          "Eguzki-elektrizitate modernoak",
          "Erregai nuklearrak"
        ],
        1,
        "Urak eta pixkanaka lurrunak makinak mugitu zituzten."
      ],
      [
        "Nola kontrolatzen zen fabrikako lana?",
        [
          "Lan-diziplina",
          "Artisauaren erabateko autonomia",
          "Enpresa-gainbegiraketarik eza",
          "Eraikin komunik gabeko etxeko lana"
        ],
        0,
        "Kontzentrazioak ordutegiak eta erritmoak zaintzea ahalbidetzen zuen."
      ],
      [
        "Zer da seriean ekoiztea?",
        [
          "Lan bakar eta errepikaezin bat egitea",
          "Lau espezie txandaka lantzea",
          "Mineral bakarraren artisau-erauzketa",
          "Produktu beraren unitate asko errepikatzea"
        ],
        3,
        "Fabrika-sistemak produktu errepikatuen kantitate handiak bultzatu zituen."
      ],
      [
        "Zer kostu murriztu zezakeen fabrikak?",
        [
          "Nahitaez soldata guztiak",
          "Automatikoki zerga guztiak",
          "Unitateko kostua",
          "Beti gastu oso guztia"
        ],
        2,
        "Eraginkortasun handiagoak unitatea merkatu dezake gastu guztiak kendu gabe."
      ],
      [
        "Zer galdu zuen eskulanaren zati batek?",
        [
          "Hiriko erosle kopurua bakarrik",
          "Lan-autonomia",
          "Nahitaez ezagutza tekniko guztia",
          "Edozein ordainsariren existentzia"
        ],
        1,
        "Enpresa-kontrolak denboraren eta prozesuaren gaineko erabakiak mugatzen zituen."
      ],
      [
        "Zer eskatzen du hainbat fase koordinatzeak?",
        [
          "Prozesuaren antolaketa",
          "Plangintzarik eza",
          "Lehengai guztiak kentzea",
          "Nahitaez autokontsumora itzultzea"
        ],
        0,
        "Faseek elkar hornitu behar dute etenak saihesteko."
      ],
      [
        "Zer irudikatzen du Masson Mill temarioan?",
        [
          "Espainiako Erdi Aroko gremio-etxea",
          "Frantziako tren-geltokia",
          "Amerikako kotoi-plantazioa",
          "Ingalaterrako ehun-fabrika zaharra"
        ],
        3,
        "Argazkiak Ingalaterrako industria-eraikina erakusten du."
      ],
      [
        "Zer behar zen makinak erosteko?",
        [
          "Ehungailuaren baimena bakarrik",
          "Amaitutako kotoia soilik",
          "Kapitala",
          "Gihar-indarra bakarrik"
        ],
        2,
        "Makinek eta mantentzeak inbertsioa behar zuten."
      ],
      [
        "Zer eredu egon zitezkeen batera?",
        [
          "Merkataririk gabeko tailerrak soilik",
          "Artisaua, etxekoa eta fabrikakoa",
          "Fabrikakoa bakarrik lehen egunetik",
          "Etxekoa bakarrik mekanizazioaren ondoren"
        ],
        1,
        "Trantsizioak ez zituen aurreko modu guztiak berehala ordezkatu."
      ]
    ]
  },
  {
    "nivel": 2,
    "nombre": "Ulermena",
    "descripcion": "Kontzeptuak egoera zehatzetan identifikatzea.",
    "preguntas": [
      [
        "Zer erakundek ezartzen zituen lanbidearen eta ikaskuntzaren arauak?",
        [
          "Artisauen gremioek",
          "Trenbide-konpainiek",
          "Banku zentralek",
          "Altzairu-bihurgailuek"
        ],
        0,
        "Gremioek lanbideak eta artisau-ekoizpeneko jarduerak arautzen zituzten."
      ],
      [
        "Ekoizle batek eskuz lan egiten du lokal txiki batean. Zer leku da ohikoa?",
        [
          "Tren-geltoki batean",
          "Labe garai handi batean",
          "Burtsa batean",
          "Bere artisau-tailerrean"
        ],
        3,
        "Tailerra artisau-ereduaren ezaugarria da, nahiz eta egoera desberdinak egon."
      ],
      [
        "Zer mendek markatzen du landa-familiei materialak ematearen hasiera?",
        [
          "XX. mendetik bakarrik",
          "1900etik aurrera bakarrik",
          "XVII. mendetik",
          "XIII. mendetik"
        ],
        2,
        "Liburuak XVII. mendetik kokatzen du hedapena, industria-fabriken aurretik."
      ],
      [
        "Familia batzuek artilea jasotzen dute bitartekari batengandik. Nork koordinatzen du?",
        [
          "Fabrikako mediku batek",
          "Salmenta koordinatzen zuen merkatari batek",
          "Tren-makinista batek",
          "Bihurgailuko langile batek"
        ],
        1,
        "Merkatariak materialak ematen eta produktuak saltzeko jasotzen zituen."
      ],
      [
        "Familia batek artilea eraldatzen du eraikin komunera joan gabe. Non lan egiten du?",
        [
          "Landa-eremuko etxe sakabanatuetan",
          "Fabrika zentral batean",
          "Portuko geltoki batean",
          "Merkataritza-banku batean"
        ],
        0,
        "Ekoizpena landa-etxeetan sakabanatuta zegoen."
      ],
      [
        "Merkatariarentzat materialak eraldatu ondoren, zer lortzen zuten lanagatik?",
        [
          "Beti enpresaren jabetza",
          "Merkataritzaren etekin guztiak",
          "Autokontsumorako produktuak bakarrik",
          "Lanaren truke ordainsari bat"
        ],
        3,
        "Ordainsari baten truke lan egiten zuten; ez zuten negozio osoa kontrolatzen."
      ],
      [
        "Merkatariak etxe askotako manufakturak jasotzen ditu. Zertarako?",
        [
          "Mea bihurtzeko",
          "Ekoizpen osoa uzteko",
          "Saltzeko",
          "Salmenta debekatzeko"
        ],
        2,
        "Etxean lan egiteak ez du esan nahi autokontsumorako soilik ekoiztea."
      ],
      [
        "Zer biltzen du fabrikak eraikin berean?",
        [
          "Nekazaritza-jarduerak soilik",
          "Langileak eta ekoizpen-baliabideak",
          "Etxeetan banatutako materialak soilik",
          "Ekoizpenik gabeko dendak soilik"
        ],
        1,
        "Fabrikak makinak, energia eta eskulana biltzen ditu."
      ],
      [
        "Zer prozesu historikok bultzatu zuen aztertutako fabrika-sistema?",
        [
          "Lehen Industria Iraultzak",
          "Erdi Aroko gremioen hedapenak",
          "Interneten asmakuntzak",
          "XXI. mendeko iraultza digitalak"
        ],
        0,
        "Fabrika-sistema industrializazio-prozesuaren ezaugarria da."
      ],
      [
        "Eskuzko eragiketa makina erabiliz azkartzen da. Zer aldaketa da?",
        [
          "Bazkideen arteko etekin-banaketa",
          "Lana etxean soilik egitea",
          "Produktuak egin gabe saltzea",
          "Makinen erabilera ekoizpen-eragiketetan"
        ],
        3,
        "Mekanizatzeak makinak sartzen ditu; ez da berez zereginak banatzea."
      ],
      [
        "Langile bakoitzak fase bat egiten du, ez produktu osoa. Zer antolaketa da?",
        [
          "Ordutegi guztiak kentzea",
          "Makinak gremioekin ordezkatzea",
          "Ekoizpen-faseen banaketa espezializatua",
          "Etekin guztiak berdin banatzea"
        ],
        2,
        "Fase batean espezializatzea ez da etekinak banatzea."
      ],
      [
        "Zer energiak lagundu zuen urarekin batera industria-makinak mugitzen?",
        [
          "Autoetako gasolinak",
          "Lurrunak",
          "Eguzki-elektrizitate modernoak",
          "Erregai nuklearrak"
        ],
        1,
        "Urak eta pixkanaka lurrunak makinak mugitu zituzten."
      ],
      [
        "Enpresak sarrera-ordua eta arauak ezartzen ditu. Zer adierazten du?",
        [
          "Lan-diziplina",
          "Artisauaren erabateko autonomia",
          "Enpresa-gainbegiraketarik eza",
          "Eraikin komunik gabeko etxeko lana"
        ],
        0,
        "Kontzentrazioak ordutegiak eta erritmoak zaintzea ahalbidetzen zuen."
      ],
      [
        "Produktu baten unitate asko behin eta berriz egiten dira. Nola deitzen da?",
        [
          "Lan bakar eta errepikaezin bat egitea",
          "Lau espezie txandaka lantzea",
          "Mineral bakarraren artisau-erauzketa",
          "Produktu beraren unitate asko errepikatzea"
        ],
        3,
        "Fabrika-sistemak produktu errepikatuen kantitate handiak bultzatu zituen."
      ],
      [
        "Koordinazio hobearekin pieza asko egitean, zer jaits daiteke?",
        [
          "Nahitaez soldata guztiak",
          "Automatikoki zerga guztiak",
          "Unitateko kostua",
          "Beti gastu oso guztia"
        ],
        2,
        "Eraginkortasun handiagoak unitatea merkatu dezake gastu guztiak kendu gabe."
      ],
      [
        "Langile batek ordutegi eta zeregin finkoa bete behar ditu. Zer murrizten da?",
        [
          "Hiriko erosle kopurua bakarrik",
          "Lan-autonomia",
          "Nahitaez ezagutza tekniko guztia",
          "Edozein ordainsariren existentzia"
        ],
        1,
        "Enpresa-kontrolak denboraren eta prozesuaren gaineko erabakiak mugatzen zituen."
      ],
      [
        "Zeregin batek beste bati materialak ematen badizkio, zer behar du fabrikak?",
        [
          "Prozesuaren antolaketa",
          "Plangintzarik eza",
          "Lehengai guztiak kentzea",
          "Nahitaez autokontsumora itzultzea"
        ],
        0,
        "Faseek elkar hornitu behar dute etenak saihesteko."
      ],
      [
        "Zer eraikinek erakusten du ehungintzaren kontzentrazioa?",
        [
          "Espainiako Erdi Aroko gremio-etxea",
          "Frantziako tren-geltokia",
          "Amerikako kotoi-plantazioa",
          "Ingalaterrako ehun-fabrika zaharra"
        ],
        3,
        "Argazkiak Ingalaterrako industria-eraikina erakusten du."
      ],
      [
        "Zer baliabide ekarri behar zuen makina garestiak ezartzen zituenak?",
        [
          "Ehungailuaren baimena bakarrik",
          "Amaitutako kotoia soilik",
          "Kapitala",
          "Gihar-indarra bakarrik"
        ],
        2,
        "Makinek eta mantentzeak inbertsioa behar zuten."
      ],
      [
        "Fabrikak hazten ziren bitartean tailerrak eta ekoizpen-etxeak zeuden. Zer adierazten du?",
        [
          "Merkataririk gabeko tailerrak soilik",
          "Artisaua, etxekoa eta fabrikakoa",
          "Fabrikakoa bakarrik lehen egunetik",
          "Etxekoa bakarrik mekanizazioaren ondoren"
        ],
        1,
        "Trantsizioak ez zituen aurreko modu guztiak berehala ordezkatu."
      ]
    ]
  },
  {
    "nivel": 3,
    "nombre": "Loturak eta prozesuak",
    "descripcion": "Kausak, faseak eta ondorioak lotzea.",
    "preguntas": [
      [
        "Zer segidak laburbiltzen du bilakaera?",
        [
          "Tailerra → landa-etxeak → fabrika",
          "Fabrika → tailerra → lehen etxeko sistema",
          "Bankua → plantazioa → gremioa",
          "Trena → Internet → Erdi Aroko tailerra"
        ],
        0,
        "Bilakaera orokorra da; ez du ereduen elkarbizitza baztertzen."
      ],
      [
        "Zer bikote dagokio etxeko ereduari?",
        [
          "Zuzendaria eta industria-eraikin zentrala",
          "Gremioa eta lanbidearen artisau-kontrola",
          "Makinista eta tren-bidaiariak",
          "Merkataria eta landa-etxeak"
        ],
        3,
        "Merkatariak merkaturako ekoizpen sakabanatua koordinatzen zuen."
      ],
      [
        "Zer bikote dagokio fabrika-sistemari?",
        [
          "Autokontsumoa eta merkaturik eza",
          "Gremioak eta makina guztien debekua",
          "Kontzentrazioa eta zuzeneko gainbegiraketa",
          "Sakabanaketa eta materialak etxe bakoitzean"
        ],
        2,
        "Langileak biltzeak jarduera koordinatzea eta kontrolatzea erraztu zuen."
      ],
      [
        "Kokapenaren eta helmugaren zer desberdintasun da garrantzitsua?",
        [
          "Merkatariek ez zuten manufakturarik saltzen",
          "Etxean ere saltzeko ekoizten zen",
          "Etxean egindako guztia autokontsumoa zen",
          "Fabriketako produktuak bakarrik saltzen ziren"
        ],
        1,
        "Etxeko kokapenak ez du merkaturik eza zehazten."
      ],
      [
        "Zerk bereizten ditu mekanizatzea eta zereginak banatzea?",
        [
          "Makinak eta lanaren espezializazioa",
          "Biek etekinak banatzea esan nahi dute",
          "Biek langile guztiak kentzen dituzte",
          "Gremio beraren bi izen besterik ez dira"
        ],
        0,
        "Batak baliabide teknikoak aldatzen ditu; besteak zereginak antolatzen ditu."
      ],
      [
        "Zer kateak azaltzen du unitateko kostu txikiagoa?",
        [
          "Desordena handiagoa → unitate gutxiago eta zero kostua",
          "Makina gehiago → inbertsiorik ez",
          "Ekoizpen gehiago → soldata beti bikoitza",
          "Koordinazio hobea → unitate gehiago antzeko baliabideekin"
        ],
        3,
        "Eraginkortasunak kostuak unitate gehiagoren artean banatzen ditu."
      ],
      [
        "Zer loturak elkartzen ditu kontzentrazioa eta energia?",
        [
          "Fabrikak energiarik gabe lan egiten du",
          "Energia guztiek lehengaiak ordezkatzen dituzte",
          "Instalazio batek hainbat makina mugi ditzake",
          "Langile bakoitzak bere ibaia behar du"
        ],
        2,
        "Baliabideak kontzentratzeak energia-instalazioak partekatzea errazten du."
      ],
      [
        "Zer loturak elkartzen ditu espezializazioa eta mendekotasuna?",
        [
          "Espezializatzeak enpresa-kontrola kentzen du",
          "Fase bakoitzak bestearen emaitza behar du",
          "Zeregin bakoitzak produktu osoa egiten du",
          "Faseek ez dute materialik trukatzen"
        ],
        1,
        "Banaketak zereginen arteko fluxu koordinatua eskatzen du."
      ],
      [
        "Zer aldatzen da artisautik fabrika-langilera?",
        [
          "Prozesu osoaren gaineko kontrol txikiagoa",
          "Makina guztien jabetza automatikoa",
          "Zeregin espezializaturik eza",
          "Ordutegiak aukeratzeko askatasun ziurra"
        ],
        0,
        "Zeregina eta erritmoa fabrikako zuzendaritzaren mendeago zeuden."
      ],
      [
        "Zer loturak elkartzen ditu inbertsioa eta ekoizpena?",
        [
          "Makinak erosteak mantentze guztia saihesten du",
          "Inbertitzeak berehalako etekin ziurra dakar",
          "Makinak kosturik gabe agertzen dira",
          "Kapitalak ekoizpen-baliabideak erostea ahalbidetzen du"
        ],
        3,
        "Inbertsioak ekoizpena ahalbidetzen du, baina ez du etekinik bermatzen."
      ],
      [
        "Zer ezaugarri partekatzen dute etxekoak eta fabrikakoak?",
        [
          "Robot elektrikoak soilik erabiltzen dituzte",
          "Ez dago merkataritza-antolatzailerik",
          "Merkatu baterako ekoitz dezakete",
          "Beti langileak eraikin batean biltzen dituzte"
        ],
        2,
        "Antolaketan eta kokapenean bereizten dira, ez saltzeko aukeran."
      ],
      [
        "Zer antolatzen du etxeko sistemako merkatariak?",
        [
          "Gremio bakoitzaren ikaskuntza soilik",
          "Ematea, jasotzea eta merkaturatzea",
          "Lokomotoren eraikuntza bakarrik",
          "Labe garaiko zeregin-banaketa bakarrik"
        ],
        1,
        "Ekoizpen-zirkuitua koordinatzen du etxe guztiak bildu gabe."
      ],
      [
        "Zer ez da lehen serieko ekoizpenaren baliokidea?",
        [
          "Robotizatutako kate modernoa",
          "Produktu baten unitate asko errepikatzea",
          "Zeregin espezializatuak koordinatzea",
          "Fabrikan makinak erabiltzea"
        ],
        0,
        "XX. eta XXI. mendeetako teknikak ez dira fabrika-hasierara proiektatu behar."
      ],
      [
        "Zer loturak elkartzen ditu arauak eta diziplina?",
        [
          "Enpresariaren boterearen amaiera",
          "Zeregin guztiekiko erabateko askatasuna",
          "Fabrika gainbegiratzeko ezintasuna",
          "Lan-denboraren eta jokabideen kontrola"
        ],
        3,
        "Zuzendaritzak funtzionamendu-esparru komuna ezartzen zuen."
      ],
      [
        "Zer lotura dago fluxuaren eta botila-lepoaren artean?",
        [
          "Materialak denborarik behar izan gabe mugitzen dira",
          "Berrikuspen gehiagok prestaketa-beharra kentzen du",
          "Fase motelak hurrengoak frenatzen ditu",
          "Fase motelak dena automatikoki azkartzen du"
        ],
        2,
        "Koordinazioak zereginen ahalmenak orekatu behar ditu."
      ],
      [
        "Zerk bereizten ditu ekoizpena eta produktibitatea?",
        [
          "Produktibitatea beti langile kopurua da",
          "Kopuru osoa eta baliabideko etekina",
          "Biek soldata bakarrik neurtzen dute",
          "Batak ordutegiak eta besteak koloreak neurtzen ditu"
        ],
        1,
        "Produktibitateak ekoitzitakoa lanarekin edo baliabideekin lotzen du."
      ],
      [
        "Zer loturak elkartzen ditu fabrika eta gizarte-aldaketa?",
        [
          "Lana kontrolatzeko harreman berriak",
          "Leihoen materiala bakarrik aldatzen da",
          "Pertsonen arteko harreman guztiak desagertzen dira",
          "Langile bakoitzak enpresa libreki kontrolatzen du"
        ],
        0,
        "Teknika, antolaketa eta lan-autonomia aldatzen dira."
      ],
      [
        "Zer baliabidek laguntzen du zuzenean gainbegiratzen?",
        [
          "Komunikaziorik gabeko etxeetan banatzeak",
          "Lan-arau guztiak kentzeak",
          "Enpresaria erabat urruntzeak",
          "Langileak lokal berean biltzeak"
        ],
        3,
        "Kontzentrazioak jarduera ikusgarriagoa eta kontrolagarriagoa egiten du."
      ],
      [
        "Zerk azaltzen du erabateko ordezkapenik gabeko trantsizioa?",
        [
          "Eskuzko lan guztiak debekatzeak",
          "Etxeko sistema Interneten ondoren asmatzeak",
          "Tailerren, etxeen eta fabriken elkarbizitzak",
          "Tailer guztiak egun batean desagertzeak"
        ],
        2,
        "Eredu bat hedatzeak ez ditu aurrekoak berehala kentzen."
      ],
      [
        "Zer sintesik alderatzen ditu ondo ereduak?",
        [
          "Datak soilik, antolaketa azaldu gabe",
          "Lekua, koordinatzailea eta zeregin-banaketa",
          "Eraikinen altuera eta oihalen kolorea bakarrik",
          "Jabe guztien nazionalitatea bakarrik"
        ],
        1,
        "Alderatzeak ekoizpen-antolaketa azaltzen duten irizpideak eskatzen ditu."
      ]
    ]
  },
  {
    "nivel": 4,
    "nombre": "Analisi historikoa",
    "descripcion": "Iturriak, datuak eta baieztapenak interpretatzea.",
    "preguntas": [
      [
        "«Etxean lan egiten dute, beraz ez dute saltzen». Zer akats dago?",
        [
          "Kokapena eta helmuga nahastea",
          "Trenbidea eta nabigazioa nahastea",
          "Etxeko sistema zuzen kokatzea",
          "Merkatariaren eginkizuna ezagutzea"
        ],
        0,
        "Etxeko sistemako familiek saltzeko ekoizten zuten."
      ],
      [
        "Masson Millen kanpoko argazkiak ezagutzen uzten du…",
        [
          "Langile bakoitzaren soldata zehatza",
          "Urte guztietako lanaldi zehatza",
          "Jabe bakoitzaren etekina",
          "Industria-eraikinaren itxura"
        ],
        3,
        "Ikusizko iturriak ez ditu lan-bizitzako datu guztiak ematen."
      ],
      [
        "Zer erregistrok aztertzen ditu hobekien ordutegiak?",
        [
          "Eskualdearen mapa geologikoa",
          "Itsasontzien bide-zerrenda",
          "Araudia eta lanaldi-erregistroak",
          "Fatxadaren argazki hutsa"
        ],
        2,
        "Lan-denbora aztertzeko lanari buruzko dokumentuak behar dira."
      ],
      [
        "«Pieza gehiagok guztien bizimodu hobea esan nahi dute». Zer falta da?",
        [
          "Fabrikako bisita guztien data",
          "Soldatak, lanaldiak eta etekinen banaketa",
          "Eraikineko ate kopurua bakarrik",
          "Inguruko ibaiaren izena soilik"
        ],
        1,
        "Ekoizpenak ez ditu berez bizi-baldintzak neurtzen."
      ],
      [
        "Fabrikak ekoizpena eta orduak bikoizten ditu. Zer ondorioztatzen duzu?",
        [
          "Orduko etekina aldatu gabe",
          "Orduko produktibitatea nahitaez bikoitza",
          "Orduko produktibitatea nahitaez zero",
          "Kostu guztiak desagertzea"
        ],
        0,
        "Ekoizpena/orduak zatidura berdin gera daiteke guztizkoa handitu arren."
      ],
      [
        "«Lanaren banaketa = etekinak banatzea». Zer zuzendu?",
        [
          "Ehungailu bakoitzaren jabetza banatzen da",
          "Etekin guztiak langileei ematen zaizkie",
          "Faseen espezializazioa kentzen da",
          "Prozesuko zereginak banatzen dira"
        ],
        3,
        "Esamoldeak lan-antolaketa azaltzen du, ez jabetza edo etekinak."
      ],
      [
        "Tailerrak makinak gabe zereginak banatzen ditu. Posible al da?",
        [
          "Ez: zereginak banatzea lurruna erabiltzea da",
          "Bai: horrek kostu guztiak kentzen ditu",
          "Bai: antolaketa eta teknologia desberdinak dira",
          "Ez: espezializazio guztiek elektrizitatea behar dute"
        ],
        2,
        "Lanaren banaketa egon daiteke eragiketa guztiak mekanizatu gabe."
      ],
      [
        "Fabrikak makinak eta ordutegiak ditu. Nahikoa al da bidezkoa dela jakiteko?",
        [
          "Ez: fabrikak ez du inoiz gehiago ekoizten",
          "Ez: baldintzak eta lan-harremanak falta dira",
          "Bai: fabrika guztiek ongizate osoa bermatzen dute",
          "Bai: makinek esplotazio guztia eragozten dute"
        ],
        1,
        "Ezaugarri teknikoek ez dute berez lan-bizitza baloratzen uzten."
      ],
      [
        "Zer baieztapenek saihesten du artisau-autonomia gehiegi goraipatzea?",
        [
          "Kontrol handiagoa zegoen, baina gremio-arauak ere bai",
          "Denak edozein arautatik libre zeuden",
          "Artisauek ez zuten trebetasunik behar",
          "Artisau bakoitzak fabrika modernoa zuen"
        ],
        0,
        "Autonomia erlatiboa alderatzeak ez du erabateko askatasuna esan nahi."
      ],
      [
        "Zer frogak identifikatzen du etxeko merkataritza-ekoizpena?",
        [
          "Bere buruarentzat bakarrik egiten duen familia",
          "Lurrun-fabrikan bildutako langileak",
          "Geroagoko mendeko makina robotizatuak",
          "Materialak ematea eta saltzeko jasotzea"
        ],
        3,
        "Merkatariarekiko zirkuituak autokontsumo hutsetik bereizten du eredua."
      ],
      [
        "«Tailer guztiak desagertu ziren fabrikak sortzean». Zer dago oker?",
        [
          "Zeregin espezializatuak zuzen azaltzen ditu",
          "XVII. eta XVIII. mendeak zuzen bereizten ditu",
          "Trantsizioa berehalakotzat aurkezten du",
          "Sistemen elkarbizitza aitortzen du"
        ],
        2,
        "Eredu desberdinak batera egon ziren industrializazioan."
      ],
      [
        "Zer datu ez du ematen fabrikaren kanpoaldeak?",
        [
          "Fatxadaren itxura",
          "Orduko ekoizpen zehatza",
          "Argazkiko eraikinaren existentzia",
          "Leihoen forma ikusgarria"
        ],
        1,
        "Etekinak ekoizpen- eta lan-erregistroak behar ditu."
      ],
      [
        "Zer akats litzateke lehen fabrikei robotak egoztea?",
        [
          "Anakronismoa",
          "Nekazaritza-txandaketa",
          "Burdinaren pudelazioa",
          "Herri-lurren itxitura"
        ],
        0,
        "Geroagoko teknologia aurreko garaira eramango litzateke."
      ],
      [
        "Kostuak % 10 jaisten dira. Prezio guztiak berdin jaisten al dira?",
        [
          "Bai, beste baldintzarik gabe",
          "Bai, eta soldata guztiak % 10 igotzen dira",
          "Ez, kostuak inoiz eragiten ez duelako",
          "Ez nahitaez"
        ],
        3,
        "Prezioa merkatuaren eta beste osagaien mende ere badago."
      ],
      [
        "Zer erregistrok erakusten du eskulanaren kontzentrazioa?",
        [
          "Portuen arteko distantziak bakarrik",
          "Txandaketa bateko labore kopurua",
          "Langileak eta lantokia",
          "Meatzaritza-patente baten data bakarrik"
        ],
        2,
        "Ekoizpena non biltzen den eta nork lan egiten duen egiaztatu behar da."
      ],
      [
        "«Fabrika etxe handi bat besterik ez da». Zer uzten du kanpoan?",
        [
          "Barruko espazioaren existentzia",
          "Antolaketa, makinak eta lan-kontrola",
          "Eraikuntzaren itxura ikusgarria",
          "Hormak izateko aukera"
        ],
        1,
        "Fabrika-aldaketa ekoizpenekoa eta soziala da, ez arkitekturakoa bakarrik."
      ],
      [
        "Enpresariak pieza osoak bakarrik alderatzen ditu. Zer falta da?",
        [
          "Erabilitako baliabideak eta denbora",
          "Leiho bakoitzaren marka bakarrik",
          "Langileen altuera bakarrik",
          "Merkatari aurkarien izenak bakarrik"
        ],
        0,
        "Datu horiek gabe ezin ditu ekoizpena eta produktibitatea bereizi."
      ],
      [
        "Zer ondoriozta daiteke sarrera-arauditik?",
        [
          "Langile bakoitzaren soldata zehatza",
          "Fabrika guztietan aplikazio berdina",
          "Edozein ez-betetzeren falta",
          "Ordutegiak kontrolatzeko asmoa"
        ],
        3,
        "Arauak aurreikusitako kontrolaren berri ematen du, ez gertatutako guztiarena."
      ],
      [
        "Zer kontrastek aztertzen du hobekien lan-aldaketa?",
        [
          "Bi kaleren luzera bakarrik",
          "Lan-daturik gabeko biografiak bakarrik",
          "Zereginak, ordutegiak eta autonomia lehen/gero",
          "Bi eraikinen koloreak bakarrik"
        ],
        2,
        "Alderaketak antolaketa eta lan-harremanak aztertu behar ditu."
      ],
      [
        "Zer balorazio da orekatua fabrika-sistemaz?",
        [
          "Teknika edo antolaketa aldatu gabe",
          "Eraginkortasun handiagoa eta eskulanaren zatiaren autonomia txikiagoa",
          "Kalteak bakarrik, ekoizpen-hazkunderik gabe",
          "Guztien berehalako ongizatea bakarrik"
        ],
        1,
        "Ekoizpen-abantailak eta gizarte-ondorioak aitortu behar ditu."
      ]
    ]
  },
  {
    "nivel": 5,
    "nombre": "Gaitasun-maila aurreratua",
    "descripcion": "Azalpenak aplikatu, ebaluatu eta eraikitzea.",
    "preguntas": [
      [
        "Materialaren prestaketak makina guztiak frenatzen ditu. Zer hobetu?",
        [
          "Prestaketa-fasea",
          "Zain dauden makinak bikoiztea bakarrik",
          "Hornidura are gehiago murriztea",
          "Prozesuaren berrikuspen osoa kentzea"
        ],
        0,
        "Muga hobetzeak gainerako faseak hornitzea ahalbidetzen du."
      ],
      [
        "Nola egiaztatu zereginak banatzearen eragina?",
        [
          "Izena duten zereginak bakarrik zenbatuz",
          "Neurtu gabe beti hobetzen duela suposatuz",
          "Merkatariaren etekina bakarrik neurtuz",
          "Orduko unitateak baliabide berdinekin alderatuz"
        ],
        3,
        "Denbora eta baliabideak kontrolatu behar dira etekina ebaluatzeko."
      ],
      [
        "Makinak gabe, alda daiteke lan-antolaketa?",
        [
          "Ez, robotik gabe ez dago espezializaziorik",
          "Bai, baina lan guztia desagertzen da",
          "Bai, zereginak banatu eta koordinatuz",
          "Ez, antolaketa guztiek lurruna behar dute"
        ],
        2,
        "Antolaketa eta mekanizazioa dimentsio desberdinak dira."
      ],
      [
        "Zer datu gehituko zenuke langileen ongizatea baloratzeko?",
        [
          "Merkatariaren kokapena soilik",
          "Soldata, lanaldia eta segurtasuna",
          "Ate bakoitzaren pisua bakarrik",
          "Herrialdeko patente kopurua bakarrik"
        ],
        1,
        "Ongizateak gizarte-adierazleak behar ditu, ez ekoizpena bakarrik."
      ],
      [
        "Museoak telelana deitzen dio domestic system delakoari. Zer ñabartu?",
        [
          "Teknologia digitalik gabeko lan sakabanatua",
          "Internet XVII. mendean existitzen zela",
          "Etxeetan roboten nahitaezko erabilera",
          "Merkataririk eta salmentarik eza"
        ],
        0,
        "Konparazioa egin daiteke, baina garaiak eta teknologiak ez dira berdindu behar."
      ],
      [
        "Nola gezurtatu «fabrikak tresnak bakarrik aldatu zituen»?",
        [
          "Leihoen materialak soilik zerrendatuz",
          "Makina guztien existentzia ukatuz",
          "Kotoiaren prezioaz bakarrik hitz eginez",
          "Zereginak, ordutegiak eta gainbegiraketa erakutsiz"
        ],
        3,
        "Eraldaketak antolaketa eta lan-harremanak barne hartu zituen."
      ],
      [
        "Bi fabrikek berdin ekoizten dute ordu desberdinekin. Zein da produktiboagoa?",
        [
          "Gauza bera egiteko ordu gehiago erabiltzen dituena",
          "Leiho gehiago dituena, beste daturik gabe",
          "Ordu gutxiago erabiltzen dituena",
          "Fatxada handiagoa duena"
        ],
        2,
        "Emaitza berdinarekin baliabide gutxiago erabiltzeak etekin handiagoa dakar."
      ],
      [
        "Zeregin errepikatuak abiadura eta nekea handitzen ditu. Nola ebaluatu?",
        [
          "Guztientzat etekin berdinak suposatuz",
          "Ekoizpen-onurak eta lan-karga neurtuz",
          "Abiadura bakarrik kontuan hartu eta osasuna baztertuz",
          "Ekoizpen-hobekuntza guztiak ukatuz"
        ],
        1,
        "Ondorioak dimentsio batean baino gehiagotan baloratu behar dira."
      ],
      [
        "Merkatariak materiala ematen du baina langileak ez ditu biltzen. Zer eredu?",
        [
          "Etxeko sistema",
          "Fabrika-sistema zentralizatua",
          "Muntaketa-kate modernoa",
          "Merkaturik gabeko ekoizpena"
        ],
        0,
        "Merkataritza-koordinazioa fabrika-kontzentraziorik gabe egon daiteke."
      ],
      [
        "Langileak, energia eta ehungailuak arauen pean biltzen dira. Zer eredu?",
        [
          "Landa-autokontsumo hutsa",
          "Domestic system sakabanatua",
          "Makina eta kontzentraziorik gabeko gremioa",
          "Fabrika-sistema"
        ],
        3,
        "Kontzentrazioak eta gainbegiraketak fabrika bereizten dute."
      ],
      [
        "Zer galderak ikertzen du autonomia-galera?",
        [
          "Zer kolore nahiago du jabeak?",
          "Zenbat pisatzen du tailerreko ateak?",
          "Nork erabakitzen ditu zereginak eta ordutegiak?",
          "Zenbat leiho ditu eraikinak?"
        ],
        2,
        "Autonomiak norberaren jardueraren gaineko kontrola esan nahi du."
      ],
      [
        "Nola diseinatuko zenuke ereduen konparazio historikoa?",
        [
          "Desberdintasunik ez zegoela suposatuz",
          "Hirurentzat irizpide berberak erabiliz",
          "Bakoitza loturarik gabeko irizpideekin deskribatuz",
          "Mende bakoitzeko prezio isolatu bat bakarrik alderatuz"
        ],
        1,
        "Lekuak, koordinazioak, baliabideek eta zereginek zehaztasunez alderatzen uzten dute."
      ],
      [
        "Zer esango zenuke «langile bakoitzak produktu osoa egiten zuen» esaldiaren aurrean?",
        [
          "Fabrikak zeregin partzialak areagotu zituen",
          "Fabrikak espezializazio osoa kendu zuen",
          "Merkatariek bakarrik egiten zuten produktua",
          "Makinek banaketa guztiak eragozten zituzten"
        ],
        0,
        "Langile bakoitzak prozesuaren zati bat egiten zuen, ez multzo osoa."
      ],
      [
        "Zer muga du enpresa-dokumentuak soilik erabiltzeak?",
        [
          "Edozein ekoizpen-zifra ezagutzea eragozten du",
          "Banakako esperientzia guztiak bermatzen ditu",
          "Landa-etxe bakoitza beti deskribatzen du",
          "Langileen ikuspegia falta daiteke"
        ],
        3,
        "Beste taldeetako lekukotasun eta dokumentuekin kontrastatzea komeni da."
      ],
      [
        "Enpresariak inbertsio eta antolaketarik gabe gehiago ekoiztea agintzen du. Zer ebaluatu?",
        [
          "Bere erretratuaren tamaina soilik",
          "Enpresaria delako promesa onartu",
          "Promesaren baliabideak eta mekanismoak",
          "Baieztatzeko segurtasuna bakarrik"
        ],
        2,
        "Hobekuntzek baliabideak eta koordinazioa azaltzea eskatzen dute."
      ],
      [
        "Ehungailu azkarrak berrikuspenaren aurretik pilaketa sortzen badu, zer egin?",
        [
          "Faseen koordinazio guztia kendu",
          "Berrikusteko ahalmena orekatu",
          "Berrikuspena aldatu gabe ehungailuak gehitu",
          "Pilaketak kalitatea handitzen duela suposatu"
        ],
        1,
        "Irteerako fase motelak prozesu osoa muga dezake."
      ],
      [
        "Zer ondorio ez du bermatzen mekanizazioak?",
        [
          "Langile bakoitzaren ongizate automatikoa",
          "Ekoizpenean baliabide teknikoak erabiltzea",
          "Eragiketak azkartzeko aukera",
          "Ekoizpen-antolaketaren aldaketak"
        ],
        0,
        "Ongizatea soldaten, baldintzen eta banaketaren mende dago."
      ],
      [
        "Zer ebidentziak gezurtatuko luke berehalako trantsizioa?",
        [
          "Makina berri baten patente bakarra",
          "Dataren gabeko horma-argazkia",
          "Beste daturik gabeko asmatzailearen biografia",
          "Garai berean jardunean zeuden tailerrak eta fabrikak"
        ],
        3,
        "Dokumentatutako elkarbizitzak jarraipena eta aldaketa erakusten ditu."
      ],
      [
        "Zer sintesik uztartzen ditu teknologia eta gizartea?",
        [
          "Teknikak ez zuen lanarekin loturarik izan",
          "Langile guztiak jabe bihurtu ziren",
          "Makinek eta kontzentrazioak zereginak eta kontrola aldatu zituzten",
          "Eraikin urdinen kopurua bakarrik handitu zen"
        ],
        2,
        "Fabrika-sistemak baliabideak eta lan-harremanak aldatu zituen."
      ],
      [
        "Zer amaierako balorazio defendatuko zenuke?",
        [
          "Gremio-artisautzara itzulera hutsa",
          "Ekoizteko ahalmen handiagoa eta lan-tentsio berriak",
          "Guztientzat hobekuntza berdin eta berehalakoa",
          "Ekoizpenean eraginik gabeko aldaketa"
        ],
        1,
        "Fabrikak ekoizpena handitu zuen, baina lan-bizitza modu desberdinean eraldatu zuen."
      ]
    ]
  }
];
