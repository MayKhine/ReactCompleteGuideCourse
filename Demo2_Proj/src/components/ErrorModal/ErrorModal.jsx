import classes from "./ErrorModal.module.css"
import { Button } from "../Button/Button"
import ReactDOM from "react-dom"
const Backdrop = () => {
  return <div className={classes.backdrop}></div>
}

const ModelOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.header}>
        <h2>Invalid Input</h2>
      </div>
      <div className={classes.content} style={{ backgroundColor: "white" }}>
        <div>{props.text}</div>
        <div className={classes.actions}>
          <Button
            text={"Okay"}
            onClickHandler={props.errorOnClickHandler}
          ></Button>
        </div>
      </div>
    </div>
  )
}
export const ErrorModal = (props) => {
  return (
    // <div className={classes.backdrop}>
    //   <div className={classes.modal}>
    //     <div className={classes.header}>
    //       <h2>Invalid Input</h2>
    //     </div>
    //     <div className={classes.content} style={{ backgroundColor: "white" }}>
    //       <div>{props.text}</div>
    //       <div className={classes.actions}>
    //         <Button
    //           text={"Okay"}
    //           onClickHandler={props.errorOnClickHandler}
    //         ></Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      {ReactDOM.createPortal(
        <Backdrop></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModelOverLay
          text={props.text}
          errorOnClickHandler={props.errorOnClickHandler}
        ></ModelOverLay>,
        document.getElementById("overlay-root")
      )}
    </>
  )
}
