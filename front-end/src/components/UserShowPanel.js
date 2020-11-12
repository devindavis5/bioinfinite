import React, {Component} from 'react';
// import QuizHistory from './QuizHistory.js'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import img from '../assets/kemptons-blank-profile-picture.jpg'
import Moment from 'react-moment'
import ListGroup from 'react-bootstrap/ListGroup'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Cells from '../assets/pink.png'
import Macromolecules from '../assets/orange.png'
import Metabolism from '../assets/green.png'
import Photosynthesis from '../assets/blue.png'
import DNA from '../assets/purple.png'

export default class UserShowPanel extends Component {

    state = {
        avatar: this.props.user.img_url
    }

    setAvatar = (e) => {
        let src = e.target.alt
        console.log(src)
        
        fetch(`http://localhost:3000/users/${this.props.user.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify({img_url: src})
        })
        .then(res => res.json())
        .then(user => this.setState({avatar: user.img_url}))
    }

    findSource = () => {
        let source
        let name = this.state.avatar
        if (name === 'A') {
            source = Cells
        } else if (name === 'B') {
            source = Macromolecules
        } else if (name === 'C') {
            source = Metabolism
        } else if (name === 'D') {
            source = DNA
        } else if (name === 'E') {
            source = Photosynthesis
        } else if (name === 'F') {
            source = img
        }
         return source
    }

    render() {
        const user = this.props.user
        return (
            <div className="position-absolute" style={{zIndex:10}}>
                <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" id="avatar" src={this.findSource()} />
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
                            <img width="40" height="40" onClick={this.setAvatar} className="d-inline-block align-center" id="icon" alt="A" src={Cells}/>
                            <img width="40" height="40" onClick={this.setAvatar} className="d-inline-block align-center" id="icon" alt="B" src={Macromolecules}/>
                            <img width="40" height="40" onClick={this.setAvatar} className="d-inline-block align-center" id="icon" alt="C" src={Metabolism}/>
                            <img width="40" height="40" onClick={this.setAvatar} className="d-inline-block align-center" id="icon" alt="D" src={DNA}/>
                            <img width="40" height="40" onClick={this.setAvatar} className="d-inline-block align-center" id="icon" alt="E" src={Photosynthesis}/>
                        </Popover.Content>
                        </Popover>}>
                    <Button variant="outline-secondary float-right" size="sm">Avatars</Button>
                    </OverlayTrigger>
                ))}              
                </Card.Title>                            
                <small className="text-muted">____________________________________________________________</small>
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
