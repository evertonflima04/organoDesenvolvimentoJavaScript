import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required = {props.obrigatorio}>
                {props.itens.map(item => {
                    return <option key={item} > {item}</option>
                    // Para cada item  da lista [props.item] vai retorna um option
                    // com a chave o próprio nome e o valor esta na lista no formulário
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa