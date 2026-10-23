// const StudentInfo = () => {

//     const roll = 101;
//     const name = "Ankita";
//     const city = "Pune";

//     return (
//         <div>
//             <h1>Student Information</h1>
//             <p>Student Roll :{roll} </p>
//             <p>Student Name :{name} </p>
//             <p>Student City :{city} </p>
//         </div>
//     )
// }

// export default StudentInfo

// const StudentInfo = (props) => {

//     console.log('====================================');
//     console.log(props);
//     console.log('====================================');
//     return (
//         <div>
//             <h1>Student Information</h1>
//             <p>Student Roll :{props.roll} </p>
//             <p>Student Name :{props.name} </p>
//             <p>Student City :{props.city} </p>
//         </div>
//     )
// }

// export default StudentInfo

// const StudentInfo = ({roll,name,city}) => {

//     return (
//         <div>
//             <h1>Student Information</h1>
//             <p>Student Roll :{roll} </p>
//             <p>Student Name :{name} </p>
//             <p>Student City :{city} </p>
//         </div>
//     )
// }

// export default StudentInfo

const StudentInfo = (props) => {

    const {roll,name,city} = props;

    return (
        <div>
            <h1>Student Information</h1>
            <p>Student Roll :{roll} </p>
            <p>Student Name :{name} </p>
            <p>Student City :{city} </p>
        </div>
    )
}

export default StudentInfo