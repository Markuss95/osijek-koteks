import React from "react"
import MaterialTable, { MTableToolbar } from "material-table"

export const ConcreteTable = () => {
  const data = [
    { naziv: "C 12/15	", oznaka: "T-15-3F	", aditiv: "NE", frakcije: "3" },
    { naziv: "C 16/20	", oznaka: "T-20-3F	", aditiv: "NE", frakcije: "3" },
    { naziv: "C 20/25	", oznaka: "T-25-3F	", aditiv: "NE", frakcije: "3" },
    { naziv: "C 25/30	", oznaka: "T-30-3F	", aditiv: "NE", frakcije: "3" },
    { naziv: "C 25/30	", oznaka: "T-30-4F	", aditiv: "NE", frakcije: "4" },
    { naziv: "C 25/30	", oznaka: "PILOT-30-4F	", aditiv: "NE", frakcije: "4" },
    { naziv: "C 25/30	", oznaka: "T-30-MS-3F	", aditiv: "DA", frakcije: "3" },
    { naziv: "C 30/37	", oznaka: "T-37-3F	", aditiv: "DA", frakcije: "3" },
    { naziv: "C 30/37	", oznaka: "T-37MS-3F	", aditiv: "DA", frakcije: "3" },
    { naziv: "C 30/37	", oznaka: "T-37-4F	", aditiv: "DA", frakcije: "4" },
    { naziv: "C 35/45	", oznaka: "T-45MS-3F	", aditiv: "DA", frakcije: "3" },
    { naziv: "C 40/50	", oznaka: "T-50MS-3F	", aditiv: "DA", frakcije: "3" },
    { naziv: "C 35/45	", oznaka: "RIGOL	", aditiv: "DA", frakcije: "4" },
    { naziv: "GLAZURA	", oznaka: "", aditiv: "NE", frakcije: "2" },
    {
      naziv: "CEM.STABILIZACIJA 0-30 KAMEN (T)",
      aditiv: "NE",
      frakcije: "0-30 KAMEN",
    },
    {
      naziv: "CEM.STABILIZACIJA 0-30 KAMEN (T)",
      aditiv: "NE",
      frakcije: "ŠLJUNAK",
    },
  ]
  const columns = [
    {
      title: "Klasa Tlačne Čvrstoće:",
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
      title: "Oznaka Sastava",
      field: "oznaka",
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
      title: "Aditiv",
      field: "aditiv",
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
      title: "Frakcije",
      field: "frakcije",
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
  ]
  return (
    <div>
      <MaterialTable
        title="Betonska masa"
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

          paging: false,
        }}
        data={data}
        columns={columns}
      />
    </div>
  )
}
