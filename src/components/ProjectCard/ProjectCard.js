import { Col } from 'react-bootstrap'


const ProjectCard = ({title, description, imgUrl}) => {
    
  return (
    <Col sm={12} md={6} lg={4}>

        <div className="proj-imgbx">
            <img src={imgUrl} alt="Project" />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCard