
export interface IButtonProps {
  ownwidth: string;
  buttonContent: string;
  ownheight: string;
}

export function Button(props: IButtonProps) {
  return (
    <button className="button" style={{ width: props.ownwidth, height: props.ownheight}} >
      {props.buttonContent}
    </button>
  );
}
