import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { setVisibility } from "../../store/textSlice";
import PersonalDetails from "./PersonalDetails";
import Profile from "./Profile";
import Employment from "./Employment";

import SvgRLogo from "../../logo/MyLogo";
export const PageToPrint = React.forwardRef((props, ref) => {
  //STATE

  const { colors } = props;
  const dispatch = useDispatch();
  const visiblity = useSelector((state) => state.values.visibility);
  const jobTitle = useSelector(
    (state) => state.values.values.forms["job-title"]
  );
  const state = useSelector((state) => state.values);
  useEffect(() => {
    document.addEventListener("keydown", () => {
      dispatch(setVisibility({ value: true }));
    });
  });
  useEffect(() => {
    const timer = setTimeout(
      () => dispatch(setVisibility({ value: false })),
      500
    );

    return () => clearTimeout(timer);
  }, [state]);

  //STATE

  const PageToPrint = styled.div`
    overflow-y: scroll;
    height: 90%;
    width: 100%;

    transition: all 0.3s ease-out;
    background-color: ${colors.white};
    border-radius: 5px;
    border: 1.2px solid ${colors.grayMid};
    padding: 2rem 3rem;
    box-shadow: 0px 0px 20px 7px rgba(240, 242, 249, 7);
    color: black;
    position: relative;

    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
      border-radius: 6px;
    }
    ::-webkit-scrollbar {
      width: 10px;
      background-color: #f5f5f5;
      border-radius: 6px;
      position: absolute;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #000000;
      border: 3px white solid;
      border-radius: 6px;
    }

    @media print {
      font-family: "Sarabun ";
      font-size: 20px;

      height: 596mm;
      width: 210mm;
      ::-webkit-scrollbar {
        width: 0 !important;
      }
    }

    :hover {
      box-shadow: 0px 10px 40px 16px rgba(240, 242, 249, 7);
      transform: translateY(-5px);
    }
  `;

  const SavingScreen = styled(motion.div)`
    background-color: #fdfffc;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    z-index: 100;
  `;

  const AnimatedContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
  `;

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 100, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 4 } },
  };

  const contVars = {
    initial: { opacity: 0 },
    animate: { opacity: 100, transition: { duration: 3 } },
  };

  return (
    <PageToPrint ref={ref}>
      <AnimatePresence>
        {visiblity ? (
          <SavingScreen
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
          />
        ) : (
          ""
        )}
      </AnimatePresence>
      <AnimatedContainer
        variants={contVars}
        animate="animate"
        initial="initial"
      >
        <PersonalDetails />
        <Profile />
        <Employment />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        dolorem non, nostrum, perferendis eligendi, error maxime eaque totam
        fugiat doloremque culpa vero! Earum rerum quis, consequuntur suscipit
        tempora repellat ipsa. Nisi dolores nam totam ipsa dolore itaque
        cupiditate. Reprehenderit reiciendis excepturi mollitia consectetur
        deserunt optio omnis qui rem enim perferendis, modi animi minus nobis
        molestias expedita quasi! Possimus, et molestiae. Veniam corrupti
        sapiente optio molestias numquam necessitatibus eos, vero, autem itaque
        nam blanditiis, asperiores soluta corporis repellendus? Velit dolores
        saepe, sequi mollitia fugiat nulla facere eaque eius odio deserunt
        incidunt. Libero perspiciatis corporis minima quidem quae repellat unde!
        Perspiciatis quidem nostrum, nisi incidunt non mollitia, totam aut
        eveniet facere cupiditate ut esse quam quibusdam provident minus aliquid
        alias corporis debitis. Ratione esse veritatis adipisci? Provident
        expedita ut mollitia voluptate sed qui nulla sequi eveniet
        exercitationem officia impedit, soluta deleniti! Earum odit commodi
        beatae voluptate autem dolore facere voluptates repellat delectus?
        Dolorum obcaecati modi et harum commodi consequuntur reprehenderit
        quibusdam non laboriosam voluptates libero tenetur, eveniet, totam ad
        mollitia earum. Beatae quae repudiandae vitae maxime fuga veniam sit
        distinctio pariatur similique! Odio quos perspiciatis ad inventore saepe
        placeat fugit ea nobis debitis eligendi corporis vero eveniet non eum
        illo facere magnam doloribus, minus sunt autem natus? Aliquam maiores at
        sit id. Reprehenderit, quod? Provident facere delectus reprehenderit
        minus dignissimos corrupti vel molestias itaque adipisci mollitia.
        Ipsam, totam! Numquam minima nam quas ipsam quis iure repudiandae
        sapiente nemo magnam, excepturi corrupti expedita! Vel sint molestias
        dignissimos magni suscipit? Odit perferendis nulla recusandae fugit quod
        in nesciunt, itaque alias dolores sapiente ipsa omnis quae praesentium
        molestiae cupiditate! Itaque, iure neque! Saepe, necessitatibus
        voluptate! Fugiat odio, quibusdam quasi ipsam, modi numquam voluptas
        minima vero illo nihil sequi! Dolor quam, facilis iure ut, inventore
        aperiam aspernatur reiciendis rem eaque harum nihil assumenda beatae
        quos ex? Iste sed rerum voluptatibus unde deserunt! Ullam qui nisi
        ducimus possimus vero iste. Commodi accusamus voluptate harum nesciunt
        sunt quisquam, fugiat optio totam est iusto itaque ipsum ullam,
        perferendis qui! Sunt, amet? Illo nostrum obcaecati dolore iure suscipit
        asperiores reiciendis, esse officiis, illum autem enim fugiat iusto.
        Quibusdam tenetur, fuga alias aliquid vel, laudantium culpa amet, velit
        architecto magnam est? Architecto laborum vero fuga earum quam beatae
        deleniti, alias at incidunt sapiente ullam dolores, saepe voluptatibus
        adipisci doloribus soluta consequuntur laudantium modi sunt odit illo.
        Pariatur, assumenda. Facere, deserunt labore! Excepturi neque error
        consequuntur ab commodi sapiente, debitis natus odio suscipit. Natus
        numquam reprehenderit, at eaque similique vitae aliquam atque vero quod
        dicta in voluptatem, repudiandae cumque. Maxime, asperiores aspernatur.
      </AnimatedContainer>
    </PageToPrint>
  );
});
