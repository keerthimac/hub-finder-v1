import React from 'react';

function Alert({ alert }) {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.classname}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    )
  );
}

// if (alert !== null) {
//     return (
//       <div className={`alert alert-${alert.classname}`}>
//         <i className="fas fa-info-circle" /> {alert.msg}
//       </div>
//     );
//   }
// }

export default Alert;
