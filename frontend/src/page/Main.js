import React from 'react';
import { FiAlertCircle, FiCalendar } from 'react-icons/fi';

import logoImg from '../assets/nextlevelweek_logo.svg';
import bannerImg from '../assets/banner-img.png';
import cellphoneImg from '../assets/cellphone-vector.svg';
import methodImg from '../assets/arrows.svg';
import secItemImg from '../assets/sec-item.svg';
import teacher1Img from '../assets/diego-photo.png';
import teacher2Img from '../assets/mayk-photo.png';
import smallLogoImg from '../assets/rocketseat-small-logo.svg';
import guestsImg from '../assets/guests.svg';
import secItemImg2 from '../assets/sec-item2.svg';
import circleImg from '../assets/circle.svg';
import gostacklImg from '../assets/gostack.svg';

import './styles.css';

function Main() {
  return (
    <div className="main-container">

      <section className="main-section center">
        <div className="information-line">
          <img src={logoImg} alt="Next Level Week Logo"/>

          <div className="event-calendar">
            <FiCalendar size={42} color="#04d361" />
            <p>1 a 7 de Junho</p>
          </div>

          <div className="online-course">
            <FiAlertCircle size={42} color="#04d361" />
            <p>100% online e gratuito</p>
          </div>
        </div>

        <div id="banner-img">
          <img src={bannerImg} alt="Banner"/>
        </div>

        <h1>Uma semana para acelerar sua evolução como dev e avançar para o próximo nível.</h1>

        <button type="button">Inscrição Gratuita</button>
      </section>

      <section className="what-is-nwl center">
        <img src={cellphoneImg} alt="Cellphone"/>

        <div className="what-is-nwl-text">
          <h2>O que é o Next Level Week?</h2>
          <p className="green-text">O NLW é uma semana prática com muito código, desafios, networking e um único objetivo: te levar para o próximo nível.</p>
          <p>Através do nosso método você vai aprender novas ferramentas, conhecer novas tecnologias e descobrir hacks que vão impulsionar a sua carreira.</p>
          <p>Um evento online e totalmente gratuito que vai te ajudar a dar o próximo passo na sua evolução como dev.</p>
        </div>
      </section>

      <section className="our-method center">
        <img src={methodImg} alt="Arrows"/>
        <h2>Nosso método é baseado em 3 pilares</h2>

        <div className="our-method-description">
          <div>
            <h3>Prática</h3>
            <p>Existem muitas formas de estudar programação, mas só existe uma forma de aprender: na prática. A teoria só funciona se você souber onde e quando aplicar, e são as horas de código que vão te ensinar a tomar as melhores decisões.</p>
          </div>

          <div>
            <h3>Foco</h3>
            <p>Programação é um universo infinito, por isso ter foco é o primeiro passo para atingir seus objetivos. Saber onde você quer chegar e não se distrair com cada ferramenta que surge é a melhor forma de acelerar sua evolução.</p>
          </div>

          <div>
            <h3>Grupo</h3>
            <p>Para se destacar é preciso ter habilidades que vão além do código, e a melhor forma de dominar essas habilidades também é na prática. Ajudar outros devs, se posicionar e receber feedback formam o bom profissional.</p>
          </div>
        </div>
      </section>

      <section className="advantages-section center">
        <h2>O poder dos 3 pilares combinados</h2>
        <div id="enumeration">
          <p class="green-text"><span>01</span>Experiência e portfolio</p>
          <p class="green-text"><span>02</span>Confiança no seu código</p>
          <p class="green-text"><span>03</span>Melhores decisões</p>
          <p class="green-text"><span>04</span>Domínio das ferramentas</p>
          <p class="green-text"><span>05</span>Velocidade de aprendizado</p>
          <p class="green-text"><span>06</span>Maturidade profissional</p>
          <p class="green-text"><span>07</span>Networking eficiente</p>
          <p class="green-text"><span>08</span>Carreira acelerada</p>
          <p class="green-text"><span>09</span>Constante evolução</p>
        </div>
      </section>

      <section className="who-will-teach center">
        <div className="teacher-diego">
          <h2>Com quem você vai aprender?</h2>
          <div className="section-marker">
            <img src={secItemImg} alt="section-marker"/>
          </div>
          <img src={teacher1Img}  width={520} alt="teacher-diego"/>
          <h3>Diego Fernandes</h3>
          <h4>CTO na Rocketseat</h4>
          <p>Programador há 10 anos e apaixonado pelas melhores tecnologias de desenvolvimento back-end, front-end e mobile, vai ser o responsável por guiar os devs através do ecossistema da OmniStack.</p>
        </div>

        <div className="teacher-mayk">
          <p>Programação é um universo vasto e em constante transformação. Por isso as oportunidades são enormes, mas a jornada nem sempre é clara. E muitos devs acabam dando voltas sem nunca atingir os objetivos.</p>
          <p>Então a melhor forma de acelerar sua evolução é ter alguém que já tenha passado por esse caminho e possa te guiar.</p>
          <img src={teacher2Img} width={520} alt="teacher-mayk"/>
          <h3>Mayk Brito</h3>
          <h4>Expert na Rocketseat</h4>
          <p>Programador há 12 anos e apaixonado por ajudar quem está dando os primeiros passos, vai ser o reponsável por guiar os alunos que desejam entrar no desenvolvimento web com o pé direito.</p>
        </div>
      </section>

      <section className="about-us-section center">
        <div className="about-us">
          <h2>Sobre a Rocketseat</h2>
          <img src={smallLogoImg} alt="Logo Rocketseat"/>
        </div>

        <div className="students-number">
          <div>
            <h3><b className="green-text">8</b> mil</h3>
            <p>Alunos treinados nos bootcamps</p>
          </div>

          <div>
            <h3><b className="green-text">173</b> mil</h3>
            <p>Alunos iniciados nos cursos gratuitos</p>
          </div>

          <div>
            <h3><b className="green-text">50</b> mil</h3>
            <p>Membros na comunidade aberta</p>
          </div>

          <div>
            <h3><b className="green-text">330</b> mil</h3>
            <p>Devs impactados no Brasil</p>
          </div>
        </div>
      </section>

      <section className="special-guests center">
        <img src={guestsImg} alt="Guests"/>
        <div>
          <h2>Convidados especiais <b className="green-text">em breve!</b></h2>
          <img src={secItemImg2} alt="Section item"/>
        </div>
      </section>

      <section className="next-level-week-sec center">
        <div className="next-level-week-sec-left">
          <div id="first-div">
            <h2>Mas afinal, o que é o próximo nível?<br/><br/></h2>
            <p>A jornada do dev é longa e feita de etapas, e a melhor forma de acelerar sua evolução é entender exatamente em que nível você está e focar na sua próxima etapa.</p>
          </div>
          
          <div id="second-div">
            <span>01</span>
            <h3>Legal,<br/> e o que é um dev?</h3>
            <p>É a pessoa responsável por transformar linhas de código em soluções que tornam a vida das pessoas mais fácil, como um aplicativo de transporte por exemplo.</p>
            <p className="second-paragraph"><b className="green-text">Dev é a abreviação de developer:</b> uma palavra que não tem gênero. Ou seja, um dev pode ser tanto um programador quanto uma programadora.</p>
          </div>
          
          <div id="third-div">
            <span>03</span>
            <h3>O que eu vou levar desse evento?</h3>
            <p>Aprendizado prático de novas ferramentas, hacks para sua carreira e um trabalho incrível para colocar no seu portfólio.</p>
            <p className="second-paragraph">Lembre que certificados não acrescentam nada na sua carreira, <b className="green-text">a coisa mais importante que você pode levar daqui é o conhecimento.</b></p>
          </div>
        </div>

        <div className="next-level-week-sec-right">
          <div id="first-div">
            <img src={circleImg} alt="Circle"/>
            <p>A primeira coisa que você precisa saber sobre a jornada do dev é que <b className="green-text">o aprendizado é contínuo e sempre haverá um próximo nível.</b></p>
          </div>

          <div id="second-div">
            <span>02</span>
            <h3>E esse evento é pra mim?</h3>
            <p>Nessa edição o foco do NLW será o universo JavaScript: a tecnologia essencial para todos os devs que trabalham ou pretendem trabalhar com web.</p>
            <p className="second-paragraph"><b className="green-text">Se você é apaixonado por código,</b> está em busca de evolução e não se cansa de aprender coisas novas todos os dias, esse evento é para você.</p>
          </div>

        </div>
      </section>
    
      <section className="disclaimer center">
        <div id="disclaimer-img">
          <img src={gostacklImg} alt="Gostack"/>
        </div>
        <div id="disclaimer-text">
          <h2>Disclaimer<br/><br/></h2>
          <b>Ao final desse evento nós abrimos as inscrições para turmas dos nossos bootcamps pagos.<br/><br/></b>
          <p>Mas o NLW não é uma amostra ou parte dos bootcamps: o conteúdo desse evento é completo, inédito e exclusivo.<br/><br/></p>
          <p>O NLW existe para entregar o que a gente tem de melhor para toda a comunidade antes de colocar toda a nossa energia e foco nos nossos alunos.</p>
        </div>
      </section>

      <section className="calendar-nlw center">
        <div className="information-line">
          <img src={logoImg} alt="Next Level Week Logo"/>

          <div className="event-calendar">
            <FiCalendar size={42} color="#04d361" />
            <p>1 a 7 de Junho</p>
          </div>

          <div className="online-course">
            <FiAlertCircle size={42} color="#04d361" />
            <p>100% online e gratuito</p>
          </div>
        </div>

        <div className="important-message">
          <p><b className="green-text">Importante:</b> o conteúdo dessa semana só estará disponível durante o evento, que vai do dia 1 a 7 de Junho.</p>
        </div> 
      </section>     

      <section className="call-to-action center">
        <h2>Participe e bora codar!</h2>
        <button type="button">Inscrição Gratuita</button>
      </section>

      <footer>
        <div className="center">
          <div id="logo-container">
            <img src={smallLogoImg} alt="Rocketseat Logo"/>
            <p>2020 © Todos os direitos reservados</p>
          </div>
          
          <div id="footer-links">
            <p>Direitos autorais</p>
            <p>Termos de uso</p>
            <p>Política de privacidade</p>
          </div>  
        </div>  
      </footer>
    </div>
  );
}

export default Main;