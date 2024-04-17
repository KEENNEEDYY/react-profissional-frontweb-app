import { useState } from 'react';
import './styles.css';

type Props = {
    onSearch: Function;
}

export default function SearchBar({onSearch} : Props) {

    const [text, setText] = useState("");
    
    function handleSubmit(event: any){
        event.preventDefault();
        onSearch(text);
    }

    function handleChange(event: any){
        const value = event.target.value;
        setText(value);
        onSearch(value);
    }

    function handleResetClick(){
        setText("");
        onSearch(text);
    }
    
    return (
        <form className="dsc-search-bar" onSubmit={handleSubmit}>
            <button type="submit" onClick={handleSubmit}>🔎︎</button>
            <input 
                value={text}
                type="text" 
                placeholder="Nome do produto"
                onChange={handleChange} 
            />
            <button onClick={handleResetClick}>🗙</button>
        </form>
    )
}