import styled from "styled-components";


type CardProps = {
  color: any
  title: string;
  content: string | number;
  fontSize?: string;
};

const LeaderFiCard: React.FC<CardProps> = ({
  color,
  title,
  content,
  fontSize,
}) => {
  return (
    <Card font={fontSize} className={`${color} leaderscard`}>
      <CardHeader>
        <div className="heading">{title}</div>
      </CardHeader>
      <CardBody>
        <CardContent className={color}>{content}</CardContent>
      </CardBody>
    </Card>
  );
};

const Card = styled.div<{ font?: string }>`
  position: relative;

  ${({ theme }) => theme.mediaQueries.md} {
   height:90px;
  }
`;

const CardHeader = styled.div`
  width: 100%;
  position: absolute;
  top: 16px;
  left: 50%;
  z-index: 1;

  .heading {
    position: relative;
    left: -50%;
    width: 100%;
    font-style: normal;
    font-weight: 800;
    line-height: 19px;
    text-align: center;
  }
`;

const CardBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContent = styled.div`
  display: inline-block;
`;

export default LeaderFiCard;
