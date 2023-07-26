import Checkbox from './Checkbox';

export default function CheckboxGroup({ data, onChange, isColors }) {
    return (
        <div className='pt-1 pl-2'>
            {data.map((item) => <Checkbox data={item} onChange={onChange} isColors={isColors} />)}
        </div>
    )
}