import React from 'react';
import { render } from 'react-dom';
import { useState } from 'react';

let var1 = null;

const Container = () => {

    const [selecionado, setSelecionado] = useState("");


    function selecionar(e){
        let options = document.querySelectorAll('.opçao');
        if([...options].includes(e.target)){
            if(selecionado === ""){
                setSelecionado(e.target);
                e.target.classList.toggle("green");
            }
            else{
            setSelecionado(e.target);
            selecionado.classList.remove("green");
            e.target.classList.add("green");
            }
        }
        else if([...options].includes(e.target.parentNode)){
            if(selecionado === ""){
                setSelecionado(e.target.parentNode);
                e.target.parentNode.classList.toggle("green");
            }
            else{
            setSelecionado(e.target.parentNode);
            selecionado.classList.remove("green");
            e.target.parentNode.classList.add("green");
            }
        }
    }

    return( <div className="scroller comida">
    <div className="opçao" onClick={selecionar} id="1">
        <img className="optionimage" src="img/frango_yin_yang 1.png" />
        <div className="tituloopçao roboto">Frango Yin Yang</div>
        <div className="textoopçao roboto">Um pouco de batata, um pouco de salada</div>
        <div className="price roboto">R$ 14,90</div>
    </div>
    <div className="opçao" onClick={selecionar} id="2">
        <img className="optionimage" src="img/frango_yin_yang 1.png" />
        <div className="tituloopçao roboto">Frango Yin Yang</div>
        <div className="textoopçao roboto">Um pouco de batata, um pouco de salada</div>
        <div className="price roboto">R$ 14,90</div>
    </div>
    <div className="opçao" onClick={selecionar} id="3">
        <img className="optionimage" src="img/frango_yin_yang 1.png" />
        <div className="tituloopçao roboto">Frango Yin Yang</div>
        <div className="textoopçao roboto">Um pouco de batata, um pouco de salada</div>
        <div className="price roboto">R$ 14,90</div>
    </div>
    <div className="opçao" onClick={selecionar} id="4">
        <img className="optionimage" src="img/frango_yin_yang 1.png" />
        <div className="tituloopçao roboto">Frango Yin Yang</div>
        <div className="textoopçao roboto">Um pouco de batata, um pouco de salada</div>
        <div className="price roboto">R$ 14,90</div>
    </div>
    <div className="opçao" onClick={selecionar} id="5">
        <img className="optionimage" src="img/frango_yin_yang 1.png" />
        <div className="tituloopçao roboto">Frango Yin Yang</div>
        <div className="textoopçao roboto">Um pouco de batata, um pouco de salada</div>
        <div className="price roboto">R$ 14,90</div>
    </div>
    <div className="opçao" onClick={selecionar} id="6">
        <img className="optionimage" src="img/frango_yin_yang 1.png" />
        <div className="tituloopçao roboto">Frango Yin Yang</div>
        <div className="textoopçao roboto">Um pouco de batata, um pouco de salada</div>
        <div className="price roboto">R$ 14,90</div>
    </div>
</div>);
}

render(<Container />, document.getElementById("root"));