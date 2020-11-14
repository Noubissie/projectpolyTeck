// // import React from 'react';
// // import ReactTypingEffect from 'react-typing-effect';
 
// // export const ReactTypingEffectDemo = () => {
// //   return (
// //     <>
// //       <ReactTypingEffect
// //         text={["Hello.", "World!"]}
// //       />
 
// //       <br />
 
// //       <ReactTypingEffect
// //         text={["Hello.", "World!!!"]}
// //         cursorRenderer={cursor => <h1>{cursor}</h1>}
// //         displayTextRenderer={(text, i) => {
// //           return (
// //             <h1>
// //               {text.split('').map((char, i) => {
// //                 const key = `${i}`;
// //                 return (
// //                   <span
// //                     key={key}
// //                     style={i%2 === 0 ? { color: 'magenta'} : {}}
// //                   >{char}</span>
// //                 );
// //               })}
// //             </h1>
// //           );
// //         }}        
// //       />
// //     </>
// //   );
// // };

// import useTypewriter from "react-typewriter-hook"

// export const MagicWriter=>(word) {
//   const typing = useTypewriter(word)
//   return typing
// }