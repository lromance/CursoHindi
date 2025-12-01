import React from 'react';

const ToolsPage = () => {
    return (
        <div className="home-page">
            <h1>Herramientas de Hindi</h1>
            <p className="subtitle">Ejercicios interactivos para dominar el idioma</p>

            <div className="card-grid">
                {/* Tool Card 1: Adverbios de Posición */}
                <a href={`${import.meta.env.BASE_URL}tools/adverbios_posicion.html`} className="card-link bg-purple">
                    <h2>Adverbios de Posición</h2>
                    <p>Practica vocabulario espacial: arriba, abajo, dentro, fuera... ¡Acierta dónde está la bola!</p>
                </a>
            </div>
        </div>
    );
};

export default ToolsPage;
