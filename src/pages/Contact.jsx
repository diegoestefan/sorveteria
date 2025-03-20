import Header from '../components/Header';
import ThemedButton from '../components/Button';

const Contact = () => {
    return (
        <div className="container text-center">
            <Header title="Fale Conosco" />
            <form className="form-container">
                <input className="input" type="text" placeholder="Nome" />
                <input className="input" type="email" placeholder="E-mail" />
                <textarea className="textarea" placeholder="Sua mensagem"></textarea>
                <ThemedButton className="button">Enviar</ThemedButton>
            </form>
        </div>
    );
};

export default Contact;
