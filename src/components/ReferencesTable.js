import React from "react"
import MaterialTable, { MTableToolbar } from "material-table"

export const ReferencesTable = () => {
  const data = [
    { naziv: "IZGRADNJA OBILAZNICE PETRIJEVACA", godina: "2020", ugovor: "HRVATSKE CESTE d.o.o., Zagreb"  },
    { naziv: "AUTOCESTA ZAGREB-SISAK: IZGRADNJA PODDIONICE BUŠEVEC-LEKENIK	", godina: "2020", ugovor: "HRVATSKE AUTOCESTE d.o.o., Zagreb" },
    { naziv: "IZGRADNJA MOSTA PREKO RIJEKE DRAVE", godina: "2020", ugovor: "HRVATSKE AUTOCESTE d.o.o., Zagreb"  },
    { naziv: "MODERNIZACIJA LIJEVOOBALNIH SAVSKIH NASIPA GRUPA 2: JARUGE-SVILAJ", godina: "2020", ugovor: "HRVATSKE VODE" },
    { naziv: "MODERNIZACIJA SAVSKOG NASIPA RAČINOVCI-NOVA GRADIŠKA", godina: "2020", ugovor: "HRVATSKE VODE"},
    { naziv: "UREĐENJE I ZAŠTITA OD POPLAVA OTOKA SPORTOVA U VUKOVARU", godina: "2020", ugovor: "HRVATSKE VODE"},
    { naziv: "IZGRADNJA BICIKLISTIČKIH I PJEŠAČKIH STAZA U UL.A.STARČEVIĆA U ĐAKOVU", godina: "2020", ugovor: "GRAD ĐAKOVO"  },
    { naziv: "OBILAZNICA PETRIJEVACA - izgradnja oborinske odvodnje	", godina: "2020", ugovor: "GRAVIA d.o.o. Osijek"  },
    { naziv: "IZGRADNJA ŠUMSKE CESTE LJESKOVICA-DOBRA VODA", godina: "2020", ugovor: "OPĆINA ČAGLIN"  },
    { naziv: "IZGRADNJA I OPREMANJE RECIKLAŽNOG DVORIŠTA OPĆINE POPOVAC", godina: "2020", ugovor: "OPĆINA POPOVAC"},
    { naziv: "RADOVI U INDUSTRIJSKOJ ZONI NAŠICE", godina: "2020", ugovor: "GRAD NAŠICE"  },
    { naziv: "IZGRADNJA PARKIRALIŠTA - DRUŠTVENI DOM STARA ŠKOLA	", godina: "2020", ugovor: "OPĆINA PETRIJEVCI"  },
    { naziv: "IZGRADNJA PRISTUPNE CESTE DO ODLAGALIŠTA U BELIŠĆU	", godina: "2020", ugovor: "GRAD BELIŠĆE"},
    { naziv: "REKONSTRUKCIJA BIC.STAZE BILJSKA CESTA	", godina: "2020", ugovor: "GRAD OSIJEK"},
    { naziv: "RADOVI NA DOGRADNJI MANIPULATIVNOG PLATOA - KONTEJNERSKI TERMINAL", godina: "2020", ugovor: "LUČKA UPRAVA SLAVONSKI BROD"},
    { naziv: "IZGRADNJA SKLADIŠTA U PLETERNICI", godina: "2020", ugovor: "KAMGRAD d.o.o., Zagreb"},
    { naziv: "IZGRADNJA SPOJNE CESTE U VGZ (VUKOVARSKOJ GOSPODARSKOJ ZONI)", godina: "2020", ugovor: "GRAD VUKOVAR"},
    { naziv: "SANACIJA I ZATVARANJE ODLAGALIŠTA NEOPASNOG OTPADA JAGODNJAK 1", godina: "2020", ugovor: "OPĆINA JAGODNJAK"},
    { naziv: "SANACIJA ODLAGALIŠTA KOMUNALNOG OTPADA „STARO VALPOVO“- V. FAZA-IZRADA KAZETE 2", godina: "2020", ugovor: "GRAD BELIŠĆE"},
    { naziv: "IZGRADNJA PROMETNIH POVRŠINA NA TRGOVAČKOM CENTRU PEVEC VINKOVCI", godina: "2020", ugovor: "PROJEKTGRADNJA plus d.o.o., Gornja Vrba"},
    { naziv: "IZVOĐENJE RADOVA NA REKONSTRUKCIJI JAVNO-PROMETNIH POVRŠINA U DIJELU ULICE B. RADIĆA I ŠKOLSKE ULICE U NAŠICAMA", godina: "2020", ugovor: "GRAD NAŠICE"},
    { naziv: "SANACIJA KOLNIKA LC 41207 TRENKOVO-A.G.GRADA POŽEGE", godina: "2020", ugovor: "ŽUC POŽEŠKO-SLAVONSKE ŽUPANIJE"},
    { naziv: "UREĐENJE KANALA PAMPAS U OSIJEKU", godina: "2020", ugovor: "GRAD OSIJEK"},
    { naziv: "IZVOĐENJE ASFALTERSKIH RADOVA NA GRADILIŠTU NARUČITELJA U SKLOPU IZVEDBE PROJEKTA “INFRASTRUKTURNI RADOVI U LUČKOM PODRUČJU LUKA SLAVONSKI BROD“", godina: "2020", ugovor: "GH HOLDING d.o.o., Ljubljana, Slovenija"},
    { naziv: "IZVOĐENJE DIJELA RADOVA, UL.FRA.A.TOMAŠEVIĆA U VUKOVARU", godina: "2020", ugovor: "SOKOL VINKOVCI"},
    { naziv: "IZGRADNJA OBILAZNICE PETRIJEVACA - IZGRADNJA OBORINSKE ODVODNJE", godina: "2020", ugovor: "GRAVIA d.o.o., Osijek"},
    { naziv: "IZGRADNJA OBILAZNICE VINKOVACA", godina: "2019", ugovor: "HRVATSKE CESTE d.o.o., Zagreb"},
    { naziv: "REKONSTRUKCIJA NERAZVRSTANE CESTE/POLJSKI PUT U OPĆINI PETRIJEVCI", godina: "2019", ugovor: "OPĆINA PETRIJEVCI"},
    { naziv: "SANACIJA ASF. KOLNIKA NA AC A3 BREGANA-ZG-LIPOVAC", godina: "2019", ugovor: "HRVATSKE AUTOCESTE d.o.o., Zagreb"},
    { naziv: "REKONSTRUKCIJA NERAZVRSTANE CESTE PREMA ODLAGALIŠTU", godina: "2019", ugovor: "OPĆINA SEMELJCI"},
    { naziv: "IZGRADNJA SVODNIH CESTA NA PODRUČJU OPĆINE ČEPIN", godina: "2019", ugovor: "HŽ INFRASTRUKTURA ZAGREB"},
    { naziv: "IZGRADNJA KANALIZACIJSKE CESTE U NASELJU KOPAČEVO-BILJE", godina: "2019", ugovor: "VODOOPSKRBA d.o.o. DARDA"},
    { naziv: "ASFALTERSKI RADOVI OKO TRENČ SILOSA - FARMA MUZNIH KRAVA U NIZI", godina: "2019", ugovor: "PRESOFLEX GRADNJA d.o.o."},
    { naziv: "IZGRADNJA PROMETNIH POVRŠINA U NASELJU OLAJNICA U VUKOVARU", godina: "2019", ugovor: "GRAD VUKOVAR"},
    { naziv: "REKONSTRUKCIJA RASKRIŽJA DC8 I ŽC 6238 - ULAZ U CAVTAT", godina: "2019", ugovor: "HRVATSKE CESTE d.o.o., Zagreb"},
    { naziv: "IZGRADNJA I OPREMANJE RECIKLAŽNOG DVORIŠTA U ĐAKOVU", godina: "2019", ugovor: "GRAD ĐAKOVO"},
    { naziv: "REKONSTRUKCIJA ULICE DR. FRANJE TUĐMANA U DUBOŠEVICI", godina: "2019", ugovor: "OPĆINA DRAŽ"},
    { naziv: "IZGRADNJA NERAZVRSTANE CESTE U JAGODNJAKU - UL.Z.J.JOVANOVIĆA", godina: "2019", ugovor: "OPĆINA JAGODNJAK"},
    { naziv: "SANACIJA DIJELA L6 4148 - ČAGLIN, DIONICA: MOKREŠ-DOBRA VODA", godina: "2019", ugovor: "UPRAVA ZA CESTE POŽEŠKO-SLAVONSKE ŽUPANIJE"},
    { naziv: "REKONSTRUKCIJA DIJELA CESTE U UL. KNEZA TRPIMIRA DO RASKRIŽJA S VUKOVARSKOM ULICOM", godina: "2019", ugovor: "GRAD OSIJEK"},
    { naziv: "IZVOĐENJE RADOVA NA PROMETNOM SUSTAVU NERAZVRSTANIH CESTA", godina: "2019", ugovor: "OPĆINA ĐURĐENOVAC"},
    { naziv: "REKONSTRUKCIJA JAVNO PROMETNIH POVRŠINA U DIJELOVIMA ULICA: UL.T.PEJAČEVIĆA I ZAGREBAČKE ULICE U NAŠICAMA", godina: "2019", ugovor: "GRAD NAŠICE"},
    { naziv: "IZVOĐENJE RADOVA NA IZGRADNJI I OPREMANJU RECIKLAŽNOG DVORIŠTA GORNJI GRAD", godina: "2019", ugovor: "GRAD OSIJEK"},
    { naziv: "IZVOĐENJE RADOVA NA IZGRADNJI I OPREMANJU RECIKLAŽNOG DVORIŠTA RETFALA", godina: "2019", ugovor: "GRAD OSIJEK"},
    { naziv: "SANACIJA I PRESVLAČENJE KOLNIKA, DIONICA: TRENKOVO-VELIKA", godina: "2019", ugovor: "UPRAVA ZA CESTE POŽEŠKO-SLAVONSKE ŽUPANIJE"},
    { naziv: "REKONSTRUKCIJA CESTE ZA GOLENIĆ", godina: "2019", ugovor: "GRAD SLATINA"},
    { naziv: "IZGRADNJA KRUŽNOG RASKRIŽJA U DONJEM MIHOLJCU", godina: "2019", ugovor: "HRVATSKE CESTE d.o.o., Zagreb"},
    { naziv: "IZGRADNJA NERAZVRSTANE CESTE DO DEPONIJE SMEĆA VITIKA", godina: "2019", ugovor: "GRAD ĐAKOVO"},
    { naziv: "IZGRADNJA I OPREMANJE RECIKLAŽNOG DVORIŠTA U GARČINU - NASELJE TRNJANI", godina: "2019", ugovor: "OPĆINA GARČIN"},
    { naziv: "REKONSTRUKCIJA NERAZVRSTANE CESTE U SRIJEMSKOJ ULICI U BAPSKOJ", godina: "2019", ugovor: "GRAD ILOK"},
    { naziv: "REKONSTRUKCIJA ŽC 4253 ĆELIJE - SL.DRENOVAC-JANKOVAC", godina: "2019", ugovor: "UPRAVA ZA CESTE VIROVITIČKO-PODRAVSKE ŽUPANIJE"},
    { naziv: "IZGRADNJA RECIKLAŽNOG DVORIŠTA I PRISTUPNE CESTE U OPĆINI TRPINJA", godina: "2019", ugovor: "OPĆINA TRPINJA"},
    { naziv: "IZGRADNJA BICIKLISTIČKE STAZE I TRKAĆE STAZE - PROMENADA", godina: "2019", ugovor: "GRAD OSIJEK"},
    { naziv: "REKONSTRUKCIJA RASKRIŽJA DC46 I DC55 U VINKOVCIMA", godina: "2019", ugovor: "HRVATSKE CESTE d.o.o., Zagreb"},
    { naziv: "REKONSTRUKCIJA DC212 DO KRUŽNOG TOKA U KNEŽEVIM VINOGRADIMA", godina: "2019", ugovor: "HRVATSKE CESTE d.o.o., Zagreb"},
    { naziv: "IZGRADNJA AC A-13 PODRAVSKI IPSILON, DIONICA: VRBOVAC-BJELOVAR", godina: "2019", ugovor: "HRVATSKE AUTOCESTE d.o.o., Zagreb"},
    { naziv: "IZGRADNJA I OPREMANJE RECIKLAŽNOG DVORIŠTA U ĐURĐENOVCU", godina: "2019", ugovor: "OPĆINA ĐURĐENOVAC"},
    { naziv: "REKONSTRUKCIJA JAVNO PROMETNIH POVRŠINA U ULICAMA B.RADIĆ I TAVANAČKA CESTA", godina: "2019", ugovor: "GRAD NAŠICE"},
    { naziv: "REKONSTRUKCIJA NOGOSTUPA U ULICI PETRA SVAČIĆA U ĐAKOVU", godina: "2019", ugovor: "GRAD ĐAKOVO"},
    { naziv: "ASFALTERSKI RADOVI NA DC 55, GRADIŠTE-ŽUPANJA", godina: "2019", ugovor: "CESTING d.o.o., OSIJEK"},
    { naziv: "REKONSTRUKCIJA NERAZVRSTANE CESTE U ULICI IVE TIJARDOVIĆA U VUKOVARU", godina: "2019", ugovor: "GRAD VUKOVAR"},
    { naziv: "REKONSTRUKCIJA PROMETNICA U BELOM MANASTIRU - ULICA VLADANA DESNICE", godina: "2019", ugovor: "GRAD BELI MANASTIR"},
    { naziv: "REKONSTRUKCIJA PROMETNICA U BELOM MANASTIRU - ULICA DR. FRANJE TUĐMANA", godina: "2019", ugovor: "GRAD BELI MANASTIR"},
    { naziv: "IZGRADNJA POSLOVNE ZGRADE REMIX - OSIJEK", godina: "2019", ugovor: "REMIX d.o.o., OSIJEK"},
    { naziv: "POBOLJŠANJE VODOKOMUNALNE INFRASTRUKTURE GRADA OSIJEKA", godina: "2018", ugovor: "EURCO d.d., VINKOVCI"},
    { naziv: "IZGRADNJA BICIKLISTIČKE STAZE U ULICI SV.L.B.MANDIĆA U OSIJEKU", godina: "2018", ugovor: "GRAD OSIJEK"},
    { naziv: "IZGRADNJA ZELENE ULICE I I II U BRIJEŠĆU", godina: "2018", ugovor: "GRAD OSIJEK"},
    { naziv: "SANACIJA ODLAGALIŠTA OTPADA DOROSLOV DONJI MIHOLJAC", godina: "2018", ugovor: "DOROSLOV d.o.o., DONJI MIHOLJAC"},
    { naziv: "IZVANREDNO ODRŽAVANJE ŽUPANIJSKIH I LOKALNIH CESTA U OSJEČKO-BARANJSKOJ ŽUPANIJI", godina: "2018", ugovor: "GRAVIA d.o.o., Osijek"},
    { naziv: "IZGRADNJA CESTE U JUŽNOM STADIONSKOM NASELJU U OSIJEKU", godina: "2018", ugovor: "GRAD OSIJEK"},
    { naziv: "ODRŽAVANJE NERAZVRSTANE CESTE DRAVSKA OBALA, PODRAVLJE", godina: "2018", ugovor: "GRAD OSIJEK"},
    { naziv: "II. FAZA IZGRADNJE PROMETNICA MEMORIJALNOG CENTRA U VUKOVARU", godina: "2018", ugovor: "HRVATSKE CESTE d.o.o., Zagreb"},
    { naziv: "REKONSTRUKCIJA DIJELA ULICE TRPIMIROVE - RASKRIŽJE S DRINSKOM", godina: "2018", ugovor: "GRAD OSIJEK"},
    { naziv: "REKONSTRUKCIJA RASKRIŽJA U MJESTU VELIKA KOPANICA", godina: "2018", ugovor: "HRVATSKE CESTE d.o.o., Zagreb"},
    { naziv: "ZEMLJANI RADOVI - BIOPLINSKO POSTROJENJE SLATINA", godina: "2018", ugovor: "IES BIOGAS ITALY"},
    { naziv: "REKONSTRUKCIJA ATLETSKE STAZE NA GRADSKOM STADIONU U VUKOVARU", godina: "2018", ugovor: "GRAD VUKOVAR"},
    { naziv: "IZVOĐENJE GRAĐEVINSKIH RADOVA NA PROMETNICI U POŠTANSKOM NASELJU U VIŠNJEVCU", godina: "2018", ugovor: "GRAD OSIJEK"},
    { naziv: "IZGRADNJA AC A5 PODDIONICA MOST HALASICA - MOST DRAVA", godina: "2018", ugovor: "HRVATSKE AUTOCESTE d.o.o., Zagreb"},
    { naziv: "IZGRADNJA I OPREMANJE RECIKLAŽNOG DVORIŠTA U DARDI", godina: "2018", ugovor: "OPĆINA DARDA"},
    { naziv: "IZGRADNJA AUTOCESTE A-12 DIONICA GRADEC-KLOŠTAR VOJAKOVAČKI", godina: "2018", ugovor: "HRVATSKE AUTOCESTE d.o.o., Zagreb"},
    { naziv: "ZEMLJANI RADOVI - BIOPLINSKO POSTROJENJE KLISA", godina: "2018", ugovor: "NEXE GRADNJA d.o.o."},
    { naziv: "IZGRADNJA MANIPULATIVNIH POVRŠINA NA LOKACIJI TENJA", godina: "2018", ugovor: "VARGON d.o.o., KUKULJANOVO"},
    { naziv: "REKONSTRUKCIJA RASKRIŽJA U KRUŽNI TOK U ČEPINU", godina: "2018", ugovor: "UPRAVA ZA CESTE OSJEČKO-BARANJSKE ŽUPANIJE"},
    { naziv: "RADOVI NA STALNOM GRANIČNOM PRIJELAZU ZA MEĐUNARODNI PROMET PUTNIKA I ROBA U CESTOVNOM PROMETU TOVARNIK	", godina: "2017", ugovor: "MINISTARSTVO FINANCIJA REPUBLIKE HRVATSKE"},
    { naziv: "REKONSTRUKCIJA I DOGRADNJA STALNOG GRANIČNOG PRIJELAZA ZA MEĐUNARODNI PROMET PUTNIKA I ROBA U CESTOVNOM PROMETU SLAVONSKI BROD	", godina: "2017", ugovor: "MINISTARSTVO FINANCIJA REPUBLIKE HRVATSKE"},
    { naziv: "IZGRADNJA JUŽNE OBILAZNICE GRADA DONJEG MIHOLJCA	", godina: "2017", ugovor: "HRVATSKE CESTE d.o.o. ZAGREB"},
    { naziv: "REKONSTRUKCIJA RASKRIŽJA I IZGRADNJA KRUŽNOG TOKA BELIŠĆE	", godina: "2017", ugovor: "UPRAVA ZA CESTE OSJEČKO BAR. ŽUPANIJA"},
    { naziv: "IZGRADNJA VINSKE CESTE U K.O. BELI MANASTIR	", godina: "2017", ugovor: "GRAD BELI MANASTIR"},
    { naziv: "REKONSTRUKCIJA SJEVERNE CESTE I PARKIRALIŠTA OVČARA	", godina: "2017", ugovor: "NOVI AGAR"},
    { naziv: "POJAČ. ODRŽAVANJE NERAZVRSTANIH CESTA PAKRAČKA ULICA U VUKOVARU	", godina: "2017", ugovor: "GRAD VUKOVAR"},
    { naziv: "PJEŠAČKO BICIKLISTIČKE STAZE NA DIONICI ĐAKOVO-KUŠEVAC	", godina: "2017", ugovor: "HRVATSKE CESTE d.o.o. ZAGREB"},
    { naziv: "REKONSTRUKCIJA I IZGRADNJA KRUŽNI TOK NA KANALU GLOGOVICA SL. BROD", godina: "2017", ugovor: "HRVATSKE CESTE d.o.o. ZAGREB"},
    { naziv: "REKONSTRUKCIJA LC DIONICA: ARDUŠEVAC - ĐURĐANCI", godina: "2017", ugovor: "UPRAVA ZA CESTE OSJ. BARANJ. ŽUPAN"},
    { naziv: "REKONSTRUKCIJA TRGOVAČKOG CENTRA KAUFLAND U ĐAKOVU", godina: "2017", ugovor: "TEKTON GRADNJA"},
    { naziv: "REKONSTRUKCIJA RASKRIŽJA U VALPOVU - KRUŽNI TOK", godina: "2017", ugovor: "GRAD VALPOVO"},
    { naziv: "REKONSTRUKCIJA VINOGRADSKE ULICE I B. JELAČIĆA U NAŠICAMA", godina: "2017", ugovor: "GRAD NAŠICE"},
    { naziv: "IZGRADNJA KOLNIKA I PJEŠAČKIH STAZA U NASELJU BUKOVLJE	", godina: "2017", ugovor: "OPĆINA BUKOVLJE"},
    { naziv: "REKONSTRUKCIJA RASKRIŽ. ULICA DUGA U VUKOVARU	", godina: "2017", ugovor: "GRAD VUKOVAR"},
    { naziv: "REKONSTRUKCIJA ULICE BANA JELAČIĆA U NAŠICAMA	", godina: "2017", ugovor: "GRAD NAŠICE"},
    { naziv: "IZGRADNJA BICIKLISTIČKE STAZE U ULICI SV.L.B. MADNIĆA U OSIJEKU	", godina: "2017", ugovor: "GRAD OSIJEK"},
    { naziv: "IZGRADNJA BICIKLISTIČKE STAZE OD VINKOVAČKE ULICE DO K.O. ANTUNOVAC; FAZA I. - OD ČVORIŠTA VINKOVAČKA DO CENTRALNOG GROBLJA	", godina: "2016", ugovor: "GRAD OSIJEK"},
    { naziv: "IZGRADNJA PROMETNIH POVRŠINA I OBORINSKE KANALIZACIJE U INDUSTRIJSKOJ ZONI NEMETIN	", godina: "2016", ugovor: "GRAD OSIJEK"},
    { naziv: "IZGRADNJA OBJEKTA NA KRIŽANJU ŽELJEZNIČKE PRUGE MG2 I DRŽAVNE CESTE D423 U SLAVONSKOM BRODU, DULJINE 655m - građevinski radovi i prelaganje instalacija	", godina: "2016", ugovor: "HRVATSKE CESTE d.o.o. Zagreb"},
    { naziv: "IZGRADNJA I OPREMANJE RECIKLAŽNOG DVORIŠTA - 3. SKUPINE NA K.Č.BR.837 I 1079 U K.O. MIKLUŠEVCI	", godina: "2016", ugovor: "OPĆINA TOMPOJEVCI"},
    { naziv: "IZVOĐENJE RADOVA NA IZGRADNJI I OPREMANJU RECIKLAŽNOG DVORIŠTA U VALPOVU	", godina: "2016", ugovor: "GRAD VALPOVO"},
    { naziv: "SANACIJA ODLAGALIŠTA OTPADA BELIŠĆE - IZRADNJA RECIKLAŽNOG DVORIŠTA S OPREMOM FAZA III	", godina: "2016", ugovor: "KOMBEL d.o.o."},
    { naziv: "POJAČANO ODRŽAVANJE NOGOSTUPA I PRIKLJUČAKA NA KOMUNALNU INFRASTRUKTURU - VIJENAC RUĐERA BOŠKOVIĆA	", godina: "2016", ugovor: "GRAD VUKOVAR"},
    { naziv: "POBOLJŠANJE VODOKOMUNALNE INFRASTRUKTURE GRADA OSIJEKA", godina: "2016", ugovor: "EURCO d.d. VINKOVCI"},

  ]
  const columns = [
    {
      title: "Opis Radova:",
      field: "naziv",
      cellStyle: {
        backgroundColor: "hsl(209, 34%, 30%)",
        color: "#FFF",
        textAlign: "center",
      },
      headerStyle: {
        backgroundColor: "white",
        paddingLeft: "2.6rem",
        color: "black",
        textAlign: "center",
        fontSize: "1.1rem",
        height: "5rem",
      },
    },
    {
      title: "Godina izvršavanja radova",
      field: "godina",
      cellStyle: {
        backgroundColor: "hsl(209, 34%, 30%)",
        color: "#FFF",
        textAlign: "center",
      },
      headerStyle: {
        backgroundColor: "white",
        paddingLeft: "2.6rem",
        color: "black",
        textAlign: "center",
        fontSize: "1.1rem",
        height: "5rem",
      },
    },
    {
      title: "Naziv Druge Ugovorne Strane",
      field: "ugovor",
      cellStyle: {
        backgroundColor: "hsl(209, 34%, 30%)",
        color: "#FFF",
        textAlign: "center",
      },
      headerStyle: {
        backgroundColor: "white",
        paddingLeft: "2.6rem",
        color: "black",
        textAlign: "center",
        fontSize: "1.1rem",
        height: "5rem",
      },
    }

  ]
  return (
    <div>
      <MaterialTable
        title="Beton"
        components={{
          Toolbar: props => (
            <div
              style={{
                position: "absolute",
                textAlign: "right",
              }}
            >
              <MTableToolbar {...props} />
            </div>
          ),
        }}
        options={{
          search: false,
          pageSize:10,
          pageSizeOptions:[10,25,50,100],
          emptyRowsWhenPaging: false,
        }}
        data={data}
        columns={columns}
        localization={{
          pagination: {
              labelDisplayedRows: '{from}-{to} od {count}',
              firstTooltip: 'Prva Stranica',
              previousTooltip: 'Prijašnja Stranica',
              nextTooltip: 'Sljedeća Stranica',
              lastTooltip:'Posljednja Stranica',
              labelRowsSelect:'Redova'
          },
          toolbar: {
              nRowsSelected: '{0} redova izabrano'
          },
          header: {
              actions: 'Akcije'
          },
          body: {
              emptyDataSourceMessage: 'Nema podataka za prikaz',
              filterRow: {
                  filterTooltip: 'Filter'
              }
          }
      }}
      />
    </div>
  )
}
