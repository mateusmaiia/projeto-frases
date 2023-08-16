import { useState } from 'react'

import logoImg from './assets/logo.png'
import './App.css'

export function App() {

  const [textoFrase, setTextoFrase] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: 'Motivação',
      frases: [
        'Siga os bons e aprenda com eles.',
        'O bom-senso vale mais do que muito conhecimento.',
        'O riso é a menor distância entre duas pessoas.',
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossivel.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.'
      ]
    },
    {
      id: 2,
      nome: 'Bom dia',
      frases: [
        'Acordar de bem com a vida é o primeiro passo para ter um dia abençoado! Bom dia, família!',
        "A melhor forma de acordar é levantar da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo!",
        "Escreva em seu coração: todo dia é o melhor dia do ano!",
        "Bom dia! Não se esqueça que sua alma é o reflexo do sol, tão forte e brilhante quanto um girassol."
      ]
    }
  ]

  return (
    <>
      <div className="container">
        <img 
          src={logoImg}
          alt="logo frases" 
          className='logo'
        />

        <h2 className='title'>Categorias</h2>

        <section className='category-area'>
          
          {allFrases.map((item) => (
            <button 
              key={item.id}
              className="category-button"
              style={{ 
                borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 :0
              }}
            >
              {item.nome}
            </button>
          ))}
          
        </section>

        <button className='button-frase'>Gerar frase</button>

        {textoFrase !== '' && (
          <p className="texto-frase">
            {textoFrase}
          </p>
        )}
      </div>
    </>
  )
}

