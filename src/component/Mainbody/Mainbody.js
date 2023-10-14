import React, { useEffect, useState } from 'react';
import './Mainbody.css';
import '../fonts.css';
import ReactTyped from 'react-typed';
import handleIconClick from '../Navbar/Navbar';

function Mainbody() {
  const firstletter = {
    color: '#FFC300',
  };

  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const runAnimations = async () => {
      await animateText('INSTITUTE');
      setAnimationStep(1);
      await animateText('TECHNICAL');
      setAnimationStep(2);
      await animateText('COUNCIL');
    };

    runAnimations();
  }, []);

  const animateText = (text) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, text.length * 100); // Adjust the delay as needed
    });
  };

  return (
    <div className="mainbody" >
      <div className="mainbody-heading">
        <span style={firstletter}>I</span>
        {animationStep >= 0 && <ReactTyped strings={['NSTITUTE']} typeSpeed={100} showCursor={false} />}
        <br />
        <span style={firstletter}>T</span>
        {animationStep >= 1 && <ReactTyped strings={['ECHNICAL']} typeSpeed={100} showCursor={false} />}
        <br />
        <span style={firstletter}>C</span>
        {animationStep >= 2 && <ReactTyped strings={['OUNCIL']} typeSpeed={100} showCursor={false} />}
        <br />
      </div>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat molestias inventore, nemo laboriosam iure ratione non ut asperiores veritatis voluptas rerum, expedita quisquam eligendi excepturi ad distinctio aut ipsa! Quos, adipisci praesentium debitis quaerat quo assumenda voluptates deleniti ducimus deserunt tempore minima, nisi corrupti vel, magni unde facere accusantium eius illum corporis illo ex doloribus earum! Sit vero iure voluptates aperiam, aliquid veritatis ipsam fugiat dolore, neque esse molestiae. Inventore minima, cum distinctio magnam architecto illo autem pariatur. Illo eos, adipisci quisquam impedit eaque soluta omnis id laudantium tempora veniam ab doloribus nostrum nulla exercitationem similique perferendis earum deserunt beatae magni rerum! Libero iure minus animi id adipisci minima assumenda placeat fugiat dolore iste, consequuntur cum! Non incidunt exercitationem architecto tempore est adipisci, beatae expedita mollitia ipsum natus hic nobis, voluptatibus, reiciendis a praesentium. Doloribus nemo iusto dolor atque quaerat at consequatur maxime, corporis nostrum explicabo ut dolorum repellat unde odio voluptate non harum aliquid ipsa omnis illo. Itaque maiores eos consectetur dignissimos harum tempore tempora porro aliquid et quasi iure fuga quia atque molestias voluptate enim officiis, quis accusamus laboriosam libero deserunt impedit totam. At, iure ipsa? Illum culpa labore dolorem ad, soluta laboriosam repellat cumque! Ipsum molestiae quam fugiat reprehenderit. Incidunt nulla culpa perferendis suscipit praesentium ea, quisquam porro reiciendis, facere quaerat, accusamus dignissimos? Asperiores autem ex sed distinctio dolorem facilis quisquam animi eos sint velit modi id corporis cumque laboriosam obcaecati sit nisi culpa aut debitis, cupiditate impedit, accusantium libero! Officiis nobis amet doloremque eius exercitationem accusantium. Iusto, velit? Aperiam distinctio placeat in laboriosam earum doloribus ipsam. Fuga rerum corrupti, soluta deserunt libero consequatur qui laborum dignissimos porro fugiat eveniet hic adipisci reprehenderit! Voluptatum repellat fuga dolorum repudiandae consectetur reprehenderit nemo accusamus animi earum. Tenetur, molestiae laborum quasi ratione nesciunt est atque voluptatem ea reprehenderit adipisci? Numquam odio eos nemo earum dolorem dolore exercitationem voluptatibus corporis! Alias culpa omnis expedita? Ad omnis debitis totam molestiae quam nobis, accusantium voluptates eius tempore iure voluptatibus blanditiis facere iste exercitationem, vero ab fuga recusandae quibusdam, non adipisci laboriosam quas! Recusandae earum consequatur consectetur commodi mollitia provident et iste doloribus placeat? Vitae voluptatem nam repudiandae deleniti amet veritatis quam rem perspiciatis velit, pariatur quibusdam exercitationem, vero commodi accusamus nesciunt est minus dolor dolorum doloremque, sequi excepturi? Earum nam natus temporibus tempore praesentium similique veniam possimus nesciunt. Repellendus sequi soluta reiciendis reprehenderit corporis porro impedit illo iusto, laboriosam dignissimos iure numquam est sit iste adipisci delectus culpa nam! Ullam, sunt asperiores. Rem cupiditate labore repellat atque sunt, reprehenderit reiciendis iste ipsa dolores, enim nostrum error, perspiciatis pariatur. Numquam fugiat possimus repellendus magni quaerat. Iste distinctio vitae harum, quidem sunt ab! Ipsam architecto temporibus minima veniam numquam eveniet deserunt facere obcaecati quaerat blanditiis id recusandae in vel odit quibusdam officia iusto vitae, ea dolores minus animi. Dolorem harum autem totam! Exercitationem facilis dolorem iste est. Atque, cumque quis eum, maxime, iusto error quisquam illo eaque ullam sunt similique voluptate. Repudiandae iste libero quisquam facere cupiditate eveniet similique quis minima reprehenderit, saepe deserunt.
        </p>
    </div>
  );
}

export default Mainbody;





// const Typewriter = ({ text, delay }) => {
//     const [currentText, setCurrentText] = useState('');
//     const [currentIndex, setCurrentIndex] = useState(0);
  
//     useEffect(() => {
//         if (currentIndex < text.length) {
//           const timeout = setTimeout(() => {
//             setCurrentText(prevText => prevText + text[currentIndex]);
//             setCurrentIndex(prevIndex => prevIndex + 1);
//           }, delay);
      
//           return () => clearTimeout(timeout);
//         }
//       }, [currentIndex, delay, text]);
  
//     return <span>{currentText}</span>;
//   };