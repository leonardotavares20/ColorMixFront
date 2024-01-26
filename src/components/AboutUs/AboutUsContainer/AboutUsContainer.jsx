import {
  ContainerTitle,
  ContainerGrid,
  GridImageText,
  GridAboutCompany,
} from "./style";
import backgroundAboutUs from "../../../../assets/backgroundAboutUs.png";

const AboutUsContainer = () => {
  return (
    <>
      <ContainerTitle back={backgroundAboutUs}>
        <div>
          <h1>
            SOBRE A SANTA RITA <br />{" "}
            <span className="fontLigth">Home Center</span>{" "}
          </h1>
        </div>
      </ContainerTitle>
      <ContainerGrid>
        <GridImageText>
          <img src="/assets/imageGridAboutUs.png" alt="" />
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
              libero tempora accusamus molestias eius, maiores necessitatibus
              provident nobis quae deleniti sit porro dolorum totam distinctio
              possimus enim obcaecati dolores minus.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
              libero tempora accusamus molestias eius, maiores necessitatibus
              provident nobis quae deleniti sit porro dolorum totam distinctio
              possimus enim obcaecati dolores minus.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
              libero tempora accusamus molestias eius, maiores necessitatibus
              provident nobis quae deleniti sit porro dolorum totam distinctio
              possimus enim obcaecati dolores minus.
            </p>
          </div>
        </GridImageText>
        <GridAboutCompany>
          <div>
            <h2>Missão</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              placeat minus rem praesentium earum deleniti cum fugiat molestiae
              dolorem, quam numquam enim iusto aliquam. Officiis quidem
              perspiciatis repellat aperiam sapiente.
            </p>
          </div>
          <div>
            <h2>Visão</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              placeat minus rem praesentium earum deleniti cum fugiat molestiae
              dolorem, quam numquam enim iusto aliquam. Officiis quidem
              perspiciatis repellat aperiam sapiente.
            </p>
          </div>
          <div>
            <h2>Valores</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              placeat minus rem praesentium earum deleniti cum fugiat molestiae
              dolorem, quam numquam enim iusto aliquam. Officiis quidem
              perspiciatis repellat aperiam sapiente.
            </p>
          </div>
        </GridAboutCompany>
      </ContainerGrid>
    </>
  );
};

export default AboutUsContainer;
