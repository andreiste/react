import { Button } from "@mui/material";

function ButtonComponent(props: {info: string}){
    return <Button variant="contained" onClick={() => {
        alert('clicked');
      }}>{props.info}</Button>
}

export default ButtonComponent;