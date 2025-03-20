import Header from '../components/Header';
import ThemedCard from '../components/Card';

const Home = () => {
    return (
        <div className="container text-center">
            <Header title="Bem-vindo à Sorveteria Delícia!" />
            <ThemedCard title="Sorvete de Chocolate" description="Delicioso e cremoso sorvete de chocolate artesanal." />
            <ThemedCard title="Sorvete de Morango" description="Sorvete natural feito com morangos frescos." />
        </div>
    );
};

export default Home;
