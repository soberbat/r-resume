import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Infos({ colors, sides }) {
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
  const ProgressBarContainer = styled.div``;
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
        odit! Doloremque, suscipit accusamus?
      </p>
    </Wrapper>
  );
}

export default Infos;
