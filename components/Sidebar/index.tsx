import { Offcanvas } from 'react-bootstrap'

interface ISidebar {
    isModalOpen: boolean,
    handleModalClose: () => void
}

export const Sidebar: React.FC<ISidebar> = ({ isModalOpen, handleModalClose }: ISidebar) => {
    return (
        <>
            <Offcanvas show={isModalOpen} onHide={handleModalClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Modal heading</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>Woohoo, you are reading this text in a modal!</Offcanvas.Body>
            </Offcanvas>
        </>
    )
}