import { useStaticQuery, graphql } from 'gatsby'

export const useNosotros = () => {

    const information = useStaticQuery(graphql`
        query {
            allDatoCmsPagina(filter:{slug:{eq: "nosotros"}}) {
                nodes {
                    titulo
                    contenido
                    imagen {
                        fluid( maxWidth: 1200 ) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `)
    return information.allDatoCmsPagina.nodes[0];
}