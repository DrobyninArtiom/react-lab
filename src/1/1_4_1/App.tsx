// 1_4_1 Fix the mistake - Fixed variable reference in heading to use person.name instead of person object
const person = {
     name: 'Gregorio Y. Zara',
     theme: {
       backgroundColor: 'black',
       color: 'pink'
     }
   };
   
   export default function TodoList() {
     return (
       <div style={person.theme}>
         <h1>{person.name}'s Todos</h1>
         <img
           className="avatar"
           src="GregorioYZara.jpg"
           alt="Gregorio Y. Zara"
         />
         <ul>
           <li>Improve the videophone</li>
           <li>Prepare aeronautics lectures</li>
           <li>Work on the alcohol-fuelled engine</li>
         </ul>
       </div>
     );
   }
  