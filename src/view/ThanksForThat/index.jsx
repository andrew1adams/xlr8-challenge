// libs
import { useContext } from 'react';

// custom components
import { Paper } from '../../components';

// context
import { ImageContext } from '../../context/imagesContext';

const ThanksForThat = () => {
  const { language, setLanguage } = useContext(ImageContext);

  const PT = () => (
    <>
      <h1>Obrigado!</h1>
      <br />
      <p>
        Agradeço imensamente a oportunidade de estar demonstrando meus
        conhecimentos em <strong>ReactJS</strong> e{' '}
        <strong>JavaScript ES6+</strong> para os senhores, dito isto, entrego
        esta avaliação técnica para ingressar a equipe <strong>XLR8rms</strong>.
      </p>
      <br />
      <p>
        Mais uma vez <strong>agradeço a oportunidade</strong>, e espero que
        tenha atendido aos requisitos e que tenha agradado a todos vocês!
      </p>
      <br />
      <hr />
      <br />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <em>Andrew Adams</em>
        <em>PT</em>
      </div>
    </>
  );

  const EN = () => (
    <>
      <h1>Thanks!</h1>
      <br />
      <p>
        I am immensely grateful for the opportunity to be demonstrating my
        knowledge in <strong>ReactJS</strong> and{' '}
        <strong>JavaScript ES6+</strong> to you, having said that, I deliver
        this technical evaluation to join the <strong>XLR8rms</strong> team.
      </p>
      <br />
      <p>
        Once again, <strong>I thank you for the opportunity</strong>, and I hope
        that it has met the requirements and that it has pleased you all!
      </p>
      <br />
      <hr />
      <br />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <em>Andrew Adams</em>
        <em>EN</em>
      </div>
    </>
  );

  return (
    <>
      <Paper setLanguage={setLanguage} language={language}>
        {language === 'PT' ? <PT /> : <EN />}
      </Paper>
    </>
  );
};

export default ThanksForThat;
