// External Css

// import '../style/CssExample.css'
// const CssExample = () => {

//     return (
//         <div>
//             <h1 className="heading">
//                 Welcome to the React
//             </h1>

//             <button className="btn">
//                 Click Me
//             </button>
//         </div>
//     )
// }

// export default CssExample

// // Internal CSS

// const CssExample = () => {

//     return (
//         <div>
//             <h1
//                 style={{
//                     color:'red',
//                     fontSize:'30px',
//                     textAlign:'center'
//                 }}
//             >
//                 Welcome to the React
//             </h1>
//         </div>
//     )
// }

// export default CssExample

// CSS Modules

import styles from '../style/CssExample.module.css'

const CssExample = () => {

    return (
        <div>
            <h1 className={styles.heading}>
                Welcome to the React
            </h1>
        </div>
    )
}

export default CssExample
