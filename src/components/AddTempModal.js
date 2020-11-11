import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

export class AddTempModal extends Component{
    constructor(props){
        super(props);
    }

render(){
    return(
        <div>
        <Modal fade={false} isOpen={this.props.isOpen} toggle={this.props.toggle} >
            <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader>
                
            <ModalBody>
            <Input type="textarea" placeholder="Write something (data should remain in modal if unmountOnClose is set to false)" rows={5} />
                </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.props.toggle}>Do Something</Button>{' '}
                <Button color="success" onClick={this.props.toggle}>Save</Button>{' '} 
                <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    </div>
    )
}

}
export default AddTempModal;