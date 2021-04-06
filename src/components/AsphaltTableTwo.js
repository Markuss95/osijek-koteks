import React from "react"
import MaterialTable, { MTableToolbar } from "material-table"

export const AsphaltTableTwo = () => {
  const data = [
    { naziv: "AC 11 surf 50/70 AG1 M3" },
    { naziv: "AC 11 surf PmB 45/80-65 AG1 M1" },
    { naziv: "SMA 11 PmB 45/80-65 AG1 M1" },
    { naziv: "SMA 16 PmB 45/80-65 AG1 M1" },
  ]
  const columns = [
    {
      title: "Asfaltna masa s agregatima eruptivnog porijekla:",
      field: "naziv",
      cellStyle: {
        backgroundColor: "hsl(209, 34%, 30%)",
        color: "#FFF",
        textAlign: "center",
      },
      headerStyle: {
        backgroundColor: "white",
        color: "black",
        paddingLeft: "2.6rem",
        textAlign: "center",
        fontSize: "1.1rem",
        height: "5rem",
      },
    },
  ]
  return (
    <div>
      <MaterialTable
        title="Asfaltna masa"
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
