import React from "react"
import {
  FaRoad,
  FaWater,
  FaRulerCombined,
  FaLeaf,
  FaBriefcase,
} from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaRoad className="service-icon" />,
    title: "Ceste i Autoceste",
    link: "",
    classStyle: "underline-sm",
    text: `Sa dugom tradicijom od gotovo 70 godina svrstali smo se u najbolje tvrtke u regiji po kvaliteti izvedenih cesta i autocesta u cijeloj regiji.`,
  },
  {
    id: 2,
    icon: <FaRulerCombined className="service-icon" />,
    classStyle: "underline-sm",
    title: "Mostovi, vijadukti i ostali objekti na cestama",
    link: "",
    text: `U gradnji mostova, vijadukata, nadvožnjaka i podvožnjaka koristimo vrhunsku mehanizaciju i materijale, uz primjenu različitih tehnologija s naglaskom na visokoobrazovani kadar s bogatim iskustvom.`,
  },
  {
    id: 3,
    icon: <FaWater className="service-icon" />,
    title: "Vodoprivredni objekti",
    link: "",
    classStyle: "underline-xl",
    text: `Jedna smo od prvih tvrtki u RH koja je sudjelovala na izgradnji vodoprivrednih projekata financiranih sredstvima EU. Imamo višegodišnje iskustvo u izgradnji kanalizacija, vodovoda, akumulacija, laguna, nasipa, brana, vodosprema.`,
  },
  {
    id: 4,
    icon: <FaLeaf className="service-icon" />,
    title: "Projekti zaštite okoliša",
    link: "",
    classStyle: "uunderline-md",
    text: `Kako se posljednjih godina sve više polaže pažnja na zaštitu okoliša, tako i naša tvrtka se prilagodila zahtjevnom tržištu i uvela ISO certifikat 14001. Imamo veliki broj izgrađenih separatora ulja uz ceste diljem RH. Također smo izrazito ponosni što smo sudjelovali na izgradnji jednog od prvih uređaja za pročišćavanje otpadnih voda u RH u Karlovcu.`,
  },
  {
    id: 5,
    icon: <FaBriefcase className="service-icon" />,
    title: "Poslovno savjetovanje",
    link: "",
    classStyle: "underline-sm",
    text: `Vršimo usluge savjetovanja u svim fazama izgradnje.`,
  },
]
