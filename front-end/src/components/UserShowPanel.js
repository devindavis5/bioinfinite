import React, {Component} from 'react';
// import QuizHistory from './QuizHistory.js'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import img from '../assets/kemptons-blank-profile-picture.jpg'
import Moment from 'react-moment'
import ListGroup from 'react-bootstrap/ListGroup'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Cells from '../assets/cells.png'
import Macromolecules from '../assets/macromolecules.png'
import Metabolism from '../assets/metabolism.png'
import Photosynthesis from '../assets/photosynthesis.png'
import DNA from '../assets/dna.png'


export default class UserShowPanel extends Component {

    state = {
        avatar: img
    }

    setAvatar = (e) => {
        this.setState({avatar: e.target.alt})
    }

    render() {
        const user = this.props.user
        return (
            <div className="position-absolute" style={{zIndex:10}}>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.avatar} />
                <Card.Body>
                    <Card.Title>{user.name}
                {['right'].map((placement) => (
                    <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                        <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Title as="h3">Select an Avatar</Popover.Title>
                        <Popover.Content>
                            {/* <strong>Holy guacamole!</strong> Check this info. */}
                            <img width="40" height="40" onClick={this.setAvatar} className="d-inline-block align-center" id="icon" alt={Cells} src={Cells}/>
                            <img width="40" height="40" onClick={this.setAvatar} className="d-inline-block align-center" id="icon" alt={Macromolecules} src={Macromolecules}/>
                            <img width="40" height="40" onClick={this.setAvatar} className="d-inline-block align-center" id="icon" alt={Metabolism} src={Metabolism}/>
                            <img width="40" height="40" onClick={this.setAvatar} className="d-inline-block align-center" id="icon" alt={DNA} src={DNA}/>
                            <img width="40" height="40" onClick={this.setAvatar} className="d-inline-block align-center" id="icon" alt={Photosynthesis} src={Photosynthesis}/>
                        </Popover.Content>
                        </Popover>}>
                    <Button variant="outline-secondary float-right" size="sm">Avatars</Button>
                    </OverlayTrigger>
                ))}              
                </Card.Title>                            
                <small className="text-muted">___________________________________________</small>
                </Card.Body>
                <Card.Body>
                    <ListGroup variant="flush">
                    <ListGroup.Item className="text-info">Email:</ListGroup.Item>
                    <ListGroup.Item>{user.email}</ListGroup.Item>
                    <ListGroup.Item className="text-info">Member Join Date:</ListGroup.Item>
                    <ListGroup.Item><Moment format="MMMM DD, YYYY" trim="true">{user.created_at}</Moment></ListGroup.Item>
                    </ListGroup>
                    <Button variant="outline-secondary float-right" onClick={() => this.props.profile()} size="sm">Close</Button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}
