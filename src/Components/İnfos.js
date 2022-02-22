import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Infos({ colors, sides }) {
  const [İsProgressBarSticky, setİsProgressBarSticky] = useState(false);

  useEffect(() => {
    console.log(document.querySelector("#root").scrollY);
  }, []);

  // STYLES
  const Wrapper = styled(motion.div)`
    background-color: ${colors.white};
    width: 50%;
    color: blue;
    padding: 5rem 5rem;
    color: white;
    font-size: 20px;
    font-family: "Ubuntu", sans-serif;
  `;
  const ProgressBarContainer = styled.div`
    position: sticky;
    top: 20px;
  `;
  const ProgressBar = styled.div`
    border: 2px orange solid;
  `;
  const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${colors.black};
    margin-bottom: 0.8rem;
    span {
      color: red;
      font-size: 1rem;
    }

    span:nth-child(2) {
      color: green;
      font-size: 1rem;
    }

    span span {
      color: gray;
      font-size: 0.8rem;
      margin-left: 0.4rem;
    }
  `;

  // STYLES
  return (
    <Wrapper>
      <ProgressBarContainer>
        <ItemContainer>
          <span>
            27% <span>Profile Completeness</span>
          </span>
          <span>
            8% <span>Add Job Title</span>
          </span>
        </ItemContainer>
        <ProgressBar></ProgressBar>
      </ProgressBarContainer>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque
        porro vitae dolor. Aliquid dolor numquam, ipsam explicabo, rerum et est
        laboriosam iure aut soluta vel eligendi aspernatur earum voluptate!
        Possimus quod quis quos, cupiditate laboriosam adipisci consequatur
        placeat quae expedita sequi. Eius, amet aperiam asperiores dolorum
        voluptate, nulla rem temporibus tenetur, error est pariatur explicabo!
        Quae magni temporibus nisi. Accusamus magni inventore earum ut similique
        nostrum asperiores, nobis tenetur. Temporibus libero natus assumenda
        praesentium sunt nemo nesciunt delectus rerum, non mollitia ad
        doloremque sequi dolore reiciendis nobis recusandae minima? Harum ad
        minus vitae sunt voluptatem expedita, omnis ratione odit in dolor!
        Libero placeat veritatis, accusamus reprehenderit odio, ratione
        doloremque voluptas praesentium autem nobis omnis non dolorem excepturi
        officia quas? Autem magnam facere tempora, necessitatibus voluptatem et
        accusamus soluta enim aliquid assumenda expedita ut hic quas impedit,
        quaerat doloribus aliquam eaque, minus vel possimus iure modi explicabo
        debitis. Tenetur, commodi? Ut necessitatibus, neque dolorum quos animi
        non minima itaque labore sunt provident quas magnam in a voluptatem
        alias saepe atque velit nulla aut consectetur facere fuga voluptate.
        Neque, qui quibusdam. Harum eaque quis minus sequi quam aliquid eum
        voluptatum recusandae. Placeat ipsa, mollitia rerum eius hic ratione
        dignissimos eum inventore, magni vero, voluptatum ipsam repellendus
        accusantium labore sunt similique quisquam. Et consequatur maiores
        necessitatibus quae architecto quia, officia voluptas vel veritatis modi
        dolorem illo numquam atque nobis earum! Maiores dolorem voluptas,
        voluptate laboriosam quibusdam doloribus magnam iste. Facere, velit non.
        Nihil odit quibusdam placeat eaque suscipit temporibus, incidunt beatae
        sit, sed est dignissimos consectetur ratione maiores, veritatis quos
        aspernatur! Harum vero animi cumque nulla a dolore aliquid in earum
        voluptate? Quisquam nobis ea iusto alias libero fugiat dolores unde
        cumque vel veniam nihil, laborum facere illo non, magnam qui ipsa et
        repudiandae commodi dicta ullam quidem aspernatur odio ex! Culpa.
        Mollitia adipisci sint enim, blanditiis nihil nemo cum nam quas commodi
        culpa architecto eum omnis est numquam quod corporis perferendis, optio
        placeat fugit molestias, harum amet maiores? Cumque, ab deserunt.
        Expedita eum, nemo quae fugit dignissimos aut aliquam nihil quos
        excepturi, earum nobis mollitia unde? Soluta atque cumque in ducimus
        quisquam a aut aspernatur esse sint consectetur, corrupti consequatur
        amet? In natus perferendis unde molestiae exercitationem, dolore culpa
        rem ullam, corrupti consequatur incidunt dignissimos. Blanditiis amet
        eligendi est dolor at repellat delectus, odio dignissimos fuga officia
        odit! Doloremque, suscipit accusamus? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolore ipsa aut quia fugit voluptate quis
        voluptatem nemo accusantium quaerat perferendis. Aliquam cupiditate
        repellat temporibus consequuntur officiis expedita voluptatum sapiente
        optio. Maxime fuga aliquid ducimus soluta, dolorum perferendis ab
        molestias repellat aliquam consectetur porro mollitia obcaecati
        recusandae doloribus amet quisquam quia sit aperiam voluptatibus.
        Excepturi, repudiandae officiis sequi adipisci iste at! Eius deleniti
        alias quod voluptate, quae dolorum totam laudantium omnis nemo
        consequatur architecto id ipsam minus voluptatem autem fugiat asperiores
        iste, vel atque eligendi sequi voluptatum ea dicta. Tempora, expedita.
        Eligendi ut animi dolor voluptatibus, voluptas quam qui id, aliquid sit
        voluptate et possimus quod tenetur magni iure ratione officia minima
        similique totam modi maxime nesciunt illo laboriosam? Quam, odit.
        Repellat iure minima eveniet saepe dolor enim, quasi deserunt magni
        error similique ratione, sed doloremque. Aliquam explicabo consequatur
        corrupti facilis maxime. Repellat excepturi natus sapiente sed laborum
        mollitia assumenda nesciunt. Nostrum earum sequi quis vel iste, dolor
        exercitationem velit perspiciatis voluptatibus provident, voluptas
        doloremque mollitia cum corporis ab accusamus fugit minus, suscipit
        laboriosam ducimus! Cum odit porro doloremque. Ea, modi. Quidem amet,
        molestiae a officia culpa vitae soluta architecto. Consectetur
        laboriosam nihil veritatis fugit animi velit! Quis quia natus debitis
        ullam? Dignissimos nulla aut expedita modi veniam soluta earum
        perferendis? Qui, alias? Aut debitis deserunt unde nisi, neque ab
        quibusdam! Sed perferendis accusamus quod tempora quia doloribus,
        officiis inventore facere, quisquam ea ut maiores animi voluptatem
        tenetur. Aliquam, nam officia. Impedit obcaecati magnam quia tenetur
        sequi iure reiciendis omnis numquam ullam quasi doloremque ab aut
        reprehenderit, cumque quidem inventore expedita eos architecto vitae
        quod! Minus eligendi molestias veritatis itaque doloribus! Unde et
        deleniti doloremque ab commodi? Eum mollitia dolor, voluptas eveniet
        iure ex inventore delectus et nam quo, repudiandae veritatis corrupti!
        Adipisci, consectetur corporis suscipit praesentium optio minima
        repudiandae voluptas! Quo sit officiis facere! Voluptatum facere magni,
        cum repudiandae quaerat nesciunt, adipisci natus labore dicta nisi
        facilis suscipit saepe culpa explicabo dolorem mollitia delectus
        recusandae obcaecati. Culpa illum molestiae alias. Repellendus, nihil
        asperiores blanditiis dolore dolor nisi itaque aperiam enim veritatis.
        Ut eius vel ratione maiores molestiae repellat reiciendis quasi?
        Deserunt unde vitae incidunt in quia veniam minus molestiae quibusdam.
        Perferendis voluptatum aliquam iure sapiente amet molestias dolor beatae
        eius optio vitae molestiae, labore at obcaecati natus? Doloremque culpa,
        aperiam aliquid, eveniet vero officiis recusandae quos at animi ullam
        nesciunt. Nisi quis aliquid beatae quas vel, nemo rerum doloribus
        cupiditate illum ea iure, modi deleniti necessitatibus nam a eos
        quisquam itaque similique laborum architecto omnis reiciendis. Quis odio
        quae laboriosam. Obcaecati deleniti dolorum doloremque fugiat
        architecto, cum vel veniam laboriosam! Voluptatem eveniet reiciendis
        repudiandae iste aliquam eum sit doloremque veniam, labore doloribus.
        Nesciunt corrupti ea blanditiis quidem? Sit, id error. Optio commodi
        similique, odio debitis sed nulla, veniam aperiam ratione in praesentium
        excepturi, dolor totam. Ipsum tempora officia, obcaecati soluta
        exercitationem alias saepe ducimus ut modi hic, quidem doloribus
        nesciunt. Corrupti debitis cupiditate beatae illum nobis voluptates
        laboriosam ea recusandae enim neque ratione accusamus, eligendi aliquid
        id saepe dolor in quas nemo! Ipsum, enim. Tempora molestias voluptates
        vero quia. Aliquam! Reiciendis libero maiores repudiandae natus laborum
        voluptas facere amet voluptatem adipisci hic ratione, nisi eveniet?
        Sapiente aperiam sit quos accusantium libero velit doloremque dicta
        saepe, ab nesciunt ea odit impedit. Necessitatibus culpa voluptatem quo
        alias perferendis, repudiandae hic odio, aliquid quasi voluptatibus
        veritatis dicta ratione. Quisquam tenetur, pariatur adipisci ab qui
        deserunt velit facere enim vero vel, itaque provident ut! Temporibus
        aperiam facere velit, laborum quo rerum quisquam doloremque vero.
        Inventore cupiditate, laudantium quia odio voluptas doloribus eligendi
        quibusdam, architecto deleniti tenetur, iure pariatur distinctio ducimus
        ullam itaque impedit modi. Voluptate aliquam, voluptatum nisi quia eos
        accusamus asperiores sed. Reiciendis magnam deserunt quibusdam? Ad
        architecto tempora et adipisci amet nesciunt nulla voluptas, vero
        possimus officiis mollitia, voluptates, eligendi delectus nemo.
        Obcaecati, quas magnam. Commodi at eaque aspernatur quidem amet,
        distinctio animi maiores ullam dolore nemo provident quae, sapiente esse
        modi. Delectus nobis neque non dolor ducimus! Neque, nulla. In,
        perferendis. Tempora quidem sit, eius suscipit quaerat possimus
        architecto repellat quam. Dolore eveniet consequuntur hic et qui maxime,
        veritatis provident consectetur numquam id, possimus quod quisquam
        temporibus! Iste ducimus quam facilis! Laborum eaque modi laboriosam
        itaque voluptatem similique ipsam, optio nemo repudiandae molestiae
        alias explicabo reprehenderit quam nobis odio ex quisquam aperiam? Ipsam
        odio earum laudantium quae veritatis hic nihil suscipit? Ipsam, velit.
        Sunt doloremque maiores alias harum, maxime officia porro totam
        reprehenderit doloribus quisquam consectetur possimus tenetur iste
        necessitatibus nostrum perferendis omnis id eum quis delectus culpa
        similique error! Veniam. Accusamus labore vero officia provident enim
        fuga corporis voluptates explicabo, rerum dolor incidunt soluta qui
        exercitationem perspiciatis, doloremque iure. Quam quos corporis
        officiis adipisci tempora sequi esse eveniet laudantium ullam? Quaerat
        amet voluptas maxime dolores, accusamus quasi, aut, inventore molestiae
        minus ut assumenda ipsam ducimus quae? Maxime, repellat rem placeat
        maiores quibusdam ratione laudantium praesentium dolorem accusantium
        asperiores voluptatibus accusamus! Quidem veniam consequuntur dolorem
        placeat neque nemo atque animi sequi veritatis, nobis sit enim? Iusto
        culpa sint sapiente reiciendis ullam placeat, sed velit, autem ratione
        veritatis earum ea explicabo esse? Natus cupiditate iure, nihil incidunt
        et odio deleniti ipsam adipisci laudantium dolorum quasi unde reiciendis
        consequatur quidem atque quia ea perferendis soluta assumenda labore
        laborum eaque. Hic, blanditiis. Aperiam, aut. Voluptatibus quia eos
        laboriosam vero ut, sint odit natus ratione eveniet sapiente alias quo
        nostrum dolorem ad quos consectetur esse. Repellat temporibus sed
        aperiam vero nobis nemo magnam dignissimos unde.
      </p>
    </Wrapper>
  );
}

export default Infos;
