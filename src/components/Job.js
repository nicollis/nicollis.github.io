import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import Logo from './Logo/Logo'

const Job = (props) => {
  const { logo, title, dates, company, description, tech } = props.details
  return (
    <Row>
      <Col sm={8} smOffset={2}>
          <Col xs={6} xsOffset={3} mdOffset={0} md={4}>
            <img className="career-logo" src={logo} />
          </Col>
          <Col xs={12} md={8}>
            <h3>{title} <span className="color-ruby"> {company}</span></h3>
            <strong className="h5 color-ruby">{dates}</strong>
            <h4>{description}</h4>
            <strong className="h4">Tech Used:</strong>
            <br/>
            { tech.map((tool) => {return(<Logo image={tool.image} alt={tool.id} small />)}) }
          </Col>

      </Col>
      <Col xs={12} sm={10} smOffset={1}>
        <hr/>
      </Col>
    </Row>
  )
}

Job.propTypes = {
  details: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.any.isRequired,
      image: PropTypes.string.isRequired
    })).isRequired
  }).isRequired
}

export default Job