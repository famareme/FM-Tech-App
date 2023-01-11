import React from "react";
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <section id='about' className="about">
    <>
       <Container>
         <div className="row mt-3">
         <div className="col-sm-6">
           <h1 className="display-3">Quelques mots à propos de nous</h1>
         </div>
         <div className="col-sm-6">
       <p>
        FM-Tech est votre entreprise technologique  offrant une gamme complète de services web. 
        Une équipe expérimentée de professionnels du web travaille à la création de solutions internet personnalisées pour atteindre vos objectifs commerciaux. 
        Et quand nous disons partenaires, nous le pensons vraiment !
        Au fil des ans, nous avons répondu aux demandes les plus exigeantes de nos clients avec un historique de services impeccable. 
        Cette seule déclaration montre notre engagement envers nos relations professionnelles.
         Nous croyons qu'il faut offrir de la valeur aux clients de nos clients et c'est ce qui nous distingue des autres fournisseurs de solutions web à Los Angeles. Qu'il s'agisse de services de marketing internet ou de développement web, notre objectif est de fournir de la qualité. Point final !

       </p>
       </div>
       </div>
      </Container>
      </>
    </section>
  );
};

export default About;