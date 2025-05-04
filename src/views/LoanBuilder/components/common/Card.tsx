import card_bg from "assets/images/loanbuilder/cards-bg.svg";
import styled from "styled-components";
type CardProps = {
  title: string;
};

const Card = ({ title }: CardProps): JSX.Element => (
  <StyledCard>
    <div className="card bg-transparent text-white border-0">
      <img className="card-img" src={card_bg} alt="Card " />
      <div className="card-img-overlay active">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  </StyledCard>
);

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  .card-title {
    justify-content: center;
    font-family: Organetto Ultra Bold;
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    line-height: 21px;
    letter-spacing: -0.130294px;
    text-transform: capitalize;
    color: #ffffff;
  }
  .card-img-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
`;

export default Card;
