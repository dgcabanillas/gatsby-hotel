import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Image from 'gatsby-image';
import Layout from '../components/layout';

export const queryHabBySlug = graphql`
    query($slug:String!) {
        allDatoCmsHabitacion(filter:{slug:{eq: $slug}}) {
            nodes {
                titulo
                contenido
                imagen {
                    fluid(maxWidth: 1200) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`;

const HabitacionTemplate = ({ data }) => {

    const {
        titulo,
        contenido,
        imagen
    } = data.allDatoCmsHabitacion.nodes[0];

    return (  
        <Layout> 
            <main
                css={css`
                    margin: 0 auto;
                    width: 1200px;
                    max-width: 95%; 
                `}
            >
                <h1
                    css={css`
                        text-align: center;
                        margin-top: 4rem;
                    `}
                >{ titulo }</h1> 
                <p>{ contenido }</p>
                <Image fluid={ imagen.fluid } />
            </main>
        </Layout>
    );
}
 
export default HabitacionTemplate;