import styled from "styled-components";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, } from "components/Dialog";

  
type Props = {
  trigger: React.ReactElement;
  dialogtitle:string;
  title: string;
  content: string;
  image?:string;
};

const InfoDataDialog: React.FC<Props> = ({
  trigger,
  dialogtitle,
  title,
  content,
  image
}) => {

  return (
    <Dialog>
      <DialogTrigger asChild onClick={(e) => e.stopPropagation()}>
        {trigger}
      </DialogTrigger>
      <DialogContent size="large" className="responsive-modal common-dialog">
          {/*<DialogTitle>
            {dialogtitle}
          </DialogTitle>*/}
          <DialogueWrapper>
            <DialogTitle>
              {title}
            </DialogTitle>
            <div>{content}</div>
          </DialogueWrapper>
      </DialogContent>
    </Dialog>
  );
};

export const DialogueWrapper=styled.div`
  padding: 40px;
`

export default InfoDataDialog;