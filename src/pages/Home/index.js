import { FiLink } from 'react-icons/fi';
import './Home.css';
import Menu from '../../components/Menu'

export default function Home() {
    return (
      <div className="container-home">
        <div className="logo">
            <img src="/logo.png" alt="Sujeito Link logo" />
            <h1>SujeitoLink</h1>
            <span>Cole seu link para encurtar 👇</span>
        </div>

        <div className="area-input">
            <div>
                <FiLink size={24} color="#fff" />
                <input
                placeholder='Cole seu link aqui...'
                />
            </div>

            <button>Gerar link</button>
        </div>

        <Menu />

      </div>
    )
  }