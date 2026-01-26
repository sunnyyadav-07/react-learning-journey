
const DatePicker = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-2xl font-medium mb-1">Choose date</label>
      <input
        type="date"
        className="w-full bg-[#e9dbdb] px-4 py-2 rounded-md"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default DatePicker;
