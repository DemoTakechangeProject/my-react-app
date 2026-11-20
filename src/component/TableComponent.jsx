// import { Paper,TableContainer,Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"

// const TableComponent = () =>{

//     return(
//         <TableContainer component={Paper}>
//             <Table>

//                 {/* Table heading */}
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>Roll</TableCell>
//                         <TableCell>Student Name</TableCell>
//                         <TableCell>Student City</TableCell>
//                     </TableRow>
//                 </TableHead>

//                 {/* Table Body */}
//                 <TableBody>
//                     <TableRow>
//                         <TableCell>101</TableCell>
//                         <TableCell>Rajeshwari</TableCell>
//                         <TableCell>Pune</TableCell>
//                     </TableRow>
//                     <TableRow>
//                         <TableCell>102</TableCell>
//                         <TableCell>Gayatri</TableCell>
//                         <TableCell>Nashik</TableCell>
//                     </TableRow>
//                     <TableRow>
//                         <TableCell>103</TableCell>
//                         <TableCell>Ankita</TableCell>
//                         <TableCell>Mumbai</TableCell>
//                     </TableRow>
//                 </TableBody>

//             </Table>
//         </TableContainer>
//     )
// }

// export default TableComponent



// Dynamic table using map()
// import { Paper,TableContainer,Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
// const TableComponent = () =>{

//     const students = [
//         { roll: 101, name: "Gayatri", city: "Pune" },
//         { roll: 102, name: "Rahul", city: "Mumbai" },
//         { roll: 103, name: "Priya", city: "Nashik" },
//         { roll: 104, name: "Amit", city: "Nagpur" },
//         { roll: 105, name: "Sneha", city: "Kolhapur" },
//         { roll: 106, name: "Rohan", city: "Satara" },
//         { roll: 107, name: "Pooja", city: "Solapur" },
//         { roll: 108, name: "Akash", city: "Thane" },
//         { roll: 109, name: "Neha", city: "Aurangabad" },
//         { roll: 110, name: "Kunal", city: "Sangli" },
//         { roll: 111, name: "Sakshi", city: "Pune" },
//         { roll: 112, name: "Vishal", city: "Mumbai" },
//         { roll: 113, name: "Anjali", city: "Nashik" },
//         { roll: 114, name: "Saurabh", city: "Nagpur" },
//         { roll: 115, name: "Meera", city: "Kolhapur" },
//         { roll: 116, name: "Aditya", city: "Satara" },
//         { roll: 117, name: "Kavita", city: "Solapur" },
//         { roll: 118, name: "Omkar", city: "Thane" },
//         { roll: 119, name: "Riya", city: "Aurangabad" },
//         { roll: 120, name: "Pratik", city: "Sangli" }
//     ];

//     return(
//         <TableContainer component={Paper}>
//             <Table>

//                 {/* Table heading */}
//                 <TableHead>
//                     <TableRow hover>
//                         <TableCell align="center">Roll</TableCell>
//                         <TableCell align="center">Student Name</TableCell>
//                         <TableCell align="center">Student City</TableCell>
//                     </TableRow>
//                 </TableHead>

//                 {/* Table Body */}
//                 <TableBody>
//                    {students.map((student)=>(
//                      <TableRow hover>
//                         <TableCell align="center">{student.roll}</TableCell>
//                         <TableCell align="center">{student.name}</TableCell>
//                         <TableCell align="center">{student.city}</TableCell>
//                     </TableRow>
//                    ))}
//                 </TableBody>

//             </Table>
//         </TableContainer>
//     )
// }

// export default TableComponent


// Import the external json file
import { Paper,TableContainer,Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import {students,StudentHead} from "../JSON_Data/StudentsData"
const TableComponent = () =>{

    return(
        <TableContainer component={Paper}>
            <Table>

                {/* Table heading */}
                <TableHead>
                    <TableRow hover>
                       {StudentHead.map((heading)=>(
                         <TableCell align="center">{heading}</TableCell>
                       ))}
                    </TableRow>
                </TableHead>

                {/* Table Body */}
                <TableBody>
                   {students.map((student)=>(
                     <TableRow hover>
                        <TableCell align="center">{student.roll}</TableCell>
                        <TableCell align="center">{student.name}</TableCell>
                        <TableCell align="center">{student.city}</TableCell>
                    </TableRow>
                   ))}
                </TableBody>

            </Table>
        </TableContainer>
    )
}

export default TableComponent