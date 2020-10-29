import React from 'react';
import { useNosotros } from '../hooks/useNosotros';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Contenido = styled.main`
    padding-top: 4rem;
    width: 1200px;
    max-width: 95%;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 3rem;
    }
    p {
        line-height: 2;
        margin-top: 2rem;
    }
`;

const ContenidoNosotros = () => {

    const { titulo, contenido, imagen } = useNosotros();

    return (  
        <>
            <h2
                css={css`
                    margin-top: 4rem;
                    text-align: center;
                    font-size: 4rem;
                `}
            >{ titulo }</h2>
            <Contenido>
                <p>{ contenido }</p>
                <Image fluid={ imagen.fluid } />
            </Contenido>
        </>
    );
}

export default ContenidoNosotros;