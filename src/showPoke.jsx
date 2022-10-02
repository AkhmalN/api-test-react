import {useNavigate} from 'react-router-dom'

function Show(){

   const navigate = useNavigate();

  function toPoke() {
    navigate('/pokemon/pikachu');
  }

   return(
      <button onClick={toPoke()}>Show Poke</button>
   )
}
export default Show