import { useStaticQuery, graphql } from 'gatsby'

export const useInicio = () => {

    const information = useStaticQuery(graphql`
        query {
            allDatoCmsPagina(filter:{slug:{eq: "inicio"}}) {
                nodes {
                    titulo
                    contenido
                    imagen {
                        fluid {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `)
    return information.allDatoCmsPagina.nodes[0];
}