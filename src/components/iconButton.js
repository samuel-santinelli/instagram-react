import {TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import style from '../style';

// O useState retorna um array que no indice 0 possui o valor do estado e no indice 1 possui uma função para alterar o estado

const IconButton = ({iconChecked, iconUnchecked, onChange, checked}) => {
  const [state, setState] = useState(checked);

  const handleChecked = () => {
    onChange(!state);
    setState(!state);
  };

  return (
    <TouchableOpacity onPress={handleChecked}>
      <Image style={style.icons} source={state ? iconChecked : iconUnchecked} />
    </TouchableOpacity>
  );
};

export default IconButton;

// const [checked, setChecked] = useState(checked);
// setChecked(!state);
// checked={iconLike}

// const pressionado = retorno[0];

// const pressionadoN = retorno[1];

//   return (
//     <TouchableOpacity onPress={trocaPressionado}>
//       <Image
//         style={style.icons}
//         source={pressionado === true ? iconChecked : iconUnchecked}
//       />
//     </TouchableOpacity>
//   );
// };

// let pressionado = false;

// function trocaValorPressionado() {
//   if (pressionado === true) {
//     pressionado = false;
//   } else {
//     pressionado = true;
//   }
//   console.log(pressionado);
// }
