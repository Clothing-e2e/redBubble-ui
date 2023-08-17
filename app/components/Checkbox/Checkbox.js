export default function CheckboxGroup({ data, onChange, isColors = false }) {
  return (
    <label className="flex gap-2 items-center py-1">
      <input
        type="checkbox"
        checked={data.checked}
        onChange={() => onChange(data.id)}
        className="accent-slate-800"
      />
      {isColors && (
        <div className={`w-2.5 h-2.5 rounded-full ${data.color}`}></div>
      )}
      <span className="text-xs">{data.name}</span>
    </label>
  );
}
