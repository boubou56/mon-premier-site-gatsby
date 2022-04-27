import * as React from 'react'
import Layout from '../components/layout'

import { StaticImage } from 'gatsby-plugin-image'
const AccueilPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Bienvenue au pays de la teranga!</p>
      <p>Des paysages a couper le souffle!</p>
      
      <li> Goree, l'ile memoire !</li>
      <StaticImage
        alt="mer avec des barques au large de Goree, senegal"
        src="https://ibp.info6tm.fr/api/v1/files/5b9b947e3e454611d932922c/methodes/article/image.jpg"
      />

      <li> Saloum, la joyeuse !</li>

      <StaticImage
        alt="arbre en plein soleil, Saloum, senegal"
        src="../images/savane.jpg"
      />

      <li> Silvain dans le Nianing!</li>

      <StaticImage
      alt="motte d'herbe, Nianing, senegal"
      src="../images/champs.jpg"
      />

      <li> Casa di mansa!</li>

      <StaticImage
      alt="herbe verte, casamance, senegal"
      src="../images/nature.jpg"
      />


    </Layout>
  )
}
export default AccueilPage