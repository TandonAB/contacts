import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import BackgroundImage from './Flower-garden.jpg';
import { connect } from 'react-redux';
import { requestContact } from '../constants/action';

const mapStateToProps = (state) => {
  return {
    contact: state.requestContact.contact,
    isPending: state.requestContacts.isPending
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onRequestContact: (id) => dispatch(requestContact(id))
  }
}

const DetailContact = ({ contact, isPending, onRequestContact }) => {
  const { id } = useParams();

  useEffect(() => {
    onRequestContact(id)
  }, [])

  console.log(contact.first_name)

  return (
    <>
      {
        isPending
          ? <h3>Loading...</h3>
          : (
            <div className="container mt-5" style={{ width: 500, borderRadius: 50 }}>
              <Card className="text-center" >
                <Card.Header style={headerStyle}></Card.Header>
                <Card.Img src={contact.avatar} style={avatarStyle} />
                <Card.Body className="text-center">
                  <Card.Title>
                    <h2>{`${contact.first_name} ${contact.last_name}`}</h2>
                  </Card.Title>
                  <Card.Text className="justify-content-center" >
                    Designer, cart lover, bookworm, pie, fanatic and nature enthusiast
                  </Card.Text>
                  <div className="center col-8" style={{ margin: '40px auto 20px auto', fontSize: 12 }}>
                    <p className="float-left">Location</p>
                    <p className="float-right">Email</p>
                  </div>
                  <div className="card" style={{ width: '100%' }}>
                    <div className="card-body row text-center">
                      <div className="col">
                        <div className="text-value-xl font-weight-bold">8,100</div>
                        <div className="text-muted small">Followers</div>
                      </div>
                      <div className="vr"></div>
                      <div className="col">
                        <div className="text-value-xl font-weight-bold">3,600</div>
                        <div className="text-muted small">Following</div>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </Card.Body>
                <Card.Footer className="btn btn-success bg-success">
                  Follow
                </Card.Footer>
              </Card>
            </div>
          )
      }
    </>
  )
}

const headerStyle = {
  height: 200,
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: '100% 100%'
}

const avatarStyle = {
  verticalAlign: 'middle',
  width: 100,
  height: 100,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: -50,
  // position: 'absolute',
  // top: 150,
  borderRadius: '50%',
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailContact);