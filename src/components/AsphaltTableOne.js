import React from "react"
import MaterialTable, { MTableToolbar } from "material-table"


export const AsphaltTableOne = () => {
  const data = [
    { naziv: "AC 32 base 50/70 AG6 M2" },
    { naziv: "AC 22 base 50/70 AG6 M2" },
    { naziv: "AC 22 base PmB 45/80-65 AG6 M1" },
    { naziv: "AC 32 base PmB 45/80-65 AG6 M1" },
    { naziv: "AC 22 bin PmB 45/80-65 AG6 M1" },
    { naziv: "AC 16 bin 50/70 AG6 M1" },
    { naziv: "AC 16 bin PmB 45/80-65 AG6 M1" },
    { naziv: "AC 16 base 50/70 AG6 M2" },
    { naziv: "AC 16 surf 50/70 AG4 M4" },
    { naziv: "AC 11 surf 50/70 AG4 M3" },
    { naziv: "AC 8 surf 50/70 AG4 M3" },
  ]
  const columns = [
    {
      title: "Asfaltna masa s agregatima dolomitnog porijekla:",
      field: "naziv",
      cellStyle: {
        backgroundColor: "hsl(209, 34%, 30%)",
        color: "#FFF",
        textAlign: "center",
      },
      headerStyle: {
        paddingLeft: "2.6rem",
        backgroundColor: "white",
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
