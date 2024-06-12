import React from 'react';
interface GreeterProps {
  person: string;
}

function Greeter({ person }: GreeterProps): JSX.Element {
  return <h1>HELLO, {person}</h1>;
}

// const Greeter: React.FC = (props: { person: string }) => {
//   return <h1>HELLO, {props.person}</h1>;
// };

export default Greeter;
