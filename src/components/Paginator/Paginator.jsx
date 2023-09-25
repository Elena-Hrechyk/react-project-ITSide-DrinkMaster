import { Wrap, Button, Wraper, PageItem, ButtonPageItem } from "./Paginator.styled";
import {MdArrowBackIosNew, MdArrowForwardIos} from "react-icons/md";

const Paginator = () => {
    return (
        <Wrap>
            <Button type="button">
                <MdArrowBackIosNew/>
            </Button>
            <Wraper>
                <PageItem><ButtonPageItem>12</ButtonPageItem></PageItem>
                <PageItem><ButtonPageItem>13</ButtonPageItem></PageItem>
                <PageItem><ButtonPageItem>14</ButtonPageItem></PageItem>
                <PageItem><ButtonPageItem>15</ButtonPageItem></PageItem>
                <PageItem><ButtonPageItem>16</ButtonPageItem></PageItem>    
            </Wraper>
            <Button type="button">
                <MdArrowForwardIos/>
            </Button>
        </Wrap>
    )
};

export default Paginator