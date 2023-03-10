import React, {useState} from "react"
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap"
import {connect} from "react-redux"
import {addItem} from "../actions/itemActions"


const ItemModal = () => {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState("");

    const handleToggle = () => setModal(!modal);
    
    const handleChangeName = (e) => setName(e.target.value)

    const handleOnSubmit = (e) => {
    e.preventDefault();
    const newItem = {
        name
    };
    // Add item via addItem action
    addItem(newItem)
    // Close modal
    handleToggle()

}
    return (
        <div>
            <Button
                color="dark"
                style={{marginBottom: "2rem"}}
                onClick={handleToggle}
            >Add Item</Button>
            <Modal isOpen={modal}
                toggle={handleToggle}>
                    <ModalHeader toogle={handleToggle}>Add To Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={handleOnSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add shopping item"
                                    onChange={handleChangeName}
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: "2rem"}} block >Add Item
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => ({
    item: state.item
})


export default connect(mapStateToProps,{addItem})(ItemModal)