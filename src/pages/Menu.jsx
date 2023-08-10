import Accordion from '../components/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

export const Menu = () => {
    return (
        <>
            <Card bg='dark text-white rounded-0 text-center'>
                <h2>Menu</h2>
            </Card>
            <Accordion />
        </>
    );
};
