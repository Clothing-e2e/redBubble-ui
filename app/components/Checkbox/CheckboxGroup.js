import Checkbox from './Checkbox';

export default function CheckboxGroup({ data, onChange, isColors }) {
  return (
    <div className="pt-1 pl-2">
      {data.map((item, index) => (
        <Checkbox
          data={item}
          onChange={onChange}
          isColors={isColors}
          key={index}
        />
      ))}
    </div>
  );
}
