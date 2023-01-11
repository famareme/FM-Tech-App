import React  from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
const Services = () => {
    return (
        <section id='services'  className="services">
            <>
            <Container>   
                <h1>Services</h1>
                    <>
                    <Row xs={2} md={4} className="g-4">
                        {[{title:'Conception UI Kit', image: require('../images/uikit.jpg'), description: 'Aligner la création des interfaces utilisateur en définissant des règles et composants à vos projets. Aider à regrouper dans une bibliothèque le comportement et le style de certains éléments tels que les boutons, les couleurs, les cases à cocher, les champs de formulaire, les paragraphes et les titres. '},
                        {title: 'Développement web', image:require('../images/development.jpg') , "description": "Configuration, productions single page application (AngularJs, ReactJS, EmberJS) HTML, CSS et JavaScript de pages web et d'interfaces utilisateur.<p> Certains interfaces peuvent être développées avec les frameworks suivants :</p>"},
                        {title:'Maintenance web', image:require('../images/maintenance.png'), description: 'solutions internet personnalisées pour atteindre vos objectifs commerciaux. Et quand nous disons partenaires, nous le pensons vraiment !'},
                        {title:'Autres Services', image:require('../images/service.jpg'), description:`Encollaboration avec Quebec Biodiversite, nous offrons un support Déveloopemnt d'affaire, Propriété intellectuelle, REcherche et Déeloppement etc.`}
                        ].map((variant, idx) => (
                            <Col>
                            <Card className='h-100'>
                                <Card.Img variant="top" src={variant.image} className='embed-responsive-item' />
                                <Card.Body>
                                <Card.Title> {variant.title} </Card.Title>
                                <Card.Text>
                                {variant.description} 
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                    </Row>
                    </>
            </Container>
            </>
        </section>
      );
}
 
export default Services;