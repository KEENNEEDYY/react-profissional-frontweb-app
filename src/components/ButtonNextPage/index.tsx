import './styles.css';

type Props = {
    text:string;
}

export function ButtonNextPage({text} : Props){
    return(
        <div className="dsc-btn-next-page">{text}</div>
    );
}