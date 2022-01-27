// import React from "react";

// export default class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "John"
//     };
//     this.handleNameChange = this.handleNameChange.bind(this);
//   }

//   componentDidMount() {
//     document.title = this.state.name;
//   }

//   componentDidUpdate() {
//     document.title = this.state.name;
//   }

//   handleNameChange(e) {
//     this.setState({
//       name: e.target.value
//     });
//   }

//   render() {
//     return (
//       <section>
//         <input 
//           value={this.state.name} 
//           onChange={this.handleNameChange} 
//         />
//       </section>
//     );
//   }
// }

import { useEffect, useState } from "react";

export default function MyComponent() {
    const [name, setName] = useState("rezky");

    useEffect(() => {
        document.title = name;
    });

    function handleNameChange(e) {
        setName(e.tarrget.value);
    }

    return(
        <section>
            <input value={name} onChange={handleNameChange} />
        </section>
    );
}