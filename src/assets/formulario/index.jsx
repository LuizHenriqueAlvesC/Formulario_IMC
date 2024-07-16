import { useState } from 'react';
import './formulario.css';

function ExecutaFormulario() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [imc, setImc] = useState(null);
    const [classification, setClassification] = useState('');

    const calculateIMC = (e) => {
        e.preventDefault();
        const heightInMeters = height / 100; // Corrigido: altura em metros
        const imcValue = weight / (heightInMeters * heightInMeters); // Cálculo do IMC
        setImc(imcValue.toFixed(2));

        let classification = '';
        if (imcValue < 18.5) {
            classification = 'Abaixo do peso';
        } else if (imcValue >= 18.5 && imcValue < 24.9) {
            classification = 'Peso normal';
        } else if (imcValue >= 25 && imcValue < 29.9) {
            classification = 'Pré-obesidade';
        } else if (imcValue >= 30 && imcValue < 34.9) {
            classification = 'Obesidade Grau I';
        } else if (imcValue >= 35 && imcValue < 39.9) {
            classification = 'Obesidade Grau II';
        } else {
            classification = 'Obesidade Grau III';
        }
        setClassification(classification);
    };

    return (
        <div className="app">
            <header className="appHeader">
                <h1>Calculadora de IMC</h1>
                <form onSubmit={calculateIMC}>
                    <div>
                        <label>Altura (cm):</label>
                        <input
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Peso (kg):</label>
                        <input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Calcular IMC</button>
                </form>
                {imc && (
                    <div>
                        <h2>Seu IMC é: {imc}</h2>
                        <h3>Classificação: {classification}</h3>
                    </div>
                )}
            </header>
        </div>
    );
}

export default ExecutaFormulario


