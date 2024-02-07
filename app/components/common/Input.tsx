type InputProps = {
  label: string;
  type: string;
  value: string | number;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: InputProps) {
  return (
    <>
      <label className="mr-2" htmlFor="auctionName">
        {props.label}
      </label>
      <input
        className="border-2 border-solid border-gray-400 rounded-md px-2 py-1"
        type={props.type}
        placeholder={props.placeholder}
        id={props.label}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}
