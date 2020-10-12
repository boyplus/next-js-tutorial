import Nav from '../components/Nav';
import Container from '@material-ui/core/Container';

const links = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Todos', link: '/todos' },
];

const Layout = (props) => {
    return (
        <Container>
            <Nav items={links}></Nav>
            {props.children}
        </Container>
    );
};
export default Layout;
