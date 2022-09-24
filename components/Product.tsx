import Image from "./Image";
import styles from '../../styles/Home.module.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({

    width: 200,
    height: 300,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const Product = (props: any) => {

    return (
        <>
            <Item>
                <Image name={props.imageName} height={100} width={100}></Image>
                <div>
                    {props.children}
                </div>
            </Item>
        </>
    );
}

export default Product;