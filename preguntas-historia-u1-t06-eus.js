const NIVELES_T06_EUS = [
  {
    "nivel": 1,
    "nombre": "Oinarrizko kontzeptuak",
    "descripcion": "Terminoak, datuak eta protagonistak ezagutzea.",
    "preguntas": [
      [
        "Noiz kokatzen da Bigarren Industria Iraultza?",
        [
          "XIX.aren amaiera eta XX.aren hasiera",
          "XV.aren eta XVI.aren hasiera",
          "XVII.aren amaiera soilik",
          "2000. urtearen ondoren soilik"
        ],
        0,
        "Etapa 1870 inguruan kokatzen da, berehalako aldaketarik gabe."
      ],
      [
        "Zer energiak hartu zuten protagonismoa?",
        [
          "Haizea eta animalien indarra soilik",
          "Ikatza eta ura soilik, motorrik gabe",
          "Energia nuklearra eta eguzkiarena soilik",
          "Elektrizitatea eta petrolioa"
        ],
        3,
        "Energia berriek industria-aplikazioak zabaldu zituzten."
      ],
      [
        "Zerk bihurtzen du energia mekanikoa elektriko?",
        [
          "Ehungailua",
          "Pistoia",
          "Dinamoa",
          "Galdara"
        ],
        2,
        "Dinamoak mugimendutik elektrizitatea sortzen du."
      ],
      [
        "Zer gailuk egokitzen du tentsio elektrikoa?",
        [
          "Administrazio-kontseilua",
          "Transformadorea",
          "Lurrun-galdara",
          "Anezka hegalaria"
        ],
        1,
        "Transformadoreak tentsioa garraiorako eta erabilerarako egokitzen du."
      ],
      [
        "Zer asmakuntza lotzen da argiztapen elektrikoarekin?",
        [
          "Bonbilla",
          "Lurrun-balbula",
          "Anezka",
          "Bihurgailua"
        ],
        0,
        "Bonbillak argiztapen elektrikoa zabaldu zuen."
      ],
      [
        "Zer asmakuntzak hobetu zuen urruneko komunikazioa?",
        [
          "Dinamoa",
          "Traktorea",
          "Hormigoi armatua",
          "Telefonoa"
        ],
        3,
        "Telefonoak elektrizitatea komunikazioan erabiltzen du."
      ],
      [
        "Zer lortzen du gasolina-autoak petroliotik?",
        [
          "Irundako kotoia",
          "Banku-parte-hartzea",
          "Erregaia",
          "Dagoeneko sortutako korrontea"
        ],
        2,
        "Gasolina erregai gisa erabilitako deribatua da."
      ],
      [
        "Non erretzen da erregaia barne-errekuntzako motorrean?",
        [
          "Presa hidrauliko batean",
          "Motor barruan",
          "Kanpoko galdara batean",
          "Geltoki barruan"
        ],
        1,
        "Izenak errekuntza barruan gertatzen dela adierazten du."
      ],
      [
        "Zer sektorek fabrikatu zituen ongarriak eta tindagaiak?",
        [
          "Industria kimikoa",
          "Ibai-nabigazioa",
          "Abeltzaintza tradizionala",
          "Gremio-artisautza"
        ],
        0,
        "Kimikak nekazaritza- eta industria-produktu ugari garatu zituen."
      ],
      [
        "Zer materialek ahalbidetu zituzten egitura altu berriak?",
        [
          "Kotoia eta artile naturala",
          "Buztina soilik, indargarririk gabe",
          "Gasolina eta kautxu likidoa",
          "Altzairua eta hormigoi armatua"
        ],
        3,
        "Materialek eraikuntza-aukerak zabaldu zituzten."
      ],
      [
        "Zerk hobetzen ditu kautxuaren propietateak?",
        [
          "Akzio-banaketa",
          "Laborantza-txandaketa",
          "Bulkanizazioa",
          "Bateratze politikoa"
        ],
        2,
        "Bulkanizazioak kautxuaren propietateak aldatzen ditu."
      ],
      [
        "Zer ikerketarekin lotzen da Marie Curie?",
        [
          "Muntaketa-katea",
          "Erradioaktibitatea",
          "Anezka hegalaria",
          "Aduana-batasuna"
        ],
        1,
        "Curie erradioaktibitatearen ikerketan nabarmendu zen."
      ],
      [
        "Zer autorerekin lotzen da zereginen eta denboren analisia?",
        [
          "Frederick Taylor",
          "Adam Smith",
          "John Kay",
          "George Stephenson"
        ],
        0,
        "Taylorismoak zereginak eta denborak aztertu eta antolatzen ditu."
      ],
      [
        "Norekin lotzen da Fordismoa?",
        [
          "James Watt",
          "Marie Curie",
          "Robert Fulton",
          "Henry Ford"
        ],
        3,
        "Ford ekoizpen masiboarekin eta muntaketa-katearekin lotzen da."
      ],
      [
        "Zer gertatzen da muntaketa-katean?",
        [
          "Dibidenduak banatzen dituen akzioduna",
          "Gordailuak ematen dituen bankua",
          "Ondoz ondoko lanpostuetatik doan produktua",
          "Dena banaketarik gabe egiten duen artisaua"
        ],
        2,
        "Kateak ondoz ondoko lanpostuen eragiketak koordinatzen ditu."
      ],
      [
        "Zer neurtzen du produktibitateak?",
        [
          "Etekina kosturik gabe",
          "Ekoizpena erabilitako baliabideko",
          "Fabrika kopuru osoa soilik",
          "Prezioa ekoizpen-kopururik gabe"
        ],
        1,
        "Produktibitateak emaitza eta baliabideak lotzen ditu."
      ],
      [
        "Zerk elkartzen ditu jarduera bereko enpresak?",
        [
          "Kontzentrazio horizontala",
          "Kontzentrazio bertikala",
          "Aduana-batasuna",
          "Laborantza-txandaketa"
        ],
        0,
        "Horizontalak antzeko jarduerako enpresak biltzen ditu."
      ],
      [
        "Zerk integratzen ditu ekoizpenaren etapa osagarriak?",
        [
          "Kontzentrazio horizontala",
          "Dibidendu proportzionala",
          "Artisauen lehia",
          "Kontzentrazio bertikala"
        ],
        3,
        "Bertikalak ekoizpen-katearen faseak elkartzen ditu."
      ],
      [
        "Zer da kartela?",
        [
          "Denborak neurtzeko metodoa",
          "Motorren hobekuntza",
          "Enpresen arteko akordioa",
          "Enpresa-fusio bakarra"
        ],
        2,
        "Kartelak erabakiak koordinatzen ditu, fusioa behar izan gabe."
      ],
      [
        "Zer sozietatek kontrolatzen ditu besteak parte-hartzeen bidez?",
        [
          "Taylorismoa",
          "Holdinga",
          "Dinamoa",
          "Prezio-kartela"
        ],
        1,
        "Holdingak beste sozietateak kapitalaren bidez kontrolatzen ditu."
      ]
    ]
  },
  {
    "nivel": 2,
    "nombre": "Ulermena",
    "descripcion": "Kontzeptuak egoera zehatzetan identifikatzea.",
    "preguntas": [
      [
        "Iturriak XIX. mendearen amaierako eta XX.aren hasierako berrikuntzak azaltzen ditu. Zer etapa da?",
        [
          "XIX.aren amaiera eta XX.aren hasiera",
          "XV.aren eta XVI.aren hasiera",
          "XVII.aren amaiera soilik",
          "2000. urtearen ondoren soilik"
        ],
        0,
        "Etapa 1870 inguruan kokatzen da, berehalako aldaketarik gabe."
      ],
      [
        "Fabrikak motor elektrikoak eta ibilgailuak gasolina erabiltzen dituzte. Zer aldaketa erakusten du?",
        [
          "Haizea eta animalien indarra soilik",
          "Ikatza eta ura soilik, motorrik gabe",
          "Energia nuklearra eta eguzkiarena soilik",
          "Elektrizitatea eta petrolioa"
        ],
        3,
        "Energia berriek industria-aplikazioak zabaldu zituzten."
      ],
      [
        "Makina batek biratuz korrontea sortzen du. Zer gailu adierazten du?",
        [
          "Ehungailua",
          "Pistoia",
          "Dinamoa",
          "Galdara"
        ],
        2,
        "Dinamoak mugimendutik elektrizitatea sortzen du."
      ],
      [
        "Sareak korronte alternoaren tentsioa aldatu behar du. Zer erabiltzen du?",
        [
          "Administrazio-kontseilua",
          "Transformadorea",
          "Lurrun-galdara",
          "Anezka hegalaria"
        ],
        1,
        "Transformadoreak tentsioa garraiorako eta erabilerarako egokitzen du."
      ],
      [
        "Kaleak erregai-lanparen ordez argi elektrikoa erabiltzen du. Zer gailu da?",
        [
          "Bonbilla",
          "Lurrun-balbula",
          "Anezka",
          "Bihurgailua"
        ],
        0,
        "Bonbillak argiztapen elektrikoa zabaldu zuen."
      ],
      [
        "Bi pertsonak hiri desberdinetatik hitz egiten dute gailu berri baten bidez. Zein da?",
        [
          "Dinamoa",
          "Traktorea",
          "Hormigoi armatua",
          "Telefonoa"
        ],
        3,
        "Telefonoak elektrizitatea komunikazioan erabiltzen du."
      ],
      [
        "Petrolioa findu da errekuntza-motorra elikatzeko. Zer lortzen da?",
        [
          "Irundako kotoia",
          "Banku-parte-hartzea",
          "Erregaia",
          "Dagoeneko sortutako korrontea"
        ],
        2,
        "Gasolina erregai gisa erabilitako deribatua da."
      ],
      [
        "Erregaia motor barruan erretzen da hura mugitzeko. Zer motor da?",
        [
          "Presa hidrauliko batean",
          "Motor barruan",
          "Kanpoko galdara batean",
          "Geltoki barruan"
        ],
        1,
        "Izenak errekuntza barruan gertatzen dela adierazten du."
      ],
      [
        "Enpresak pestizidak, botikak eta tindagaiak ekoizten ditu. Zer sektoretakoa da?",
        [
          "Industria kimikoa",
          "Ibai-nabigazioa",
          "Abeltzaintza tradizionala",
          "Gremio-artisautza"
        ],
        0,
        "Kimikak nekazaritza- eta industria-produktu ugari garatu zituen."
      ],
      [
        "Eraikinak metalezko egitura eta hormigoi sendotua uztartzen ditu. Zer berrikuntza erabiltzen du?",
        [
          "Kotoia eta artile naturala",
          "Buztina soilik, indargarririk gabe",
          "Gasolina eta kautxu likidoa",
          "Altzairua eta hormigoi armatua"
        ],
        3,
        "Materialek eraikuntza-aukerak zabaldu zituzten."
      ],
      [
        "Industriak kautxua tratatzen du produktuetarako hobetzeko. Zer prozesu da?",
        [
          "Akzio-banaketa",
          "Laborantza-txandaketa",
          "Bulkanizazioa",
          "Bateratze politikoa"
        ],
        2,
        "Bulkanizazioak kautxuaren propietateak aldatzen ditu."
      ],
      [
        "Zientzialariak substantzia erradioaktiboak ikertzen ditu. Zer izen dator bat koadroarekin?",
        [
          "Muntaketa-katea",
          "Erradioaktibitatea",
          "Anezka hegalaria",
          "Aduana-batasuna"
        ],
        1,
        "Curie erradioaktibitatearen ikerketan nabarmendu zen."
      ],
      [
        "Ingeniariak langileen mugimenduak kronometratzen ditu. Zer metodo da?",
        [
          "Frederick Taylor",
          "Adam Smith",
          "John Kay",
          "George Stephenson"
        ],
        0,
        "Taylorismoak zereginak eta denborak aztertu eta antolatzen ditu."
      ],
      [
        "Auto-fabrikak katea eta estandarizazioa erabiltzen ditu Forden moduan. Zer enpresari da?",
        [
          "James Watt",
          "Marie Curie",
          "Robert Fulton",
          "Henry Ford"
        ],
        3,
        "Ford ekoizpen masiboarekin eta muntaketa-katearekin lotzen da."
      ],
      [
        "Autoa piezak gehitzen dituzten lanpostuetatik doa. Zer antolaketa erakusten du?",
        [
          "Dibidenduak banatzen dituen akzioduna",
          "Gordailuak ematen dituen bankua",
          "Ondoz ondoko lanpostuetatik doan produktua",
          "Dena banaketarik gabe egiten duen artisaua"
        ],
        2,
        "Kateak ondoz ondoko lanpostuen eragiketak koordinatzen ditu."
      ],
      [
        "Pieza kopurua lanorduekin alderatzen da. Zer adierazle da?",
        [
          "Etekina kosturik gabe",
          "Ekoizpena erabilitako baliabideko",
          "Fabrika kopuru osoa soilik",
          "Prezioa ekoizpen-kopururik gabe"
        ],
        1,
        "Produktibitateak emaitza eta baliabideak lotzen ditu."
      ],
      [
        "Automobil-fabrikatzaile batzuk elkartu dira. Zer kontzentrazio da?",
        [
          "Kontzentrazio horizontala",
          "Kontzentrazio bertikala",
          "Aduana-batasuna",
          "Laborantza-txandaketa"
        ],
        0,
        "Horizontalak antzeko jarduerako enpresak biltzen ditu."
      ],
      [
        "Taldeak meategiak, fundizioak eta fabrikak biltzen ditu. Zer kontzentrazio da?",
        [
          "Kontzentrazio horizontala",
          "Dibidendu proportzionala",
          "Artisauen lehia",
          "Kontzentrazio bertikala"
        ],
        3,
        "Bertikalak ekoizpen-katearen faseak elkartzen ditu."
      ],
      [
        "Enpresa independenteek prezioak adostu dituzte. Zer forma da?",
        [
          "Denborak neurtzeko metodoa",
          "Motorren hobekuntza",
          "Enpresen arteko akordioa",
          "Enpresa-fusio bakarra"
        ],
        2,
        "Kartelak erabakiak koordinatzen ditu, fusioa behar izan gabe."
      ],
      [
        "Sozietateak hainbat enpresaren kapitala du eta kontrolatzen ditu. Nola deitzen da?",
        [
          "Taylorismoa",
          "Holdinga",
          "Dinamoa",
          "Prezio-kartela"
        ],
        1,
        "Holdingak beste sozietateak kapitalaren bidez kontrolatzen ditu."
      ]
    ]
  },
  {
    "nivel": 3,
    "nombre": "Loturak eta prozesuak",
    "descripcion": "Kausak, faseak eta ondorioak lotzea.",
    "preguntas": [
      [
        "Zer kateak deskribatzen ditu dinamoa eta motorra?",
        [
          "Mugimendua → elektrizitatea → mugimendua",
          "Ikatza → kotoia → dibidendua",
          "Prezioa → petrolioa → akzioduna",
          "Soldata → transformadorea → txertoa"
        ],
        0,
        "Dinamoak elektrizitatea sortzen du; motorrak mugimendu bihurtzen du."
      ],
      [
        "Zergatik zabaltzen du elektrizitatea banatzeak industria-kokapena?",
        [
          "Meategi bakoitzaren gainean jartzera behartzen du",
          "Makineria-behar osoa kentzen du",
          "Merkatu guztiak erabat ordezkatzen ditu",
          "Energia sortze-lekutik urrun eramaten du"
        ],
        3,
        "Sareek iturritik urrun dauden motorrak elikatzen dituzte."
      ],
      [
        "Zer harremanek bultzatzen du errekuntza-autoa?",
        [
          "Altzairua → soldata → telefonoa",
          "Ikatza → dibidendua → antibiotikoa",
          "Petrolioa → erregaia → motorra",
          "Kotoia → haria → dinamoa"
        ],
        2,
        "Petrolioaren deribatuek errekuntza-motorrak elikatzen dituzte."
      ],
      [
        "Zer kateak azaltzen ditu ekoizpena eta prezioak Fordismoan?",
        [
          "Herrialdeak fusionatu → dinamoak sortu → soldata finkoa",
          "Estandarizatu → eskala handitu → kostuak murriztu",
          "Prezioak neurtu → makinak kendu → gehiago ekoitzi",
          "Merkatuak itxi → soldatak igo → kostuen amaiera"
        ],
        1,
        "Koordinazioak eta eskalak unitateko kostua jaitsi dezakete."
      ],
      [
        "Nola lotzen dira Taylorismoa eta lanaren banaketa?",
        [
          "Zeregin espezializatuak aztertu eta estandarizatzen ditu",
          "Fabrikazio osoa artisau bati ematen dio",
          "Denbora-neurketa guztiak kentzen ditu",
          "Akzioak erregai bihurtzen ditu"
        ],
        0,
        "Taylorismoak zeregin eta mugimenduen antolaketan sakontzen du."
      ],
      [
        "Zer gehitzen dio Fordismoak zereginen antolaketari?",
        [
          "Banakako neurrira egindako fabrikazioa soilik",
          "Maileguak soilik, ekoizpenik gabe",
          "Etxeko lan sakabanatua soilik",
          "Katea eta produktu estandarizatua"
        ],
        3,
        "Produktuak lanpostu koordinatuak zeharkatzen ditu ekoizpen masiborako."
      ],
      [
        "Zergatik bultzatu zituzten instalazio handiek kontzentrazioak?",
        [
          "Enpresa-erosketa guztiak eragozten zituzten",
          "Enpresen tamaina beti murrizten zuten",
          "Kapital eta eskala handiak eskatzen zituzten",
          "Ez zuten finantzaketarik behar"
        ],
        2,
        "Inbertsioek eta lehiak talde handiagoak piztu zituzten."
      ],
      [
        "Zer lotura dago bankuen eta industria-kontzentrazioaren artean?",
        [
          "Motor bakoitza akzio batekin ordezkatzen dute",
          "Talde handiak finantzatu eta haietan parte hartzen dute",
          "Fabriketan inbertitzea beti debekatzen dute",
          "Industria guztia nekazaritza bihurtzen dute"
        ],
        1,
        "Bankuak industria-finantzatzaile garrantzitsuak izan ziren."
      ],
      [
        "Zergatik muga dezake kartelak lehia?",
        [
          "Prezioak edo merkatuak koordinatzen ditu",
          "Saltzaile independenteak beti biderkatzen ditu",
          "Prezio guztiak jaistera behartzen du",
          "Enpresen arteko harreman guztiak kentzen ditu"
        ],
        0,
        "Akordioak partaideen arteko lehia murriztu dezake."
      ],
      [
        "Zer alde dago trustaren eta kartelaren artean?",
        [
          "Elektrizitatea eta petrolioa",
          "Soldata eta lanaldia",
          "Dinamoa eta motor elektrikoa",
          "Enpresa-batasuna eta akordioa"
        ],
        3,
        "Trustak enpresak integratzen ditu; kartelak independente mantendu ditzake."
      ],
      [
        "Zergatik ez dira horizontala eta bertikala baliokideak?",
        [
          "Iparraldeko eta hegoaldeko hiriak",
          "Sozietate publikoa eta pribatua",
          "Jarduera bera eta fase desberdinak",
          "Enpresa altua eta enpresa baxua"
        ],
        2,
        "Sailkapena jardueren araberakoa da, ez altueraren edo kokapenaren."
      ],
      [
        "Zer harremanek lotzen ditu kimika eta nekazaritza?",
        [
          "Fusioak eta dibidenduen banaketa",
          "Ongarriak eta labore-tratamenduak",
          "Akzioak eta administrazio-kontseiluak",
          "Dinamoak eta tranbiak soilik"
        ],
        1,
        "Kimikak nekazaritzan erabilitako materialak sortu zituen."
      ],
      [
        "Zer lotura dago zientziaren eta infekzio-prebentzioaren artean?",
        [
          "Mikrobioak ezagutu → higienea hobetu",
          "Zereginak kronometratu → bakterioak kendu",
          "Altzairua urtu → txertoak automatikoki sortu",
          "Akzioak banatu → ospitaleak esterilizatu"
        ],
        0,
        "Transmisioa ezagutzeak esterilizazioa eta antisepsia bultzatu zituen."
      ],
      [
        "Zer harremanek azaltzen du energien baterako erabilera?",
        [
          "Egun bakarreko ordezkapen unibertsala",
          "Meategi guztien berehalako desagerpena",
          "Enpresa-inbertsiorik batere ez",
          "Teknologia berrien ezarpen desberdina"
        ],
        3,
        "Trantsizioa sektoreen, kostuen eta sareen araberakoa zen."
      ],
      [
        "Zerk murritz dezake kate bateko unitateko kostua?",
        [
          "Lanpostuen arteko koordinazio gutxiago",
          "Beharrezkoak ez diren mugimendu gehiago",
          "Produktu bakoitzeko denbora gutxiago",
          "Zuzendu gabeko akats gehiago"
        ],
        2,
        "Koordinatzeak eta denbora murrizteak eraginkortasuna hobetu dezakete."
      ],
      [
        "Zer baldintza behar da produktibitate handiagoaz hitz egiteko?",
        [
          "Akziodun gehiago dituen fabrika soilik",
          "Baliabide berdinarekin emaitza gehiago",
          "Unitate gehiago soilik, baliabideak neurtu gabe",
          "Unitate bakoitzaren prezio handiagoa soilik"
        ],
        1,
        "Ekoizpena erabilitako baliabideekin lotu behar da."
      ],
      [
        "Zer segidak uztartzen ditu finantzaketa eta ekoizpen masiboa?",
        [
          "Kapitala → instalazioak → unitate ugari",
          "Soldata → isolamendua → salmentarik ez",
          "Dibidendua → mikrobioa → dinamoa",
          "Prezioa → nekazaritza → Erdi Aroko gremioa"
        ],
        0,
        "Inbertsioak eskala handiko instalazioak ahalbidetzen ditu."
      ],
      [
        "Zer gatazka dago kartelizazioaren eta liberalismoaren artean?",
        [
          "Motor elektrikoa eta dinamoa",
          "Altzairua eta hormigoi armatua",
          "Automobila eta langile-soldata",
          "Akordio murriztaileak eta lehia"
        ],
        3,
        "Lehia mugatzeko akordioak lehia-idealaren aurkakoak dira."
      ],
      [
        "Zerk bereizten ditu Bigarren eta Lehen Industria Iraultzak?",
        [
          "Gremio-lanera itzulera orokorrak",
          "Merkatuaren erabateko desagerpenak",
          "Energia, sektore eta metodo berriek",
          "Fabrika guztien amaiera osoak"
        ],
        2,
        "Bigarrenak lehendik hasitako industrializazioa eraldatzen du."
      ],
      [
        "Nola lotzen dira estandarizazioa eta katea?",
        [
          "Produktuak ez du muntaketarik behar",
          "Antzeko piezek zeregin errepikatuak errazten dituzte",
          "Unitate bakoitzak prozesu osoa aldatzera behartzen du",
          "Pieza guztiak neurririk gabe egiten dira"
        ],
        1,
        "Uniformetasunak eragiketa errepikagarriak antolatzea ahalbidetzen du."
      ]
    ]
  },
  {
    "nivel": 4,
    "nombre": "Analisi historikoa",
    "descripcion": "Iturriak, datuak eta baieztapenak interpretatzea.",
    "preguntas": [
      [
        "Ford: 950 $ 1909an eta 490 $ 1914an. Zer murrizketa absolutu dago?",
        [
          "460 $",
          "490 $",
          "950 $",
          "1 440 $"
        ],
        0,
        "950 ken 490 eginda, 460 dira."
      ],
      [
        "Zer portzentajek hurbiltzen du 950 $-tik 490 $-ra jaitsiera?",
        [
          "% 4,6",
          "% 51,6",
          "% 95",
          "% 48,4"
        ],
        3,
        "460 zati 950 bider 100 eginda, gutxi gorabehera % 48,4 da."
      ],
      [
        "Hasierako prezioaren zer proportzio dira 950 $-tik 490 $?",
        [
          "% 4,9",
          "% 95",
          "% 51,6",
          "% 48,4"
        ],
        2,
        "Azken prezioa eta murrizketa-kopurua ez dira gauza bera."
      ],
      [
        "Ford 18 664 autotik 308 213ra igaro da. Zer igoera absolutu dago?",
        [
          "18 664",
          "289 549",
          "326 877",
          "308 213"
        ],
        1,
        "Azken ekoizpenari hasierakoa kentzen zaio."
      ],
      [
        "Gutxi gorabehera zenbat aldiz handitu zen ekoizpen hori?",
        [
          "16,5 aldiz",
          "1,65 aldiz",
          "165 aldiz",
          "0,165 aldiz"
        ],
        0,
        "308 213 zati 18 664 eginda, 16,5 inguru da."
      ],
      [
        "Zer ezin da Forden taularekin bakarrik kalkulatu?",
        [
          "Prezioen arteko aldea",
          "Auto kopuruaren aldaketa",
          "Ekoizpenen arteko erlazioa",
          "Langileko produktibitatea"
        ],
        3,
        "Langileei edo lanorduei buruzko datuak falta dira."
      ],
      [
        "100 ordutan 200 pieza egin dira. Zer produktibitate dago?",
        [
          "0,5 pieza/ordu",
          "100 pieza/ordu",
          "2 pieza/ordu",
          "200 pieza/ordu"
        ],
        2,
        "200 zati 100 eginda, 2 da; adibide hipotetikoa."
      ],
      [
        "Gero 300 pieza egin dira 100 ordutan. Zenbat hazi da produktibitatea?",
        [
          "% 10",
          "% 50",
          "% 100",
          "% 150"
        ],
        1,
        "Orduko 2tik 3ra: 1 zati 2 bider 100, % 50."
      ],
      [
        "Piezak eta orduak bikoiztu dira. Zer gertatzen da orduko piezekin?",
        [
          "Berdin mantentzen dira",
          "Bikoizten dira",
          "Erdira jaisten dira",
          "Nahitaez zero bihurtzen dira"
        ],
        0,
        "Zenbakitzailea eta izendatzailea bikoiztean erlazioa berdina da."
      ],
      [
        "Elektrizitate-grafikoak industria eta argiztapena bereizten ditu. Zer irakurri lehenik?",
        [
          "Eremu gorria soilik",
          "Curieren argazkia soilik",
          "Petrolioaren prezioa urterik gabe",
          "Legenda, ardatzak eta unitatea"
        ],
        3,
        "Legendak erabilerak identifikatzen ditu eta ardatzak neurketa adierazten du."
      ],
      [
        "Grafikoa 1936ra iristen da. Zer ondorio kronologiko da zuzena?",
        [
          "Elektrizitatea 1936an asmatu zen",
          "Ez du XX. mendeko daturik",
          "Etaparen hasieraren ondorengo urteak biltzen ditu",
          "Dena 1870ean bakarrik gertatu zen"
        ],
        2,
        "Datuek bilakaera adierazten dute, ez egun bateko aldaketa."
      ],
      [
        "Zer akats du «elektrizitateak ikatza berehala kendu zuen» esaldiak?",
        [
          "Ekoizpen-neurri bat soilik deskribatzen du",
          "Hedapena berehalako ordezkapenarekin nahasten du",
          "Bi energia zuzen bereizten ditu",
          "Teknologien baterako erabilera zuzen azaltzen du"
        ],
        1,
        "Energia berriak eta zaharrak batera erabili ziren."
      ],
      [
        "Iturriak kateko keinuen errepikapena erakusten du. Zer deskribatzen du zuzenean?",
        [
          "Lanaren antolaketa",
          "Banakako soldata guztiak",
          "Akziodunen etekin guztiak",
          "Hiri osoko bizi-kalitatea"
        ],
        0,
        "Irudiak zereginak erakusten ditu; beste ondorioek datu gehiago behar dituzte."
      ],
      [
        "«Enpresa handi guztiak monopolioak dira». Nola baloratzen duzu?",
        [
          "Holding guztiak zuzen definitzen ditu",
          "Dinamoaren funtzioa azaltzen du",
          "Kontzentrazio bertikal guztiak identifikatzen ditu",
          "Tamaina eta merkatu-kontrola nahasten ditu"
        ],
        3,
        "Monopolioa eskaintzaren araberakoa da, ez tamainarena soilik."
      ],
      [
        "Hiru fabrikatzaile independentek kuotak adostu dituzte. Zer erakusten du iturriak?",
        [
          "Dinamo bat",
          "Soldata bat",
          "Kartel bat",
          "Motor bat"
        ],
        2,
        "Enpresen independentzia akordioan mantendu daiteke."
      ],
      [
        "Sozietateak besteak akzioen bidez kontrolatzen ditu. Zer erakusten du eskemak?",
        [
          "Laboreen batasuna",
          "Holding bat",
          "Muntaketa-kate bat",
          "Medikuntza-berrikuntza bat"
        ],
        1,
        "Parte-hartzeen bidezko kontrola holdingaren ezaugarria da."
      ],
      [
        "Iturriak enpresak zuzendaritza komun baten pean elkartu ditu. Zer kontzeptu egokitzen da?",
        [
          "Trusta",
          "Transformadorea",
          "Taylorismoa",
          "Dibidendua"
        ],
        0,
        "Trustak enpresak zuzendaritza komun baten pean integratzen ditu."
      ],
      [
        "Koadroak antibiotikoak biltzen ditu. Zer irakurketak saihesten du anakronismoa?",
        [
          "Aurrerapen guztiak 1870ean kokatzea",
          "Curiek botika guztiak asmatu zituela esatea",
          "Medikuntza eta zientzia lotu gabe daudela esatea",
          "XIX.eko eta XX.eko aurrerapenak bereiztea"
        ],
        3,
        "Koadroak bilakaera zabalagoa laburbiltzen du."
      ],
      [
        "Ekoizpen-zifra hazi da. Zer falta da unitateko kostuak baloratzeko?",
        [
          "Herrialdeko hiriburua soilik",
          "Karrozeriaren kolorea",
          "Kostu osoak eta ekoitzitako unitateak",
          "Enpresari baten izena soilik"
        ],
        2,
        "Unitateko kostua kostu osoak zati unitateak da."
      ],
      [
        "1910etik 1911ra Ford 34 528 autotik 78 440ra igaro da. Zer baieztapen da zuzena?",
        [
          "Soldatak nahitaez bikoiztu dira",
          "Ekoizpena bikoitza baino gehiago hazi da",
          "Ekoizpena berdin mantendu da",
          "Ekoizpena erdira jaitsi da"
        ],
        1,
        "34 528ren bikoitza 69 056 da, 78 440 baino gutxiago."
      ]
    ]
  },
  {
    "nivel": 5,
    "nombre": "Gaitasun-maila aurreratua",
    "descripcion": "Azalpenak aplikatu, ebaluatu eta eraikitzea.",
    "preguntas": [
      [
        "Zer azalpenek lotzen ditu energia, garraioa eta industria?",
        [
          "Motor berriek sektore berriak bultzatzen dituzte",
          "Energiak lan-antolaketa guztia ordezkatzen du",
          "Autoak materialik gabe fabrikatzen dira",
          "Telefonoak garraio fisiko guztiak kentzen ditu"
        ],
        0,
        "Berrikuntzek elkar indartzen dute aplikazioen eta eskariaren bidez."
      ],
      [
        "Enpresak produktibitatea neurtu nahi du. Zer datu bildu behar du?",
        [
          "Euroetako salmentak soilik",
          "Auto bakoitzaren prezioa soilik",
          "Akziodun kopurua soilik",
          "Unitateak eta lanorduak"
        ],
        3,
        "Emaitza neurtutako baliabide batekin alderatzen da."
      ],
      [
        "Zer baloraziok aitortzen ditu Fordismoaren onurak eta kostuak?",
        [
          "Produktuen edo zereginen gaineko eraginik ez",
          "Lan-diziplina guztiaren desagerpena",
          "Kostu txikiagoa eta lan errepikakorra",
          "Etekin berdina eta ziurra guztientzat"
        ],
        2,
        "Ekoizpen- eta lan-ondorioak desberdinak izan daitezke."
      ],
      [
        "Zer alderaketak bereizten ditu Taylorismoa eta Fordismoa?",
        [
          "Aduanak eta mugak",
          "Zereginen analisia eta kate estandarizatua",
          "Ikatza eta kotoia",
          "Dibidendua eta mailegua"
        ],
        1,
        "Biek ekoizpena antolatzen dute, baina definizioak ez dira berdinak."
      ],
      [
        "Fabrikatzaile guztiek prezio altua adostuz gero, zer arrisku dago?",
        [
          "Lehia txikiagoa erosleentzat",
          "Nahitaez lehia biziagoa",
          "Soldata automatikoki berdinak",
          "Inbertsiorik gabe eskaintza handiagoa bermatzea"
        ],
        0,
        "Adosteak aukerak eta lehia-presioa murriztu ditzake."
      ],
      [
        "Taldeak meategia erosi du fundizioa hornitzeko. Zer logika jarraitzen du?",
        [
          "Jarduera berdinen batasun horizontala",
          "Akzioak soldatarekin ordezkatzea",
          "Lehengai guztien erabateko kentzea",
          "Etapen integrazio bertikala"
        ],
        3,
        "Meategiak eta fundizioak etapa osagarriak betetzen dituzte."
      ],
      [
        "Bi auto-fabrika elkartu dira. Zer datuk bereizten du kontzentrazioa?",
        [
          "Bata bestearen iparraldean dago",
          "Logotipoan kolore desberdinak dituzte",
          "Antzeko jarduera egiten dute",
          "Altuera desberdineko eraikinetan daude"
        ],
        2,
        "Horizontala jardueraren arabera definitzen da, ez geografiaren arabera."
      ],
      [
        "Zer frogak aztertuko luke Fordeko langileen ongizatea?",
        [
          "Enpresariaren abizena soilik",
          "Soldatak, lanaldiak eta baldintzak",
          "Autoaren prezioa soilik",
          "Egindako auto kopuru osoa soilik"
        ],
        1,
        "Ongizateak lan- eta gizarte-datuak behar ditu."
      ],
      [
        "Zer argudiok bereizten ditu aurrerapen teknikoa eta hobekuntza unibertsala?",
        [
          "Onurak modu desberdinean banatu daitezke",
          "Asmakuntza guztiek guztiei berdin laguntzen diete",
          "Makina batek gatazka guztiak kentzen ditu",
          "Ekoizpenak zoriontasun guztia neurtzen du"
        ],
        0,
        "Berrikuntzak ondorio desberdinak ditu talde eta erabileren arabera."
      ],
      [
        "Zer adibidek identifikatzen du holding bat eta ez kartel bat?",
        [
          "Enpresa independenteek prezioak adosten dituzte",
          "Langileek katean zereginak errepikatzen dituzte",
          "Ingeniariek lan-denborak neurtzen dituzte",
          "Sozietateak beste batzuen kapitala kontrolatzen du"
        ],
        3,
        "Akzio-kontrolak holdinga akordio hutsetik bereizten du."
      ],
      [
        "Zer planek alderatzen ditu bi ekoizpen-metodo modu egokian?",
        [
          "Makinen kolorea soilik neurtzea",
          "Erabilitako baliabideak baztertzea",
          "Unitateak, orduak, kostuak eta kalitatea neurtzea",
          "Izen ezagunena duen metodoa aukeratzea"
        ],
        2,
        "Adierazleek bolumena eta eraginkortasuna nahastea saihesten dute."
      ],
      [
        "Fabrikak unitateak bikoiztu ditu langile bikoitzekin. Zer ondorio da zuhurra?",
        [
          "Kateak aldaketa guztiak eragin dituela frogatzen du",
          "Ez du langileko hobekuntza frogatzen",
          "Banakako produktibitatea nahitaez bikoiztu da",
          "Kostu guztiak nahitaez murriztu dira"
        ],
        1,
        "Emaitza baliabideko kalkulatu behar da."
      ],
      [
        "Zer harremanek lotzen ditu T05 eta T06?",
        [
          "Kapitalaren finantzaketa eta kontzentrazio handiak",
          "Trenbidearen bi kontakizun berdin",
          "Denborako loturarik gabeko bi zerrenda",
          "Erdi Aroko laboreen definizioa soilik"
        ],
        0,
        "T05ek finantzaketa azaltzen du; T06k aldaketa teknikoak eta kontzentrazioa gehitzen ditu."
      ],
      [
        "Zer adibidek bereizten ditu energia eta enpresa-antolaketa?",
        [
          "Dinamoa eta motorra",
          "Gasolina eta gasolioa",
          "Altzairua eta hormigoia",
          "Elektrizitatea eta holdinga"
        ],
        3,
        "Elektrizitatea energia da; holdinga enpresa-kontrol forma da."
      ],
      [
        "Zer hipotesik behar du Forden taulak baino froga gehiago?",
        [
          "1914an auto gehiago fabrikatu ziren",
          "Prezioa 460 dolar jaitsi zen",
          "Katea izan zen aldaketen kausa bakarra",
          "Azken prezioa hasierakoa baino txikiagoa da"
        ],
        2,
        "Taulak ez ditu ekoizpenaren eta prezioen kausa guztiak isolatzen."
      ],
      [
        "Medikuntza-koadroaren zer irakurketa da zehatzena?",
        [
          "Medikuntzak ez du teknologia-historiarik",
          "Denboran zeharreko aurrerapen batzuk",
          "Aurrerapen guztiak urte berean sortu ziren",
          "Erradioaktibitate guztia arriskurik gabea da"
        ],
        1,
        "Bilakaera zabala da, ez aldi bereko asmakuntza bakarra."
      ],
      [
        "Nola azalduko zenuke monopolioa eta lehiakideak dituen enpresa handia?",
        [
          "Eskaintzaren kontrol bakarra eta lehia",
          "Eraikinaren altuera-aldea soilik",
          "Instalatutako motor kopurua soilik",
          "Jabearen antzinatasuna soilik"
        ],
        0,
        "Tamaina eta nagusitasun esklusiboa ez dira baliokideak."
      ],
      [
        "Fabrikak unitateko denbora murriztu baina akatsak handitu ditu. Zer balorazio falta da?",
        [
          "Produktuaren izena soilik",
          "Leiho kopurua soilik",
          "Bankuaren kokapena soilik",
          "Kalitatea eta akatsen kostuak"
        ],
        3,
        "Eraginkortasunak emaitza baliagarriak kontuan hartu behar ditu, ez abiadura soilik."
      ],
      [
        "Zer azalpenek saihesten du etapa asmakuntza-zerrenda hutsera murriztea?",
        [
          "Fabriken finantzaketa baztertzea",
          "Aurrerapen bakoitza isolatuta aurkeztea",
          "Energia, kapitala, sektoreak eta lana lotzea",
          "Izenak kausa eta ondoriorik gabe zerrendatzea"
        ],
        2,
        "Industria-historiak faktoreen arteko loturak behar ditu."
      ],
      [
        "Zer laburpenek bereizten ditu kontzeptu nagusiak?",
        [
          "Bidaiari-trenen datak soilik",
          "Energia berriak, metodoak eta kontzentrazioa",
          "Akzioak, bankuak eta geografia soilik",
          "Lurruna, kotoia eta gremioak soilik"
        ],
        1,
        "T06k aldaketa teknikoak, ekoizpenekoak eta enpresakoak uztartzen ditu."
      ]
    ]
  }
];
