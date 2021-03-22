import React from "react"
import {
  FaRoad,
  FaTruckMoving,
  FaHardHat,
  FaShoppingCart,
} from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaRoad className="service-icon" />,
    title: "Asfalt",
    link: "/usluge/asfalt",
    classStyle: "underline-sm",
    text: `Asfaltna masa proizvodi se na asfaltnoj bazi u Našicama. Ovdje možete pogledati kompletan asortiman asfalta koji nudimo na prodaju.`,
  },
  {
    id: 2,
    icon: <FaTruckMoving className="service-icon" />,
    classStyle: "underline-sm",
    title: "Beton",
    link: "/usluge/beton",
    text: `Tvornice betona u Osijeku i Štitaru isporučuju beton najviše kvalitete i trajnosti. Asortiman betona koji nudimo na prodaju pogledajte u nastavku.`,
  },
  {
    id: 3,
    icon: <FaHardHat className="service-icon" />,
    title: "Građevinske usluge",
    link: "/usluge/gradjevinskeusluge",
    classStyle: "underline-xl",
    text: `Najzahtjevnije građevinske usluge prepustite našim stručnjacima. Referentne liste završenih kapitalnih projekata najbolji su dokaz naše ozbiljnosti.`,
  },
  {
    id: 4,
    icon: <FaShoppingCart className="service-icon" />,
    title: "Imovina",
    link: "/usluge/imovina",
    classStyle: "uunderline-md",
    text: `Ovdje možete pogledati imovinu koji trenutno nudimo na prodaju. Za sve dodatne informacije molimo obratite se na uprava@osijek-koteks.hr s naznakom rednog broja predmeta za koji ste zainteresirani.`,
  },
]
