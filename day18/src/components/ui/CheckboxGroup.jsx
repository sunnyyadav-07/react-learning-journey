
const CheckboxGroup = ({ value, onChange }) => {
  const skillList = ["React", "JavaScript", "HTML", "CSS"];
  return (
    <div>
      <label className="block text-2xl font-medium mb-1">Skill</label>
      <div className="flex text-xl gap-3 items-center">
        {skillList.map((skill) => (
          <label key={skill}>
            <input
              type="checkbox"
              value={skill.toLowerCase()}
              checked={value.includes(skill)}
              className="scale-130 mr-1  "
              onChange={(e) => {
                if (e.target.checked) {
                  onChange([...value, skill]);
                } else {
                  onChange(value.filter((el) => el !== skill));
                }
              }}
            />
            {skill}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
