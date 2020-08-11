import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Contact = (props) => {
  const { firstname, lastname, email, avatar, id } = props;
  return (
    <>
      <Card style={cardItemStyle} className="p-0 my-2">
        <Card.Body>
          <Row>
            <Col sm={2}>
              <img src={avatar} style={avatarStyle} alt="contact" />
            </Col>
            <Col sm={7}>
              <Link className="nav-link" to={`/contacts/${id}`}>
                <h4>{`${firstname} ${lastname}`}</h4>
                <p className="mt-n1" style={timeStyle}>{email}</p>
              </Link>
            </Col>
            <Col sm={3} style={timeStyle} className="text-right">10:42 AM</Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}

const cardItemStyle = {
  color: '#000'
}
const avatarStyle = {
  width: 60,
  borderRadius: '50%'
}
const timeStyle = {
  fontSize: 13,
  color: 'gray'
}

export default Contact;
