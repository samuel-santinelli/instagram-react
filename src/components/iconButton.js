import {TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import style from '../style';

const IconButton = ({iconChecked, iconUnchecked}) => {
  const retorno = useState(false);

  // O useState retorna um array que no indice 0 possui o valor do estado e no indice 1 possui uma função para alterar o estado

  const pressionado = retorno[0];

  const pressionadoN = retorno[1];

  function trocaPressionado() {
    if (pressionado === true) {
      pressionadoN(false);
    } else {
      pressionadoN(true);
    }
  }

  // let pressionado = false;

  // function trocaValorPressionado() {
  //   if (pressionado === true) {
  //     pressionado = false;
  //   } else {
  //     pressionado = true;
  //   }
  //   console.log(pressionado);
  // }

  return (
    <TouchableOpacity onPress={trocaPressionado}>
      <Image
        style={style.icons}
        source={pressionado === true ? iconChecked : iconUnchecked}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
