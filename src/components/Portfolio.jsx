
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';


const Porfolio = () => {
    return (  
        <Container>
            <section className="portfolio" id="portfolio">
                <h1>Réalisations</h1>
                    <Row xs={2} md={4} className="g-4">
                        {[{title:'Vidéotron', image: require('../images/videotron.jpg'), description: 'Some quick example text to build on the card title and make up the bulk of the card content.'},
                        {title: 'Ciena', image:require('../images/ciena.png') , description: 'solutions internet personnalisées pour atteindre vos objectifs commerciaux. Et quand nous disons partenaires, nous le pensons vraiment !'},
                        {title:'Desjardins', image:require('../images/desjardins.png'), description: 'solutions internet personnalisées pour atteindre vos objectifs commerciaux. Et quand nous disons partenaires, nous le pensons vraiment !'},
                        {title:'Autres Services', image:require('../images/SNC-Lavalin.png'), description:'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'}
                        ].map((variant, idx) => (
                           
                            <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                              
                                    
                                        <img src={variant.image}  alt={variant.title} class='w-100 shadow-1-strong rounded mb-4'/>
                                        <div class="caption">
                                        <p>{variant.title} </p>
                                        </div>
                                   
                                </div>
                                
                        ))}
                    </Row>
                    
            </section>
        </Container>
    );
}
 
export default Porfolio;